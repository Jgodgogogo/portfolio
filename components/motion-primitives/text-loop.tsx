'use client'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence, Transition, Variants } from 'framer-motion'
import { useState, useEffect, Children } from 'react'

export type TextLoopProps = {
  children: React.ReactNode[]
  className?: string
  interval?: number
  transition?: Transition
  variants?: Variants | ((index: number) => Variants)
  onIndexChange?: (index: number) => void
  trigger?: boolean
  mode?: Parameters<typeof AnimatePresence>[0]['mode']
}

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
  trigger = true,
  mode = 'popLayout',
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = Children.toArray(children)

  useEffect(() => {
    if (!trigger) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, interval * 1000)
    return () => clearInterval(timer)
  }, [items.length, interval, onIndexChange, trigger])

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0, filter: 'blur(4px)' },
    animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
    exit: { y: -20, opacity: 0, filter: 'blur(4px)' },
  }

  // 获取最终的 variants
  const getFinalVariants = () => {
    if (!variants) return defaultVariants
    return typeof variants === 'function' ? variants(currentIndex) : variants
  }

  return (
    <div className={cn('relative inline-block whitespace-nowrap', className)}>
      <AnimatePresence mode={mode} initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={getFinalVariants()} // 使用处理后的 variants
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}