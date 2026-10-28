"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calculator } from "lucide-react"
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
    { id: "international", label: "Global & EPC", href: "/#international" },
    { id: "estimator", label: "BOQ Estimator", href: "/#estimator" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "equipment", label: "Equipment", href: "/#equipment" },
    { id: "team", label: "Team", href: "/team" },
    { id: "credentials", label: "Credentials", href: "/credentials" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false
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
            <div className="flex items-center transition-all duration-300">
              <img
                src="/logo-transparent.png"
                alt="ENVOSTRUCTS Nigeria Limited"
                className={cn(
                  "transition-all duration-300",
                  transparent ? "brightness-0 invert drop-shadow-md" : ""
                )}
                style={{ height: "38px", width: "auto" }}
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "block text-xs font-black leading-tight transition-colors",
                  transparent ? "text-white" : "text-[#003366]"
                )}
              >
                NIGERIA LIMITED
              </span>
              <span
                className={cn(
                  "block text-[10px] font-semibold tracking-wider",
                  transparent ? "text-amber-400" : "text-amber-600"
                )}
              >
                RC: 694337 • COREN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-wider transition-colors duration-200 relative pb-0.5",
                  isActive(item.href)
                    ? transparent
                      ? "text-amber-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:rounded-full"
                      : "text-[#003366] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:rounded-full"
                    : transparent
                    ? "text-white/85 hover:text-amber-300"
                    : "text-gray-600 hover:text-[#003366]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+2348034770098"
              className={cn(
                "hidden 2xl:flex items-center gap-1.5 text-xs font-bold transition-colors",
                transparent ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-[#003366]"
              )}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              080-3477-0098
            </a>
            <Link href="/#estimator">
              <Button
                className={cn(
                  "font-extrabold text-xs rounded-full px-4 transition-all duration-300",
                  transparent
                    ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg"
                    : "bg-[#003366] hover:bg-[#002244] text-white"
                )}
              >
                <Calculator className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                Scope & BOQ
              </Button>
            </Link>
          </nav>

          {/* Mobile/Tablet hamburger */}
          <div className="xl:hidden">
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
        <div className="xl:hidden bg-white border-t shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-3 py-2.5 text-sm font-bold rounded-xl transition-colors",
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
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-gray-700 hover:text-[#003366]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 text-amber-500" />
              +234-080-3477-0098
            </a>
            <div className="pt-2 pb-1 grid grid-cols-2 gap-2">
              <Link href="/#estimator" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-full text-xs">
                  BOQ Estimator
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-full text-xs">
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
