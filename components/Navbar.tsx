"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-[#1e2d3d]/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-sm font-bold text-white shadow-glow-sm">
              RS
            </div>
            <span className="font-bold text-[#f0f6ff] hidden sm:block">
              Rick <span className="text-gradient">Sünder</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.slice(1);
              const isActive = active === sectionId;
              return (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.05 }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#f0f6ff]"
                      : "text-[#8b9ab5] hover:text-[#f0f6ff]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-colors duration-200"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-[#8b9ab5] hover:text-[#f0f6ff] hover:bg-[#1e2d3d] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-[60px] inset-x-0 z-40 overflow-hidden glass-strong border-b border-[#1e2d3d]"
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-[#8b9ab5] hover:text-[#f0f6ff] hover:bg-[#1e2d3d] rounded-xl transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
