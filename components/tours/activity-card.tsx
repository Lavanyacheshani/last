"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-context"

interface ActivityCardProps {
  activity: any
  categoryColor: string
  onClick: () => void
}

export function ActivityCard({ activity, categoryColor, onClick }: ActivityCardProps) {
  const { t } = useLanguage()

  // Get the translated activity name and description
  const activityName = t[`activity_${activity.id}`] || activity.name
  const activityDescription = t[`activityDesc_${activity.id}`] || activity.description

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer h-full"
      onClick={onClick}
      style={{ boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)` }}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={activity.image || "/placeholder.svg?height=400&width=600"}
          alt={activityName}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(to top, ${categoryColor}99, transparent)` }}
        ></div>
      </div>

      <div className="p-5">
        <h3
          className="font-bold text-xl mb-3 group-hover:text-emerald-600 transition-colors duration-300"
          style={{ color: categoryColor }}
        >
          {activityName}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{activityDescription}</p>

        <div className="flex justify-end">
          <span
            className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
            style={{ color: categoryColor }}
          >
            {t.viewDetails}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
