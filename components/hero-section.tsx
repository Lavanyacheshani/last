"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/hero/1.jpg",
      alt: "Beautiful beach in Sri Lanka",
      title: "Explore Sri Lanka's Pristine Beaches",
    },
    {
      image: "/hero/2.jpg",
      alt: "Ancient temple in Sri Lanka",
      title: "Discover Ancient Cultural Heritage",
    },
    {
      image: "/hero/3.jpg",
      alt: "Wildlife safari in Sri Lanka",
      title: "Experience Thrilling Wildlife Safaris",
    },
    {
      image: "/hero/4.jpg",
      alt: "Tea plantations in Sri Lanka",
      title: "Visit Breathtaking Tea Plantations",
    },
    {
      image: "/hero/5.jpg",
      alt: "Adventure activities in Sri Lanka",
      title: "Engage in Exciting Adventure Activities",
    },
    {
      image: "/hero/6.jpg",
      alt: "Cultural festival in Sri Lanka",
      title: "Immerse Yourself in Vibrant Festivals",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[60vh] md:h-[90vh] overflow-hidden">
      {/* Slideshow */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-maroon-700 transition-all backdrop-blur-sm modern-button"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-maroon-700 transition-all backdrop-blur-sm modern-button"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-maroon-100 to-white"
        >
          Come, Visit, Have Fun, and Return Safely
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl drop-shadow-md"
        >
          Experience the beauty and culture of Sri Lanka with the island's leading travel agency
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-maroon-700 to-maroon-900 hover:from-maroon-800 hover:to-maroon-950 text-white px-6 py-5 text-base md:text-lg shadow-lg hover:shadow-maroon-700/30 hover:shadow-xl transition-all duration-300 modern-button"
          >
            <a href="#booking">Book Your Tour Now</a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent"></div>
    </section>
  )
}
