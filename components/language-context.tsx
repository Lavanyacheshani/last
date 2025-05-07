"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type Language = "English" | "Chinese" | "German" | "French" | "Hindi" | "Russian"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Record<string, string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("English")
  const [t, setT] = useState<Record<string, string>>(translations.English)

  // Update translations when language changes
  useEffect(() => {
    setT(translations[language])
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
