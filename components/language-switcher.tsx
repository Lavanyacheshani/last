"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-context"

interface LanguageSwitcherProps {
  onLanguageChange?: (language: string) => void
}

export function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps = {}) {
  const { language, setLanguage } = useLanguage()

  const languages = ["English", "Chinese", "German", "French", "Hindi", "Russian"]

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as any)
    if (onLanguageChange) {
      onLanguageChange(lang)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 rounded-full">
          <Globe size={16} className="text-emerald-600" />
          <span className="hidden sm:inline">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-in fade-in-80 zoom-in-95">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`${language === lang ? "bg-emerald-50 text-emerald-600 font-medium" : ""} cursor-pointer`}
          >
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
