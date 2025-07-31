import { PROJECTS } from '../../data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsPage = () => {
  return (
    <div className="px-4 sm:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">All Projects</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            A collection of my selected works and case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{project.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;