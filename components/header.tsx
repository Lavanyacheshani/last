"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Add this import
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { SriLankaTime } from "./sri-lanka-time"
import { useLanguage } from "./language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-3"
              onClick={() => {
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png" // Add your logo file to public folder
                  alt="Explorative Tours Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-maroon-700">
                {t?.brandName || "Explorative Tours"}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium">
              {t?.home || "Home"}
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-emerald-600 font-medium">
              {t?.about || "About Us"}
            </Link>
            <Link href="/#destinations" className="text-gray-700 hover:text-emerald-600 font-medium">
              {t?.destinations || "Destinations"}
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-emerald-600 font-medium">
              {t?.toursActivities || "Tours & Activities"}
            </Link>
            <Link href="/#packages" className="text-gray-700 hover:text-emerald-600 font-medium">
              {t?.packages || "Travel Packages"}
            </Link>
            
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <SriLankaTime />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.home || "Home"}
            </Link>
            <Link
              href="/#about"
              className="block text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.about || "About Us"}
            </Link>
            <Link
              href="/#destinations"
              className="block text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.destinations || "Destinations"}
            </Link>
            <Link
              href="/tours"
              className="block text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.toursActivities || "Tours & Activities"}
            </Link>
            <Link
              href="/#packages"
              className="block text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.packages || "Travel Packages"}
            </Link>
            
            <div className="pt-2 flex flex-col space-y-2">
              <LanguageSwitcher />
              <SriLankaTime />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
