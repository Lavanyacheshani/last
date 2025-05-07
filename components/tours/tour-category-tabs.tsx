"use client"

import { useState, useEffect } from "react"
import { ActivityCard } from "./activity-card"
import { LanguageSwitcher } from "../language-switcher"
import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

interface Activity {
  name: string
  image: string
  description: string
  duration: string
  location: string
  slug: string
}

interface TourCategory {
  id: string
  name: string
  icon: ReactNode
  description: string
  color: string
  textColor: string
  activities: Activity[]
}

interface TourCategoryTabsProps {
  categories: TourCategory[]
}

// Translations for different languages
const translations = {
  English: {
    viewAll: "View All",
    searchPlaceholder: "Search activities...",
    duration: "Duration",
    location: "Location",
    viewMore: "View More",
  },
  Chinese: {
    viewAll: "查看全部",
    searchPlaceholder: "搜索活动...",
    duration: "持续时间",
    location: "位置",
    viewMore: "查看更多",
  },
  German: {
    viewAll: "Alle anzeigen",
    searchPlaceholder: "Aktivitäten suchen...",
    duration: "Dauer",
    location: "Standort",
    viewMore: "Mehr anzeigen",
  },
  French: {
    viewAll: "Voir tout",
    searchPlaceholder: "Rechercher des activités...",
    duration: "Durée",
    location: "Emplacement",
    viewMore: "Voir plus",
  },
  Hindi: {
    viewAll: "सभी देखें",
    searchPlaceholder: "गतिविधियाँ खोजें...",
    duration: "अवधि",
    location: "स्थान",
    viewMore: "और देखें",
  },
  Russian: {
    viewAll: "Посмотреть все",
    searchPlaceholder: "Поиск мероприятий...",
    duration: "Продолжительность",
    location: "Место",
    viewMore: "Подробнее",
  },
}

export function TourCategoryTabs({ categories }: TourCategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const [searchTerm, setSearchTerm] = useState("")
  const [language, setLanguage] = useState<keyof typeof translations>("English")
  const [filteredActivities, setFilteredActivities] = useState(categories[0].activities)

  // Update filtered activities when category or search term changes
  useEffect(() => {
    const currentCategory = categories.find((cat) => cat.id === activeCategory)
    if (currentCategory) {
      if (searchTerm) {
        setFilteredActivities(
          currentCategory.activities.filter(
            (activity) =>
              activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              activity.location.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        )
      } else {
        setFilteredActivities(currentCategory.activities)
      }
    }
  }, [activeCategory, searchTerm, categories])

  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as keyof typeof translations)
  }

  const currentCategory = categories.find((cat) => cat.id === activeCategory) || categories[0]
  const t = translations[language]

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Language Switcher */}
        <div className="flex justify-end mb-6">
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />
        </div>

        {/* Category Navigation */}
        <div className="overflow-x-auto mb-8 rounded-xl shadow-md bg-white p-2">
          <div className="flex min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-all duration-300 rounded-lg ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : `text-gray-600 hover:${category.textColor}`
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-3.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${currentCategory.textColor}`}>{currentCategory.name}</h2>
              <div className={`h-1 w-20 bg-gradient-to-r ${currentCategory.color} mx-auto mb-6 rounded-full`}></div>
              <p className="text-gray-600 text-lg">{currentCategory.description}</p>
            </div>

            {filteredActivities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredActivities.map((activity, index) => (
                  <motion.div
                    key={activity.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ActivityCard activity={activity} categoryColor={currentCategory.color} translations={t} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No activities found. Try a different search term.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
