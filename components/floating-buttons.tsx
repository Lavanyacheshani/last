"use client"

import { useState } from "react"
import { Phone, MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingButtons() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded ? (
          <>
            <motion.a
              key="whatsapp"
              href="https://wa.me/94789920063"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300 modern-button"
              aria-label="WhatsApp"
              whileHover={{ boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)" }}
            >
              <MessageCircle size={20} />
            </motion.a>
            <motion.a
              key="call"
              href="tel:+94789920063"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-maroon-700 text-white shadow-lg hover:bg-maroon-800 hover:shadow-xl hover:scale-110 transition-all duration-300 modern-button"
              aria-label="Call Now"
              whileHover={{ boxShadow: "0 0 15px rgba(168, 35, 72, 0.5)" }}
            >
              <Phone size={20} />
            </motion.a>
            <motion.button
              key="close"
              onClick={() => setExpanded(false)}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 hover:shadow-xl hover:scale-110 transition-all duration-300 modern-button"
              aria-label="Close contact buttons"
              whileHover={{ boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)" }}
            >
              <X size={20} />
            </motion.button>
          </>
        ) : (
          <motion.button
            key="call"
            onClick={() => setExpanded(true)}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-maroon-700 text-white shadow-lg hover:bg-maroon-800 hover:shadow-xl hover:scale-110 transition-all duration-300 modern-button"
            aria-label="Call Now"
            whileHover={{ boxShadow: "0 0 15px rgba(168, 35, 72, 0.5)" }}
          >
            <Phone size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
