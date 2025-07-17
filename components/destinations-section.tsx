import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useState, useEffect } from "react"

export function DestinationsSection() {
  const [showAll, setShowAll] = useState(false)
  const [isBelowDesktop, setIsBelowDesktop] = useState(false)

  // Add window resize listener
  useEffect(() => {
    const checkScreenSize = () => {
      setIsBelowDesktop(window.innerWidth < 1024)
    }
    
    checkScreenSize() // Check on initial render
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const destinations = [
    {
      name: "Galle",
      slug: "galle",
      image: "/des/galle.jpg",
      description: "Historic coastal city with a magnificent Dutch fort, colonial architecture, and beautiful beaches.",
    },
    {
      name: "Ella",
      slug: "ella",
      image: "/des/ella2.jpg",
      description: "A scenic highland escape with famous hikes like Ella Rock and Little Adam's Peak.",
    },
    {
      name: "Kandy",
      slug: "kandy",
      image: "/des/kandy.jpg",
      description: "Cultural capital of Sri Lanka, home to the Temple of the Tooth and scenic lake views.",
    },
    {
      name: "Nuwara Eliya",
      slug: "nuwara-eliya",
      image: "/des/nuwaraeli.jpg",
      description: "Known as 'Little England', featuring tea plantations, cool climate, and beautiful gardens.",
    },
    {
      name: "Colombo",
      slug: "colombo",
      image: "/des/colombo.jpg",
      description: "Sri Lanka's vibrant capital with a mix of modern life, colonial buildings, and shopping.",
    },
    {
      name: "Dambulla",
      slug: "dambulla",
      image: "/des/dambulla.jpg",
      description: "Famous for its magnificent cave temple complex and golden Buddha statue.",
    },
    {
      name: "Anuradhapura",
      slug: "anuradhapura",
      image: "/des/anura.jpeg",
      description: "Ancient city with well-preserved ruins of an ancient Sinhalese civilization.",
    },
    
    {
      name: "Trincomalee",
      slug: "trincomalee",
      image: "/des/trinco.jpg",
      description: "Port city with pristine beaches, natural harbors, and the sacred Koneswaram temple.",
    },
    {
      name: "Matara",
      slug: "matara",
      image: "/des/matara.jpg",
      description: "Southern coastal city with Dutch colonial heritage, beaches, and the famous Paravi Duwa temple.",
    },
    {
      name: "Arugam Bay",
      slug: "arugam-bay",
      image: "/des/aru.jpg",
      description: "World-renowned surfing destination with a laid-back atmosphere and beautiful beaches.",
    },
    {
      name: "Yala",
      slug: "yala",
      image: "/des/yala-main.jpg",
      description: "Sri Lanka’s premier national park, famous for leopards, elephants, and diverse wildlife.",
    },
    // Add Polonnaruwa as the last destination
    {
      name: "Polonnaruwa",
      slug: "polonnaruwa",
      image: "/des/polon.jpg", // Make sure this image exists in the public/des folder
      description: "Ancient city with impressive ruins, royal palaces, and remarkable Buddhist monuments.",
    },
  ]

  // Determine how many destinations to show
  const visibleDestinations = (!showAll && isBelowDesktop) 
    ? destinations.slice(0, 5) 
    : destinations

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white scroll-mt-24" id="destinations">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Explore Our Destinations"
          subtitle="Discover the most beautiful and culturally rich destinations across Sri Lanka, from ancient cities to pristine beaches and misty mountains."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visibleDestinations.map((destination, index) => (
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
        
        {/* Show button on all screens below desktop size */}
        {isBelowDesktop && !showAll && destinations.length > 5 && (
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setShowAll(true)} 
              variant="outline"
              className="bg-gradient-to-r from-maroon-50 to-maroon-100 hover:from-maroon-100 hover:to-maroon-200 border-maroon-200 text-maroon-800"
            >
              View More Destinations
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
