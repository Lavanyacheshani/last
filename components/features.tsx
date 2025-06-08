"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Shield, Compass, Clock, Award, Users, Heart } from "lucide-react"
import { useLanguage } from "./language-context"

const Features = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Shield className="h-5 w-5 md:h-6 md:w-6" />,
      title: t?.feature_safeTravel_title || "Safe Travel",
      description: t?.feature_safeTravel_desc ||
        "Travel with complete peace of mind — we prioritize your safety with vetted drivers, modern vehicles, and 24/7 support.",
      color: "bg-emerald-100 text-emerald-700",
      gradient: "from-emerald-600 via-emerald-400 to-emerald-300",
      delay: 0,
    },
    {
      icon: <Compass className="h-5 w-5 md:h-6 md:w-6" />,
      title: t?.feature_expertGuides_title || "Expert Guides",
      description: t?.feature_expertGuides_desc ||
        "Our local guides are storytellers and cultural ambassadors who bring Sri Lanka’s rich heritage to life.",
      color: "bg-amber-100 text-amber-700",
      gradient: "from-amber-600 via-amber-400 to-amber-300",
      delay: 0.1,
    },
    {
      icon: <Clock className="h-5 w-5 md:h-6 md:w-6" />,
      title: t?.feature_flexibleItineraries_title || "Flexible Itineraries",
      description: t?.feature_flexibleItineraries_desc ||
        "Personalize your journey. Whether you want adventure, relaxation, or culture—we adapt to your rhythm.",
      color: "bg-sky-100 text-sky-700",
      gradient: "from-sky-600 via-sky-400 to-sky-300",
      delay: 0.2,
    },
    {
      icon: <Award className="h-5 w-5 md:h-6 md:w-6" />,
      title: t?.feature_premiumExperience_title || "Premium Experience",
      description: t?.feature_premiumExperience_desc ||
        "Experience first-class hospitality, handpicked destinations, and unforgettable moments tailored just for you.",
      color: "bg-purple-100 text-purple-700",
      gradient: "from-purple-600 via-purple-400 to-purple-300",
      delay: 0.3,
    },
    {
      icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
      title: t?.feature_smallGroups_title || "Small Groups",
      description: t?.feature_smallGroups_desc ||
        "We keep our groups small to ensure deeper connections, better access, and personalized attention throughout your tour.",
      color: "bg-rose-100 text-rose-700",
      gradient: "from-rose-600 via-rose-400 to-rose-300",
      delay: 0.4,
    },
    {
      icon: <Heart className="h-5 w-5 md:h-6 md:w-6" />,
      title: t?.feature_authenticConnections_title || "Authentic Connections",
      description: t?.feature_authenticConnections_desc ||
        "Go beyond sightseeing. Meet real locals, share meals, and connect with Sri Lanka’s warm spirit.",
      color: "bg-indigo-100 text-indigo-700",
      gradient: "from-indigo-600 via-indigo-400 to-indigo-300",
      delay: 0.5,
    },
  ]

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-emerald-50 filter blur-3xl opacity-70 -z-10 hidden md:block"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-50 filter blur-3xl opacity-70 -z-10 hidden md:block"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 fancy-heading-center"
          >
            {t?.featuresTitle ? t.featuresTitle.replace("Explorative Tours", "") : "Why Choose "} <span className="text-gradient">{t?.brandName || "Explorative Tours"}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-sm md:text-base text-gray-600"
          >
            {t?.featuresSubtitle || "We're dedicated to providing exceptional travel experiences with safety, expertise, and authentic connections to Sri Lankan culture and nature."}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-white p-4 md:p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              {/* Glowing circle */}
              <div
                className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
                style={{
                  background: `radial-gradient(circle, ${feature.color.split(" ")[0].replace("bg-", "var(--tw-")}, transparent)`,
                }}
              />

              {/* Icon */}
              <div className={`mb-3 md:mb-4 inline-flex rounded-full p-2 md:p-3 ${feature.color}`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-bold">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>

              {/* Animated bottom bar */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out bg-gradient-to-r ${feature.gradient}`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
