import { Compass, Palmtree, Waves, Droplets, Tent, PartyPopper, MountainIcon } from "lucide-react"

export const tourCategories = [
  {
    id: "cultural",
    name: "Cultural & Heritage",
    icon: <Compass className="h-5 w-5 text-maroon-700" />,
    activities: [
      {
        id: "anuradhapura",
        name: "Anuradhapura",
        description: "The ancient capital, home to sacred Bodhi Tree and massive stupas.",
        image: "/tour/1.jpg",
        images: [
          "/tour/anu1.jpg",
          "/tour/anu2.jpg",
        ],
        highlights: [
          "Sacred Bodhi Tree - Oldest historically authenticated tree in the world",
          "Ruwanwelisaya - Magnificent white stupa built in 140 B.C.",
          "Jetavanaramaya - Once the tallest stupa in the ancient world",
          "Thuparamaya - First stupa built in Sri Lanka after Buddhism introduction",
        ],
        bestTime: "Year-round, but December to March offers the most pleasant weather.",
      },
      {
        id: "polonnaruwa",
        name: "Polonnaruwa",
        description: "UNESCO site showcasing well-preserved ruins of medieval Sri Lanka.",
        image: "/tour/2.jpg",
        images: [
          "/tour/pol1.jpg",
          "/tour/pol2.jpg",
          
        ],
        highlights: [
          "Gal Vihara - Rock temple with magnificent Buddha statues",
          "Royal Palace - Impressive ruins of King Parakramabahu's residence",
          "Sacred Quadrangle - Compact group of fascinating ancient structures",
          "Parakrama Samudra - Ancient man-made reservoir still in use today",
        ],
        bestTime: "Year-round, but the dry season (May to September) is ideal.",
      },
      {
        id: "dambulla",
        name: "Dambulla Rock Cave Temple",
        description: "A spiritual cave temple with Buddhist murals and statues.",
        image: "/tour/3.jpg",
        images: [
          "/tour/dam1.jpg",
          "/tour/dam2.jpg",
        ],
        highlights: [
          "Five caves containing 153 Buddha statues and hundreds of paintings",
          "Golden Temple - Massive golden Buddha statue at the entrance",
          "Cave of the Divine King - Largest and most impressive cave",
          "Ancient murals covering 2,100 square meters of cave walls",
        ],
        bestTime: "Year-round, but avoid the monsoon season (October to January).",
      },
      {
        id: "sigiriya",
        name: "Sigiriya",
        description: "Iconic Lion Rock fortress with frescoes and royal gardens.",
        image: "/tour/4.jpg",
        images: [
          "/tour/sig1.jpg",
          "/tour/sig2.jpg",
        ],
        highlights: [
          "Lion's Paw Entrance - Massive stone lion paws guarding the final ascent",
          "Ancient Frescoes - Well-preserved 5th-century paintings",
          "Mirror Wall - Ancient graffiti dating back 1,000 years",
          "Water Gardens - Sophisticated hydraulic systems still functioning today",
        ],
        bestTime: "Early morning (opens at 7 AM) to avoid crowds and heat.",
      },
      {
        id: "kandy",
        name: "Kandy",
        description: "Sacred city with the Temple of the Tooth and vibrant cultural shows.",
        image: "/tour/5.PNG",
        images: [
          "/tour/kan1.jpg",
          "/tour/kan2.jpg",
        ],
        highlights: [
          "Temple of the Sacred Tooth Relic - Most revered Buddhist site in Sri Lanka",
          "Kandy Lake - Scenic artificial lake built in 1807",
          "Royal Botanical Gardens - 147-acre garden with over 4,000 species",
          "Traditional Kandyan Dance performances every evening",
        ],
        bestTime: "January to April for the best weather, or July/August for the Esala Perahera festival.",
      },
    {
      id: "ambuluwawa",
      name: "Ambuluwawa Tower",
      description: "Unique spiral tower offering panoramic views and biodiversity.",
      image: "/tour/6.PNG",
      images: [
          "/tour/amb1.jpg",
          "/tour/amb2.jpg",
        ],
      highlights: [
        "Spiral tower with 360° views",
        "Biodiversity complex with gardens and shrines",
        "Ideal for photography and hiking"
      ],
      bestTime: "December to April for clear views."
    },
    {
      id: "colombo",
      name: "Colombo",
      description: "Bustling capital blending colonial charm and modern vibes.",
      image: "/tour/7.jpg",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Galle Face Green promenade",
        "National Museum and Independence Square",
        "Dutch Hospital Precinct and modern shopping"
      ],
      bestTime: "November to March."
    },
    {
      id: "galle",
      name: "Galle Fort",
      description: "17th-century Dutch fortress with coastal charm and cobbled streets.",
      image: "/tour/8.jpg",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "UNESCO World Heritage Site",
        "Colonial architecture and boutique cafes",
        "Sunset views from the ramparts"
      ],
      bestTime: "December to April."
    },
    {
      id: "dabana",
      name: "Dabana Indigenous Village",
      description: "Discover Sri Lanka’s Veddah community and traditions.",
      image: "/tour/9.PNG",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Traditional hunting and cultural practices",
        "Guided tours with Veddah elders",
        "Rare insight into Sri Lanka's indigenous heritage"
      ],
      bestTime: "Year-round, avoid monsoon months."
    },
    {
      id: "pinnawala",
      name: "Pinnawala Elephant Orphanage",
      description: "Sanctuary for rescued elephants, ideal for close encounters.",
      image: "/tour/10.jpg",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Elephant bathing in the river",
        "Feeding sessions",
        "Educational tours for families"
      ],
      bestTime: "Morning sessions for feeding and bathing."
    },
    {
      id: "madu-ganga",
      name: "Madu Ganga River Safari",
      description: "Mangrove ecosystem boat ride through serene waterways.",
      image: "/placeholder.svg?height=400&width=600&text=Madu+Ganga",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Mangrove forests and islands",
        "Fish spa experience",
        "Bird and monkey sightings"
      ],
      bestTime: "Dry season, November to April."
    },
    {
      id: "tea-estates",
      name: "Upcountry Tea Estates",
      description: "Walk through lush tea plantations and experience tea making.",
      image: "/placeholder.svg?height=400&width=600&text=Tea+Estates",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Tea plucking experiences",
        "Visit working tea factories",
        "Scenic train rides and panoramic views"
      ],
      bestTime: "February to May or August to October."
    },
    {
      id: "ritigala",
      name: "Ritigala Monastery Ruins",
      description: "Mystical jungle ruins of an ancient Buddhist monastery.",
      image: "/placeholder.svg?height=400&width=600&text=Ritigala",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Less crowded historical site",
        "Sacred forest with herbal plants",
        "Hidden meditation platforms"
      ],
      bestTime: "June to September."
    },
    {
      id: "aluvihara",
      name: "Aluvihara Rock Temple",
      description: "Historic temple where Buddhist scriptures were first written.",
      image: "/placeholder.svg?height=400&width=600&text=Aluvihara",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Historic cave temple",
        "Pali Canon transcription site",
        "Ancient wall art and artifacts"
      ],
      bestTime: "December to April."
    },
    {
      id: "jaffna",
      name: "Jaffna",
      description: "Cultural hub of Tamil heritage with historic temples, libraries, and forts.",
      image: "/placeholder.svg?height=400&width=600&text=Jaffna",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Nallur Kovil and Jaffna Fort",
        "Jaffna Library and vibrant markets",
        "Islands like Delft and Kayts"
      ],
      bestTime: "May to September."
    },
    {
      id: "tissamaharama",
      name: "Tissamaharama",
      description: "Ancient capital of Ruhuna Kingdom with Buddhist dagobas.",
      image: "/placeholder.svg?height=400&width=600&text=Tissamaharama",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      
        highlights: [
        "Tissa Wewa and stupa ruins",
        "Gateway to Yala safaris",
        "Historical significance and spiritual ambiance"
      ],
      bestTime: "November to April."
    },
    {
      id: "kelaniya",
      name: "Kelaniya Raja Maha Vihara",
      description: "Sacred Buddhist temple visited by Lord Buddha.",
      image: "/placeholder.svg?height=400&width=600&text=Kelaniya",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      highlights: [
        "Vibrant murals depicting Buddha's life",
        "Pilgrimage site near Colombo",
        "Historical temple with annual Perahera"
      ],
      bestTime: "Full moon days or December to March."
    },
    {
      id: "seethawaka",
      name: "Seethawaka Wet Zone Botanic Gardens",
      description: "Historical site linked to the Seetha myth and early kingdoms.",
      image: "/placeholder.svg?height=400&width=600&text=Seethawaka",
      images: [
          "/placeholder.svg?height=600&width=800&text=Sigiriya+1",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+2",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+3",
          "/placeholder.svg?height=600&width=800&text=Sigiriya+4",
        ],      highlights: [
        "Rare tropical plants and streams",
        "Links to Ramayana mythology",
        "Peaceful nature walks"
      ],
      bestTime: "December to March."
    }
  ]
},
  {
    id: "wildlife",
    name: "Wildlife Safaris & Nature Reserves",
    icon: <Palmtree className="h-5 w-5 text-maroon-700" />,
    activities: [
      {
        id: "yala",
        name: "Yala National Park",
        description: "Renowned for leopard sightings and diverse wildlife.",
        image: "/placeholder.svg?height=400&width=600&text=Yala",
        images: [
          "/placeholder.svg?height=600&width=800&text=Yala+1",
          "/placeholder.svg?height=600&width=800&text=Yala+2",
          "/placeholder.svg?height=600&width=800&text=Yala+3",
          "/placeholder.svg?height=600&width=800&text=Yala+4",
        ],
        highlights: [
          "Leopard spotting - Highest density of leopards in the world",
          "Diverse wildlife including elephants, sloth bears, and crocodiles",
          "Over 215 bird species, including 6 endemic to Sri Lanka",
          "Varied landscapes from forests to lagoons and coastlines",
        ],
        bestTime: "February to July when water levels are low and animals gather around water holes.",
      },
      {
        id: "kaudulla",
        name: "Kaudulla National Park",
        description: "Famous for elephant herds and scenic landscapes.",
        image: "/placeholder.svg?height=400&width=600&text=Kaudulla",
        images: [
          "/placeholder.svg?height=600&width=800&text=Kaudulla+1",
          "/placeholder.svg?height=600&width=800&text=Kaudulla+2",
          "/placeholder.svg?height=600&width=800&text=Kaudulla+3",
          "/placeholder.svg?height=600&width=800&text=Kaudulla+4",
        ],
        highlights: [
          "Elephant herds - Up to 200 elephants gather around the reservoir",
          "Bird watching - Over 160 species including migratory birds",   
          "Scenic landscapes - Grasslands, scrublands, and wetlands",
          "Other wildlife - Sambar deer, leopards, and various reptiles",
        ],
        bestTime: "September to December for the best elephant sightings.",
      },

      {
        id: "wilpattu",
        name: "Wilpattu National Park",
        description: "Largest national park with natural lakes and untouched forest.",
        image: "/placeholder.svg?height=400&width=600&text=Wilpattu",
        images: [
          "/placeholder.svg?height=600&width=800&text=Wilpattu+1",
          "/placeholder.svg?height=600&width=800&text=Wilpattu+2",
          "/placeholder.svg?height=600&width=800&text=Wilpattu+3",
          "/placeholder.svg?height=600&width=800&text=Wilpattu+4",
        ],
        highlights: [
          "Natural lakes (Villus) - Unique feature of this national park",
          "Leopard sightings in natural, less crowded environment",
          "Sloth bears, elephants, and spotted deer",
          "Over 30 species of mammals and numerous bird species",
        ],
        bestTime: "February to October during the dry season.",
      },
      {
        id: "minneriya",
        name: "Minneriya National Park",
        description: "Home to 'The Gathering' – world's largest elephant meeting.",
        image: "/placeholder.svg?height=400&width=600&text=Minneriya",
        images: [
          "/placeholder.svg?height=600&width=800&text=Minneriya+1",
          "/placeholder.svg?height=600&width=800&text=Minneriya+2",
          "/placeholder.svg?height=600&width=800&text=Minneriya+3",
          "/placeholder.svg?height=600&width=800&text=Minneriya+4",
        ],
        highlights: [
          "The Gathering - Up to 300 elephants congregate around the reservoir",
          "Bird watching - Over 160 species of birds including endemic species",
          "Scenic landscapes - Grasslands, scrublands, and tank (reservoir)",
          "Other wildlife - Sambar deer, sloth bears, and leopards",
        ],
        bestTime: "August to October for 'The Gathering' when elephants congregate.",
      },
      {
        id: "sinharaja",
        name: "Sinharaja Rainforest",
        description: "UNESCO biosphere with endemic flora and fauna.",
        image: "/placeholder.svg?height=400&width=600&text=Sinharaja",
        images: [
          "/placeholder.svg?height=600&width=800&text=Sinharaja+1",
          "/placeholder.svg?height=600&width=800&text=Sinharaja+2",
          "/placeholder.svg?height=600&width=800&text=Sinharaja+3",
          "/placeholder.svg?height=600&width=800&text=Sinharaja+4",
        ],
        highlights: [
          "Biodiversity Hotspot - Over 60% of the trees are endemic to Sri Lanka",
          "Bird Watching - Home to 95% of Sri Lanka's endemic birds",
          "Mixed Species Bird Flocks - Unique phenomenon of different species hunting together",
          "Rare Amphibians - Including the endangered purple-faced langur",
        ],
        bestTime: "January to April and August to September for drier conditions.",
      },
    ],
  },
  {
    id: "beach",
    name: "Beach & Coastal Tours",
    icon: <Waves className="h-5 w-5 text-maroon-700" />,
    activities: [
      {
        id: "hikkaduwa",
        name: "Hikkaduwa",
        description: "Famous for coral reefs and vibrant nightlife.",
        image: "/placeholder.svg?height=400&width=600&text=Hikkaduwa",
        images: [
          "/placeholder.svg?height=600&width=800&text=Hikkaduwa+1",
          "/placeholder.svg?height=600&width=800&text=Hikkaduwa+2",
          "/placeholder.svg?height=600&width=800&text=Hikkaduwa+3",
          "/placeholder.svg?height=600&width=800&text=Hikkaduwa+4",
        ],
        highlights: [
          "Coral Sanctuary - Snorkel among colorful fish and sea turtles",
          "Beach Parties - Vibrant nightlife with beachfront bars and restaurants",
          "Surfing - Consistent waves suitable for beginners and intermediate surfers",
          "Moonstone Mines - Visit nearby traditional moonstone mines",
        ],
        bestTime: "November to April for the best beach weather and water clarity.",
      },
      {
        id: "arugambay",
        name: "Arugam Bay",
        description: "Surfer's paradise with beach vibes and scenic views.",
        image: "/placeholder.svg?height=400&width=600&text=Arugam+Bay",
        images: [
          "/placeholder.svg?height=600&width=800&text=Arugam+Bay+1",
          "/placeholder.svg?height=600&width=800&text=Arugam+Bay+2",
          "/placeholder.svg?height=600&width=800&text=Arugam+Bay+3",
          "/placeholder.svg?height=600&width=800&text=Arugam+Bay+4",
        ],
        highlights: [
          "World-class surfing with multiple point breaks",
          "Laid-back beach atmosphere with bohemian vibes",
          "Nearby wildlife including elephants occasionally visiting the area",
          "Beautiful sunrises over the Indian Ocean",
        ],
        bestTime: "April to October for the best surfing conditions.",
      },
      {
        id: "mirissa",
        name: "Mirissa",
        description: "Whale watching, beach parties, and scenic palm hill.",
        image: "/placeholder.svg?height=400&width=600&text=Mirissa",
        images: [
          "/placeholder.svg?height=600&width=800&text=Mirissa+1",
          "/placeholder.svg?height=600&width=800&text=Mirissa+2",
          "/placeholder.svg?height=600&width=800&text=Mirissa+3",
          "/placeholder.svg?height=600&width=800&text=Mirissa+4",
        ],
        highlights: [
          "Whale watching - Blue whales and sperm whales",
          "Coconut Tree Hill - Iconic viewpoint for sunset photos",
          "Pristine beaches with clear turquoise waters",
          "Vibrant nightlife with beachfront restaurants and bars",
        ],
        bestTime: "November to April for whale watching and best beach weather.",
      },
      {
        id: "unawatuna",
        name: "Unawatuna",
        description: "Beautiful beach with a relaxed vibe and water sports.",
        image: "/placeholder.svg?height=400&width=600&text=Unawatuna",
        images: [
          "/placeholder.svg?height=600&width=800&text=Unawatuna+1",
          "/placeholder.svg?height=600&width=800&text=Unawatuna+2",
          "/placeholder.svg?height=600&width=800&text=Unawatuna+3",
          "/placeholder.svg?height=600&width=800&text=Unawatuna+4",
        ],
        highlights: [
          "Snorkeling and diving at nearby coral reefs",
          "Relaxed beach atmosphere with beach bars and restaurants",
          "Historic Japanese Peace Pagoda overlooking the bay",
          "Nearby Galle Fort for cultural exploration",
        ],
        bestTime: "November to April for the best beach weather.",
      },
      {
        id: "kalpitiya",
        name: "Kalpitiya",
        description: "Kite surfing hotspot with pristine beaches and lagoons.",
        image: "/placeholder.svg?height=400&width=600&text=Kalpitiya",
        images: [
          "/placeholder.svg?height=600&width=800&text=Kalpitiya+1",
          "/placeholder.svg?height=600&width=800&text=Kalpitiya+2",
          "/placeholder.svg?height=600&width=800&text=Kalpitiya+3",
          "/placeholder.svg?height=600&width=800&text=Kalpitiya+4",
        ],
        highlights: [
          "Kite surfing - Ideal conditions for both beginners and experts",
          "Dolphin watching - Large pods of dolphins in the lagoon",
          "Pristine beaches with fewer crowds",
          "Nearby Wilpattu National Park for wildlife safaris",
        ],
        bestTime: "May to October for kite surfing and dolphin watching.",
      },
      {
        id: "trincomalee",
        name: "Trincomalee",
        description: "Historical port city with beautiful beaches and whale watching.",
        image: "/placeholder.svg?height=400&width=600&text=Trincomalee",
        images: [
          "/placeholder.svg?height=600&width=800&text=Trincomalee+1",
          "/placeholder.svg?height=600&width=800&text=Trincomalee+2",
          "/placeholder.svg?height=600&width=800&text=Trincomalee+3",
          "/placeholder.svg?height=600&width=800&text=Trincomalee+4",
        ],
        highlights: [
          "Nilaveli Beach – White sands and crystal-clear waters, perfect for relaxation",
          "Pigeon Island National Park – Snorkeling with vibrant coral reefs and marine life",
          "Koneswaram Temple – A scenic cliff-top Hindu temple with ocean views",
          "Fort Frederick – Historical colonial fort with panoramic bay views",
          "Whale and Dolphin Watching – Seasonal boat tours to see marine giants",
          "Hot Springs of Kanniya – Ancient natural thermal springs with cultural significance",
          "Marble Beach – Quiet, pristine beach ideal for swimming and picnics",
          "Scuba Diving – Explore shipwrecks and reef systems teeming with life",
          "Fort Hammenhiel – A small island fort with historical significance and scenic views",
        ],
        bestTime: "May to October for kite surfing and dolphin watching.",
      },
      {
        id: "bentota",
        name: "Bentota",
        description: "Luxury beach resort town with water sports and relaxation.",
        image: "/placeholder.svg?height=400&width=600&text=Bentota",
        images: [
          "/placeholder.svg?height=600&width=800&text=Bentota+1",
          "/placeholder.svg?height=600&width=800&text=Bentota+2",
          "/placeholder.svg?height=600&width=800&text=Bentota+3",
          "/placeholder.svg?height=600&width=800&text=Bentota+4",
        ],
        highlights: [
          "Water sports - Jet skiing, windsurfing, and banana boat rides",
          "Bentota River - Boat safaris and mangrove exploration",
          "Luxury resorts and spas for relaxation",
          "Nearby turtle hatcheries for conservation education",
        ],
        bestTime: "November to April for the best beach weather.",
      },
      {
        id:"Hummanaya Blow Hole",
        name: "Hummanaya Blow Hole",
        description: "Natural blowhole creating spectacular water sprays.",   
        image: "/placeholder.svg?height=400&width=600&text=Hummanaya+Blow+Hole",
        images: [
          "/placeholder.svg?height=600&width=800&text=Hummanaya+Blow+Hole+1",
          "/placeholder.svg?height=600&width=800&text=Hummanaya+Blow+Hole+2",
          "/placeholder.svg?height=600&width=800&text=Hummanaya+Blow+Hole+3",
          "/placeholder.svg?height=600&width=800&text=Hummanaya+Blow+Hole+4",
        ],
        highlights: [
          "Natural phenomenon - Water shoots up to 30 meters high",
          "Scenic coastal views and rock formations", 
          "Ideal for photography and nature lovers",
          "Nearby beaches for relaxation and swimming",
        ],    
        bestTime: "November to April for the best visibility and water conditions.",
      },

      {
        id: "turtlehatchery",
        name: "Turtle Hatchery",
        description: "Conservation sites helping baby turtles reach the ocean.",
        image: "/placeholder.svg?height=400&width=600&text=Turtle+Hatchery",
        images: [
          "/placeholder.svg?height=600&width=800&text=Turtle+Hatchery+1",
          "/placeholder.svg?height=600&width=800&text=Turtle+Hatchery+2",
          "/placeholder.svg?height=600&width=800&text=Turtle+Hatchery+3",
          "/placeholder.svg?height=600&width=800&text=Turtle+Hatchery+4",
        ],
        highlights: [
          "Conservation Efforts - Learn about turtle protection programs",
          "Baby Turtles - See newly hatched turtles before their release",
          "Injured Turtles - Visit rehabilitation tanks for injured sea turtles",
          "Turtle Release - Participate in releasing baby turtles into the ocean (seasonal)",
        ],
        bestTime: "Year-round, but turtle hatching is most common from January to July.",
      },
    ],
  },
  {
    id: "water",
    name: "Water-Based Activities",
    icon: <Droplets className="h-5 w-5 text-maroon-700" />,
    activities: [
      {
        id: "kitulgala",
        name: "Kitulgala",
        description: "White-water rafting and rainforest hikes.",
        image: "/placeholder.svg?height=400&width=600&text=Kitulgala",
        images: [
          "/placeholder.svg?height=600&width=800&text=Kitulgala+1",
          "/placeholder.svg?height=600&width=800&text=Kitulgala+2",
          "/placeholder.svg?height=600&width=800&text=Kitulgala+3",
          "/placeholder.svg?height=600&width=800&text=Kitulgala+4",
        ],
        highlights: [
          "White water rafting on the Kelani River with Grade 2-4 rapids",
          "Jungle trekking through dense rainforest",
          "Waterfall abseiling and canyoning adventures",
          "Bridge on the River Kwai filming location",
        ],
        bestTime: "May to December when water levels are optimal for rafting.",
      },
      {
        id: "maduganga",
        name: "Madu Ganga",
        description: "Tranquil mangrove river with boat safaris.",
        image: "/placeholder.svg?height=400&width=600&text=Madu+Ganga",
        images: [
          "/placeholder.svg?height=600&width=800&text=Madu+Ganga+1",
          "/placeholder.svg?height=600&width=800&text=Madu+Ganga+2",
          "/placeholder.svg?height=600&width=800&text=Madu+Ganga+3",
          "/placeholder.svg?height=600&width=800&text=Madu+Ganga+4",
        ],
        highlights: [
          "Boat safari through intricate mangrove forests",
          "Visit to Cinnamon Island to see traditional processing",
          "Fish therapy (natural fish spa) in designated areas",
          "Rich biodiversity with birds, monitor lizards, and monkeys",
        ],
        bestTime: "Year-round, but the dry season (December to April) is most comfortable.",
      },
      {
        id: "kalu-ganga",
        name: "Kalu Ganga",
        description: "Scenic river with kayaking and fishing opportunities.",
        image: "/placeholder.svg?height=400&width=600&text=Kalu+Ganga",
        images: [
          "/placeholder.svg?height=600&width=800&text=Kalu+Ganga+1",
          "/placeholder.svg?height=600&width=800&text=Kalu+Ganga+2",
          "/placeholder.svg?height=600&width=800&text=Kalu+Ganga+3",
          "/placeholder.svg?height=600&width=800&text=Kalu+Ganga+4",
        ],
        highlights: [
          "Kayaking and canoeing through lush landscapes",
          "Fishing opportunities for local species",
          "Bird watching along the riverbanks",
          "Peaceful environment away from tourist crowds",
        ],
        bestTime: "November to April for the best weather.",
      },
      {
        id: "Lagoon-Kayaking",
        name: "Lagoon Kayaking",
        description: "Kayaking through serene lagoons and mangroves.",
        image: "/placeholder.svg?height=400&width=600&text=Lagoon+Kayaking",
        images: [
          "/placeholder.svg?height=600&width=800&text=Lagoon+Kayaking+1",
          "/placeholder.svg?height=600&width=800&text=Lagoon+Kayaking+2",
          "/placeholder.svg?height=600&width=800&text=Lagoon+Kayaking+3",
          "/placeholder.svg?height=600&width=800&text=Lagoon+Kayaking+4",
        ],
        highlights: [
          "Explore mangrove ecosystems and wildlife",
          "Guided tours available for educational insights",
          "Ideal for bird watching and photography",
          "Relaxing experience away from busy beaches",
        ],
        bestTime: "Year-round, but the dry season (December to April) is most comfortable.",
      },
    ],
  },
  {
    id: "adventure",
    name: "Adventure & Hiking",
    icon: <Tent className="h-5 w-5 text-maroon-700" />,
    activities: [
      {
        id: "adamspeak",
        name: "Adam's Peak",
        description: "Sacred mountain climb with sunrise views and religious significance.",
        image: "/placeholder.svg?height=400&width=600&text=Adams+Peak",
        images: [
          "/placeholder.svg?height=600&width=800&text=Adams+Peak+1",
          "/placeholder.svg?height=600&width=800&text=Adams+Peak+2",
          "/placeholder.svg?height=600&width=800&text=Adams+Peak+3",
          "/placeholder.svg?height=600&width=800&text=Adams+Peak+4",
        ],
        highlights: [
          "Sacred footprint (Sri Pada) revered by multiple religions",
          "Spectacular sunrise views and shadow of the peak",
          "Night climb with illuminated path during pilgrimage season",
          "Sense of achievement upon reaching the 2,243m summit",
        ],
        bestTime: "Pilgrimage season from December to May when the path is illuminated.",
      },
      {
        id: "knuckles",
        name: "Knuckles Mountain Range",
        description: "Biodiverse hiking trails with stunning mountain views.",
        image: "/placeholder.svg?height=400&width=600&text=Knuckles+Mountain+Range",
        images: [
          "/placeholder.svg?height=600&width=800&text=Knuckles+1",
          "/placeholder.svg?height=600&width=800&text=Knuckles+2",
          "/placeholder.svg?height=600&width=800&text=Knuckles+3",
          "/placeholder.svg?height=600&width=800&text=Knuckles+4",
        ],
        highlights: [
          "Diverse flora and fauna, including endemic species",
          "Variety of trails for different skill levels",
          "Stunning views of the surrounding valleys and peaks",
          "Cultural experiences in local villages along the trails",
        ],
        bestTime: "December to April for the best weather and visibility.",
      },
      {
        id: "liptonseat",
        name: "Lipton's Seat",
        description: "Famous viewpoint with panoramic views of tea plantations.",
        image: "/placeholder.svg?height=400&width=600&text=Liptons+Seat",
        images: [
          "/placeholder.svg?height=600&width=800&text=Liptons+Seat+1",
          "/placeholder.svg?height=600&width=800&text=Liptons+Seat+2",
          "/placeholder.svg?height=600&width=800&text=Liptons+Seat+3",
          "/placeholder.svg?height=600&width=800&text=Liptons+Seat+4",
        ],  
        highlights: [
          "Breathtaking views of the surrounding hills and valleys",
          "Tea plantation tours and tastings",
          "Historical significance related to Sir Thomas Lipton",
          "Easy access from Haputale or Ella",
        ],
        bestTime: "Early morning for the best views and cooler temperatures.",
      },
      {
        id: "littleadamspeak",
        name: "Little Adam's Peak",
        description: "Short hike with stunning views of Ella and surrounding hills.",
        image: "/placeholder.svg?height=400&width=600&text=Little+Adams+Peak",
        images: [
          "/placeholder.svg?height=600&width=800&text=Little+Adams+Peak+1",
          "/placeholder.svg?height=600&width=800&text=Little+Adams+Peak+2",
          "/placeholder.svg?height=600&width=800&text=Little+Adams+Peak+3",
          "/placeholder.svg?height=600&width=800&text=Little+Adams+Peak+4",
        ],
        highlights: [
          "Stunning panoramic views of Ella Rock and the valley",
          "Easy to moderate 2-hour round trip hike",
          "Tea plantations and local flora along the trail",
          "Less crowded than other popular hikes in the area",
        ],
        bestTime: "Early morning for the best views and cooler temperatures.",
      },
      {
        id: "Nine Arches Bridge",
        name: "Nine Arches Bridge",
        description: "Iconic railway bridge surrounded by lush greenery.",
        image: "/placeholder.svg?height=400&width=600&text=Nine+Arches+Bridge",
        images: [
          "/placeholder.svg?height=600&width=800&text=Nine+Arches+Bridge+1",
          "/placeholder.svg?height=600&width=800&text=Nine+Arches+Bridge+2",
          "/placeholder.svg?height=600&width=800&text=Nine+Arches+Bridge+3",
          "/placeholder.svg?height=600&width=800&text=Nine+Arches+Bridge+4",
        ],
        highlights: [
          "Stunning architecture and engineering marvel",
          "Surrounded by lush tea plantations and hills",
          "Great spot for photography and train spotting",
          "Easy access from Ella town",
        ],
        bestTime: "Early morning or late afternoon for the best light.",
      },
      {
        id: "bakerfalls",
        name: "Baker's Falls",
        description: "Beautiful waterfall in Horton Plains National Park.",
        image: "/placeholder.svg?height=400&width=600&text=Bakers+Falls",
        images: [
          "/placeholder.svg?height=600&width=800&text=Bakers+Falls+1",
          "/placeholder.svg?height=600&width=800&text=Bakers+Falls+2",
          "/placeholder.svg?height=600&width=800&text=Bakers+Falls+3",
          "/placeholder.svg?height=600&width=800&text=Bakers+Falls+4",
        ],
        highlights: [
          "Stunning waterfall surrounded by lush vegetation",
          "Easy access from the main trail in Horton Plains",
          "Great spot for photography and picnics",
          "Nearby hiking trails for more exploration",
        ],
        bestTime: "Early morning for the best light and fewer crowds.",
      },
      {
        id:"hortonplains",
        name: "Horton Plains National Park",
        description: "UNESCO World Heritage site with unique ecosystems and wildlife.",
        image: "/placeholder.svg?height=400&width=600&text=Horton+Plains",    
        images: [
          "/placeholder.svg?height=600&width=800&text=Horton+Plains+1",
          "/placeholder.svg?height=600&width=800&text=Horton+Plains+2",
          "/placeholder.svg?height=600&width=800&text=Horton+Plains+3",
          "/placeholder.svg?height=600&width=800&text=Horton+Plains+4",
        ],
        highlights: [
          "World's End - Dramatic cliff with stunning views",
          "Biodiversity - Unique flora and fauna, including endemic species",
          "Easy hiking trails through grasslands and forests",
          "Cool climate and fresh air, perfect for nature lovers",
        ],
        bestTime: "December to April for the best weather and visibility.",
      },

      {
        id: "ellarock",
        name: "Ella Rock",
        description: "Scenic hike with valley views and peaceful paths.",
        image: "/placeholder.svg?height=400&width=600&text=Ella+Rock",
        images: [
          "/placeholder.svg?height=600&width=800&text=Ella+Rock+1",
          "/placeholder.svg?height=600&width=800&text=Ella+Rock+2",
          "/placeholder.svg?height=600&width=800&text=Ella+Rock+3",
          "/placeholder.svg?height=600&width=800&text=Ella+Rock+4",
        ],
        highlights: [
          "Panoramic views of Ella Gap and surrounding mountains",
          "Moderate 4-hour round trip hike through tea plantations",
          "Peaceful environment away from crowds",
          "Opportunity to see local flora and fauna",
        ],
        bestTime: "Early morning for the best views and cooler temperatures.",
      },
    ],
  },
  {
    id: "festivals",
    name: "Festivals & Cultural Events",
    icon: <PartyPopper className="h-5 w-5 text-maroon-700" />,
    activities: [
      {
        id: "vesak",
        name: "Vesak Festival",
        description: "Lantern-filled festival celebrating Buddha's birth, enlightenment, and death.",
        image: "/placeholder.svg?height=400&width=600&text=Vesak",
        images: [
          "/placeholder.svg?height=600&width=800&text=Vesak+1",
          "/placeholder.svg?height=600&width=800&text=Vesak+2",
          "/placeholder.svg?height=600&width=800&text=Vesak+3",
          "/placeholder.svg?height=600&width=800&text=Vesak+4",
        ],
        highlights: [
          "Colorful lanterns illuminating streets and homes",
          "Pandals - large illuminated panels depicting Buddhist stories",
          "Free food and drink stalls (dansal) throughout the country",
          "Temples filled with devotees and beautiful decorations",
        ],
        bestTime: "Full moon day in May (dates vary each year).",
      },
      {
        id: "perahera",
        name: "Kandy Esala Perahera",
        description: "Majestic Kandy procession with decorated elephants and dancers.",
        image: "/placeholder.svg?height=400&width=600&text=Esala+Perahera",
        images: [
          "/placeholder.svg?height=600&width=800&text=Esala+Perahera+1",
          "/placeholder.svg?height=600&width=800&text=Esala+Perahera+2",
          "/placeholder.svg?height=600&width=800&text=Esala+Perahera+3",
          "/placeholder.svg?height=600&width=800&text=Esala+Perahera+4",
        ],
        highlights: [
          "Over 100 elegantly decorated elephants in procession",
          "Traditional Kandyan dancers and drummers",
          "Fire dancers and whip crackers creating spectacle",
          "Sacred Tooth Relic casket carried on lead elephant",
        ],
        bestTime: "Ten days ending on the full moon in July or August (dates vary each year).",
      },
      {
        id: "newyear",
        name: "Sinhala and Tamil New Year",
        description: "Cultural festival with traditional games and food.",
        image: "/placeholder.svg?height=400&width=600&text=New+Year",
        images: [
          "/placeholder.svg?height=600&width=800&text=New+Year+1",
          "/placeholder.svg?height=600&width=800&text=New+Year+2",
          "/placeholder.svg?height=600&width=800&text=New+Year+3",
          "/placeholder.svg?height=600&width=800&text=New+Year+4",
        ],
        highlights: [
          "Traditional games" ,       
          "Cooking and sharing traditional sweets like kavum and kokis",
          "Cultural rituals like lighting the hearth and anointing oil",
          "Family gatherings and community celebrations",
        
    ],
        bestTime: "April 13th or 14th (dates vary each year).",
      },
      {
        id: "deepavali",
        name: "Deepavali Festival",
        description: "Festival of Lights celebrated by the Tamil community.",
        image: "/placeholder.svg?height=400&width=600&text=Deepavali",
        images: [
          "/placeholder.svg?height=600&width=800&text=Deepavali+1",
          "/placeholder.svg?height=600&width=800&text=Deepavali+2",
          "/placeholder.svg?height=600&width=800&text=Deepavali+3",
          "/placeholder.svg?height=600&width=800&text=Deepavali+4",
        ],
        highlights: [
          "Lighting oil lamps and candles to symbolize victory of light over darkness",
          "Colorful rangoli designs at homes and temples",
          "Fireworks and sparklers lighting up the night sky",
          "Sharing sweets and festive meals with family and friends",
        ],
        bestTime: "October or November (dates vary each year).",
      },
    ],
  },
  {
    id: "scenic",
    name: "Scenic & Upcountry Escapes",
    icon: <MountainIcon className="h-5 w-5 text-maroon-700" />,
    activities: [
      {
        id: "nuwaraeliya",
        name: "Nuwara Eliya",
        description: "Colonial-style town known as 'Little England'.",
        image: "/placeholder.svg?height=400&width=600&text=Nuwara+Eliya",
        images: [
          "/placeholder.svg?height=600&width=800&text=Nuwara+Eliya+1",
          "/placeholder.svg?height=600&width=800&text=Nuwara+Eliya+2",
          "/placeholder.svg?height=600&width=800&text=Nuwara+Eliya+3",
          "/placeholder.svg?height=600&width=800&text=Nuwara+Eliya+4",
        ],
        highlights: [
          "Colonial architecture and English-style gardens",
          "Tea plantations with factory tours and tastings",
          "Gregory Lake with boating and recreational activities",
          "Horton Plains National Park and World's End nearby",
        ],
        bestTime: "March to May for the best weather, or April for the Sinhala New Year celebrations.",
      },
      {
        id: "ella",
        name: "Ella",
        description: "Lush hill town with hikes, cafes, and breathtaking scenery.",
        image: "/placeholder.svg?height=400&width=600&text=Ella",
        images: [
          "/placeholder.svg?height=600&width=800&text=Ella+1",
          "/placeholder.svg?height=600&width=800&text=Ella+2",
          "/placeholder.svg?height=600&width=800&text=Ella+3",
          "/placeholder.svg?height=600&width=800&text=Ella+4",
        ],
        highlights: [
          "Nine Arch Bridge - Iconic colonial-era railway bridge",
          "Little Adam's Peak - Easy hike with panoramic views",
          "Ravana Falls - Beautiful waterfall with mythological significance",
          "Scenic train journey from Ella to Kandy",
        ],
        bestTime: "January to March for the driest weather and clearest views.",
      },
      {
        id:"strawberryfarms",
        name: "Strawberry Farms",
        description: "Visit strawberry farms and enjoy fresh strawberries.",
        image: "/placeholder.svg?height=400&width=600&text=Strawberry+Farms",
        images: [
          "/placeholder.svg?height=600&width=800&text=Strawberry+Farms+1",
          "/placeholder.svg?height=600&width=800&text=Strawberry+Farms+2",
          "/placeholder.svg?height=600&width=800&text=Strawberry+Farms+3",
          "/placeholder.svg?height=600&width=800&text=Strawberry+Farms+4",
        ],
        highlights: [
          "Pick your own strawberries in the fields",
          "Taste fresh strawberry products like jams and desserts",
          "Scenic views of the surrounding hills and valleys",
          "Learn about strawberry cultivation and farming practices",
        ],
        bestTime: "November to April for the best strawberry harvest.",
      },
      {
        id:"adisham",
        name: "Adisham Bungalow",
        description: "Colonial-era bungalow with beautiful gardens and views.",
        image: "/placeholder.svg?height=400&width=600&text=Adisham+Bungalow",
        images: [
          "/placeholder.svg?height=600&width=800&text=Adisham+Bungalow+1",
          "/placeholder.svg?height=600&width=800&text=Adisham+Bungalow+2",
          "/placeholder.svg?height=600&width=800&text=Adisham+Bungalow+3",
          "/placeholder.svg?height=600&width=800&text=Adisham+Bungalow+4",
        ],
        highlights: [
          "Beautiful gardens with a variety of flowers and plants",
          "Colonial architecture and historical significance",
          "Tea plantation views from the bungalow",
          "Peaceful atmosphere for relaxation and photography",
        ],
        bestTime: "Year-round, but best visited during the day for garden exploration.",
      },
      {
        id:"riverston",
        name: "Riverston",
        description: "Scenic area with hiking trails and stunning views.",
        image: "/placeholder.svg?height=400&width=600&text=Riverston",
        images: [
          "/placeholder.svg?height=600&width=800&text=Riverston+1",
          "/placeholder.svg?height=600&width=800&text=Riverston+2",
          "/placeholder.svg?height=600&width=800&text=Riverston+3",
          "/placeholder.svg?height=600&width=800&text=Riverston+4",
        ],
        highlights: [
          "Hiking trails with stunning views of the Knuckles Range",
          "Natural rock formations and waterfalls",
          "Bird watching and wildlife spotting opportunities",
          "Peaceful environment away from tourist crowds",
        ],
        bestTime: "December to April for the best weather and visibility.",
    
      }
    ],
  },
];

