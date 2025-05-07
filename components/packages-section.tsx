import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, User, Users, UsersRound } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function PackagesSection() {
  const packages = [
    {
      id: "solo",
      title: "Solo Traveller Package",
      price: "$125/day",
      icon: <User className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Airport pickup/drop-off",
        "150 km with fuel and driver ($0.5 per extra km)",
        "Road tolls, parking tickets",
        "Driver's food and accommodation",
        "English-speaking driver guide",
        "A/C vehicle for whole tour",
        "Free info on Sri Lankan festivals during trip",
      ],
      freeOffers: [
        "Male/Female Sri Lankan travel partner (extra charges may apply)",
        "Free drone camera",
        "Female traditional saree dressing (free for tours ≥ 5 days)",
        "Hotel booking (extra charges apply)",
        "Free gift/flower bouquet (for tours ≥ 5 days)",
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
      icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "Airport pickup/drop-off",
        "150 km with fuel and driver ($0.5 per extra km)",
        "Road tolls, parking tickets",
        "Driver's food and accommodation",
        "English-speaking driver guide",
        "A/C vehicle for whole tour",
        "Free info on Sri Lankan festivals during trip",
      ],
      freeOffers: [
        "Free drone camera",
        "Hotel booking (extra charges apply)",
        "Free female saree dressing (tours ≥ 5 days)",
        "Free gift/flower bouquet (tours ≥ 5 days)",
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
      icon: <UsersRound className="h-6 w-6 md:h-8 md:w-8" />,
      features: [
        "150 km with fuel and driver",
        "Road tolls, parking tickets",
        "Driver's food and accommodation",
        "Airport pickup/drop-off",
        "English-speaking driver guide",
        "A/C vehicle",
        "Festival info during tour",
      ],
      freeOffers: [],
      color: "from-maroon-600 to-maroon-800",
      hoverColor: "group-hover:from-maroon-700 group-hover:to-maroon-900",
      lightColor: "bg-maroon-50",
      iconColor: "text-maroon-700",
      checkColor: "text-maroon-600",
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-gray-50" id="packages">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Travel Packages"
          subtitle="Tailored packages for solo travelers, couples, and groups designed to give you the best Sri Lankan experience."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="flex flex-col h-full overflow-hidden border-0 shadow-lg group transition-all duration-300 hover:shadow-xl card-hover"
            >
              <div className={`h-1 md:h-2 w-full bg-gradient-to-r ${pkg.color}`}></div>
              <CardHeader className="text-center pb-2 relative p-4 md:p-6">
                <div className={`mx-auto ${pkg.lightColor} ${pkg.iconColor} p-2 md:p-3 rounded-full mb-3 md:mb-4`}>
                  {pkg.icon}
                </div>
                <CardTitle className="text-lg md:text-xl">{pkg.title}</CardTitle>
                <CardDescription className="text-xl md:text-2xl font-bold mt-1 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r ${pkg.color}">
                  {pkg.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4 md:p-6 pt-0 md:pt-0">
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm md:text-base">Package Includes:</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={14} className={`${pkg.checkColor} mr-1 md:mr-2 mt-0.5 md:mt-1 flex-shrink-0`} />
                          <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.freeOffers.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2 text-sm md:text-base">Free Offers (Conditions Apply):</h4>
                      <ul className="space-y-1 md:space-y-2">
                        {pkg.freeOffers.map((offer, index) => (
                          <li key={index} className="flex items-start">
                            <Check
                              size={14}
                              className={`${pkg.checkColor} mr-1 md:mr-2 mt-0.5 md:mt-1 flex-shrink-0`}
                            />
                            <span className="text-xs md:text-sm text-gray-600">{offer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
                <Button
                  asChild
                  className={`w-full text-white bg-gradient-to-r ${pkg.color} hover:${pkg.hoverColor} transition-all duration-300 text-xs md:text-sm py-1 md:py-2 h-auto modern-button`}
                >
                  <a href="#booking">Book This Package</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
