"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryLightboxProps {
  image: {
    src: string
    alt: string
    caption: string
    category: string
  }
  onClose: () => void
}

export function GalleryLightbox({ image, onClose }: GalleryLightboxProps) {
  // Close lightbox when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <div className="relative">
          <div className="relative h-[80vh] w-auto max-w-[90vw]">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white">
            <h3 className="text-lg font-medium">{image.alt}</h3>
            <p className="text-sm text-gray-300">{image.caption}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
