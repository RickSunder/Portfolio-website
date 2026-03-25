"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";

const education = [
  {
    school: "University of Amsterdam",
    degree: "MSc Information Studies — Data Science",
    period: "2021 – 2023",
    icon: "🎓",
    color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/25",
    textColor: "text-indigo-300",
    highlights: [
      "Machine Learning & Deep Learning",
      "Data Engineering & Pipelines",
      "Natural Language Processing",
      "Information Retrieval",
      "Thesis: Air Quality Prediction with Transformers",
    ],
  },
  {
    school: "University of Amsterdam",
    degree: "BSc Informatiekunde",
    period: "2018 – 2021",
    icon: "💻",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/25",
    textColor: "text-cyan-300",
    highlights: [
      "Database Systems & SQL",
      "Software Engineering",
      "Human-Computer Interaction",
      "Information Systems",
      "Web Development",
    ],
  },
  {
    school: "Martinus College",
    degree: "VWO (Pre-university education)",
    period: "2012 – 2018",
    icon: "📖",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/25",
    textColor: "text-emerald-300",
    highlights: [
      "Mathematics & Sciences",
      "Economics",
      "Computer Science elective",
    ],
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        label="Education"
        title="Academic Background"
        subtitle="Built a strong foundation in computer science and data science at the University of Amsterdam."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            className={`rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 ${edu.color}`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{edu.icon}</span>
              <span
                className={`text-xs font-mono px-2.5 py-1 rounded-full border ${edu.color} ${edu.textColor}`}
              >
                {edu.period}
              </span>
            </div>

            <h3 className={`font-bold text-lg mb-1 ${edu.textColor}`}>{edu.degree}</h3>
            <p className="text-[#8b9ab5] text-sm font-medium mb-4">{edu.school}</p>

            <ul className="space-y-1.5">
              {edu.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-[#4a5568]">
                  <span className={`mt-0.5 ${edu.textColor}`}>▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Languages section */}
      <div className="mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-mono font-semibold tracking-widest uppercase text-[#4a5568] mb-6"
        >
          Languages
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { lang: "Dutch", level: "Native", flag: "🇳🇱", color: "border-orange-500/30 bg-orange-500/5 text-orange-300" },
            { lang: "English", level: "Fluent", flag: "🇬🇧", color: "border-blue-500/30 bg-blue-500/5 text-blue-300" },
            { lang: "German", level: "Intermediate", flag: "🇩🇪", color: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300" },
          ].map(({ lang, level, flag, color }, i) => (
            <motion.div
              key={lang}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl border ${color} transition-all duration-200`}
            >
              <span className="text-2xl">{flag}</span>
              <div>
                <div className="font-bold text-sm">{lang}</div>
                <div className="text-xs opacity-60">{level}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
