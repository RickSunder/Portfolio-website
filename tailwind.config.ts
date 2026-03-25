import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        background: "#080c14",
        surface: "#0d1117",
        border: "#1e2d3d",
        accent: {
          DEFAULT: "#6366f1",
          glow: "#818cf8",
        },
        cyan: {
          glow: "#22d3ee",
        },
        text: {
          primary: "#f0f6ff",
          secondary: "#8b9ab5",
          muted: "#4a5568",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(99,102,241,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.3)",
        "glow-sm": "0 0 20px rgba(99,102,241,0.2)",
        "glow-cyan": "0 0 30px rgba(34,211,238,0.25)",
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
