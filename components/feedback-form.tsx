"use client"

import type React from "react"

import { useState } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FeedbackFormProps {
  isOpen: boolean
  onClose: () => void
  t?: {
    feedbackTitle?: string
    feedbackDesc?: string
    feedbackName?: string
    feedbackEmail?: string
    feedbackRating?: string
    feedbackMessage?: string
    feedbackSubmit?: string
  }
}

export function FeedbackForm({ isOpen, onClose, t }: FeedbackFormProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Feedback submitted:", { ...formData, rating })
    alert("Thank you for your feedback!")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative bg-white rounded-lg overflow-hidden max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-4">{t?.feedbackTitle || "Share Your Feedback"}</h2>
        <p className="text-sm text-gray-600 mb-6">
          {t?.feedbackDesc || "We value your opinion! Please let us know about your experience with Explorative Tours."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">{t?.feedbackName || "Your Name"}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t?.feedbackName || "Enter your name"}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">{t?.feedbackEmail || "Email Address"}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t?.feedbackEmail || "Enter your email"}
              required
            />
          </div>

          <div>
            <Label>{t?.feedbackRating || "Your Rating"}</Label>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    size={24}
                    className={`${
                      star <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="message">{t?.feedbackMessage || "Your Feedback"}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t?.feedbackMessage || "Please share your thoughts, suggestions, or experiences..."}
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-maroon-700 hover:bg-maroon-800 text-white">
            {t?.feedbackSubmit || "Submit Feedback"}
          </Button>
        </form>
      </div>
    </div>
  )
}
