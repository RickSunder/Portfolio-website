import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick Sünder — Technical Application Engineer & Data Scientist",
  description:
    "Portfolio of Rick Sünder — Technical Application Engineer, Data Scientist, and Developer at Enza Zaden. Building impactful solutions across data, development, and low-code.",
  keywords: [
    "Rick Sünder",
    "Portfolio",
    "Data Scientist",
    "Technical Application Engineer",
    "Developer",
    "Python",
    "Azure",
    "SQL",
  ],
  authors: [{ name: "Rick Sünder" }],
  openGraph: {
    title: "Rick Sünder — Portfolio",
    description: "Technical Application Engineer, Data Scientist & Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080c14] text-[#f0f6ff] antialiased">{children}</body>
    </html>
  );
}
