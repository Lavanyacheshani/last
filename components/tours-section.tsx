import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Palmtree, Waves, Droplets, Tent, PartyPopper, MountainIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ToursSection() {
  const tourCategories = [
    {
      id: "cultural",
      name: "Cultural & Heritage",
      icon: <Compass className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      places: [
        "Anuradhapura",
        "Polonnaruwa",
        "Dambulla Rock Cave Temple",
        "Sigiriya",
        "Kandy",
        "Ambuluwawa Tower",
        "Colombo",
        "Galle Fort",
        "Dabana Indigenous Village",
        "Pinnawala Elephant Orphanage",
        "Madu Ganga River Safari",
        "Upcountry Tea Estates",
        "Temple of the Tooth Relic",
        "Ritigala Monastery Ruins",
        "Aluvihara Rock Temple",
      ],
    },
    {
      id: "wildlife",
      name: "Wildlife Safaris",
      icon: <Palmtree className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      places: [
        "Yala",
        "Wilpattu",
        "Habarana",
        "Minneriya",
        "Kaudulla",
        "Wasgamuwa",
        "Sinharaja Rainforest",
        "Bundala",
        "Gal Oya",
      ],
    },
    {
      id: "beach",
      name: "Beach & Coastal",
      icon: <Waves className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      places: [
        "Hikkaduwa",
        "Unawatuna",
        "Arugam Bay",
        "Nilaveli & Uppuveli",
        "Mirissa",
        "Bentota",
        "Turtle Hatchery",
        "Hummanaya Blowhole",
        "Kalpitiya",
        "Mount Lavinia",
      ],
    },
    {
      id: "water",
      name: "Water Activities",
      icon: <Droplets className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      places: [
        "Kitulgala",
        "Madu Ganga",
        "Kalu Ganga",
        "Lagoon Kayaking",
        "Waterfall Trekking",
        "Ella & Nuwara Eliya Lakes",
        "Belihuloya",
      ],
    },
    {
      id: "adventure",
      name: "Adventure & Hiking",
      icon: <Tent className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      places: [
        "Adam's Peak",
        "Rivertern Campsites",
        "Knuckles Range",
        "Pidurangala",
        "Ella Rock",
        "Nine Arches Bridge",
        "Horton Plains",
      ],
    },
    {
      id: "festivals",
      name: "Festivals & Events",
      icon: <PartyPopper className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      places: [
        "Vesak",
        "Avurudu",
        "Dalada Perahera",
        "Dabana Festival",
        "Poson Poya",
        "Nallur Festival",
        "Katharagama",
      ],
    },
    {
      id: "scenic",
      name: "Scenic & Upcountry",
      icon: <MountainIcon className="h-5 w-5" />,
      image: "/placeholder.svg?height=400&width=600",
      places: ["Ella", "Nuwara Eliya", "Haputale", "Hatton", "Riverston", "Ambewela Farm & Strawberry Fields"],
    },
  ]

  return (
    <section className="py-16 bg-white" id="tours">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tours & Activities</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of experiences Sri Lanka has to offer, from ancient cultural sites to thrilling
            adventures and serene natural escapes.
          </p>
        </div>

        <Tabs defaultValue="cultural" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            {tourCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden md:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tourCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.name} Tours
                  </CardTitle>
                  <CardDescription>
                    Explore the best {category.name.toLowerCase()} experiences Sri Lanka has to offer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={`${category.name} Tour`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <p>Experience the best of Sri Lanka</p>
                        <Link
                          href="/gallery"
                          className="text-sm text-emerald-300 hover:text-emerald-100 mt-2 inline-block"
                        >
                          View in Gallery →
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Popular Destinations</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {category.places.slice(0, 6).map((place, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-3 rounded-md text-center hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
                          >
                            {place}
                          </div>
                        ))}
                      </div>
                      {category.places.length > 6 && (
                        <div className="mt-3 text-center">
                          <Link href="#" className="text-sm text-emerald-600 hover:text-emerald-800">
                            + {category.places.length - 6} more destinations
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {category.places.map((place, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-3 rounded-md text-center hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
                      >
                        {place}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
