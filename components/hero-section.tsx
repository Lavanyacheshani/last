"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/hero/1.jpg",
      alt: "Sigiriya Rock Fortress",
      title: "Climb the Majestic Sigiriya Rock",
    },
    {
      image: "/hero/2.jpg",
      alt: "Nine Arch Bridge in Ella",
      title: "Witness the Beauty of Nine Arch Bridge",
    },
    {
      image: "/hero/3.jpg",
      alt: "Tropical Beach in Sri Lanka",
      title: "Relax on Stunning Sri Lankan Beaches",
    },
    {
      image: "/hero/4.jpg",
      alt: "Lush Tea Estates in Nuwara Eliya",
      title: "Wander Through Lush Tea Plantations",
    },
    {
      image: "/hero/5.jpg",
      alt: "Elephants in Sri Lankan Wildlife Park",
      title: "Experience Elephant Safaris in the Wild",
    },
    {
      image: "/hero/6.jpg",
      alt: "Dalada Perahera Festival in Kandy",
      title: "Celebrate Culture at the Dalada Perahera",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 ${index === currentSlide ? "z-10" : "z-0"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
          </motion.div>
        ))}
      </AnimatePresence>

      

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-10 bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-maroon-100 to-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Experience the beauty and culture of Sri Lanka with the island's leading travel agency
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-maroon-600 to-maroon-800 hover:from-maroon-700 hover:to-maroon-900 text-white px-8 py-7 text-lg md:text-xl shadow-xl hover:shadow-maroon-700/30 transition-all duration-300 rounded-full group"
              >
                <a href="#booking">Book Your Tour Now</a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent"></div>
    </section>
  )
}
