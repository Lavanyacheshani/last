"use client";

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, User, Users, UsersRound } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"

export function PackagesSection() {
  const packages = [
    {
      id: "solo",
      title: "Solo Traveller Package",
      price: "$125/day",
      image: "/packages/solo-traveler.jpg",
      icon: <User className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Airport pickup & drop-off service",
        "150 km daily with fuel and driver (additional $0.5/km)",
        "All road tolls & parking tickets included",
        "Driver's food and accommodation covered",
        "Professional English-speaking driver guide",
        "Comfortable A/C vehicle throughout the tour",
        "Free information about ongoing festivals & rituals",
        "Flexibility to join cultural events during tour",
      ],
      freeOffers: [
        "Optional Sri Lankan travel companion (extra charges apply)",
        "Complimentary drone camera for photography",
        "Professional saree dressing at salon (5+ day tours)",
        "Hotel booking assistance (charges apply)",
        "Special gift/flower bouquet (5+ day tours)",
      ],
      color: "from-maroon-600 to-maroon-800",
      hoverColor: "group-hover:from-maroon-700 group-hover:to-maroon-900",
      lightColor: "bg-maroon-50",
      iconColor: "text-maroon-700",
      checkColor: "text-maroon-600",
    },
    {
      id: "couple",
      title: "Couple Traveller Package",
      price: "$190/day",
      image: "/packages/couple.jpg",
      icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Airport pickup & drop-off service",
        "Daily fuel and professional driver included",
        "All road tolls & parking tickets covered",
        "Driver's food and accommodation included",
        "Professional English-speaking driver guide",
        "Comfortable A/C vehicle throughout tour",
        "Free information about ongoing festivals & rituals",
        "Flexibility to join cultural events during tour",
      ],
      freeOffers: [
        "Complimentary drone camera for photography",
        "Hotel booking assistance (charges apply)",
        "Professional saree dressing at salon (5+ day tours)",
        "Special gift/flower bouquet (5+ day tours)",
      ],
      color: "from-maroon-600 to-maroon-800",
      hoverColor: "group-hover:from-maroon-700 group-hover:to-maroon-900",
      lightColor: "bg-maroon-50",
      iconColor: "text-maroon-700",
      checkColor: "text-maroon-600",
    },
    {
      id: "group",
      title: "Group/Family Traveller Package",
      price: "$60/person/day (min. 3 people)",
      image: "/packages/11.jpg",
      icon: <UsersRound className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Airport pickup & drop-off service",
        "Fuel and professional driver included",
        "All road tolls & parking tickets covered",
        "Driver's food and accommodation included",
        "Professional English-speaking driver guide",
        "Spacious A/C vehicle for group travel",
        "Free information about ongoing festivals & rituals",
        "Flexibility to join cultural events during tour",
      ],
      freeOffers: [
        "Complimentary drone camera for photography",
        "Hotel booking assistance (charges apply)",
        "Traditional musical instruments for cultural experiences",
      ],
      color: "from-maroon-600 to-maroon-800",
      hoverColor: "group-hover:from-maroon-700 group-hover:to-maroon-900",
      lightColor: "bg-maroon-50",
      iconColor: "text-maroon-700",
      checkColor: "text-maroon-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="packages">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Travel Packages"
          subtitle="Tailored packages for solo travelers, couples, and groups designed to give you the best Sri Lankan experience."
        />

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative flex flex-col h-full overflow-hidden border-0 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Package Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image ?? "/fallback-image.jpg"}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">{pkg.title}</h3>
                    <p className="text-lg md:text-xl font-semibold mt-1">{pkg.price}</p>
                  </div>
                </div>

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  {pkg.icon}
                </div>

                <CardContent className="flex-grow p-6">
                  {/* Features Section */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-base md:text-lg mb-4 text-gray-800">
                        Package Includes:
                      </h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start group/item">
                            <div className={`${pkg.lightColor} p-1 rounded-full mr-3 group-hover:item:scale-110 transition-transform`}>
                              <Check size={14} className={pkg.checkColor} />
                            </div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pkg.freeOffers.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-4 text-gray-800">
                          Free Offers:
                        </h4>
                        <ul className="space-y-3">
                          {pkg.freeOffers.map((offer, index) => (
                            <li key={index} className="flex items-start group/item">
                              <div className={`${pkg.lightColor} p-1 rounded-full mr-3 group-hover:item:scale-110 transition-transform`}>
                                <Check size={14} className={pkg.checkColor} />
                              </div>
                              <span className="text-sm text-gray-600">{offer}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:${pkg.hoverColor} 
                    text-white font-semibold py-6 rounded-xl shadow-lg 
                    hover:shadow-xl transition-all duration-300 
                    transform hover:-translate-y-0.5`}
                  >
                    <a href="#booking" className="text-sm md:text-base">
                      Book This Package
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}