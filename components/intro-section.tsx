"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

export function IntroSection() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <SectionHeading title="Welcome to Explorative Tours!" decorative={true} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As one of Sri Lanka's leading travel agents, we strive to provide you with an unforgettable travel
              experience in the island with access to the best hotels, top tourist attractions and adventure activities.
              We always put your comfort and satisfaction first.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With Explorative Tours, you can have a safe travel with a wealth of experiences at a low cost. If you want
              to break away from the conventional way and have a new and different travel experience, you should
              definitely choose us.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">About Us</h3>
              <p className="text-gray-700">
                We are the premier travel agency in Sri Lanka, offering special protection and services. Our mission is
                to provide maximum travel experience while ensuring your safety and enjoyment.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Sri Lankan landscape"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
