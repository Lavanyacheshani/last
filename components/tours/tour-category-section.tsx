import { ActivityCard } from "./activity-card"
import type { ReactNode } from "react"

interface Activity {
  name: string
  image: string
  description: string
  slug: string
}

interface TourCategory {
  id: string
  name: string
  icon: ReactNode
  description: string
  activities: Activity[]
}

interface TourCategorySectionProps {
  category: TourCategory
}

export function TourCategorySection({ category }: TourCategorySectionProps) {
  return (
    <section id={category.id} className="py-16 bg-white border-b last:border-b-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-100 p-2 rounded-full">{category.icon}</div>
          <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
        </div>
        <p className="text-gray-600 max-w-3xl mb-10">{category.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.activities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  )
}
