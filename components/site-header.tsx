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
      setIsScrolled(scrollY > 50)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "bg-[#001529]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20"
          : "bg-gradient-to-b from-[#001529]/95 via-[#001529]/70 to-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-amber-500 transition-all duration-100 z-10"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
            <div className="flex items-center transition-all duration-300">
              <img
                src="/logo-transparent.png"
                alt="ENVOSTRUCTS Nigeria Limited"
                className="transition-all duration-300 brightness-0 invert drop-shadow-md"
                style={{ height: "38px", width: "auto" }}
              />
            </div>
            <div className="block">
              <span className="block text-xs sm:text-sm font-black leading-tight text-white tracking-wide">
                ENVOSTRUCTS
              </span>
              <span className="block text-[10px] font-semibold tracking-wider text-amber-400">
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
                  "text-xs font-bold uppercase tracking-wider transition-colors duration-200 relative pb-1",
                  isActive(item.href)
                    ? "text-amber-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:rounded-full"
                    : "text-white/85 hover:text-amber-300"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+2348034770098"
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              080-3477-0098
            </a>
            <Link href="/#estimator">
              <Button
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-full px-4 shadow-lg shadow-amber-900/30 transition-all duration-300 hover:scale-105"
              >
                <Calculator className="w-3.5 h-3.5 mr-1.5 text-slate-950" />
                Scope &amp; BOQ
              </Button>
            </Link>
          </nav>

          {/* Mobile/Tablet hamburger */}
          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 transition-all flex items-center justify-center"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-amber-400" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div className="xl:hidden bg-[#001529]/98 backdrop-blur-xl border-t border-amber-500/20 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-3 py-2.5 text-sm font-bold rounded-xl transition-colors",
                  isActive(item.href)
                    ? "text-amber-400 bg-amber-500/15 border-l-4 border-amber-400 pl-3"
                    : "text-white/85 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+2348034770098"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-amber-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 text-amber-400" />
              +234-080-3477-0098
            </a>
            <div className="pt-2 pb-2 grid grid-cols-2 gap-2">
              <Link href="/#estimator" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-full text-xs">
                  BOQ Estimator
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-full text-xs shadow-lg shadow-amber-900/30">
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
