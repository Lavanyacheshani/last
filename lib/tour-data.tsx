import { Compass, Palmtree, Waves, Droplets, Tent, PartyPopper, MountainIcon } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
          "/des/z1.jpg",
          "/des/z3.png",
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
          "/tour/p1.jpg",
          "/tour/p2.jpg",
          
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
          "/tour/d1.jpg",
          "/tour/d2.jpg",
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
          "/tour/s1.webp",
          "/tour/s2.jpg",
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
          "/des/k1.jpg",
          "/des/k3.JPG",
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
          "/tour/amb1.webp",
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
          "/des/c1.jpg",
          "/des/c13.jpg",
          
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
          "/tour/g1.jpg",
          "/tour/g2.webp",
          
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
          "/tour/damm.jpg",
          "/tour/dam2.jpg",
          
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
          "/tour/pi.avif",
          "/tour/pii.webp",
          
        ],      
        highlights: [
        "Elephant bathing in the river",
        "Feeding sessions",
        "Educational tours for families"
      ],
      bestTime: "Morning sessions for feeding and bathing."
    },
    
    {
      id: "ritigala",
      name: "Ritigala Monastery Ruins",
      description: "Mystical jungle ruins of an ancient Buddhist monastery.",
      image: "/tour/r.jpg",
      images: [
          "/tour/r1.webp",
          "/tour/r2.jpg",
          
        ],      
        highlights: [
        "Less crowded historical site",
        "Sacred forest with herbal plants",
        "Hidden meditation platforms"
      ],
      bestTime: "June to September."
    },
    
    {
      id: "jaffna",
      name: "Jaffna",
      description: "Cultural hub of Tamil heritage with historic temples, libraries, and forts.",
      image: "/tour/j.jpg",
      images: [
          "/tour/j1.jpeg",
          "/tour/j2.jpg",
          
        ],      
        highlights: [
        "Nallur Kovil and Jaffna Fort",
        "Jaffna Library and vibrant markets",
        "Islands like Delft and Kayts"
      ],
      bestTime: "May to September."
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
        image: "/tour/y.jpg",
        images: [
          "/tour/y1.jpg",
          "/tour/y2.jpg",
          
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
        image: "/tour/k.jpg",
        images: [
          "/tour/k1.jpg",
          "/tour/k2.jpg",
          
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
        image: "/tour/v.jpg",
        images: [
          "/tour/v1.avif",
          "/tour/v2.jpg",
        
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
        image: "/tour/mi.jpg",
        images: [
          "/tour/mi1.jpg",
          "/tour/mi2.jpg",
          
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
        image: "/tour/si.jpg",
        images: [
          "/tour/sii.jpg",
          "/tour/siii.jpg",
          
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
        image: "/tour/h.jpg",
        images: [
          "/tour/h1.jpg",
          "/tour/h2.jpg",
          
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
        image: "/des/a12.jpg",
        images: [
          "/des/a14.jpg",
          "/des/a13.webp",
          
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
        image: "/tour/z.jpg",
        images: [
          "/tour/z1.jpg",
          "/tour/z2.jpg",
          
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
        image: "/tour/u.jpg",
        images: [
          "/tour/u1.jpg",
          "/tour/u2.webp",
          
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
        id:"Hirikatiya Beach",
        name: "Hirikatiya",
        description: "Hidden gem with a crescent-shaped bay and calm waters.",
        image: "/tour/hirikatiya.webp",
        images: [
          "/tour/hirikatiya1.jpg",      
          "/tour/hirikatiya2.jpg",
        ],
        highlights: [
          "Crescent-shaped bay with calm waters ideal for swimming",
          "Great for beginner surfers and paddleboarding",    
          "Relaxed, less commercialized atmosphere",
          "Nearby cafes and beach huts for food and drinks",
        ],
        bestTime: "November to April for the best beach weather.",
      },
      {
        id: "kalpitiya",
        name: "Kalpitiya",
        description: "Kite surfing hotspot with pristine beaches and lagoons.",
        image: "/tour/ka.jpg",
        images: [
          "/tour/kaa.jpg",
          "/tour/kaaa.jpg",
          
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
        image: "/des/t1.jpg",
        images: [
          "/des/t2.jpg",
          "/des/t3.jpg",
          
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
        image: "/tour/b.jpg",
        images: [
          "/tour/b1.jpg",
          "/tour/b2.jpg",
          
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
        image: "/tour/hu.png",
        images: [
          "/tour/huu.jpg",
          "/tour/huuu.jpg",
          
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
        image: "/tour/t.jpg",
        images: [
          "/tour/t1.jpg",
          "/tour/t2.jpg",
         
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
        image: "/tour/kit.jpg",
        images: [
          "/tour/kit1.jpg",
          "/tour/kit2.jpg",
          
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
      id: "madu-ganga",
      name: "Madu Ganga River Safari",
      description: "Mangrove ecosystem boat ride through serene waterways.",
      image: "/tour/m.jpg",
      images: [
          "/tour/mm.jpg",
          "/tour/mmm.webp",
          
        ],      
        highlights: [
        "Mangrove forests and islands",
        "Fish spa experience",
        "Bird and monkey sightings"
      ],
      bestTime: "Dry season, November to April."
    },
      
      {
        id: "Lagoon-Kayaking",
        name: "Lagoon Kayaking",
        description: "Kayaking through serene lagoons and mangroves.",
        image: "/tour/ll.avif",
        images: [
          "/tour/l.jpg",
          "/tour/lll.jpg",
          
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
        image: "/tour/a.jpg",
        images: [
          "/tour/aa.jpg",
          "/tour/a2.jpg",
          
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
        image: "/tour/c1.jpg",
        images: [
          "/tour/c2.avif",
          "/tour/c.jpg",
          
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
        image: "/tour/li.webp",
        images: [
          "/tour/li1.jpg",
          "/tour/li2.JPG",
          
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
        image: "/tour/w.jpg",
        images: [
          "/tour/w1.jpg",
          "/tour/w2.jpg",
          
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
        image: "/tour/o.webp",
        images: [
          "/tour/o1.jpg",
          "/tour/o2.webp",
          
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
        image: "/tour/q.jpg",
        images: [
          "/tour/q1.webp",
          "/tour/q2.jpg",
          
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
        image: "/tour/f.jpg",    
        images: [
          "/tour/f1.jpg",
          "/tour/f2.webp",
          
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
        image: "/tour/ella.jpg",
        images: [
          "/tour/ellaa.jpg",
          "/tour/ellaaa.webp",
          
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
        image: "/tour/vesak.jpg",
        images: [
          "/tour/vesak1.jpg",
          "/tour/vee.jpg",
          
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
        image: "/tour/vesak2.jpg",
        images: [
          "/tour/ve.jpeg",
          "/tour/veee.jpg",
          
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
        image: "/tour/sin.jpg",
        images: [
          "/tour/aurudu.jpg",
          "/tour/aurudu1.jpg",
          
        ],
        highlights: [
          "Traditional games" ,       
          "Cooking and sharing traditional sweets like kavum and kokis",
          "Cultural rituals like lighting the hearth and anointing oil",
          "Family gatherings and community celebrations",
        
    ],
        bestTime: "April 13th or 14th (dates vary each year).",
      },
      
    ],
  },
  {
    id: "scenic",
    name: "Scenic & Upcountry Escapes",
    icon: <MountainIcon className="h-5 w-5 text-maroon-700" />,
    activities: [
      
      {
        id:"strawberryfarms",
        name: "Strawberry Farms",
        description: "Visit strawberry farms and enjoy fresh strawberries.",
        image: "/tour/sr.jpg",
        images: [
          "/tour/last.jpg",
          "/tour/sr2.jpg",
          
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
        image: "/tour/as.jpg",
        images: [
          "/tour/as1.webp",
          "/tour/as2.jpg",
          
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
        image: "/tour/riv.jpeg",
        images: [
          "/tour/riv1.jpeg",
          "/tour/riv2.jpeg",
          
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

