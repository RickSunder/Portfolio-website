"use client";

import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import TimelineItem from "./ui/TimelineItem";

const experiences = [
  {
    company: "Enza Zaden",
    role: "Technical Application Engineer & Developer",
    period: "May 2024 – Present",
    location: "Enkhuizen, Netherlands",
    icon: "🌱",
    accent: "indigo" as const,
    description: "Low-code and application development at a leading vegetable seed breeding company.",
    bullets: [
      "Building and maintaining low-code applications using Appian and PowerApps",
      "Developing integrations between enterprise systems",
      "Supporting technical application lifecycle and developer tooling",
      "Collaborating with cross-functional teams to digitize business processes",
    ],
  },
  {
    company: "Schischule Top Westendorf",
    role: "Ski Instructor",
    period: "Dec 2023 – Mar 2024",
    location: "Westendorf, Austria",
    icon: "⛷️",
    accent: "cyan" as const,
    description: "Teaching skiing techniques to groups of all skill levels in the Austrian Alps.",
    bullets: [
      "Instructed individuals and groups at beginner to advanced levels",
      "Adapted teaching methods to diverse nationalities and age groups",
      "Operated in high-pressure, outdoor seasonal environment",
    ],
  },
  {
    company: "Heineken",
    role: "Data Scientist",
    period: "Apr 2023 – Oct 2023",
    location: "Amsterdam, Netherlands",
    icon: "📊",
    accent: "emerald" as const,
    description: "Data science and ML model deployment within a global FMCG environment.",
    bullets: [
      "Created an interactive PowerBI training course for internal employees",
      "Improved revenue forecasting and prediction models",
      "Deployed ML models to Azure cloud infrastructure",
      "Collaborated with stakeholders across commercial and data teams",
    ],
  },
  {
    company: "Heineken",
    role: "Data Engineering Intern",
    period: "Oct 2022 – Mar 2023",
    location: "Amsterdam, Netherlands",
    icon: "🍺",
    accent: "amber" as const,
    description: "Internship focused on Azure data engineering and PowerBI dataflow tooling.",
    bullets: [
      "Built PowerBI Dataflows tooling for internal self-service analytics",
      "Developed Azure data pipeline using Blob Storage, Databricks, and Dataflows",
      "Created automated data ingestion workflows",
      "Contributed to cloud migration strategy discussions",
    ],
  },
  {
    company: "ChipSoft",
    role: "Healthcare-ICT Consultant",
    period: "Nov 2021 – Oct 2022",
    location: "Amsterdam, Netherlands",
    icon: "🏥",
    accent: "purple" as const,
    description: "ICT consulting and SQL development for healthcare information systems (HiX).",
    bullets: [
      "SQL development and testing for the HiX healthcare platform",
      "Working closely with hospital clients to implement and configure systems",
      "Supporting data migrations and system integration projects",
      "Translating clinical requirements into technical specifications",
    ],
  },
  {
    company: "APK Besseling",
    role: "Allround Employee",
    period: "Aug 2017 – Aug 2021",
    location: "Netherlands",
    icon: "🔧",
    accent: "cyan" as const,
    description: "Maintenance, planning, and operational support.",
    bullets: [
      "Maintenance and planning of operational activities",
      "Coordination with team members to optimize workflow",
    ],
  },
  {
    company: "Vomar Voordeelmarkt",
    role: "Supermarket Employee",
    period: "Jul 2015 – May 2017",
    location: "Netherlands",
    icon: "🛒",
    accent: "indigo" as const,
    description: "Part-time retail work during secondary school.",
    bullets: [
      "Customer service and stock management",
      "Team collaboration in a fast-paced retail environment",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Experience"
        title="Career Timeline"
        subtitle="From retail to data science — a journey across domains and industries."
      />
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem
            key={exp.company + exp.period}
            {...exp}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
