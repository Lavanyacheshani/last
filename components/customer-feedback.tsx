"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function CustomerFeedback() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      image: "/feedback/pic-2.png",
      rating: 5,
      text: "Our trip to Sri Lanka with Explorative Tours was absolutely amazing! Our guide was knowledgeable and friendly, and the itinerary was perfectly balanced between cultural sites and natural beauty. Highly recommend!",
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      image: "/feedback/pic-3.png",
      rating: 5,
      text: "The service provided by Explorative Tours was exceptional. They tailored our trip perfectly to our interests, and we felt safe and well-cared for throughout our journey. The wildlife safaris were a highlight!",
    },
    {
      name: "Anna Schmidt",
      country: "Germany",
      image: "/feedback/pic-4.png",
      rating: 4,
      text: "We had a wonderful family vacation thanks to Explorative Tours. The accommodations were excellent, and our guide was patient and great with our children. The beaches were pristine and the cultural experiences authentic.",
    },
    {
      name: "David Droser",
      country: "Australia",
      image: "/feedback/pic-5.png",
      rating: 5,
      text: "As a solo traveler, I was impressed by how well Explorative Tours looked after me. They ensured I experienced the real Sri Lanka while feeling completely safe. The tea plantations and train journey were unforgettable!",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-maroon-50 to-maroon-100">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Read about the experiences of travelers who have explored Sri Lanka with us"
          />
        </div>

        <div className="relative max-w-4xl mx-auto group">
          {/* Navigation Arrows - Now with better positioning and hover effects */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 
                     bg-white/90 backdrop-blur-sm text-maroon-700 p-2 md:p-3 rounded-full 
                     shadow-lg hover:bg-maroon-50 transition-all duration-300 
                     opacity-0 group-hover:opacity-100 z-20
                     hover:scale-110 hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 
                     bg-white/90 backdrop-blur-sm text-maroon-700 p-2 md:p-3 rounded-full 
                     shadow-lg hover:bg-maroon-50 transition-all duration-300 
                     opacity-0 group-hover:opacity-100 z-20
                     hover:scale-110 hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
                        {/* Profile Image */}
                        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden 
                                    border-4 border-maroon-100 shadow-md transform transition-transform 
                                    duration-300 hover:scale-105">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* User Info */}
                        <div className="text-center md:text-left">
                          <h3 className="font-bold text-lg md:text-xl text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500 text-sm md:text-base">
                            {testimonial.country}
                          </p>
                          <div className="flex items-center justify-center md:justify-start mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < testimonial.rating 
                                    ? "text-yellow-400 fill-yellow-400" 
                                    : "text-gray-300"
                                } transition-colors duration-300`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <div className="relative">
                        <p className="text-sm md:text-base text-gray-700 italic leading-relaxed">
                          {testimonial.text}
                        </p>
                        <span className="absolute top-0 left-0 text-6xl md:text-7xl text-maroon-100/30 -z-10 
                                     leading-none font-serif">"</span>
                        <span className="absolute bottom-0 right-0 text-6xl md:text-7xl text-maroon-100/30 -z-10 
                                     leading-none font-serif transform translate-y-4">"</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full
                  ${index === currentSlide 
                    ? "w-8 h-2 bg-maroon-700" 
                    : "w-2 h-2 bg-gray-300 hover:bg-maroon-300"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
