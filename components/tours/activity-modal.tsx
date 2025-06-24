"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { SpeedInsights } from "@vercel/speed-insights/next"

interface ActivityModalProps {
  activity: any
  onClose: () => void
}

export function ActivityModal({ activity, onClose }: ActivityModalProps) {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get translated content
  const activityName = t[`activity_${activity.id}`] || activity.name
  const activityDescription = t[`activityDesc_${activity.id}`] || activity.description

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Navigate through images
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activity.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 text-gray-800 rounded-full hover:bg-white transition-all"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Image gallery - 50% width on desktop */}
        <div className="relative w-full md:w-1/2 h-60 md:h-auto">
          <Image
            src={activity.images[currentImageIndex] || "/placeholder.svg?height=600&width=800"}
            alt={`${activityName} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />

          {/* Image navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-gray-800 rounded-full hover:bg-white transition-all"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-gray-800 rounded-full hover:bg-white transition-all"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Image indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {activity.images.map((_: any, index: number) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex(index)
                }}
              />
            ))}
          </div>
        </div>

        {/* Content - 50% width on desktop */}
        <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{activityName}</h2>

          <div className="prose prose-sm md:prose max-w-none mb-4">
            <p className="text-gray-600">{activityDescription}</p>
          </div>

          {activity.highlights && (
            <div className="mb-4">
              <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">{t.highlights || "Highlights"}</h3>
              <ul className="space-y-1">
                {activity.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-maroon-700 mr-2 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm text-gray-600">{t[`highlight_${activity.id}_${index}`] || highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activity.bestTime && (
            <div className="mb-4">
              <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">
                {t.bestTimeToVisit || "Best Time to Visit"}
              </h3>
              <p className="text-sm text-gray-600">{t[`bestTime_${activity.id}`] || activity.bestTime}</p>
            </div>
          )}

          <div className="mt-6">
            <a
              href="/#booking"
              className="block w-full py-2 text-center bg-maroon-700 hover:bg-maroon-800 text-white font-medium rounded-md transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/#booking"
                onClose()
              }}
            >
              {t.bookNow || "Book Now"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
