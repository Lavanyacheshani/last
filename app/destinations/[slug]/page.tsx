import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { FeedbackButton } from "@/components/feedback-button"
import { BackButton } from "@/components/back-button"

// This would typically come from a database or API
const destinationsData = {
  galle: {
    name: "Galle",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Historic coastal city with a magnificent Dutch fort, colonial architecture, and beautiful beaches.",
    fullDescription: `Galle is a jewel of a city located on the southwestern coast of Sri Lanka. Its crown jewel is the UNESCO World Heritage-listed Galle Fort, built by the Portuguese in the 16th century and later extensively fortified by the Dutch in the 17th century. Walking through the fort's narrow streets feels like stepping back in time, with well-preserved colonial buildings, churches, and mansions lining the cobblestone streets.

    The city perfectly blends its rich colonial history with modern boutique shops, cafes, and hotels. Beyond the fort, Galle offers beautiful beaches, vibrant markets, and a gateway to explore the southern coast of Sri Lanka. The city is particularly known for its artistic community, with many galleries and craft shops showcasing local talent.`,
    highlights: [
      "Galle Fort - UNESCO World Heritage site with colonial architecture",
      "Dutch Reformed Church - Historic church dating back to 1755",
      "Maritime Museum - Showcasing the maritime history of Galle",
      "Lighthouse and Flag Rock - Iconic landmarks with stunning ocean views",
      "Unawatuna Beach - Beautiful beach just a short drive from Galle",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Walk along the ramparts of Galle Fort at sunset",
      "Shop for handmade lace, gems, and crafts in the fort's boutiques",
      "Visit the Historical Mansion Museum to see antiques and colonial artifacts",
      "Take a cooking class to learn traditional Sri Lankan cuisine",
      "Enjoy fresh seafood at restaurants overlooking the Indian Ocean",
      "Go whale watching (in season) from nearby Mirissa",
    ],
  },
  ella: {
    name: "Ella",
    image: "/placeholder.svg?height=800&width=1600",
    description: "A scenic highland escape with famous hikes like Ella Rock and Little Adam's Peak.",
    fullDescription: `Ella is a small, laid-back mountain town nestled in the misty highlands of Sri Lanka's Hill Country. Surrounded by lush green mountains, tea plantations, and cascading waterfalls, Ella has become a favorite destination for travelers seeking natural beauty and outdoor adventures.

    The town offers breathtaking views, especially from the famous Ella Gap, which provides a spectacular vista through the mountains all the way to the southern coast. Despite its growing popularity, Ella maintains a relaxed atmosphere with its small restaurants, cafes, and guesthouses lining the main street.`,
    highlights: [
      "Nine Arch Bridge - Iconic colonial-era railway bridge",
      "Ella Rock - Challenging hike with panoramic views",
      "Little Adam's Peak - Easier hike with stunning vistas",
      "Ravana Falls - Beautiful waterfall with mythological significance",
      "Tea Plantations - Lush green estates producing Ceylon tea",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Take the scenic train journey from Ella to Kandy",
      "Hike to Ella Rock for sunrise views",
      "Visit a tea factory to learn about tea production",
      "Explore the Ravana Cave, associated with the Ramayana legend",
      "Try local cuisine at one of the many restaurants in town",
      "Take a cooking class to learn Sri Lankan recipes",
    ],
  },
  kandy: {
    name: "Kandy",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Cultural capital of Sri Lanka, home to the Temple of the Tooth and scenic lake views.",
    fullDescription: `Kandy, the cultural capital of Sri Lanka, is a picturesque city nestled among the hills of the central province. As the last capital of the ancient kings' era, Kandy holds a significant place in Sri Lankan history and culture. The city is built around a peaceful lake and surrounded by hills, creating a scenic urban landscape.

    At the heart of Kandy's cultural significance is the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), which houses the relic of the tooth of Buddha. This makes Kandy a major pilgrimage site for Buddhists worldwide. The city is also famous for the Esala Perahera, one of Asia's most spectacular festivals featuring elaborately decorated elephants, dancers, and musicians.`,
    highlights: [
      "Temple of the Sacred Tooth Relic - Sri Lanka's most important Buddhist shrine",
      "Kandy Lake - Artificial lake built in 1807 by the last Sinhalese king",
      "Royal Botanical Gardens at Peradeniya - 147-acre garden with over 4,000 species",
      "Bahiravokanda Vihara Buddha Statue - Giant Buddha overlooking the city",
      "Esala Perahera - Annual festival featuring processions of decorated elephants (July/August)",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Attend a traditional Kandyan dance performance",
      "Visit the Ceylon Tea Museum to learn about tea history",
      "Explore the three temple loops around Kandy",
      "Shop for gems, crafts, and batik at the Kandy City Centre",
      "Take a stroll around Kandy Lake",
      "Visit nearby spice gardens to learn about ayurvedic herbs",
    ],
  },
  "nuwara-eliya": {
    name: "Nuwara Eliya",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Known as 'Little England', featuring tea plantations, cool climate, and beautiful gardens.",
    fullDescription: `Nuwara Eliya, often referred to as 'Little England', is a charming city nestled in the heart of Sri Lanka's hill country. Located at an elevation of 1,868 meters (6,128 feet) above sea level, it enjoys a cool, crisp climate that stands in stark contrast to the tropical warmth of the rest of the island.

    The city was founded by British colonists in the 19th century as a retreat from the coastal heat, and this colonial influence is still evident in its architecture, gardens, and recreational activities. Tudor-style country cottages, well-manicured lawns, and a golf course give Nuwara Eliya its distinctive character.`,
    highlights: [
      "Tea Plantations - Vast estates producing some of the world's finest Ceylon tea",
      "Gregory Lake - Artificial lake offering boating and water sports",
      "Victoria Park - Beautiful English-style garden with rare bird species",
      "Horton Plains National Park - Home to World's End, a sheer cliff with spectacular views",
      "Hakgala Botanical Gardens - One of the finest botanical gardens in Asia",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Visit a tea factory to learn about tea production and enjoy tea tasting",
      "Play a round of golf at the Nuwara Eliya Golf Club, one of Asia's oldest",
      "Take a boat ride on Gregory Lake",
      "Hike to World's End in Horton Plains National Park",
      "Visit the Seetha Amman Temple, associated with the Ramayana legend",
      "Enjoy strawberry picking at local farms",
    ],
  },
  colombo: {
    name: "Colombo",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Sri Lanka's vibrant capital with a mix of modern life, colonial buildings, and shopping.",
    fullDescription: `Colombo, the commercial capital and largest city of Sri Lanka, is a vibrant metropolis that blends colonial heritage with modern urban life. Located on the west coast, this port city has been a strategic trading post for centuries, attracting Portuguese, Dutch, and British colonizers whose influences are still visible in the city's architecture and culture.

    Today's Colombo is a fascinating mix of old and new - historic colonial buildings stand alongside skyscrapers, luxury hotels, and shopping malls. The city is constantly evolving, with new developments transforming the urban landscape while still preserving its unique character and heritage.`,
    highlights: [
      "Galle Face Green - Oceanfront urban park perfect for evening strolls",
      "Gangaramaya Temple - Important Buddhist temple with a museum",
      "National Museum - Sri Lanka's largest museum with important artifacts",
      "Independence Memorial Hall - Monument celebrating independence from British rule",
      "Pettah Market - Bustling open-air bazaar with countless shops",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Shop for designer brands and local crafts at Colombo's modern malls",
      "Take a tuk-tuk tour of the city's colonial architecture",
      "Sample Sri Lankan cuisine at the many restaurants and street food stalls",
      "Visit the Dutch Period Museum to learn about colonial history",
      "Enjoy the nightlife in the growing number of rooftop bars and clubs",
      "Take a walk along Viharamahadevi Park, the city's largest green space",
    ],
  },
  dambulla: {
    name: "Dambulla",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Famous for its magnificent cave temple complex and golden Buddha statue.",
    fullDescription: `Dambulla is a town located in the Matale District of Sri Lanka's Central Province, known primarily for its remarkable cave temple complex. The Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is a UNESCO World Heritage Site and the best-preserved cave temple complex in Sri Lanka.

    The town serves as a hub for exploring Sri Lanka's Cultural Triangle, with easy access to other important historical sites like Sigiriya, Polonnaruwa, and Anuradhapura. While the cave temples are the main attraction, Dambulla also offers a glimpse into rural Sri Lankan life with its bustling produce market, which is the largest wholesale fruit and vegetable market in the country.`,
    highlights: [
      "Dambulla Cave Temple - Ancient cave complex with Buddhist murals and statues",
      "Golden Buddha Statue - Massive golden Buddha at the entrance to the cave temple",
      "Rangiri Dambulla International Stadium - Unique cricket stadium built in just 167 days",
      "Ibbankatuwa Megalithic Tombs - Ancient burial site dating back to the Iron Age",
      "Dambulla Dedicated Economic Centre - Sri Lanka's largest wholesale market",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Explore the five caves of the Dambulla Cave Temple with their 153 Buddha statues",
      "Visit the nearby Sigiriya Rock Fortress, just a short drive away",
      "Shop for fresh tropical fruits at the wholesale market",
      "Take a safari in Minneriya or Kaudulla National Parks to see wild elephants",
      "Visit the ancient city of Polonnaruwa as a day trip",
      "Experience rural Sri Lankan life in the surrounding villages",
    ],
  },
  anuradhapura: {
    name: "Anuradhapura",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Ancient city with well-preserved ruins of an ancient Sinhalese civilization.",
    fullDescription: `Anuradhapura, one of the ancient capitals of Sri Lanka, is a sacred city that served as the center of Theravada Buddhism for centuries. Founded in the 4th century BCE, it was the capital of the Anuradhapura Kingdom until the beginning of the 11th century CE. Today, this UNESCO World Heritage site contains a vast complex of archaeological and architectural wonders.

    The city's sacred Bodhi Tree, the Sri Maha Bodhi, is said to have grown from a cutting of the original tree under which Buddha attained enlightenment, making it the oldest historically documented tree in the world. Around this sacred tree, kings built magnificent stupas, monasteries, and palaces, many of which remain in remarkable condition despite their age.`,
    highlights: [
      "Sri Maha Bodhi - Sacred fig tree said to be grown from a cutting of Buddha's original Bodhi tree",
      "Ruwanwelisaya - Massive white stupa built in the 2nd century BCE",
      "Jetavanaramaya - Once the tallest stupa in the ancient world",
      "Thuparamaya - The first stupa built in Sri Lanka after the introduction of Buddhism",
      "Lovamahapaya (Brazen Palace) - Ancient monastic complex with 1,600 stone pillars",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Cycle around the ancient city to visit the various monuments",
      "Witness evening prayers at the Sri Maha Bodhi",
      "Visit Isurumuniya Temple with its famous lovers' sculpture",
      "Explore the Twin Ponds (Kuttam Pokuna), an engineering marvel of ancient times",
      "Visit the Archaeological Museum to understand the city's history",
      "Take a day trip to nearby Mihintale, the cradle of Buddhism in Sri Lanka",
    ],
  },
  polonnaruwa: {
    name: "Polonnaruwa",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Medieval capital with impressive stone temples, ancient structures, and the famous Gal Vihara.",
    fullDescription: `Polonnaruwa was the second capital of Sri Lanka after the destruction of Anuradhapura in 993 CE. It comprises the monumental ruins of the fabulous garden-city created by King Parakramabahu I in the 12th century. The ancient city, declared a UNESCO World Heritage Site, stands as a testament to the discipline and greatness of the kingdom's first rulers.

    Polonnaruwa showcases impressive stone temples, enormous Buddha statues, ancient buildings, and innovative irrigation systems including the man-made Parakrama Samudra, a vast reservoir covering 2,500 hectares. The city represents the pinnacle of ancient Sri Lankan architecture and engineering.`,
    highlights: [
      "Gal Vihara - Rock temple with four magnificent Buddha statues carved from a single granite wall",
      "Royal Palace - Impressive ruins of King Parakramabahu's royal residence",
      "Sacred Quadrangle - Compact group of fascinating ancient structures",
      "Rankoth Vehera - Massive stupa modeled after Anuradhapura's Jetavanaramaya",
      "Parakrama Samudra - Ancient man-made reservoir still in use today",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Rent a bicycle to explore the sprawling ancient city",
      "Visit the Archaeological Museum to understand the site's history",
      "Marvel at the advanced irrigation systems created over 800 years ago",
      "Watch for monkeys, especially around the Gal Vihara",
      "Take a boat ride on Parakrama Samudra at sunset",
      "Visit nearby Minneriya National Park for elephant safaris",
    ],
  },
  trincomalee: {
    name: "Trincomalee",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Port city with pristine beaches, natural harbors, and the sacred Koneswaram temple.",
    fullDescription: `Trincomalee (often called Trinco) is a port city on the northeast coast of Sri Lanka, known for its deep-water natural harbor—one of the finest and largest natural harbors in the world. With its strategic location, the harbor has been coveted by various colonial powers throughout history, including the Portuguese, Dutch, French, and British.

    Today, Trincomalee is celebrated for its pristine beaches, clear waters, and marine life. The city and surrounding areas offer a mix of cultural attractions, natural beauty, and water activities, making it a growing tourist destination after years of being inaccessible due to the civil war.`,
    highlights: [
      "Koneswaram Temple - Ancient Hindu temple perched on Swami Rock",
      "Fort Frederick - Colonial-era fort built by the Portuguese",
      "Nilaveli Beach - Pristine white sand beach with crystal clear waters",
      "Pigeon Island National Park - Marine national park ideal for snorkeling",
      "Trincomalee Harbor - One of the world's finest natural harbors",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Snorkel or dive at Pigeon Island to see coral reefs and reef sharks",
      "Go whale watching (blue whales and sperm whales are common in season)",
      "Visit the hot springs at Kanniya",
      "Explore the World War II cemetery",
      "Relax on the beautiful beaches of Uppuveli and Nilaveli",
      "Take a boat trip to see dolphins in the natural harbor",
    ],
  },
  matara: {
    name: "Matara",
    image: "/placeholder.svg?height=800&width=1600",
    description: "Southern coastal city with Dutch colonial heritage, beaches, and the famous Paravi Duwa temple.",
    fullDescription: `Matara is a bustling coastal city located at the southernmost tip of Sri Lanka. With a rich history dating back to ancient times, the city flourished during the Dutch colonial period, and many buildings from this era still stand today. Matara serves as an important commercial hub for the Southern Province.

    The city is characterized by its blend of colonial architecture, Buddhist temples, and beautiful beaches. The Nilwala River flows through Matara before meeting the Indian Ocean, creating a picturesque landscape. While less touristy than nearby Galle or Mirissa, Matara offers an authentic glimpse into coastal Sri Lankan life.`,
    highlights: [
      "Paravi Duwa Temple - Buddhist temple on a tiny island connected by a bridge",
      "Star Fort - Well-preserved Dutch fort built in 1765",
      "Matara Fort - Older Portuguese-Dutch fort in the city center",
      "Polhena Beach - Protected beach with a coral reef, ideal for swimming",
      "Dondra Head Lighthouse - Sri Lanka's tallest lighthouse at the island's southernmost point",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Visit the Weherahena Temple with its massive seated Buddha statue",
      "Explore the Dutch colonial architecture in the old town",
      "Relax at Polhena Beach, known for its safe swimming conditions",
      "Take a day trip to nearby Mirissa for whale watching",
      "Visit the Matara markets to experience local commerce",
      "Explore Dondra Head, the southernmost point of Sri Lanka",
    ],
  },
  "arugam-bay": {
    name: "Arugam Bay",
    image: "/placeholder.svg?height=800&width=1600",
    description: "World-renowned surfing destination with a laid-back atmosphere and beautiful beaches.",
    fullDescription: `Arugam Bay is a crescent-shaped beach and bay located on Sri Lanka's southeast coast, renowned as one of the best surfing spots in the world. This once-sleepy fishing village has transformed into a popular destination for surfers and travelers seeking a laid-back beach atmosphere.

    Despite its growing popularity, Arugam Bay maintains a relaxed vibe with its single main road lined with restaurants, surf shops, and guesthouses. The area is not just about surfing; it's surrounded by stunning landscapes including lagoons, jungle, and rice fields, and is close to several national parks known for wildlife.`,
    highlights: [
      "Main Point - World-class right-hand point break for surfing",
      "Pottuvil Lagoon - Beautiful lagoon with rich birdlife",
      "Elephant Rock - Beach and surf point with occasional elephant sightings",
      "Whisky Point - Popular surf break suitable for beginners",
      "Kumana National Park - Wildlife sanctuary with leopards, elephants, and crocodiles",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    thingsToDo: [
      "Surf at one of the many point breaks suitable for all skill levels",
      "Take a lagoon safari to spot crocodiles, birds, and elephants",
      "Visit nearby Kudumbigala Sanctuary for hiking and panoramic views",
      "Explore Panama Tank, an ancient reservoir with abundant birdlife",
      "Take a cooking class to learn traditional Sri Lankan cuisine",
      "Join a yoga class at one of the many beachside studios",
    ],
  },
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const destination = destinationsData[slug as keyof typeof destinationsData]

  if (!destination) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{destination.name}</h1>
            <p className="text-xl md:text-2xl max-w-3xl drop-shadow-md">{destination.description}</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-6">
          <BackButton />
        </div>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About {destination.name}</h2>
            <div className="prose prose-emerald max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{destination.fullDescription}</p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Highlights</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {destination.highlights.map((highlight, index) => (
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

        {/* Gallery Section */}
        <GallerySection images={destination.gallery} name={destination.name} />

        {/* Things to Do Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Things to Do in {destination.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destination.thingsToDo.map((activity, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-maroon-100 text-maroon-700 rounded-full mr-3">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{activity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Book Now Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience {destination.name}?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let us help you plan the perfect trip to {destination.name} and other amazing destinations in Sri Lanka.
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

// Gallery Section Component with image slider
function GallerySection({ images, name }: { images: string[]; name: string }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{name} Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name} - Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
