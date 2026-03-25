"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

// [21ST_DEV_COMPONENT_HERO]

const roles = [
  "Technical Application Engineer",
  "Data Scientist",
  "Developer",
  "Problem Solver",
];

function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <span className="text-gradient font-mono">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-8 bg-indigo-400 ml-1 align-middle"
      />
    </span>
  );
}

// Floating orbs background
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-600/8 rounded-full blur-[80px]"
      />
    </div>
  );
}

// Animated grid
function GridBackground() {
  return (
    <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GridBackground />
      <FloatingOrbs />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#080c14] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 font-mono mb-8"
        >
          <Sparkles size={14} className="text-indigo-400" />
          Available for new opportunities
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          <span className="text-[#f0f6ff]">Rick </span>
          <span className="text-gradient">Sünder</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-12 flex items-center justify-center"
        >
          <AnimatedRole />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-[#8b9ab5] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          IT enthusiast working across data, development, and low-code. Currently at{" "}
          <span className="text-[#f0f6ff] font-medium">Enza Zaden</span> — combining
          analytical thinking with creative problem-solving to build impactful solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold rounded-2xl transition-all duration-300 shadow-glow-sm"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 glass border border-[#1e2d3d] text-[#f0f6ff] font-semibold rounded-2xl transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-[#4a5568]"
        >
          {[
            { value: "6+", label: "Years in Tech" },
            { value: "3", label: "Core Domains" },
            { value: "10+", label: "Projects" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-gradient">{value}</div>
              <div className="text-sm mt-1 text-[#8b9ab5]">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4a5568]"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
