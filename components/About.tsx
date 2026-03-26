"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCard from "./ui/AnimatedCard";

const PROFILE_IMAGE_SRC = "/profile.jpg";

const traits = [
  { icon: "🧠", label: "Analytical", desc: "Data-driven thinking in every decision" },
  { icon: "🔄", label: "Adaptable", desc: "Thriving in dynamic, fast-changing environments" },
  { icon: "🔍", label: "Problem-Solver", desc: "Creative solutions to complex challenges" },
  { icon: "🤝", label: "Collaborative", desc: "Flexible team player with a growth mindset" },
];

const hobbies = [
  { icon: "🏋️", label: "Fitness & Food", color: "from-amber-500/20 to-orange-500/10 border-amber-500/20" },
  { icon: "🎵", label: "Music & Festivals", color: "from-purple-500/20 to-pink-500/10 border-purple-500/20" },
  { icon: "⛷️", label: "Skiing", color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/20" },
  { icon: "🤖", label: "AI & Tech", color: "from-indigo-500/20 to-violet-500/10 border-indigo-500/20" },
  { icon: "🖥️", label: "PCs & Gaming", color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/20" },
];

const passions = [
  { icon: "🤖", label: "AI & Machine Learning" },
  { icon: "⚡", label: "Low-Code Development" },
  { icon: "☁️", label: "Cloud & Azure" },
  { icon: "📊", label: "Data Engineering" },
  { icon: "🏗️", label: "Software Architecture" },
  { icon: "🎯", label: "Product Thinking" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Curious by nature, driven by impact"
        subtitle="A multidisciplinary tech professional bridging data, development, and business."
      />

      {/* ── Intro: image + bio ─────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start mb-14">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 flex flex-col items-center gap-4"
        >
          {/* Glow ring + image wrapper */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 opacity-70 blur-[2px]" />
            <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 opacity-40" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#1e2d3d]">
              <Image
                src={PROFILE_IMAGE_SRC}
                alt="Rick Sünder — profile photo"
                fill
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                className="object-cover object-top"
                unoptimized
                priority
              />
              {/* Subtle inner vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </motion.div>

        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 space-y-5 text-[#8b9ab5] leading-relaxed text-lg"
        >
          <p>
            Hi, I&apos;m <span className="text-[#f0f6ff] font-semibold">Rick</span> — an IT
            enthusiast who has worked across multiple domains within tech. I currently work as a{" "}
            <span className="text-indigo-300 font-medium">Technical Application Engineer</span>{" "}
            and Developer at{" "}
            <span className="text-[#f0f6ff] font-semibold">Enza Zaden</span>, a vegetable seed
            breeding company.
          </p>
          <p>
            I enjoy continuously learning, tackling new challenges, and building impactful
            solutions. I see myself as an{" "}
            <span className="text-cyan-300 font-medium">analytical person</span> who thrives in
            dynamic environments where adaptability and creative problem-solving are key.
          </p>
          <p>
            Whether it&apos;s building data pipelines, creating low-code applications, or
            training machine learning models — I bring the same{" "}
            <span className="text-purple-300 font-medium">growth mindset</span> and enthusiasm
            to every domain I work in.
          </p>

  
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">

        {/* Personality traits */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold text-[#f0f6ff] mb-4 flex items-center gap-2"
          >
            <span className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-xs">✦</span>
            Personality
          </motion.h3>
          <div className="grid grid-cols-2 gap-3">
            {traits.map((trait, i) => (
              <AnimatedCard key={trait.label} delay={0.1 + i * 0.08} className="!p-4">
                <div className="text-2xl mb-2">{trait.icon}</div>
                <div className="font-semibold text-[#f0f6ff] text-sm mb-1">{trait.label}</div>
                <div className="text-[#4a5568] text-xs">{trait.desc}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Passions */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg font-bold text-[#f0f6ff] mb-4 flex items-center gap-2"
          >
            <span className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xs">⚡</span>
            Tech Passions
          </motion.h3>
          <div className="flex flex-wrap gap-2">
            {passions.map((p, i) => (
              <motion.span
                key={p.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-1.5 px-3 py-2 glass rounded-xl border border-[#1e2d3d] hover:border-indigo-500/30 text-sm text-[#8b9ab5] hover:text-[#f0f6ff] transition-all duration-200 cursor-default"
              >
                <span>{p.icon}</span>
                {p.label}
              </motion.span>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-bold text-[#f0f6ff] mb-4 mt-8 flex items-center gap-2"
          >
            <span className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-xs">🎯</span>
            Hobbies & Interests
          </motion.h3>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((h, i) => (
              <motion.span
                key={h.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border bg-gradient-to-br text-sm font-medium text-[#f0f6ff] transition-all duration-200 cursor-default ${h.color}`}
              >
                <span className="text-base">{h.icon}</span>
                {h.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
