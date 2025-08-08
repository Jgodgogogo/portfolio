"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { ProjectVideo } from "@/components/motion-primitives/project-video";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "JLR 2025 Hackthon",
    description: "Placeholder for hackthon project",
    image: "/1.jpg",
    video: "/1.mp4",
    category: "Automotive"
  },
  {
    id: "2", 
    title: "Volvo One HMI OS",
    description: "Placeholder for volvo cars project",
    image: "/2.jpg",
    video: "/2.mp4",
    category: "Automotive"
  },
  {
    id: "3",
    title: "SVW Project Sample", 
    description: "Placeholder for SVW project experience",
    image: "/3.jpg",
    video: "/3.mp4",
    category: "Automotive"
  },
  {
    id: "4",
    title: "GM Project Sample",
    description: "Placeholder for GM project experience", 
    image: "/4.jpg",
    video: "/4.mp4",
    category: "Automotive"
  }
];

export const ProjectGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore my latest work in automotive UX design and product engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900"
            >
              <div className="relative aspect-video overflow-hidden">
                {project.video ? (
                  <ProjectVideo 
                    src={project.video} 
                    coverImage={project.image}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              
              <div className="p-6">
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-100 transition-colors">
                  View Project
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 