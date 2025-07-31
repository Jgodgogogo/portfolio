'use client'
import { motion } from 'motion/react'
import { XIcon, ArrowLeftIcon } from 'lucide-react'
import { Spotlight } from '@/components/motion-primitives/spotlight'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer
} from '@/components/motion-primitives/morphing-dialog'
import Link from 'next/link'
import { PROJECTS } from '../data'
import { useState } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
}

const TRANSITION_ITEM = {
  duration: 0.3
}

interface ProjectVideoProps {
  src: string
  cover: string
}

function ProjectVideo({ src, cover }: ProjectVideoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3
      }}
    >
      <MorphingDialogTrigger>
        <div 
          className="relative aspect-video w-full cursor-zoom-in rounded-xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Static cover image */}
          <img
            src={cover}
            alt="Project cover"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered && videoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Video that loads on hover */}
          {isHovered && (
            <video
              src={src}
              autoPlay
              loop
              muted
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={() => setVideoLoaded(true)}
            />
          )}
          
          {/* Play indicator overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 }
            },
            exit: { opacity: 0, transition: { duration: 0 } }
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            All Projects
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A comprehensive collection of my work spanning automotive UX design, 
            engineering solutions, and innovative projects across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              variants={VARIANTS_ITEM}
              transition={{ ...TRANSITION_ITEM, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white dark:bg-zinc-950 overflow-hidden">
                  {/* Video/Cover */}
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <ProjectVideo src={project.video} cover={project.cover} />
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Project Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-200"
                    >
                      View Project
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Placeholder */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-zinc-400"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">
            More Projects Coming Soon
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            I'm constantly working on new projects and innovations. 
            Check back soon for updates on my latest work.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
