"use client";
import { motion } from "motion/react";
import { useState } from "react";

interface Experience {
  id: string;
  company: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "JLR China",
    title: "UX Lead",
    period: "2024 - Present",
    description: "Leading UX design initiatives for automotive interfaces and user experiences.",
    technologies: ["Figma", "Sketch", "Adobe XD", "User Research"]
  },
  {
    id: "2",
    company: "Volvo Cars",
    title: "Senior Designer",
    period: "2021 - 2024",
    description: "Designed and developed innovative automotive HMI systems and user interfaces.",
    technologies: ["React", "TypeScript", "Figma", "Prototyping"]
  },
  {
    id: "3",
    company: "SAIC Volkswagen",
    title: "UX Expert",
    period: "2017 - 2021",
    description: "Specialized in automotive UX design and user research methodologies.",
    technologies: ["User Research", "Prototyping", "Design Systems", "Figma"]
  },
  {
    id: "4",
    company: "General Motors",
    title: "UX Designer",
    period: "2015 - 2017",
    description: "Focused on creating intuitive and accessible automotive user interfaces.",
    technologies: ["Sketch", "InVision", "User Testing", "Design Thinking"]
  }
];

export const ExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 mb-4">
            Experience
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My journey in automotive UX design and product engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full border-4 border-white dark:border-neutral-900"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}>
                <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    {experience.period}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {experience.title}
                  </h3>
                  <div className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                    {experience.company}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 