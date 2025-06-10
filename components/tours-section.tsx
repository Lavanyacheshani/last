"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Palmtree, Waves, Droplets, Tent, PartyPopper, MountainIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
    <section className="relative py-20" id="tours">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tours-bg.jpg" // Add your background image to public folder
          alt="Tours background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Modern Header Section */}
        <div className="text-center mb-16">
          <span className="text-maroon-600 font-medium tracking-wider uppercase text-sm">
            Explore Sri Lanka
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Tours & Activities
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-maroon-600 rounded-full"></div>
            <div className="h-1 w-4 bg-maroon-400 rounded-full"></div>
          </div>
        </div>

        {/* Modern Tabs Navigation */}
        <Tabs defaultValue="cultural" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 mb-12 bg-transparent">
            {tourCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200
                          hover:border-maroon-500 transition-all duration-300
                          data-[state=active]:bg-maroon-600 data-[state=active]:text-white
                          data-[state=active]:border-maroon-600"
              >
                <span className="p-2 bg-white/90 rounded-full">
                  {React.cloneElement(category.icon, {
                    className: "h-5 w-5 text-maroon-600"
                  })}
                </span>
                <span className="font-medium">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Modern Content Cards */}
          {tourCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-maroon-600 to-maroon-800 text-white rounded-t-xl">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    {category.icon}
                    {category.name} Tours
                  </CardTitle>
                  <CardDescription className="text-gray-100">
                    Explore the best {category.name.toLowerCase()} experiences Sri Lanka has to offer
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Featured Image Section */}
                    <div className="relative h-80 rounded-xl overflow-hidden group">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={`${category.name} Tour`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-gray-200 mb-4">Experience the best of Sri Lanka</p>
                        <Link
                          href="/gallery"
                          className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30
                                   backdrop-blur-sm px-4 py-2 rounded-full text-sm transition-all duration-300"
                        >
                          View Gallery
                          <span className="text-lg">→</span>
                        </Link>
                      </div>
                    </div>

                    {/* Destinations Grid */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Popular Destinations
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {category.places.map((place, index) => (
                          <div
                            key={index}
                            className="relative group cursor-pointer"
                          >
                            <div className="absolute inset-0 bg-maroon-600 rounded-lg opacity-0
                                          group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="relative p-4 bg-gray-50 rounded-lg group-hover:bg-transparent
                                          group-hover:text-white transition-all duration-300">
                              <span className="text-sm font-medium">{place}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
