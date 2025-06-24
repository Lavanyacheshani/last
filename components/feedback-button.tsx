"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function FeedbackButton() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch("YOUR_GOOGLE_SHEETS_SCRIPT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          rating: rating.toString(),
          comment: comment,
          timestamp: new Date().toISOString(),
        }).toString(),
      })

      if (response.ok) {
        setIsSuccess(true)
        setComment("")
        setRating(0)
      }
    } catch (error) {
      console.error("Error submitting feedback:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="bg-gradient-to-r from-maroon-600 to-maroon-800 
                     hover:from-maroon-700 hover:to-maroon-900 text-white 
                     px-4 py-2 text-sm shadow-lg hover:shadow-maroon-700/30 
                     transition-all duration-300 rounded-md w-auto min-w-[140px]"
        >
          Share Experience
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Your Feedback</DialogTitle>
          <DialogDescription>
            Help us improve our services by sharing your experience.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`transition-all duration-200 ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                <StarIcon className="h-8 w-8 fill-current" />
              </button>
            ))}
          </div>
          <Textarea
            placeholder="Tell us about your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
          <Button 
            onClick={handleSubmit} 
            disabled={isSubmitting || rating === 0} 
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
          {isSuccess && (
            <p className="text-center text-green-600">
              Thank you for your feedback!
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
