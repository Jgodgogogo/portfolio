'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer
} from './morphing-dialog'

interface ProjectVideoProps {
  src: string
  coverImage: string
}

export function ProjectVideo({ src, coverImage }: ProjectVideoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play failed:", e))
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

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
          className="aspect-video w-full cursor-zoom-in rounded-xl relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Static cover image */}
          {!isHovered && (
            <Image
              src={coverImage}
              alt="Project cover"
              fill
              className="object-cover"
            />
          )}
          
          {/* Video element */}
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            className={`aspect-video w-full rounded-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 absolute'}`}
            playsInline
          />
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
            playsInline
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
        />
      </MorphingDialogContainer>
    </MorphingDialog>
  )
} 