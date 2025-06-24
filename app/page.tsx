import { BookingForm } from "@/components/booking-form"
import { CustomerFeedback } from "@/components/customer-feedback"
import { DestinationsSection } from "@/components/destinations-section"
import Features from "@/components/features"
import { FloatingButtons } from "@/components/floating-buttons"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { PackagesSection } from "@/components/packages-section"
import { FeedbackButton } from "@/components/feedback-button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <IntroSection />
        <DestinationsSection />
        <PackagesSection />
        <BookingForm />
        <CustomerFeedback />
      </main>
      <div className="flex justify-center py-4">
        <FeedbackButton />
      </div>
      <Footer />
      <FloatingButtons />
      <div className="relative w-16 h-16 md:w-24 md:h-24">
        <Image
          src="/logo.png"
          alt="Explorative Tours Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 64px, 96px"
        />
      </div>
    </div>
  )
}
