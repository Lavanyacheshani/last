"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { ActivityCard } from "@/components/tours/activity-card"
import { SpeedInsights } from "@vercel/speed-insights/next"

interface CategorySectionProps {
  category: any
  onActivityClick: (activity: any) => void
}

export function CategorySection({ category, onActivityClick }: CategorySectionProps) {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  // Show only 4 activities initially, or all if showAll is true
  const displayedActivities = showAll ? category.activities : category.activities.slice(0, 4)

  return (
    <section
      id={category.id}
      className="py-16 relative overflow-hidden"
      style={{
        background: `linear-gradient(to right, ${category.bgGradient.from}, ${category.bgGradient.to})`,
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${category.patternUrl})`, backgroundSize: "300px" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-white p-3 rounded-full shadow-lg">{category.icon}</div>
          <h2 className="text-4xl font-bold text-white drop-shadow-md">{t[`category_${category.id}`]}</h2>
        </div>

        <p className="text-white text-lg mb-12 max-w-3xl opacity-90">{t[`categoryDesc_${category.id}`]}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedActivities.map((activity: any, index: number) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ActivityCard
                activity={activity}
                categoryColor={category.color}
                onClick={() => onActivityClick({ ...activity, categoryId: category.id })}
              />
            </motion.div>
          ))}
        </div>

        {category.activities.length > 4 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ color: category.color }}
            >
              {showAll ? t.showLess : t.showMore}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
