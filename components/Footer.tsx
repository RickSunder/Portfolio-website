"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-[#1e2d3d] py-8 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4a5568]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">
            RS
          </div>
          <span>
            Rick Sünder · <span className="font-mono">{year}</span>
          </span>
        </div>
        <div className="font-mono text-xs">
          Built with{" "}
          <span className="text-indigo-400">Next.js</span> ·{" "}
          <span className="text-cyan-400">TypeScript</span> ·{" "}
          <span className="text-purple-400">Framer Motion</span>
        </div>
        <div className="flex items-center gap-1">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
          <span>rick@sunder.nl</span>
        </div>
      </div>
    </motion.footer>
  );
}
