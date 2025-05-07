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
      <Footer />
      <FloatingButtons />
    </div>
  )
}
