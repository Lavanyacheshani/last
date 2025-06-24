import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingButtons />
    </>
  )
}
