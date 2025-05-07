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
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Our trip to Sri Lanka with Explorative Tours was absolutely amazing! Our guide was knowledgeable and friendly, and the itinerary was perfectly balanced between cultural sites and natural beauty. Highly recommend!",
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The service provided by Explorative Tours was exceptional. They tailored our trip perfectly to our interests, and we felt safe and well-cared for throughout our journey. The wildlife safaris were a highlight!",
    },
    {
      name: "Anna Schmidt",
      country: "Germany",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "We had a wonderful family vacation thanks to Explorative Tours. The accommodations were excellent, and our guide was patient and great with our children. The beaches were pristine and the cultural experiences authentic.",
    },
    {
      name: "David Miller",
      country: "Australia",
      image: "/placeholder.svg?height=100&width=100",
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
    <section className="py-8 md:py-16 bg-gradient-to-b from-maroon-50 to-maroon-100">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Read about the experiences of travelers who have explored Sri Lanka with us"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-lg border-0 overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border-4 border-maroon-100 shadow-md">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="font-bold text-base md:text-lg">{testimonial.name}</h3>
                          <p className="text-gray-500 text-xs md:text-sm">{testimonial.country}</p>
                          <div className="flex items-center justify-center md:justify-start mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <p className="text-xs md:text-sm text-gray-700 italic relative z-10">{testimonial.text}</p>
                        <div className="absolute top-0 left-0 text-4xl md:text-6xl text-maroon-100 opacity-50 -z-0 leading-none">
                          "
                        </div>
                        <div className="absolute bottom-0 right-0 text-4xl md:text-6xl text-maroon-100 opacity-50 -z-0 leading-none transform translate-y-4">
                          "
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white text-maroon-700 p-1.5 md:p-2 rounded-full shadow-md hover:bg-maroon-50 transition-colors modern-button"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white text-maroon-700 p-1.5 md:p-2 rounded-full shadow-md hover:bg-maroon-50 transition-colors modern-button"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-4 md:mt-6 space-x-1.5 md:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-6 md:w-8 bg-maroon-700" : "w-1.5 md:w-2 bg-gray-300 hover:bg-maroon-300"
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
