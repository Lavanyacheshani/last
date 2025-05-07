"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeedbackForm } from "@/components/feedback-form"

export function FeedbackButton() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-maroon-700 hover:bg-maroon-800 text-white rounded-md shadow-lg flex items-center gap-2"
      >
        <MessageSquare size={16} />
        <span>Feedback</span>
      </Button>
      <FeedbackForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
