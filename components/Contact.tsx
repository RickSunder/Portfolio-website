"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // "website" is the honeypot field — never shown to real users
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
      setForm({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Contact"
        title="Let's Work Together"
        subtitle="Got a project, opportunity, or just want to say hi? My inbox is open."
      />

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#f0f6ff] mb-2">Get in touch</h3>
            <p className="text-[#8b9ab5] leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of something exciting. Feel free to reach out via email or phone.
            </p>
          </motion.div>

          {/* Contact cards */}
          {[
            {
              icon: Mail,
              label: "Email",
              value: "rick@sunder.nl",
              href: "mailto:rick@sunder.nl",
              color: "text-indigo-300",
              bg: "bg-indigo-500/10 border-indigo-500/20",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+31 6 18 99 81 58",
              href: "tel:+31618998158",
              color: "text-cyan-300",
              bg: "bg-cyan-500/10 border-cyan-500/20",
            },
          ].map(({ icon: Icon, label, value, href, color, bg }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ x: 6, boxShadow: "0 0 20px rgba(99,102,241,0.15)" }}
              className={`flex items-center gap-4 p-4 rounded-2xl border ${bg} transition-all duration-300 group`}
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <div className="text-xs text-[#4a5568] font-mono">{label}</div>
                <div className={`font-semibold ${color}`}>{value}</div>
              </div>
            </motion.a>
          ))}

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 pt-2"
          >
            {[
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "#",
                color: "hover:text-blue-400 hover:border-blue-500/30",
              },
              {
                icon: Github,
                label: "GitHub",
                href: "#",
                color: "hover:text-[#f0f6ff] hover:border-[#f0f6ff]/20",
              },
            ].map(({ icon: Icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-[#1e2d3d] text-[#8b9ab5] text-sm font-medium transition-all duration-200 ${color}`}
              >
                <Icon size={16} />
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl border border-[#1e2d3d] p-6 space-y-4"
        >
          {/* Honeypot — hidden from real users, bots fill it and get silently blocked */}
          <div aria-hidden="true" tabIndex={-1} style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-mono text-[#4a5568] mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Rick Sünder"
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#1e2d3d] rounded-xl text-[#f0f6ff] text-sm placeholder-[#4a5568] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-mono text-[#4a5568] mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#1e2d3d] rounded-xl text-[#f0f6ff] text-sm placeholder-[#4a5568] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#4a5568] mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 bg-[#0d1117] border border-[#1e2d3d] rounded-xl text-[#f0f6ff] text-sm placeholder-[#4a5568] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-colors resize-none"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 font-mono text-center">
              // {error}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={loading || sent}
            whileHover={!loading && !sent ? { scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.4)" } : {}}
            whileTap={!loading && !sent ? { scale: 0.98 } : {}}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sent ? (
              <>
                <CheckCircle size={18} />
                Message Sent!
              </>
            ) : loading ? (
              <>
                <svg className="animate-spin" width={18} height={18} viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
