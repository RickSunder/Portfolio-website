"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon?: string;
  category: "work" | "study";
  details?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  icon = "🚀",
  category,
  details,
  delay = 0,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(99,102,241,0.15)" }}
        onClick={() => setOpen(true)}
        className="glass rounded-2xl border border-[#1e2d3d] hover:border-indigo-500/30 p-6 cursor-pointer group transition-all duration-300 flex flex-col gap-4"
      >
        <div className="flex items-start justify-between">
          <span className="text-3xl">{icon}</span>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-mono font-medium border ${
              category === "work"
                ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                : "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
            }`}
          >
            {category === "work" ? "Work" : "Study"}
          </span>
        </div>

        <div>
          <h3 className="font-bold text-[#f0f6ff] text-lg mb-2 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#8b9ab5] text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-[#1e2d3d] text-[#8b9ab5] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View details</span>
          <ExternalLink size={12} />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl border border-indigo-500/20 p-8 max-w-lg w-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{icon}</span>
                  <div>
                    <h3 className="font-bold text-xl text-[#f0f6ff]">{title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-mono border ${
                        category === "work"
                          ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                          : "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                      }`}
                    >
                      {category === "work" ? "Work Project" : "Study Project"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl hover:bg-[#1e2d3d] transition-colors text-[#4a5568] hover:text-[#f0f6ff]"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-[#8b9ab5] leading-relaxed mb-6">
                {details || description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#1e2d3d] text-[#8b9ab5] font-mono border border-[#1e2d3d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
