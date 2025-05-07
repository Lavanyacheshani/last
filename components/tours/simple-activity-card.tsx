"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-context"

interface SimpleActivityCardProps {
  activity: any
  onClick: () => void
}

export function SimpleActivityCard({ activity, onClick }: SimpleActivityCardProps) {
  const { t } = useLanguage()

  // Get the translated activity name and description
  const activityName = t[`activity_${activity.id}`] || activity.name
  const activityDescription = t[`activityDesc_${activity.id}`] || activity.description

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full border border-gray-100"
      onClick={onClick}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={activity.image || "/placeholder.svg?height=400&width=600"}
          alt={activityName}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{activityName}</h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{activityDescription}</p>

        <div className="flex justify-end">
          <span className="text-sm font-medium inline-flex items-center gap-1 text-maroon-700">
            {t.viewDetails || "View Details"}
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
