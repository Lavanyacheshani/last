"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ParallaxBannerProps {
  imageUrl: string
  height?: string
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

export function ParallaxBanner({
  imageUrl,
  height = "400px",
  title,
  subtitle,
  buttonText,
  buttonLink,
}: ParallaxBannerProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height }}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
          opacity,
        }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-maroon-600 to-maroon-800 hover:from-maroon-700 hover:to-maroon-900 text-white px-8 py-6 text-lg shadow-xl hover:shadow-maroon-700/30 transition-all duration-300 rounded-full"
          >
            <Link href={buttonLink}>
              <span className="flex items-center gap-2">
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
