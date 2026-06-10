"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 60)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "team", label: "Team", href: "/team" },
    { id: "testimonials", label: "Testimonials", href: "/testimonials" },
    { id: "faq", label: "FAQ", href: "/faq" },
    { id: "credentials", label: "Credentials", href: "/credentials" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const transparent = isHome && !isScrolled

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      )}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-amber-500 transition-all duration-100 z-10"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className={cn(
              "rounded-lg p-1 transition-all duration-300",
              transparent ? "bg-white/15 backdrop-blur-sm" : "bg-white"
            )}>
              <img
                src="/logo.png"
                alt="ENVOSTRUCTS Nigeria Limited"
                style={{ height: "36px", width: "auto" }}
              />
            </div>
            <span className={cn(
              "hidden sm:block text-xs font-bold leading-tight transition-colors",
              transparent ? "text-white/90" : "text-gray-500"
            )}>
              NIGERIA LIMITED
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative pb-0.5",
                  isActive(item.href)
                    ? transparent
                      ? "text-amber-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:rounded-full"
                      : "text-[#003366] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:rounded-full"
                    : transparent
                    ? "text-white/85 hover:text-white"
                    : "text-gray-600 hover:text-[#003366]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+2348034770098" className={cn(
              "hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors",
              transparent ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-[#003366]"
            )}>
              <Phone className="w-3.5 h-3.5" />
              080-3477-0098
            </a>
            <Link href="/contact">
              <Button className={cn(
                "font-semibold text-sm rounded-full px-5 transition-all duration-300",
                transparent
                  ? "bg-amber-500 hover:bg-amber-400 text-white shadow-lg"
                  : "bg-amber-500 hover:bg-amber-600 text-white"
              )}>
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={transparent ? "text-white hover:bg-white/10" : ""}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors",
                  isActive(item.href)
                    ? "text-[#003366] bg-amber-50 border-l-4 border-amber-500 pl-2"
                    : "text-gray-700 hover:text-[#003366] hover:bg-gray-50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+2348034770098"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#003366]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              +234-080-3477-0098
            </a>
            <div className="pt-2 pb-1">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
