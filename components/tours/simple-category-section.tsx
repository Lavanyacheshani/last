"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-context"
import { SimpleActivityCard } from "@/components/tours/simple-activity-card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface SimpleCategorySectionProps {
  category: any
  onActivityClick: (activity: any) => void
}

export function SimpleCategorySection({ category, onActivityClick }: SimpleCategorySectionProps) {
  const { t } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  // Show only 4 activities initially, or all if showAll is true
  const displayedActivities = showAll ? category.activities : category.activities.slice(0, 4)

  return (
    <section id={category.id} className="py-10 mb-8 border-b last:border-b-0">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-100 p-2 rounded-full">{category.icon}</div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">{t[`category_${category.id}`]}</h2>
        </div>
        <p className="text-gray-600 text-sm md:text-base mb-6">{t[`categoryDesc_${category.id}`]}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {displayedActivities.map((activity: any, index: number) => (
          <SimpleActivityCard
            key={activity.id}
            activity={activity}
            onClick={() => onActivityClick({ ...activity, categoryId: category.id })}
          />
        ))}
      </div>

      {category.activities.length > 4 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
          >
            {showAll ? (
              <>
                <span>{t.showLess || "Show Less"}</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>{t.showMore || "Show More Activities"}</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
