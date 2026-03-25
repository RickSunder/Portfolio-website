"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ui/ProjectCard";

// [21ST_DEV_COMPONENT_PROJECTS]

const workProjects = [
  {
    title: "Interactive Network Graph — PowerBI Dataflows",
    description:
      "Built an interactive network graph visualization for PowerBI dataflows at Heineken, enabling teams to understand dependencies and lineage across complex data pipelines.",
    details:
      "At Heineken, managing hundreds of PowerBI dataflows became increasingly complex. This interactive network graph tool visualizes the relationships and dependencies between dataflows, making it easy for analysts to explore lineage, spot bottlenecks, and plan migrations. Built using Python and graph libraries, with a UI layer for PowerBI embedding.",
    tags: ["Python", "PowerBI", "Network Graph", "Data Lineage", "Azure"],
    icon: "🕸️",
    category: "work" as const,
  },
  {
    title: "PowerBI Training Course",
    description:
      "Designed and delivered a comprehensive PowerBI training program for Heineken employees, covering report building, DAX, and data modeling.",
    details:
      "Created a structured, self-paced training course for non-technical Heineken employees to become proficient in PowerBI. The course included interactive exercises, real Heineken datasets, and assessments. Covered topics: report building, DAX calculations, data modeling, and best practices for self-service analytics.",
    tags: ["PowerBI", "DAX", "Training", "Data Literacy", "Course Design"],
    icon: "📚",
    category: "work" as const,
  },
  {
    title: "Revenue Forecasting Model",
    description:
      "Improved and deployed machine learning prediction models for revenue forecasting to Azure, integrated into Heineken's commercial decision-making process.",
    details:
      "Took ownership of existing forecasting models, improved accuracy through feature engineering and model tuning, and deployed them to Azure ML. Results were surfaced in PowerBI dashboards consumed by commercial teams for strategic planning.",
    tags: ["Python", "Azure ML", "Scikit-learn", "Forecasting", "MLOps"],
    icon: "📈",
    category: "work" as const,
  },
  {
    title: "Azure Data Pipeline",
    description:
      "Built an end-to-end Azure data pipeline at Heineken covering ingestion from Blob Storage through Databricks transformations to PowerBI Dataflows.",
    details:
      "Designed and implemented a scalable cloud data pipeline: raw data lands in Azure Blob Storage, gets processed and transformed in Databricks with PySpark, loaded into PowerBI Dataflows for consumption. Included automated orchestration and monitoring.",
    tags: ["Azure", "Databricks", "PySpark", "Blob Storage", "PowerBI"],
    icon: "🔁",
    category: "work" as const,
  },
  {
    title: "Low-Code Applications (Appian / PowerApps)",
    description:
      "Developed multiple business process automation applications at Enza Zaden using Appian BPM and Microsoft PowerApps.",
    details:
      "At Enza Zaden, built low-code solutions that digitized manual business processes — from approval workflows to data entry forms integrated with enterprise systems. Used Appian for complex BPM scenarios and PowerApps for lightweight internal tools.",
    tags: ["Appian", "PowerApps", "BPM", "Process Automation", "Low-Code"],
    icon: "⚡",
    category: "work" as const,
  },
  {
    title: "Vibe Coding Applications & Websites",
    description:
      "Built modern web applications and internal tools using AI-assisted 'vibe coding' techniques — fast, iterative, and highly effective for rapid prototyping.",
    details:
      "Leveraging the latest AI coding tools to rapidly prototype and ship functional applications and websites. This approach combines traditional software engineering with AI assistance to dramatically accelerate development cycles while maintaining code quality.",
    tags: ["Next.js", "TypeScript", "AI Coding", "React", "Tailwind CSS"],
    icon: "🎵",
    category: "work" as const,
  },
];

const studyProjects = [
  {
    title: "Yelp Recommender System",
    description:
      "Built a collaborative filtering recommender system using Yelp review data to surface personalized business recommendations.",
    details:
      "Implemented matrix factorization and collaborative filtering techniques on the Yelp Open Dataset. Explored user similarity approaches and hybrid recommendation strategies. Evaluated using RMSE and precision/recall metrics.",
    tags: ["Python", "Recommender Systems", "Collaborative Filtering", "Pandas", "Surprise"],
    icon: "⭐",
    category: "study" as const,
  },
  {
    title: "Social Media Web App",
    description:
      "Developed a full-stack social media platform with authentication, posts, and interactions as a university project.",
    details:
      "Full-stack web application with user authentication, post creation, likes, comments, and a social graph. Built with a Python backend and a JavaScript frontend. Focused on scalable data modeling and clean REST API design.",
    tags: ["Python", "JavaScript", "REST API", "PostgreSQL", "Full-Stack"],
    icon: "📱",
    category: "study" as const,
  },
  {
    title: "Flight Delay Prediction",
    description:
      "Regression model predicting flight delays using historical flight and weather data, achieving strong predictive performance.",
    details:
      "Collected and preprocessed US flight and weather datasets. Applied feature engineering to capture temporal patterns, route-specific factors, and weather impact. Compared linear regression, random forests, and gradient boosting approaches.",
    tags: ["Python", "Scikit-learn", "Regression", "Feature Engineering", "Pandas"],
    icon: "✈️",
    category: "study" as const,
  },
  {
    title: "Movie Review Classification",
    description:
      "NLP pipeline for sentiment classification of movie reviews using transformer-based and classical ML approaches.",
    details:
      "Built a text classification pipeline on the IMDB dataset. Explored TF-IDF + classical ML vs fine-tuned BERT approaches. Implemented preprocessing, tokenization, model training, and evaluation. Compared accuracy, F1, and inference speed trade-offs.",
    tags: ["Python", "NLP", "BERT", "Transformers", "Scikit-learn"],
    icon: "🎬",
    category: "study" as const,
  },
  {
    title: "Air Quality Prediction — Transformer Neural Networks",
    description:
      "Time-series forecasting of air quality metrics using Transformer neural network architecture, demonstrating state-of-the-art performance.",
    details:
      "MSc-level research project applying Transformer architecture (originally from NLP) to multivariate time-series forecasting of air quality data. Implemented multi-head attention, positional encoding, and encoder-decoder structure. Benchmarked against LSTM and ARIMA baselines.",
    tags: ["Python", "PyTorch", "Transformers", "Time-Series", "Deep Learning"],
    icon: "🌍",
    category: "study" as const,
  },
];

type Filter = "all" | "work" | "study";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleWork = filter !== "study" ? workProjects : [];
  const visibleStudy = filter !== "work" ? studyProjects : [];

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Projects"
        title="Things I've Built"
        subtitle="Work projects from industry and study projects from university — spanning data, ML, and development."
      />

      {/* Filter tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-1 glass rounded-2xl p-1.5 border border-[#1e2d3d]">
          {(["all", "work", "study"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-5 py-2 text-sm font-semibold rounded-xl capitalize transition-colors duration-200 ${
                filter === f ? "text-[#f0f6ff]" : "text-[#4a5568] hover:text-[#8b9ab5]"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="projectFilter"
                  className="absolute inset-0 bg-indigo-600 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{f === "all" ? "All Projects" : f === "work" ? "Work" : "Study"}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Work projects */}
      {visibleWork.length > 0 && (
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-xl font-bold text-[#f0f6ff] mb-6"
          >
            <span className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-sm">💼</span>
            Work Projects
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleWork.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 0.07} />
            ))}
          </div>
        </div>
      )}

      {/* Study projects */}
      {visibleStudy.length > 0 && (
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-xl font-bold text-[#f0f6ff] mb-6"
          >
            <span className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-sm">🎓</span>
            Study Projects
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleStudy.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 0.07} />
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
