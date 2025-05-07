import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function DestinationsSection() {
  const destinations = [
    {
      name: "Galle",
      slug: "galle",
      image: "/placeholder.svg?height=300&width=400",
      description: "Historic coastal city with a magnificent Dutch fort, colonial architecture, and beautiful beaches.",
    },
    {
      name: "Ella",
      slug: "ella",
      image: "/placeholder.svg?height=300&width=400",
      description: "A scenic highland escape with famous hikes like Ella Rock and Little Adam's Peak.",
    },
    {
      name: "Kandy",
      slug: "kandy",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cultural capital of Sri Lanka, home to the Temple of the Tooth and scenic lake views.",
    },
    {
      name: "Nuwara Eliya",
      slug: "nuwara-eliya",
      image: "/placeholder.svg?height=300&width=400",
      description: "Known as 'Little England', featuring tea plantations, cool climate, and beautiful gardens.",
    },
    {
      name: "Colombo",
      slug: "colombo",
      image: "/placeholder.svg?height=300&width=400",
      description: "Sri Lanka's vibrant capital with a mix of modern life, colonial buildings, and shopping.",
    },
    {
      name: "Dambulla",
      slug: "dambulla",
      image: "/placeholder.svg?height=300&width=400",
      description: "Famous for its magnificent cave temple complex and golden Buddha statue.",
    },
    {
      name: "Anuradhapura",
      slug: "anuradhapura",
      image: "/placeholder.svg?height=300&width=400",
      description: "Ancient city with well-preserved ruins of an ancient Sinhalese civilization.",
    },
    {
      name: "Polonnaruwa",
      slug: "polonnaruwa",
      image: "/placeholder.svg?height=300&width=400",
      description: "Medieval capital with impressive stone temples, ancient structures, and the famous Gal Vihara.",
    },
    {
      name: "Trincomalee",
      slug: "trincomalee",
      image: "/placeholder.svg?height=300&width=400",
      description: "Port city with pristine beaches, natural harbors, and the sacred Koneswaram temple.",
    },
    {
      name: "Matara",
      slug: "matara",
      image: "/placeholder.svg?height=300&width=400",
      description: "Southern coastal city with Dutch colonial heritage, beaches, and the famous Paravi Duwa temple.",
    },
    {
      name: "Arugam Bay",
      slug: "arugam-bay",
      image: "/placeholder.svg?height=300&width=400",
      description: "World-renowned surfing destination with a laid-back atmosphere and beautiful beaches.",
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white" id="destinations">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Explore Our Destinations"
          subtitle="Discover the most beautiful and culturally rich destinations across Sri Lanka, from ancient cities to pristine beaches and misty mountains."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow group border-0 bg-transparent card-hover"
            >
              <div className="relative">
                <div className="relative h-40 sm:h-44 md:h-48 w-full rounded-t-lg overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={`${destination.name}, Sri Lanka`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
                    <MapPin size={16} className="text-maroon-700" />
                  </div>
                </div>
              </div>
              <CardContent className="p-3 md:p-4 bg-white rounded-b-lg shadow-md">
                <div className="mb-2">
                  <h3 className="font-medium text-base md:text-lg text-gray-800">{destination.name}</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2">{destination.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-gradient-to-r from-maroon-50 to-maroon-100 hover:from-maroon-100 hover:to-maroon-200 border-maroon-200 text-maroon-800 text-xs md:text-sm py-1 h-auto modern-button"
                >
                  <Link href={`/destinations/${destination.slug}`}>View More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
