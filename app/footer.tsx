'use client'
import { useEffect, useState } from 'react'
import { TextLoop } from '@/components/ui/text-loop'
import { Heart } from 'lucide-react'
import { AnimatedNumber } from '@/components/ui/animated-number'

function useCountdown() {
  const [left, setLeft] = useState(0)
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const target = new Date(now)
      target.setHours(18, 0, 0, 0)
      if (now > target) target.setDate(target.getDate() + 1)
      setLeft(Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000)))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  const h = Math.floor(left / 3600)
  const m = Math.floor((left % 3600) / 60)
  const s = left % 60
  return { h, m, s }
}

const TEXTS = [
  <span key="lost">
    Powered by coffee and my daughter’s smile.
  </span>,
  <span key="mart">© 2025 Jun Zhang.</span>,
]

export function Footer() {
  const { h, m, s } = useCountdown()
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        {/* 左侧歌词循环（方向翻转 + 模糊） */}
        <TextLoop
          className="text-sm"
          interval={3.5}
          variants={{
            initial: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' },
            animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
            exit: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
          }}
        >
          {TEXTS}
        </TextLoop>

        {/* 右侧倒计时（官方 AnimatedNumber） */}
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          <AnimatedNumber className="font-mono" springOptions={{ bounce: 0, duration: 600 }} value={h} />
          h&nbsp;
          <AnimatedNumber className="font-mono" springOptions={{ bounce: 0, duration: 600 }} value={m} />
          m&nbsp;
          <AnimatedNumber className="font-mono" springOptions={{ bounce: 0, duration: 600 }} value={s} />
          s left to chill!
        </span>
      </div>
    </footer>
  )
}