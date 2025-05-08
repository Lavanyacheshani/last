"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  start?: number
  end: number
  duration?: number
  title: string
  icon: string
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({
  start = 0,
  end,
  duration = 2,
  title,
  icon,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * (end - start) + start))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [start, end, duration, isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-gray-200">{title}</div>
    </motion.div>
  )
}
