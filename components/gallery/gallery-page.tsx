"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GalleryLightbox } from "./gallery-lightbox"
import { FeedbackButton } from "@/components/feedback-button"
import { BackButton } from "@/components/back-button"
import { LanguageProvider } from "@/components/language-context"
import { useTranslations } from "next-intl"

export function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<{
    src: string
    alt: string
    caption: string
    category: string
  } | null>(null)

  const t = useTranslations("GalleryPage")

  // Gallery data organized by category
  const galleryData = {
    destinations: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Sigiriya Rock Fortress",
        caption: "Sigiriya Rock Fortress - Ancient palace with breathtaking views",
        category: "destinations",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Galle Fort",
        caption: "Galle Fort - Colonial-era fortress with charming streets",
        category: "destinations",
      },
      {
        src: "/placeholder.svg?height=500&width=800",
        alt: "Kandy Lake",
        caption: "Kandy Lake - Serene waters in the cultural capital",
        category: "destinations",
      },
      {
        src: "/placeholder.svg?height=800&width=800",
        alt: "Nine Arch Bridge, Ella",
        caption: "Nine Arch Bridge - Iconic railway bridge in Ella",
        category: "destinations",
      },
      {
        src: "/placeholder.svg?height=600&width=900",
        alt: "Nuwara Eliya Tea Plantations",
        caption: "Nuwara Eliya - Rolling hills of lush tea plantations",
        category: "destinations",
      },
      {
        src: "/placeholder.svg?height=700&width=500",
        alt: "Trincomalee Beach",
        caption: "Trincomalee - Pristine beaches with crystal clear waters",
        category: "destinations",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Polonnaruwa Ancient City",
        caption: "Polonnaruwa - Well-preserved ruins of the ancient kingdom",
        category: "destinations",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Arugam Bay",
        caption: "Arugam Bay - World-class surfing destination",
        category: "destinations",
      },
    ],
    tours: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Cultural Tour - Temple of the Tooth",
        caption: "Cultural Tour - Sacred Temple of the Tooth in Kandy",
        category: "tours",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Wildlife Safari - Elephants",
        caption: "Wildlife Safari - Elephants gathering at Minneriya National Park",
        category: "tours",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Beach Tour - Unawatuna",
        caption: "Beach Tour - Relaxing shores of Unawatuna",
        category: "tours",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Water Activities - White Water Rafting",
        caption: "Water Activities - Thrilling white water rafting in Kitulgala",
        category: "tours",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Adventure Tour - Adam's Peak",
        caption: "Adventure Tour - Sunrise hike to Adam's Peak",
        category: "tours",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Festival Tour - Kandy Perahera",
        caption: "Festival Tour - Colorful Esala Perahera procession",
        category: "tours",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Scenic Tour - Horton Plains",
        caption: "Scenic Tour - Breathtaking views at World's End, Horton Plains",
        category: "tours",
      },
    ],
    nature: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Leopard at Yala National Park",
        caption: "Elusive leopard spotted at Yala National Park",
        category: "nature",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Sinharaja Rainforest",
        caption: "Lush canopy of the Sinharaja Rainforest",
        category: "nature",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Elephants at Udawalawe",
        caption: "Elephant family crossing the grasslands of Udawalawe",
        category: "nature",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Pidurangala Rock View",
        caption: "Panoramic view from Pidurangala Rock",
        category: "nature",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Ravana Falls",
        caption: "Majestic Ravana Falls cascading down the rocks",
        category: "nature",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Blue Whales at Mirissa",
        caption: "Magnificent blue whale sighting off the coast of Mirissa",
        category: "nature",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Knuckles Mountain Range",
        caption: "Misty morning at the Knuckles Mountain Range",
        category: "nature",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Sea Turtles at Hikkaduwa",
        caption: "Sea turtles swimming in the coral reefs of Hikkaduwa",
        category: "nature",
      },
    ],
    culture: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Kandyan Dancers",
        caption: "Traditional Kandyan dancers performing in colorful costumes",
        category: "culture",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Buddhist Monks",
        caption: "Buddhist monks in meditation at an ancient temple",
        category: "culture",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Sri Lankan Cuisine",
        caption: "Traditional Sri Lankan rice and curry spread",
        category: "culture",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Tea Pluckers",
        caption: "Tea pluckers working in the highlands of Nuwara Eliya",
        category: "culture",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Mask Carving",
        caption: "Artisan crafting traditional Sri Lankan masks",
        category: "culture",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Vesak Celebrations",
        caption: "Colorful lanterns during Vesak celebrations",
        category: "culture",
      },
    ],
    guests: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Guests at Sigiriya",
        caption: "Happy travelers at the top of Sigiriya Rock",
        category: "guests",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Family Safari",
        caption: "Family enjoying a wildlife safari adventure",
        category: "guests",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Beach Relaxation",
        caption: "Guests relaxing on the beautiful beaches of Sri Lanka",
        category: "guests",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Cultural Experience",
        caption: "Travelers participating in a traditional cultural experience",
        category: "guests",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Adventure Activities",
        caption: "Guests enjoying adventure activities in the mountains",
        category: "guests",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Cooking Class",
        caption: "Visitors learning to cook authentic Sri Lankan cuisine",
        category: "guests",
      },
    ],
  }

  const openLightbox = (image: typeof currentImage) => {
    setCurrentImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImage(null)
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <main>
          {/* Hero Section */}
          <section className="relative h-[60vh] overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=2000"
              alt="Sri Lankan landscape"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                {t?.galleryTitle || "Uncover the Beauty of Sri Lanka – A Journey in Pictures"}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl drop-shadow-md">
                {t?.gallerySubtitle ||
                  "Explore our visual diary of Sri Lanka's most breathtaking destinations and experiences"}
              </p>
              <div className="mt-12">
                <ChevronDown size={36} className="text-white" />
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 py-6">
            <BackButton />
          </div>

          {/* Gallery Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="destinations" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-1">
                    <TabsTrigger value="destinations" className="flex items-center gap-2">
                      <span>📍</span> {t?.galleryTabDestinations || "Destinations"}
                    </TabsTrigger>
                    <TabsTrigger value="tours" className="flex items-center gap-2">
                      <span>🧭</span> {t?.galleryTabTours || "Tours & Activities"}
                    </TabsTrigger>
                    <TabsTrigger value="nature" className="flex items-center gap-2">
                      <span>🌅</span> {t?.galleryTabNature || "Nature & Wildlife"}
                    </TabsTrigger>
                    <TabsTrigger value="culture" className="flex items-center gap-2">
                      <span>🧘</span> {t?.galleryTabCulture || "Culture & Traditions"}
                    </TabsTrigger>
                    <TabsTrigger value="guests" className="flex items-center gap-2">
                      <span>😊</span> {t?.galleryTabGuests || "Guest Moments"}
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Destinations Tab */}
                <TabsContent value="destinations">
                  <div className="mb-6 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t?.galleryDestinationsDesc ||
                        "Explore Sri Lanka's most iconic destinations, from ancient cities to pristine beaches and misty mountains. Each location offers its own unique charm and unforgettable experiences."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {galleryData.destinations.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                        onClick={() => openLightbox(image)}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={t?.[`galleryImg_${image.alt}`] || image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-medium text-sm">{t?.[`galleryImg_${image.alt}`] || image.alt}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Tours & Activities Tab */}
                <TabsContent value="tours">
                  <div className="mb-6 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t?.galleryToursDesc ||
                        "From cultural explorations to thrilling adventures, our diverse range of tours showcase the best experiences Sri Lanka has to offer for every type of traveler."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {galleryData.tours.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                        onClick={() => openLightbox(image)}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={t?.[`galleryImg_${image.alt}`] || image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-medium text-sm">{t?.[`galleryImg_${image.alt}`] || image.alt}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Nature & Wildlife Tab */}
                <TabsContent value="nature">
                  <div className="mb-6 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t?.galleryNatureDesc ||
                        "Sri Lanka is a biodiversity hotspot with incredible wildlife and stunning natural landscapes. From leopards to blue whales, and rainforests to mountain peaks, nature thrives in this island paradise."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {galleryData.nature.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                        onClick={() => openLightbox(image)}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={t?.[`galleryImg_${image.alt}`] || image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-medium text-sm">{t?.[`galleryImg_${image.alt}`] || image.alt}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Culture & Traditions Tab */}
                <TabsContent value="culture">
                  <div className="mb-6 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t?.galleryCultureDesc ||
                        "Experience the rich cultural heritage of Sri Lanka through its ancient traditions, vibrant festivals, delicious cuisine, and warm hospitality that has been preserved for generations."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {galleryData.culture.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                        onClick={() => openLightbox(image)}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={t?.[`galleryImg_${image.alt}`] || image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-medium text-sm">{t?.[`galleryImg_${image.alt}`] || image.alt}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Guest Moments Tab */}
                <TabsContent value="guests">
                  <div className="mb-6 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {t?.galleryGuestsDesc ||
                        "See the joy and wonder on our guests' faces as they experience the magic of Sri Lanka. These authentic moments capture the transformative power of travel and adventure."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {galleryData.guests.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                        onClick={() => openLightbox(image)}
                      >
                        <div className="aspect-square relative">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={t?.[`galleryImg_${image.alt}`] || image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-medium text-sm">{t?.[`galleryImg_${image.alt}`] || image.alt}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t?.galleryCtaTitle || "Ready to create your own unforgettable memories in Sri Lanka?"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {t?.galleryCtaDesc ||
                  "Let us help you plan the perfect Sri Lankan adventure tailored to your interests, preferences, and travel style."}
              </p>
              <Button asChild size="lg" className="bg-maroon-700 hover:bg-maroon-800">
                <a href="/#booking">{t?.bookNow || "Book Your Adventure Now"}</a>
              </Button>
            </div>
          </section>
        </main>
        <FeedbackButton />

        {/* Lightbox */}
        {lightboxOpen && currentImage && <GalleryLightbox image={currentImage} onClose={closeLightbox} />}
      </div>
    </LanguageProvider>
  )
}
