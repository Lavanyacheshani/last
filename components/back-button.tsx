"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

export function BackButton() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <Button
      onClick={() => router.back()}
      variant="outline"
      size="sm"
      className="flex items-center gap-1 mb-4 border-maroon-200 hover:bg-maroon-50 text-maroon-700"
    >
      <ChevronLeft size={16} />
      <span>{t?.backButton || "Back"}</span>
    </Button>
  )
}
