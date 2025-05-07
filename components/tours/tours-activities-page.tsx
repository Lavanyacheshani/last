"use client"

import { useState, useEffect } from "react"
import { FeedbackButton } from "@/components/feedback-button"
import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/components/language-context"
import { SimpleCategorySection } from "@/components/tours/simple-category-section"
import { ActivityModal } from "@/components/tours/activity-modal"
import { tourCategories } from "@/lib/tour-data"
import { SectionHeading } from "@/components/section-heading"

export function ToursActivitiesPage() {
  const { t } = useLanguage()
  const [selectedActivity, setSelectedActivity] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Scroll to category when activeCategory changes
  useEffect(() => {
    if (activeCategory) {
      const element = document.getElementById(activeCategory)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }, [activeCategory])

  const openModal = (activity: any) => {
    setSelectedActivity(activity)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section - Simplified */}
        <section className="relative py-16 md:py-24 bg-maroon-900">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{t.toursActivitiesTitle}</h1>
              <p className="text-sm md:text-lg opacity-90 mb-8">{t.toursActivitiesSubtitle}</p>

              {/* Simple Category Navigation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <div className="flex flex-wrap justify-center gap-3">
                  {tourCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 
                    bg-white/10 hover:bg-white/20 flex items-center gap-2"
                    >
                      {category.icon}
                      <span>{t[`category_${category.id}`]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Sections - Simplified */}
        <div className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <BackButton />
            </div>

            <SectionHeading
              title={t.exploreActivities || "Explore Our Activities"}
              subtitle={t.discoverExperiences || "Discover the diverse range of experiences Sri Lanka has to offer"}
            />

            {tourCategories.map((category) => (
              <SimpleCategorySection key={category.id} category={category} onActivityClick={openModal} />
            ))}
          </div>
        </div>

        {/* Call to Action - Simplified */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">{t.readyToExperience}</h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-10">{t.planPerfectAdventure}</p>
            <a
              href="/#booking"
              className="inline-flex h-10 md:h-12 items-center justify-center rounded-md bg-maroon-700 px-6 md:px-8 text-sm md:text-base font-medium text-white shadow-md hover:bg-maroon-800 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/#booking"
              }}
            >
              {t.bookNow}
            </a>
          </div>
        </section>
      </main>
      <FeedbackButton />

      {/* Activity Modal */}
      {isModalOpen && selectedActivity && <ActivityModal activity={selectedActivity} onClose={closeModal} />}
    </div>
  )
}
