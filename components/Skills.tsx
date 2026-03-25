"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import SkillBadge from "./ui/SkillBadge";

const coreSkills = [
  { name: "Python", icon: "🐍", level: 85, color: "cyan" as const },
  { name: "SQL", icon: "🗄️", level: 82, color: "indigo" as const },
  { name: "Azure", icon: "☁️", level: 78, color: "purple" as const },
];

const additionalSkills = [
  { name: "Appian", icon: "⚡", level: 75, color: "emerald" as const },
  { name: "PowerBI", icon: "📊", level: 80, color: "amber" as const },
  { name: "Databricks", icon: "🔥", level: 70, color: "amber" as const },
  { name: "Vibe Coding", icon: "🎵", level: 72, color: "purple" as const },
  { name: "Machine Learning", icon: "🤖", level: 76, color: "cyan" as const },
  { name: "PowerApps", icon: "📱", level: 68, color: "indigo" as const },
  { name: "Git", icon: "🌿", level: 78, color: "emerald" as const },
  { name: "Data Engineering", icon: "🏗️", level: 74, color: "indigo" as const },
];

const categories = [
  {
    title: "Languages & Query",
    icon: "💻",
    items: ["Python", "SQL", "T-SQL", "DAX"],
    color: "text-cyan-300",
    bg: "bg-cyan-500/5 border-cyan-500/15",
  },
  {
    title: "Cloud & Data",
    icon: "☁️",
    items: ["Azure Data Factory", "Databricks", "Azure Blob", "Data Pipelines"],
    color: "text-indigo-300",
    bg: "bg-indigo-500/5 border-indigo-500/15",
  },
  {
    title: "BI & Visualization",
    icon: "📊",
    items: ["PowerBI", "Dataflows", "DAX Modeling", "Dashboard Design"],
    color: "text-amber-300",
    bg: "bg-amber-500/5 border-amber-500/15",
  },
  {
    title: "Low-Code & Dev",
    icon: "⚡",
    items: ["Appian BPM", "PowerApps", "Next.js", "TypeScript"],
    color: "text-emerald-300",
    bg: "bg-emerald-500/5 border-emerald-500/15",
  },
  {
    title: "ML & AI",
    icon: "🤖",
    items: ["Scikit-learn", "TensorFlow", "NLP", "Transformers"],
    color: "text-purple-300",
    bg: "bg-purple-500/5 border-purple-500/15",
  },
  {
    title: "Healthcare & ERP",
    icon: "🏥",
    items: ["HiX (ChipSoft)", "SQL Testing", "System Integration", "Consulting"],
    color: "text-rose-300",
    bg: "bg-rose-500/5 border-rose-500/15",
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Skills"
        title="Tools & Expertise"
        subtitle="A versatile toolkit spanning data engineering, ML, cloud, low-code, and beyond."
      />

      {/* Core skills with progress bars */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-mono font-semibold tracking-widest uppercase text-[#4a5568] mb-6"
        >
          Core Proficiencies
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {coreSkills.map((skill, i) => (
            <SkillBadge key={skill.name} {...skill} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Additional skills grid */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-mono font-semibold tracking-widest uppercase text-[#4a5568] mb-6"
        >
          Additional Skills
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {additionalSkills.map((skill, i) => (
            <SkillBadge key={skill.name} {...skill} delay={i * 0.06} />
          ))}
        </div>
      </div>

      {/* Category cards */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-sm font-mono font-semibold tracking-widest uppercase text-[#4a5568] mb-6"
      >
        By Domain
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
            className={`rounded-2xl border p-5 transition-all duration-300 ${cat.bg}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{cat.icon}</span>
              <h4 className={`font-bold text-sm ${cat.color}`}>{cat.title}</h4>
            </div>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#8b9ab5]">
                  <span className={`text-xs ${cat.color}`}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
