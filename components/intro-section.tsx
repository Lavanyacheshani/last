"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "./language-context"

export function IntroSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white relative scroll-mt-24" id="about">
      <div className="container mx-auto px-4">
        <SectionHeading title={t?.introTitle || "Welcome to Explorative Tours!"} decorative={true} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t?.introParagraph1 || "As one of Sri Lanka’s leading travel agencies, we are committed to providing you with an unforgettable travel experience on the island. We offer access to the finest hotels, top tourist attractions, and exciting adventure activities, always prioritizing your comfort and satisfaction."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t?.introParagraph2 || "With Explorative Tours, you can enjoy a safe journey filled with rich experiences at an affordable cost. If you're looking to break away from the ordinary and embrace a fresh, unique travel adventure, we are the perfect choice for you."}
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t?.about || "About Us"}</h3>
              <p className="text-gray-700">
                {t?.introAboutBoxText || "We are the premier travel agency in Sri Lanka, offering special protection and services. Our mission is to provide maximum travel experience while ensuring your safety and enjoyment."}
              </p>
            </div>
          </div>

          {/* Right Image and Stats */}
          <div className="relative">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/aboutus.png"
                alt={t?.introImageAlt || "Sri Lankan landscape"}
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Background Circles */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full -z-10"></div>

            {/* Floating Box: 10+ Years Experience */}
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-400 p-4 text-white shadow-xl">
              <div className="flex h-full flex-col items-center justify-center text-center space-y-2">
                
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">{t?.introYearsExperience || "Years Of Experience"}</div>
              </div>
            </div>

            {/* Floating Box: 500+ Happy Clients */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-amber-400 p-3 text-white shadow-xl flex flex-col items-center justify-center space-y-1">
              
              <div className="text-center">
                <div className="text-xl font-bold">1000+</div>
                <div className="text-[10px] leading-tight">{t?.introHappyClients || "Happy Clients"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
