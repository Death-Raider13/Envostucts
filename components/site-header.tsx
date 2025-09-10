"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "team", label: "Team", href: "/team" },
    { id: "testimonials", label: "Testimonials", href: "/testimonials" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">ENVOSTRUCTS</h1>
              <p className="text-xs text-gray-600">NIGERIA LIMITED</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Quote</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium w-full text-left rounded-md ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
