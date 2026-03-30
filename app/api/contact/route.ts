import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// In-memory rate limiter — resets on cold starts (fine for serverless)
// Max RATE_LIMIT submissions per IP within RATE_WINDOW_MS
// ---------------------------------------------------------------------------
const store = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    store.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ---------------------------------------------------------------------------
// Minimal HTML escaping for the email body
// ---------------------------------------------------------------------------
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // Derive client IP (works on Vercel, Azure, and local dev)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, website } = body as Record<string, string>;

  // Honeypot — bots fill the hidden "website" field; humans never see it
  if (website) {
    // Silently return OK so bots don't know they were blocked
    return NextResponse.json({ ok: true });
  }

  // Input validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input exceeds maximum length." }, { status: 400 });
  }

  // SMTP transport — configure via environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_PORT === "465", // true only for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email.trim(),
      subject: `New message from ${name.trim()}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:monospace;max-width:600px;background:#0d1117;color:#f0f6ff;padding:24px;border-radius:12px;border:1px solid #1e2d3d">
          <h2 style="color:#818cf8;margin-top:0">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}" style="color:#67e8f9">${esc(email)}</a></p>
          <hr style="border-color:#1e2d3d;margin:16px 0"/>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;color:#cbd5e1">${esc(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] SMTP error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
