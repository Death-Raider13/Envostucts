"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  const navigationItems = [
    { id: "about", label: "About Us", href: "/about" },
    { id: "services", label: "Our Services", href: "/services" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "team", label: "Our Team", href: "/team" },
    { id: "testimonials", label: "Testimonials", href: "/testimonials" },
    { id: "contact", label: "Contact", href: "/contact" },
   
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">ENVOSTRUCTS NIGERIA LIMITED</h3>
            <p className="text-gray-300 mb-6">
              Accredited Continent International Hotels Design/Construction Consultants & Contractors. Providing
              superior engineering solutions since 2008.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Geotechnical Services</li>
              <li>Design & Documentation</li>
              <li>Construction Works</li>
              <li>Project Management</li>
              <li>Highway Design</li>
              <li>Water & Environmental</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Envostructs Nigeria Limited. All rights reserved. | Registered: June 2008 | RC Number: [Company
            Registration Number]
          </p>
        </div>
      </div>
    </footer>
  )
}
