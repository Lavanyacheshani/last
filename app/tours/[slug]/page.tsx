import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeedbackButton } from "@/components/feedback-button"
import { BackButton } from "@/components/back-button"
import { notFound } from "next/navigation"

// This would typically come from a database or API
// For now, we'll just include a few examples
const activitiesData = {
  kitulgala: {
    name: "Kitulgala",
    image: "/placeholder.svg?height=800&width=1600&text=Kitulgala",
    description: "Premier white water rafting destination with thrilling rapids and jungle surroundings.",
    fullDescription: `Kitulgala is a small town located in the west of Sri Lanka, nestled amidst thick rainforest on the wet zone of the country. It's primarily known as Sri Lanka's premier location for white water rafting on the Kelani River, which offers rapids ranging from Grade 2 to Grade 4, suitable for both beginners and experienced rafters.

    The area gained international fame as the filming location for the Academy Award-winning movie "The Bridge on the River Kwai" (1957), although the actual bridge constructed for the film was destroyed in the climactic explosion scene.

    Beyond rafting, Kitulgala offers a range of adventure activities including jungle hikes, waterfall abseiling, natural rock pool swimming, and bird watching in the surrounding rainforest. The area is also known for its biodiversity, with numerous endemic bird species and lush vegetation.`,
    highlights: [
      "White Water Rafting - Experience thrilling rapids on the Kelani River",
      "Jungle Trekking - Explore the dense rainforest with experienced guides",
      "Waterfall Abseiling - Descend down cascading waterfalls with proper equipment",
      "Natural Rock Pools - Swim in refreshing natural pools formed by the river",
      "Bird Watching - Spot endemic species in this biodiversity hotspot",
    ],
    activities: [
      "White water rafting on Grade 2-4 rapids",
      "Jungle trekking through dense rainforest",
      "Waterfall abseiling and canyoning",
      "Swimming in natural rock pools",
      "Visiting the 'Bridge on the River Kwai' filming location",
      "Bird watching for endemic species",
      "Camping in the jungle",
    ],
    bestTime:
      "The rafting season runs year-round, but the best time is from May to December when water levels are optimal. January to March typically has lower water levels but is still suitable for beginners.",
    tips: [
      "Wear quick-drying clothes and secure footwear for rafting",
      "Bring a change of clothes as you will get wet",
      "Apply waterproof sunscreen",
      "Listen carefully to safety instructions from guides",
      "Consider staying overnight to experience more activities",
      "Book rafting trips in advance during peak season",
    ],
    category: "water",
  },
  
  "madu-ganga": {
    name: "Madu Ganga",
    image: "/placeholder.svg?height=800&width=1600&text=Madu+Ganga",
    description: "Scenic river safari through mangroves with rich biodiversity and island visits.",
    fullDescription: `Madu Ganga is a complex coastal ecosystem of mangroves and islands that exists in perfect balance with human activity. This river estuary spans 915 hectares and is home to 64 islands, creating a breathtaking labyrinth of waterways to explore.

    The area has been designated as a Ramsar Wetland due to its significant biodiversity, hosting over 300 species of plants and 248 species of vertebrate animals. The mangrove ecosystem plays a crucial role in coastal erosion protection and acts as a natural fish nursery.

    A boat safari through Madu Ganga offers visitors the chance to witness traditional fishing methods, visit cinnamon plantations, explore Buddhist temples on islands, and observe the diverse wildlife that calls this ecosystem home. The area is particularly known for its bird watching opportunities, with numerous endemic and migratory species.`,
    highlights: [
      "Boat Safari - Cruise through narrow mangrove tunnels and open waterways",
      "Cinnamon Island - Visit a working cinnamon plantation and see traditional processing",
      "Fish Therapy - Experience natural fish spa treatments in designated areas",
      "Buddhist Temple - Visit the ancient temple located on one of the islands",
      "Biodiversity - Observe various bird species, monitor lizards, and other wildlife",
    ],
    activities: [
      "Boat safari through mangrove forests",
      "Visit to Cinnamon Island to see traditional cinnamon peeling",
      "Fish therapy (natural fish spa)",
      "Bird watching for endemic and migratory species",
      "Visit to local cottage industries on islands",
      "Photography of unique ecosystems",
      "Swimming in designated areas",
    ],
    bestTime:
      "The area can be visited year-round, but the dry season (December to April) offers more comfortable conditions with less rainfall.",
    tips: [
      "Early morning or late afternoon boat rides offer the best wildlife viewing opportunities",
      "Bring insect repellent, especially during dawn and dusk hours",
      "Wear a hat and sunscreen as boat rides provide limited shade",
      "Negotiate boat prices in advance or book through a reputable tour operator",
      "Consider a longer boat ride (2+ hours) to explore more remote areas",
      "Bring small denominations for tipping guides and purchasing local crafts",
    ],
    category: "water",
  },
  "kalu-ganga": {
    name: "Kalu Ganga",
    image: "/placeholder.svg?height=800&width=1600&text=Madu+Ganga",
    description: "Scenic river safari through mangroves with rich biodiversity and island visits.",
    fullDescription: `Madu Ganga is a complex coastal ecosystem of mangroves and islands that exists in perfect balance with human activity. This river estuary spans 915 hectares and is home to 64 islands, creating a breathtaking labyrinth of waterways to explore.

    The area has been designated as a Ramsar Wetland due to its significant biodiversity, hosting over 300 species of plants and 248 species of vertebrate animals. The mangrove ecosystem plays a crucial role in coastal erosion protection and acts as a natural fish nursery.

    A boat safari through Madu Ganga offers visitors the chance to witness traditional fishing methods, visit cinnamon plantations, explore Buddhist temples on islands, and observe the diverse wildlife that calls this ecosystem home. The area is particularly known for its bird watching opportunities, with numerous endemic and migratory species.`,
    highlights: [
      "Boat Safari - Cruise through narrow mangrove tunnels and open waterways",
      "Cinnamon Island - Visit a working cinnamon plantation and see traditional processing",
      "Fish Therapy - Experience natural fish spa treatments in designated areas",
      "Buddhist Temple - Visit the ancient temple located on one of the islands",
      "Biodiversity - Observe various bird species, monitor lizards, and other wildlife",
    ],
    activities: [
      "Boat safari through mangrove forests",
      "Visit to Cinnamon Island to see traditional cinnamon peeling",
      "Fish therapy (natural fish spa)",
      "Bird watching for endemic and migratory species",
      "Visit to local cottage industries on islands",
      "Photography of unique ecosystems",
      "Swimming in designated areas",
    ],
    bestTime:
      "The area can be visited year-round, but the dry season (December to April) offers more comfortable conditions with less rainfall.",
    tips: [
      "Early morning or late afternoon boat rides offer the best wildlife viewing opportunities",
      "Bring insect repellent, especially during dawn and dusk hours",
      "Wear a hat and sunscreen as boat rides provide limited shade",
      "Negotiate boat prices in advance or book through a reputable tour operator",
      "Consider a longer boat ride (2+ hours) to explore more remote areas",
      "Bring small denominations for tipping guides and purchasing local crafts",
    ],
    category: "water",
  },
  "arugam-bay": {
    name: "Arugam Bay",
    image: "/placeholder.svg?height=800&width=1600&text=Arugam+Bay",
    description: "World-renowned surfing destination with a laid-back atmosphere and beautiful beaches.",
    fullDescription: `Arugam Bay is a crescent-shaped beach and bay located on Sri Lanka's southeast coast, renowned as one of the best surfing spots in the world. This once-sleepy fishing village has transformed into a popular destination for surfers and travelers seeking a laid-back beach atmosphere.

    Despite its growing popularity, Arugam Bay maintains a relaxed vibe with its single main road lined with restaurants, surf shops, and guesthouses. The area is not just about surfing; it's surrounded by stunning landscapes including lagoons, jungle, and rice fields, and is close to several national parks known for wildlife.

    The main surfing season runs from April to October when the waves are at their best, attracting surfers from around the world to test their skills on the famous right-hand point break. The bay offers several surf points suitable for different skill levels, from beginners to professionals.`,
    highlights: [
      "Main Point - World-class right-hand point break for surfing",
      "Pottuvil Lagoon - Beautiful lagoon with rich birdlife",
      "Elephant Rock - Beach and surf point with occasional elephant sightings",
      "Whisky Point - Popular surf break suitable for beginners",
      "Kumana National Park - Wildlife sanctuary with leopards, elephants, and crocodiles",
    ],
    activities: [
      "Surfing at various point breaks for all skill levels",
      "Lagoon safari to spot crocodiles, birds, and elephants",
      "Visit to nearby Kumana National Park for wildlife viewing",
      "Yoga classes at beachside studios",
      "Exploring nearby ancient temples and historical sites",
      "Beach volleyball and other beach activities",
      "Sampling fresh seafood at local restaurants",
    ],
    bestTime:
      "The main surfing season runs from April to October, with the best waves typically from June to August. The off-season (November to March) offers a quieter experience with fewer tourists.",
    tips: [
      "Rent a surfboard locally rather than bringing your own",
      "Take surf lessons if you're a beginner - many qualified instructors are available",
      "Respect local customs and dress modestly when away from the beach",
      "Book accommodation in advance during peak season (July-August)",
      "Bring cash as ATMs can be unreliable",
      "Rent a motorbike or tuk-tuk to explore the surrounding areas",
    ],
    category: "beach",
  },
}

export default function ActivityPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const activity = activitiesData[slug as keyof typeof activitiesData]

  if (!activity) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={activity.image || "/placeholder.svg"}
            alt={activity.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{activity.name}</h1>
            <p className="text-xl md:text-2xl max-w-3xl drop-shadow-md">{activity.description}</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-6">
          <BackButton />
        </div>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About {activity.name}</h2>
            <div className="prose prose-emerald max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{activity.fullDescription}</p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Highlights</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {activity.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-maroon-100 text-maroon-700 rounded-full mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Things to Do in {activity.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activity.activities.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-maroon-100 text-maroon-700 rounded-full mr-3">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Time to Visit</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed">{activity.bestTime}</p>
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Travel Tips</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {activity.tips.map((tip, index) => (
                <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-maroon-100 text-maroon-700 rounded-full mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Book Now Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience {activity.name}?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let us help you plan the perfect trip to {activity.name} and other amazing destinations in Sri Lanka.
            </p>
            <Button asChild size="lg" className="bg-maroon-700 hover:bg-maroon-800">
              <a href="/#booking">Book Your Tour Now</a>
            </Button>
          </div>
        </section>
      </main>
      <FeedbackButton />
    </div>
  )
}
