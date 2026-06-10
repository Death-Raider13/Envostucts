"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle, ArrowUp, Download, Linkedin, Facebook, Send } from "lucide-react"

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      setStatus(data.success ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <p className="text-amber-400 text-sm font-semibold flex items-center gap-2">
        <span className="w-2 h-2 bg-amber-400 rounded-full inline-block" />
        Subscribed! We'll be in touch soon.
      </p>
    )
  }

  return (
    <form onSubmit={submit} className="flex gap-2 w-full max-w-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-colors"
        style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 shrink-0 flex items-center gap-1.5"
        style={{ backgroundColor: "#F59E0B" }}
      >
        <Send className="w-3.5 h-3.5" />
        {status === "loading" ? "..." : "Subscribe"}
      </button>
    </form>
  )
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-[#0a0e1a] text-white">
      {/* CTA Banner */}
      <div className="bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">Ready to start your next project?</h3>
            <p className="text-blue-300 text-sm mt-1">Professional engineering solutions — competitive pricing — COREN certified.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:+2348034770098"
              className="inline-flex items-center gap-2 bg-white text-[#003366] font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/2348034770098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter strip */}
      <div style={{ backgroundColor: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="shrink-0">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-amber-400" />
              <p className="text-white font-bold text-sm">Stay Updated</p>
            </div>
            <p className="text-white/40 text-xs">Project news, engineering insights and company updates</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-xl p-1.5 shrink-0">
                <img src="/logo.png" alt="ENVOSTRUCTS Nigeria Limited" style={{ height: "36px", width: "auto" }} />
              </div>
              <div>
                <p className="font-black text-white text-xs tracking-wide">ENVOSTRUCTS</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase">Nigeria Limited</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Multi-disciplinary design consultancy, construction and project management delivering engineering excellence across Nigeria since 2008.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-white/50 text-xs">51, Akanro Street, Ilasa Bustop, Yaba, Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-white/50 text-xs">+234-080-3477-0098</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-white/50 text-xs">envostructs@gmail.com</span>
              </div>
            </div>

            {/* Social links + profile download */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <a
                  href="https://wa.me/2348034770098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://linkedin.com/company/envostructs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#0A66C2] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://facebook.com/envostructs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
              </div>
              <a
                href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
                download="ENVOSTRUCTS-Company-Profile.pdf"
                className="inline-flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                Download Company Profile
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs mb-5 tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Projects", href: "/projects" },
                { label: "Our Team", href: "/team" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "FAQ", href: "/faq" },
                { label: "Credentials", href: "/credentials" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs mb-5 tracking-widest uppercase">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                "Geotechnical Services",
                "Design & Documentation",
                "Construction Works",
                "Project Management",
                "Highway Design",
                "Water & Environmental",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-white/50 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="text-white font-bold text-xs mb-5 tracking-widest uppercase">Credentials</h4>
            <div className="space-y-3">
              {[
                { label: "CAC Registration", value: "RC: 694337" },
                { label: "COREN Licensed", value: "Registered Engineers" },
                { label: "NSE Members", value: "Nigerian Society of Engineers" },
                { label: "Established", value: "June 2008, Lagos" },
                { label: "Share Capital", value: "₦11 Million" },
              ].map(({ label, value }) => (
                <div key={label} className="border-l-2 border-amber-500/50 pl-3">
                  <p className="text-white/40 text-xs">{label}</p>
                  <p className="text-white/80 text-xs font-semibold mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {currentYear} Envostructs Nigeria Limited. All rights reserved. | RC: 694337 | COREN Registered
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 bg-amber-500/20 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}
