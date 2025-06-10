import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Explorative Tours(Pvt) LTD Sri Lanka</h3>
            <p className="text-gray-300 mb-4">
              Your premier travel partner in Sri Lanka, offering unforgettable experiences with safety and comfort.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#tours" className="text-gray-300 hover:text-white transition-colors">
                  Tours & Activities
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-gray-300 hover:text-white transition-colors">
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">123 Tourism Road, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+94 789920063</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">explorativetourssrilanka@gmail.com</span>
              </li>
              <li className="flex items-center">
              <span className="text-gray-300">
              <strong>Opening hours:</strong> 24 hours
              </span>
              </li>
              <li className="flex items-center">
              <span className="text-gray-300">
              <strong>Founder & CEO:</strong> M.C.L. Gunawardhana
              </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Explorative Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
