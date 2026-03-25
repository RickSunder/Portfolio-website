"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  bullets?: string[];
  index: number;
  isLast?: boolean;
  icon?: string;
  accent?: "indigo" | "cyan" | "purple" | "emerald" | "amber";
}

const accentMap = {
  indigo: {
    dot: "bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]",
    line: "bg-gradient-to-b from-indigo-500/60 to-transparent",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    border: "hover:border-indigo-500/30",
  },
  cyan: {
    dot: "bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]",
    line: "bg-gradient-to-b from-cyan-500/60 to-transparent",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    border: "hover:border-cyan-500/30",
  },
  purple: {
    dot: "bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)]",
    line: "bg-gradient-to-b from-purple-500/60 to-transparent",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    border: "hover:border-purple-500/30",
  },
  emerald: {
    dot: "bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.7)]",
    line: "bg-gradient-to-b from-emerald-500/60 to-transparent",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    border: "hover:border-emerald-500/30",
  },
  amber: {
    dot: "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.7)]",
    line: "bg-gradient-to-b from-amber-500/60 to-transparent",
    badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    border: "hover:border-amber-500/30",
  },
};

export default function TimelineItem({
  company,
  role,
  period,
  location,
  description,
  bullets,
  index,
  isLast = false,
  icon = "💼",
  accent = "indigo",
}: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const a = accentMap[accent];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className={`w-3 h-3 rounded-full mt-1.5 z-10 flex-shrink-0 ${a.dot}`}
        />
        {!isLast && (
          <div className={`w-px flex-1 mt-2 min-h-[40px] ${a.line} opacity-40`} />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-10`}>
        <motion.div
          whileHover={{ scale: 1.005 }}
          className={`glass rounded-2xl border border-[#1e2d3d] ${a.border} transition-all duration-300 overflow-hidden`}
        >
          <button
            onClick={() => bullets && setExpanded(!expanded)}
            className="w-full text-left p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-[#f0f6ff]">{role}</h3>
                  <p className="text-[#8b9ab5] font-medium">{company}</p>
                  {description && (
                    <p className="text-[#4a5568] text-sm mt-1">{description}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${a.badge}`}>
                  {period}
                </span>
                {location && (
                  <span className="text-xs text-[#4a5568]">📍 {location}</span>
                )}
                {bullets && (
                  <ChevronDown
                    size={16}
                    className={`text-[#4a5568] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                  />
                )}
              </div>
            </div>
          </button>

          {bullets && (
            <motion.div
              initial={false}
              animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="px-5 pb-5 space-y-2 border-t border-[#1e2d3d]">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#8b9ab5] pt-2">
                    <span className="text-indigo-400 mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
