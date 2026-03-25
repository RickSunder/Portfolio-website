"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 0 30px rgba(99,102,241,0.2)",
              borderColor: "rgba(99,102,241,0.4)",
            }
          : undefined
      }
      className={`glass rounded-2xl p-6 border border-[#1e2d3d] transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
