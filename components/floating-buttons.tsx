"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Show buttons after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {!isCollapsed && (
          <>
            <motion.a
              href="tel:+94789920063"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-maroon-700 text-white shadow-lg hover:bg-maroon-800 hover:shadow-xl hover:scale-110 transition-all duration-300 modern-button"
              aria-label="Call Now"
              whileHover={{
                boxShadow: "0 0 15px rgba(168, 35, 72, 0.5)",
              }}
            >
              <Phone size={20} />
            </motion.a>

            <motion.a
              href="https://wa.me/94789920063"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300 modern-button"
              aria-label="WhatsApp"
              whileHover={{
                boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)",
              }}
            >
              <MessageCircle size={20} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 ${
          isCollapsed ? "bg-maroon-700 text-white hover:bg-maroon-800" : "bg-red-500 text-white hover:bg-red-600"
        } modern-button`}
        whileHover={{
          scale: 1.1,
          boxShadow: isCollapsed ? "0 0 15px rgba(168, 35, 72, 0.5)" : "0 0 15px rgba(239, 68, 68, 0.5)",
        }}
        whileTap={{ scale: 0.9 }}
        aria-label={isCollapsed ? "Show contact buttons" : "Hide contact buttons"}
      >
        {isCollapsed ? <ChevronUp size={18} /> : <X size={18} />}
      </motion.button>
    </div>
  )
}
