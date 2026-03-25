"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon?: string;
  level?: number; // 0-100
  color?: "indigo" | "cyan" | "purple" | "emerald" | "amber";
  delay?: number;
}

const colorMap = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    text: "text-indigo-300",
    bar: "bg-gradient-to-r from-indigo-500 to-indigo-400",
    glow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-300",
    bar: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    glow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-300",
    bar: "bg-gradient-to-r from-purple-500 to-purple-400",
    glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    bar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    glow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-300",
    bar: "bg-gradient-to-r from-amber-500 to-amber-400",
    glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
  },
};

export default function SkillBadge({
  name,
  icon,
  level,
  color = "indigo",
  delay = 0,
}: SkillBadgeProps) {
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className={`rounded-xl border ${c.bg} ${c.border} ${c.glow} p-4 flex flex-col gap-3 transition-all duration-300 cursor-default`}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        <span className={`font-semibold text-sm ${c.text}`}>{name}</span>
      </div>
      {level !== undefined && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-[#4a5568]">
            <span>Proficiency</span>
            <span className={c.text}>{level}%</span>
          </div>
          <div className="h-1.5 bg-[#1e2d3d] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
              className={`h-full rounded-full ${c.bar}`}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
