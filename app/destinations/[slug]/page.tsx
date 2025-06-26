"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"

import {
  Calendar,
  Camera,
  Compass,
  Utensils,
  Mountain,
  Waves,
  Building,
  Landmark,
  Palmtree,
  Leaf,
  Fish,
  ShoppingBag,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/skeleton"

// This would typically come from a database or API
const destinationsData = {
  galle: {
    name: "Galle",
    image: "/des/gh.jpg",
    themeBg: "beach",
    description: "Historic coastal city with a magnificent Dutch fort, colonial architecture, and beautiful beaches.",
    fullDescription: `Galle is a jewel of a city located on the southwestern coast of Sri Lanka. Its crown jewel is the UNESCO World Heritage-listed Galle Fort, built by the Portuguese in the 16th century and later extensively fortified by the Dutch in the 17th century. Walking through the fort's narrow streets feels like stepping back in time, with well-preserved colonial buildings, churches, and mansions lining the cobblestone streets.

    The city perfectly blends its rich colonial history with modern boutique shops, cafes, and hotels. Beyond the fort, Galle offers beautiful beaches, vibrant markets, and a gateway to explore the southern coast of Sri Lanka. The city is particularly known for its artistic community, with many galleries and craft shops showcasing local talent.`,
    highlights: [
      {
        title: "Galle Fort",
        description: "UNESCO World Heritage site with colonial architecture",
        icon: Building,
      },
      {
        title: "Dutch Reformed Church",
        description: "Historic church dating back to 1755",
        icon: Landmark,
      },
      {
        title: "Maritime Museum",
        description: "Showcasing the maritime history of Galle",
        icon: Compass,
      },
      {
        title: "Lighthouse and Flag Rock",
        description: "Iconic landmarks with stunning ocean views",
        icon: Landmark,
      },
      {
        title: "Unawatuna Beach",
        description: "Beautiful beach just a short drive from Galle",
        icon: Palmtree,
      },
    ],
    gallery: [
    "/des/g11.jpg",
    "/des/g12.jpg",
    "/des/g13.jpg",
    "/des/g14.jpg",    ],
    thingsToDo: [
      {
        title: "Walk along the ramparts of Galle Fort at sunset",
        description:
          "Experience breathtaking views of the ocean and city as the sun sets over the historic fort walls.",
        image: "/des/g1.jpg",
      },
      {
        title: "Shop for handmade lace, gems, and crafts",
        description: "Explore the boutiques within the fort to find unique souvenirs and locally made crafts.",
        image: "/des/g2.jpg",
      },
      {
        title: "Visit the Historical Mansion Museum",
        description: "See antiques and colonial artifacts that showcase the rich history of Galle.",
        image: "/des/g3.jpg",
      },
      {
        title: "Take a cooking class to learn Sri Lankan cuisine",
        description: "Learn to prepare authentic Sri Lankan dishes with local ingredients and traditional methods.",
        image: "/des/g4.jpg",
      },
      {
        title: "Enjoy fresh seafood at oceanfront restaurants",
        description: "Savor delicious seafood while enjoying views of the Indian Ocean.",
        image: "/des/g5.jpg",
      },
      {
        title: "Go whale watching from nearby Mirissa",
        description: "Take a boat tour to spot blue whales, sperm whales, and dolphins in their natural habitat.",
        image: "/des/g6.jpg",
      },
    ],
    popularActivities: [
      "Historical Tours",
      "Beach Activities",
      "Shopping",
      "Cultural Experiences",
      "Photography",
      "Food Tours",
    ],
  },
  ella: {
    name: "Ella",
    image: "/des/e.jpg",
    themeBg: "mountain",
    description: "A scenic highland escape with famous hikes like Ella Rock and Little Adam's Peak.",
    fullDescription: `Ella is a small, laid-back mountain town nestled in the misty highlands of Sri Lanka's Hill Country. Surrounded by lush green mountains, tea plantations, and cascading waterfalls, Ella has become a favorite destination for travelers seeking natural beauty and outdoor adventures.

    The town offers breathtaking views, especially from the famous Ella Gap, which provides a spectacular vista through the mountains all the way to the southern coast. Despite its growing popularity, Ella maintains a relaxed atmosphere with its small restaurants, cafes, and guesthouses lining the main street.`,
    highlights: [
      {
        title: "Nine Arch Bridge",
        description: "Iconic colonial-era railway bridge",
        icon: Building,
      },
      {
        title: "Ella Rock",
        description: "Challenging hike with panoramic views",
        icon: Mountain,
      },
      {
        title: "Little Adam's Peak",
        description: "Easier hike with stunning vistas",
        icon: Mountain,
      },
      {
        title: "Ravana Falls",
        description: "Beautiful waterfall with mythological significance",
        icon: Waves,
      },
      {
        title: "Tea Plantations",
        description: "Lush green estates producing Ceylon tea",
        icon: Utensils,
      },
    ],
    gallery: [
      "/des/eg1.jpg",
      "/des/eg2.png",
      "/des/eg3.jpg",
      "/des/eg4.jpg",
    ],
    thingsToDo: [
      {
        title: "Take the scenic train journey from Ella to Kandy",
        description: "Experience one of the world's most beautiful train rides through tea plantations and mountains.",
        image: "/des/e1.jpg",
      },
      {
        title: "Hike to Ella Rock for sunrise views",
        description: "Challenge yourself with this 4-hour hike to witness a spectacular sunrise over the mountains.",
        image: "/des/e2.jpg",
      },
      {
        title: "Visit a tea factory to learn about tea production",
        description: "Discover the process of making Ceylon tea from plucking to processing and enjoy a tasting.",
        image: "/des/e3.jpg",
      },
      {
        title: "Explore the Ravana Cave",
        description: "Visit the cave associated with the Ramayana legend where Ravana is said to have hidden Sita.",
        image: "/des/e4.jpg",
      },
      {
        title: "Try local cuisine at restaurants in town",
        description: "Sample authentic Sri Lankan dishes at the many restaurants along Ella's main street.",
        image: "/des/e5.jpg",
      },
      {
        title: "Swing at the Famous Ella Swing",
        description: "Get your adrenaline pumping and capture stunning views as you swing over the lush hills of Ella.",
        image: "/des/e6.jpg", 
      },
      {
        title: "Fly the Flying Ravana Mega Zipline",
        description: "Soar over tea estates and forested hills on one of South Asia's longest and fastest ziplines.",
        image: "/des/e7.jpg", 
      },
    ],
    popularActivities: [
      "Hiking",
      "Train Journeys",
      "Tea Experiences",
      "Photography",
      "Nature Walks",
      "Waterfall Visits",
    ],
  },
  kandy: {
    name: "Kandy",
    image: "/des/kb.jpg",
    themeBg: "cultural",
    description: "Cultural capital of Sri Lanka, home to the Temple of the Tooth and scenic lake views.",
    fullDescription: `Kandy, the cultural capital of Sri Lanka, is a picturesque city nestled among the hills of the central province. As the last capital of the ancient kings' era, Kandy holds a significant place in Sri Lankan history and culture. The city is built around a peaceful lake and surrounded by hills, creating a scenic urban landscape.

    At the heart of Kandy's cultural significance is the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), which houses the relic of the tooth of Buddha. This makes Kandy a major pilgrimage site for Buddhists worldwide. The city is also famous for the Esala Perahera, one of Asia's most spectacular festivals featuring elaborately decorated elephants, dancers, and musicians.`,
    highlights: [
      {
        title: "Temple of the Sacred Tooth Relic",
        description: "Sri Lanka's most important Buddhist shrine",
        icon: Landmark,
      },
      {
        title: "Kandy Lake",
        description: "Artificial lake built in 1807 by the last Sinhalese king",
        icon: Waves,
      },
      {
        title: "Royal Botanical Gardens",
        description: "147-acre garden with over 4,000 species",
        icon: Palmtree,
      },
      {
        title: "Bahiravokanda Vihara Buddha Statue",
        description: "Giant Buddha overlooking the city",
        icon: Landmark,
      },
      {
        title: "Esala Perahera",
        description: "Annual festival featuring processions of decorated elephants",
        icon: Calendar,
      },
    ],
    gallery: [
      "/des/k11.jpg",
      "/des/k12.jpg",
      "/des/k13.jpg",
      "/des/k14.jpg",
    ],
    thingsToDo: [
      {
        title: "Visit the Temple of the Sacred Tooth Relic",
        description:
          "Explore Sri Lanka's most important Buddhist shrine, housing a tooth relic of the Buddha. Witness the elaborate rituals performed three times daily and admire the temple's ornate architecture and detailed carvings.",
        image: "/des/k1.jpg",
      },
      {
        title: "Stroll around Kandy Lake",
        description:
          "Take a leisurely walk around the artificial lake built in 1807 by the last Sinhalese king. Enjoy the peaceful atmosphere, watch water monitors and various bird species, and admire the central island that once served as the king's personal harem.",
        image: "/des/k2.jpg",
      },
      {
        title: "Attend a traditional Kandyan dance performance",
        description:
          "Experience the vibrant cultural heritage of Sri Lanka through a traditional dance show featuring colorful costumes, acrobatic moves, and fire-walking.",
        image: "/des/k3.JPG",
      },
      
      {
        title: "Explore the Royal Botanical Gardens",
        description:
          "Wander through one of Asia's most impressive botanical gardens in nearby Peradeniya, featuring over 4,000 plant species including a magnificent avenue of royal palms.",
        image: "/des/k4.jpg",
      },
      
    ],
    popularActivities: [
      "Temple Visits",
      "Cultural Shows",
      "Botanical Gardens",
      "Lake Walks",
      "Tea Experiences",
      "Gem Shopping",
    ],
  },
  "nuwara-eliya": {
    name: "Nuwara Eliya",
    image: "/des/ng.jpg",
    themeBg: "mountain",
    description: "Known as 'Little England', featuring tea plantations, cool climate, and beautiful gardens.",
    fullDescription: `Nuwara Eliya, often referred to as 'Little England', is a charming city nestled in the heart of Sri Lanka's hill country. Located at an elevation of 1,868 meters (6,128 feet) above sea level, it enjoys a cool, crisp climate that stands in stark contrast to the tropical warmth of the rest of the island.

    The city was founded by British colonists in the 19th century as a retreat from the coastal heat, and this colonial influence is still evident in its architecture, gardens, and recreational activities. Tudor-style country cottages, well-manicured lawns, and a golf course give Nuwara Eliya its distinctive character.`,
    highlights: [
      {
        title: "Tea Plantations",
        description: "Vast estates producing some of the world's finest Ceylon tea",
        icon: Utensils,
      },
      {
        title: "Gregory Lake",
        description: "Artificial lake offering boating and water sports",
        icon: Waves,
      },
      {
        title: "Victoria Park",
        description: "Beautiful English-style garden with rare bird species",
        icon: Palmtree,
      },
      {
        title: "Horton Plains National Park",
        description: "Home to World's End, a sheer cliff with spectacular views",
        icon: Mountain,
      },
      {
        title: "Hakgala Botanical Gardens",
        description: "One of the finest botanical gardens in Asia",
        icon: Palmtree,
      },
    ],
    gallery: [
      "/des/n11.jpg",
      "/des/n12.jpg",
      "/des/n13.jpg",
      "/des/n14.jpg",
    ],
    thingsToDo: [
      {
        title: "Visit a tea factory for production tour and tasting",
        description:
          "Learn about the process of making Ceylon tea from plucking to processing, and enjoy a tasting session of different varieties.",
        image: "/des/n1.jpg",
      },
      {
        title: "Play golf at the Nuwara Eliya Golf Club",
        description: "Enjoy a round of golf at one of Asia's oldest golf courses, established in 1889 by the British.",
        image: "/des/n2.jpg",
      },
      {
        title: "Take a boat ride on Gregory Lake",
        description:
          "Rent a swan-shaped paddle boat or motorboat to explore this scenic lake created by Governor Sir William Gregory in 1873.",
        image: "/des/n3.jpg",
      },
      
      {
        title: "Visit the Seetha Amman Temple",
        description:
          "Explore this colorful Hindu temple associated with the Ramayana legend, where Sita is believed to have been held captive.",
        image: "/des/n4.jpg",
      },
      {
        title: "Enjoy strawberry picking at local farms",
        description:
          "Visit one of the strawberry farms where you can pick your own fresh strawberries and enjoy strawberry-based treats.",
        image: "/des/n5.jpg",
      },
    ],
    popularActivities: ["Tea Tours", "Golf", "Hiking", "Boating", "Garden Visits", "Bird Watching"],
  },
  colombo: {
    name: "Colombo",
    image: "/des/cg.webp",
    themeBg: "city",
    description: "Sri Lanka's vibrant capital with a mix of modern life, colonial buildings, and shopping.",
    fullDescription: `Colombo, the commercial capital and largest city of Sri Lanka, is a vibrant metropolis that blends colonial heritage with modern urban development. As a port city with a rich trading history, Colombo has been influenced by various cultures including Portuguese, Dutch, and British colonizers, as well as Indian, Arab, and Malay traders.

    Today's Colombo is a fascinating mix of old and new, where historic colonial buildings stand alongside sleek skyscrapers. The city offers excellent shopping, from bustling local markets to high-end malls, diverse dining options featuring both international and Sri Lankan cuisine, and a growing arts and cultural scene.

    Despite being a busy urban center, Colombo maintains several green spaces and a beautiful oceanfront promenade, making it an enjoyable starting point for exploring the rest of Sri Lanka.`,
    highlights: [
      {
        title: "Galle Face Green",
        description: "Oceanfront urban park perfect for evening strolls",
        icon: Palmtree,
      },
      {
        title: "Gangaramaya Temple",
        description: "Important Buddhist temple with a museum",
        icon: Landmark,
      },
      {
        title: "National Museum",
        description: "Sri Lanka's largest museum with important artifacts",
        icon: Building,
      },
      {
        title: "Independence Memorial Hall",
        description: "Monument celebrating independence from British rule",
        icon: Landmark,
      },
      {
        title: "Pettah Market",
        description: "Bustling open-air bazaar with countless shops",
        icon: ShoppingBag,
      },
    ],
    gallery: [
      "/des/c11.jpg",
      "/des/c12.webp",
      "/des/c13.jpg",
      "/des/c14.jpg",
    ],
    thingsToDo: [
      {
        title: "Stroll along Galle Face Green",
        description:
          "Enjoy the ocean breeze at this urban park stretching along the coastline. It's perfect for flying kites, sampling street food, or watching the sunset.",
        image: "/des/c1.jpg",
      },
      {
        title: "Visit Gangaramaya Temple",
        description:
          "Explore this eclectic Buddhist temple that combines Sri Lankan, Thai, Indian, and Chinese architecture. Don't miss the museum with its collection of artifacts.",
        image: "/des/c2.jpg",
      },
      {
        title: "Shop at Pettah Market",
        description:
          "Experience the sensory overload of Colombo's main market district. Each street specializes in different goods, from textiles and electronics to spices and jewelry.",
        image: "/des/c3.jpg",
      },
      {
        title: "Explore the National Museum",
        description:
          "Discover Sri Lanka's cultural and natural heritage at the country's largest museum, housed in a stunning colonial-era building.",
        image: "/des/c4.jpg",
      },
    ],
    popularActivities: ["City Tours", "Shopping", "Cultural Visits", "Food Experiences", "Museum Visits", "Nightlife"],
  },
  dambulla: {
    name: "Dambulla",
    image: "/des/dg.jpg",
    themeBg: "cultural",
    description: "Famous for its magnificent cave temple complex and golden Buddha statue.",
    fullDescription: `Dambulla is a historic town located in the Central Province of Sri Lanka, renowned for its well-preserved cave temple complex dating back to the 1st century BCE. The Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is a UNESCO World Heritage Site and one of the most important Buddhist sites in Sri Lanka.

    The town serves as an excellent base for exploring Sri Lanka's Cultural Triangle, with easy access to other significant sites like Sigiriya, Polonnaruwa, and Anuradhapura. Beyond its cultural significance, Dambulla is also known for its wholesale vegetable market, which is the largest in Sri Lanka and a hub of agricultural commerce.

    The surrounding landscape features dramatic rock formations, lush forests, and agricultural fields, creating a picturesque setting that combines natural beauty with historical importance.`,
    highlights: [
      {
        title: "Dambulla Cave Temple",
        description: "Ancient cave complex with Buddhist murals and statues",
        icon: Landmark,
      },
      {
        title: "Golden Buddha Statue",
        description: "Massive golden Buddha at the entrance to the cave temple",
        icon: Landmark,
      },
      {
        title: "Rangiri Dambulla Stadium",
        description: "Unique cricket stadium built in just 167 days",
        icon: Building,
      },
      {
        title: "Ibbankatuwa Megalithic Tombs",
        description: "Ancient burial site dating back to the Iron Age",
        icon: Landmark,
      },
      {
        title: "Dambulla Wholesale Market",
        description: "Sri Lanka's largest wholesale market",
        icon: ShoppingBag,
      },
    ],
    gallery: [
      "/des/d11.jpeg",
      "/des/d12.jpg",
      "/des/d13.jpg",
      "/des/d14.jpg",
    ],
    thingsToDo: [
      {
        title: "Explore the Cave Temples",
        description:
          "Visit the five caves containing 153 Buddha statues, 3 statues of Sri Lankan kings, and 4 statues of gods and goddesses. The cave walls and ceilings are covered with Buddhist murals.",
        image: "/des/d1.webp",
      },
      {
        title: "Visit Sigiriya Rock Fortress",
        description:
          "Take a day trip to the nearby ancient rock fortress of Sigiriya, with its frescoes, water gardens, and panoramic views from the top.",
        image: "/des/d2.jpg",
      },
      {
        title: "Explore the Golden Temple",
        description:
          "Marvel at the massive golden Buddha statue and the modern temple complex at the base of the cave temple hill.",
        image: "/des/d3.jpg",
      },
      
      {
        title: "Take a safari at Minneriya National Park",
        description:
          "Witness 'The Gathering' - one of Asia's greatest wildlife spectacles where hundreds of elephants congregate around the Minneriya reservoir.",
        image: "/des/d4.jpg",
      },
      
    ],
    popularActivities: [
      "Temple Visits",
      "Cultural Tours",
      "Photography",
      "Day Trips",
      "Wildlife Safaris",
      "Market Visits",
    ],
  },
  "arugam-bay": {
    name: "Arugam Bay",
    image: "/des/ag.jpg",
    themeBg: "beach",
    description: "World-renowned surfing destination with a laid-back atmosphere and beautiful beaches.",
    fullDescription: `Arugam Bay is a crescent-shaped beach and bay located on Sri Lanka's southeast coast, renowned as one of the best surfing spots in the world. This once-sleepy fishing village has transformed into a popular destination for surfers and travelers seeking a laid-back beach atmosphere.

    Despite its growing popularity, Arugam Bay maintains a relaxed vibe with its single main road lined with restaurants, surf shops, and guesthouses. The area is not just about surfing; it's surrounded by stunning landscapes including lagoons, jungle, and rice fields, and is close to several national parks known for wildlife.`,
    highlights: [
      {
        title: "Main Point",
        description: "World-class right-hand point break for surfing",
        icon: Waves,
      },
      {
        title: "Pottuvil Lagoon",
        description: "Beautiful lagoon with rich birdlife",
        icon: Palmtree,
      },
      {
        title: "Elephant Rock",
        description: "Beach and surf point with occasional elephant sightings",
        icon: Mountain,
      },
      {
        title: "Whisky Point",
        description: "Popular surf break suitable for beginners",
        icon: Waves,
      },
      {
        title: "Kumana National Park",
        description: "Wildlife sanctuary with leopards, elephants, and crocodiles",
        icon: Palmtree,
      },
    ],
    gallery: [
      "/des/a11.jpg",
      "/des/a12.jpg",
      "/des/a13.webp",
      "/des/a14.jpg",
    ],
    thingsToDo: [
      {
        title: "Surf at one of the many point breaks",
        description:
          "Experience world-class surfing at various breaks suitable for all skill levels, from beginners to professionals.",
        image: "/des/a1.jpg",
      },
      {
        title: "Take a lagoon safari",
        description:
          "Explore the Pottuvil Lagoon by boat to spot crocodiles, birds, and occasionally elephants in their natural habitat.",
        image: "/des/a2.jpg",
      },
      {
        title: "Visit nearby Kumana National Park",
        description:
          "Take a safari to see leopards, elephants, crocodiles, and numerous bird species in this wildlife sanctuary.",
        image: "/des/a3.png",
      },
      {
        title: "Explore Panama Tank",
        description:
          "Visit this ancient reservoir with abundant birdlife and beautiful surroundings for photography and nature walks.",
        image: "/des/a4.jpg",
      },
     
    ],
    popularActivities: ["Surfing", "Wildlife Safaris", "Yoga", "Beach Activities", "Photography", "Lagoon Tours"],
  },
  anuradhapura: {
    name: "Anuradhapura",
    image: "/des/ang.jpg",
    themeBg: "cultural",
    description: "Ancient city with well-preserved ruins of an ancient Sinhalese civilization.",
    fullDescription: `Anuradhapura, one of the ancient capitals of Sri Lanka, is a sacred city that served as the center of Theravada Buddhism for centuries. Founded in the 5th century BCE, it flourished as the political and religious capital of the island for over 1,300 years before being abandoned after an invasion in 993 CE.

    Today, Anuradhapura is a UNESCO World Heritage Site and one of Sri Lanka's most significant archaeological sites. The sprawling complex contains a vast collection of architectural and archaeological wonders, including enormous dagobas (brick stupas), ancient pools, and monastic buildings.

    The city is also home to the sacred Sri Maha Bodhi tree, believed to be grown from a cutting of the original Bodhi tree under which Buddha attained enlightenment. This makes it the oldest historically documented tree in the world, planted in 288 BCE.`,
    highlights: [
      {
        title: "Sri Maha Bodhi",
        description: "Sacred fig tree, the oldest documented tree in the world",
        icon: Leaf,
      },
      {
        title: "Ruwanwelisaya",
        description: "Magnificent white stupa built in 140 B.C.",
        icon: Landmark,
      },
      {
        title: "Jetavanaramaya",
        description: "Once the tallest stupa in the ancient world",
        icon: Landmark,
      },
      {
        title: "Abhayagiri Monastery",
        description: "Ancient Buddhist monastery with impressive ruins",
        icon: Building,
      },
      {
        title: "Isurumuniya Temple",
        description: "Rock temple famous for its stone carvings",
        icon: Landmark,
      },
    ],
    gallery: [
      "/des/z1.jpg",
      "/des/z2.webp",
      "/des/z3.png",
      "/des/z4.png",
    ],
    thingsToDo: [
      {
        title: "Visit the Sacred Bodhi Tree",
        description:
          "Pay respects at the Sri Maha Bodhi, the oldest documented tree in the world, grown from a cutting of the original tree under which Buddha attained enlightenment.",
        image: "/des/an1.jpg",
      },
      {
        title: "Explore the ancient dagobas",
        description:
          "Marvel at massive brick stupas like Ruwanwelisaya, Jetavanaramaya, and Abhayagiri, which were among the largest structures in the ancient world.",
        image: "/des/an2.jpg",
      },
      {
        title: "Discover the Twin Ponds (Kuttam Pokuna)",
        description:
          "Admire the sophisticated ancient hydraulic engineering of these symmetrical bathing tanks with their elaborate stone carvings.",
        image: "/des/an3.jpeg",
      },
      {
        title: "Visit Isurumuniya Temple",
        description:
          "See the famous rock carvings including the 'Lovers' sculpture and the royal family, showcasing ancient Sinhalese stone art.",
        image: "/des/an4.jpg",
      },
      
    ],
    popularActivities: [
      "Historical Tours",
      "Religious Pilgrimages",
      "Archaeological Exploration",
      "Cycling",
      "Photography",
      "Meditation",
    ],
  },
  
  trincomalee: {
    name: "Trincomalee",
    image: "/des/tb.jpg",
    themeBg: "beach",
    description: "Port city with pristine beaches, natural harbors, and the sacred Koneswaram temple.",
    fullDescription: `Trincomalee (often called "Trinco") is a port city on the northeast coast of Sri Lanka, blessed with one of the world's finest natural harbors. With its strategic location, the harbor has been coveted by various colonial powers throughout history, including the Portuguese, Dutch, French, and British.

    Today, Trincomalee is known for its pristine beaches, particularly Uppuveli and Nilaveli, which feature powdery white sand and crystal-clear waters. The area is also renowned for its marine diversity, offering excellent opportunities for snorkeling, diving, and whale watching.

    Beyond its natural beauty, Trincomalee has significant cultural importance, with the clifftop Koneswaram temple being one of the most important Hindu shrines in Sri Lanka. The city's diverse heritage reflects its complex history, with influences from Tamil, Sinhalese, Muslim, and colonial cultures.`,
    highlights: [
      {
        title: "Koneswaram Temple",
        description: "Ancient clifftop Hindu temple with panoramic views",
        icon: Landmark,
      },
      {
        title: "Nilaveli Beach",
        description: "Pristine white sand beach with crystal clear waters",
        icon: Palmtree,
      },
      {
        title: "Pigeon Island",
        description: "Marine national park with coral reefs and diverse marine life",
        icon: Fish,
      },
      {
        title: "Fort Frederick",
        description: "Historic fort built by Portuguese and later occupied by Dutch and British",
        icon: Building,
      },
      {
        title: "Trincomalee Harbor",
        description: "One of the world's finest natural harbors",
        icon: Waves,
      },
    ],
    gallery: [
      "/des/t11.jpg",
      "/des/t12.webp",
      "/des/t13.jpg",
      "/des/t14.jpg",
    ],
    thingsToDo: [
      {
        title: "Snorkel or dive at Pigeon Island",
        description:
          "Explore the vibrant coral reefs and encounter diverse marine life including reef sharks, turtles, and hundreds of fish species.",
        image: "/des/t1.jpg",
      },
      {
        title: "Visit Koneswaram Temple",
        description:
          "Explore this ancient Hindu temple perched on Swami Rock cliff, with its colorful statues and breathtaking views of the ocean.",
        image: "/des/t2.jpg",
      },
      {
        title: "Go whale watching",
        description:
          "Take a boat tour to spot blue whales, sperm whales, and dolphins in the deep waters off Trincomalee (best from May to October).",
        image: "/des/t3.jpg",
      },
      {
        title: "Relax on Uppuveli or Nilaveli beaches",
        description:
          "Enjoy the pristine white sand beaches with their shallow, calm waters perfect for swimming and sunbathing.",
        image: "/des/t4.jpg",
      },
      
    ],
    popularActivities: [
      "Beach Activities",
      "Snorkeling",
      "Diving",
      "Whale Watching",
      "Temple Visits",
      "Historical Tours",
    ],
  },
  matara: {
    name: "Matara",
    image: "/des/mb.jpg",
    themeBg: "beach",
    description: "Southern coastal city with Dutch colonial heritage, beaches, and the famous Paravi Duwa temple.",
    fullDescription: `Matara is a bustling coastal city located at the southernmost tip of Sri Lanka, where the Nilwala River meets the Indian Ocean. With a history dating back to ancient times, the city flourished during the Dutch colonial period in the 17th and 18th centuries, leaving behind a rich architectural heritage.

    Today, Matara serves as an important commercial hub for the southern region while offering visitors a blend of historical sites, beautiful beaches, and cultural attractions. Unlike some of the more touristy coastal towns, Matara provides a more authentic glimpse into everyday Sri Lankan life.

    The city is known for its Dutch colonial buildings, including the Star Fort and the Matara Fort, as well as the iconic Paravi Duwa Temple, built on a tiny island just offshore and connected by a pedestrian bridge.`,
    highlights: [
      {
        title: "Paravi Duwa Temple",
        description: "Buddhist temple on a small island connected by a bridge",
        icon: Landmark,
      },
      {
        title: "Dutch Star Fort",
        description: "Well-preserved star-shaped fort from the Dutch colonial era",
        icon: Building,
      },
      {
        title: "Hummanaya",
        description: "Blowhole that shoots seawater high into the air",
        icon: Waves,
      },
      {
        title: "Polhena Beach",
        description: "Protected beach with calm waters and coral reef",
        icon: Palmtree,
      },
      {
        title: "Matara Fort",
        description: "Historic fort built by the Portuguese and expanded by the Dutch",
        icon: Building,
      },
      {
        title: "Dondra Head Lighthouse",
        description: "Sri Lanka's tallest lighthouse at the southernmost point",
        icon: Landmark,
      },
      {
        title: "Hirikatiya Beach",
        description: "Scenic beach known for its surf breaks and palm-fringed shores",
        icon: Palmtree,
      }
    ],
    gallery: [
      "/des/m11.jpg",
      "/des/m12.jpg",
      "/des/m13.jpg",
      "/des/m14.avif",
    ],
    thingsToDo: [
      {
        title: "Visit Paravi Duwa Temple",
        description:
          "Walk across the pedestrian bridge to this picturesque Buddhist temple built on a tiny island just offshore.",
        image: "/des/p1.webp",
      },
      {
        title: "Explore the Dutch Star Fort",
        description:
          "Discover this well-preserved star-shaped fort built in 1765, now housing a small museum and offering views of the city.",
        image: "/des/m1.jpg",
      },
      {
        title: "Relax at Polhena Beach",
        description:
          "Enjoy swimming and snorkeling in the calm, shallow waters protected by an offshore reef, perfect for families.",
        image: "/des/m2.jpg",
      },
      {
        title: "Visit Dondra Head Lighthouse",
        description:
          "Climb to the top of Sri Lanka's tallest lighthouse for panoramic views from the island's southernmost point.",
        image: "/des/m3.jpg",
      },
      {
        title: "Explore Matara Old Town",
        description:
          "Wander through the historic section of the city with its Dutch colonial buildings, old ramparts, and local markets.",
        image: "/des/m4.jpg",
      },
      {
        title: "Visit Weherahena Temple",
        description:
          "Explore this unique temple featuring a massive seated Buddha statue and colorful tunnel paintings depicting Buddhist stories.",
        image: "/des/m5.webp",
      },
    ],
    popularActivities: [
      "Beach Activities",
      "Historical Tours",
      "Temple Visits",
      "Snorkeling",
      "Photography",
      "Local Market Visits",
    ],
  },
  // ...existing code...
  yala: {
    name: "Yala",
    image: "/des/yala-main.jpg",
    themeBg: "beach",
    description: "Sri Lanka’s premier national park, famous for leopards, elephants, and diverse wildlife.",
    fullDescription: `Yala National Park, located in the southeast of Sri Lanka, is the country’s most visited and second largest national park. It is renowned for its variety of wild animals, especially leopards, elephants, and crocodiles. The park’s landscape is a mix of dry forest, grasslands, and lagoons, making it a haven for wildlife enthusiasts and photographers.

In addition to its rich biodiversity, Yala is home to ancient ruins and religious sites, offering a unique blend of nature and history. Jeep safaris are the best way to explore the park and spot its famous residents.`,
    highlights: [
      {
        title: "Leopard Spotting",
        description: "Yala has one of the highest leopard densities in the world.",
        icon: Camera,
      },
      {
        title: "Elephant Herds",
        description: "See wild elephants roaming freely in their natural habitat.",
        icon: Mountain,
      },
      {
        title: "Bird Watching",
        description: "Over 200 bird species, including rare and endemic birds.",
        icon: Leaf,
      },
      {
        title: "Crocodile Watching",
        description: "Spot large crocodiles basking along the park’s water bodies.",
        icon: Waves,
      },
      {
        title: "Ancient Sithulpawwa Monastery",
        description: "A historic Buddhist monastery within the park.",
        icon: Landmark,
      },
    ],
    gallery: [
      "/des/Y1.jpg",
      "/des/Y4.jpg",
      "/des/yala1.jpg",
      "/des/yala4.jpg",
    ],
    thingsToDo: [
      {
        title: "Go on a Jeep Safari",
        description: "Experience the thrill of spotting leopards, elephants, sloth bears, and more on a guided safari.",
        image: "/des/Y2.jpg",
      },
      {
        title: "Bird Watching Tours",
        description: "Join a birding tour to spot rare and endemic species in Yala’s diverse habitats.",
        image: "/des/yala2.jpg",
      },
      {
        title: "Visit Sithulpawwa Monastery",
        description: "Explore this ancient Buddhist monastery and enjoy panoramic views of the park.",
        image: "/des/yala3.jpg",
      },
      {
        title: "Photography Expeditions",
        description: "Capture the park’s stunning wildlife and landscapes with your camera.",
        image: "/des/yala4.jpg",
      },
    ],
    popularActivities: [
      "Wildlife Safaris",
      "Bird Watching",
      "Photography",
      "Nature Walks",
      "Cultural Visits",
    ],
  },
}

// Helper function to get background gradient based on theme
const getThemeBackground = (theme: string) => {
  switch (theme) {
    case "beach":
      return "bg-gradient-to-b from-blue-500 to-cyan-300"
    case "mountain":
      return "bg-gradient-to-b from-emerald-700 to-emerald-500"
    case "cultural":
      return "bg-gradient-to-b from-maroon-700 to-maroon-500"
    case "city":
      return "bg-gradient-to-b from-slate-700 to-slate-500"
    default:
      return "bg-gradient-to-b from-maroon-700 to-maroon-500"
  }
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const { slug } = useParams()
  const destination = destinationsData[slug as keyof typeof destinationsData]
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!destination) {
    notFound()
  }

  const themeBg = getThemeBackground(destination.themeBg || "cultural")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className={`relative h-[60vh] md:h-[70vh] overflow-hidden ${themeBg}`}>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </div>
        ) : (
          <>
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              fill
              priority
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
              >
                {destination.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-3xl drop-shadow-md"
              >
                {destination.description}
              </motion.p>
            </div>
          </>
        )}
      </section>

      <div className="container mx-auto px-4 py-6">
        <BackButton />
      </div>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <>
              <Skeleton className="h-10 w-1/3 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-800 mb-6 fancy-underline"
              >
                {t.about || "About"} {destination.name}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="prose prose-emerald max-w-none"
              >
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                  {destination.fullDescription}
                </p>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <>
              <Skeleton className="h-10 w-1/3 mb-6" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-32 w-full rounded-lg" />
                ))}
              </div>
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-8 fancy-underline"
              >
                {t.highlights || "Highlights"}
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-0 group">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex items-center">
                          <div className="p-3 rounded-full bg-maroon-100 text-maroon-700 mr-4 group-hover:bg-maroon-700 group-hover:text-white transition-colors duration-300">
                            {highlight.icon && <highlight.icon size={24} />}
                          </div>
                          <h3 className="font-bold text-xl text-gray-800">{highlight.title}</h3>
                        </div>
                        <p className="text-gray-600">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <>
              <Skeleton className="h-10 w-1/2 mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-24 w-full rounded-lg" />
                ))}
              </div>
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-8 fancy-underline"
              >
                {t.thingsToDo || "Things to Do in"} {destination.name}
              </motion.h2>

              <Accordion type="single" collapsible className="w-full">
                {destination.thingsToDo.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center text-left">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-maroon-100 text-maroon-700 rounded-full mr-3">
                            {index + 1}
                          </span>
                          <span className="font-medium text-lg">{activity.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-0">
                        <div className="grid md:grid-cols-3 gap-4 p-6 pt-2">
                          <div className="md:col-span-1">
                            <div className="relative h-48 w-full rounded-lg overflow-hidden">
                              <Image
                                src={activity.image || "/placeholder.svg"}
                                alt={activity.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-gray-700">{activity.description}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </>
          )}
        </div>
      </section>

      {/* Popular Activities Section */}
      {destination.popularActivities && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <>
                <Skeleton className="h-10 w-1/3 mb-6" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="h-10 w-24 rounded-full" />
                  ))}
                </div>
              </>
            ) : (
              <>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-800 mb-6 fancy-underline"
                >
                  {t.popularActivities || "Popular Activities"}
                </motion.h2>
                <div className="flex flex-wrap gap-3">
                  {destination.popularActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="relative"
                    >
                      <div className="px-5 py-2 rounded-full bg-white border border-maroon-200 text-maroon-700 hover:bg-maroon-700 hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer animate-glow">
                        {activity}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <GallerySection images={destination.gallery} name={destination.name} isLoading={isLoading} />

      {/* Book Now Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          {isLoading ? (
            <>
              <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
              <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-2" />
              <Skeleton className="h-4 w-3/4 max-w-2xl mx-auto mb-8" />
              <Skeleton className="h-12 w-40 mx-auto rounded-lg" />
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                {t.readyToVisit || "Ready to Experience"} {destination.name}?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 max-w-2xl mx-auto mb-8"
              >
                {t.planYourTrip || "Let us help you plan the perfect trip to"} {destination.name} {t.and || "and"}{" "}
                {t.otherDestinations || "other amazing destinations in Sri Lanka"}.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button asChild size="lg" className="bg-maroon-700 hover:bg-maroon-800 modern-button">
                  <a href="/#booking">{t.bookNow || "Book Your Tour Now"}</a>
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

// Gallery Section Component with image slider
function GallerySection({ images, name, isLoading }: { images: string[]; name: string; isLoading: boolean }) {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {isLoading ? (
          <>
            <Skeleton className="h-10 w-1/3 mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-64 w-full rounded-lg" />
              ))}
            </div>
          </>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-6 fancy-underline"
            >
              {name} {t.gallery || "Gallery"}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-64 overflow-hidden rounded-lg shadow-md group"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${name} - Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="text-white h-10 w-10" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
