import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Award, CheckCircle, Building, Users, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"

export const metadata: Metadata = {
  title: "Credentials & Certifications | Envostructs Nigeria Limited",
  description:
    "Envostructs Nigeria Limited is COREN-licensed, NSE-registered, and CAC-incorporated — your assurance of engineering professionalism and accountability.",
}

const REGISTRATIONS = [
  {
    icon: Building,
    label: "CAC Registration",
    value: "RC: 694337",
    issuer: "Corporate Affairs Commission",
    detail: "Fully incorporated under the Companies and Allied Matters Act (CAMA). Legally authorised to conduct engineering consultancy and construction business in Nigeria.",
    color: "#003366",
  },
  {
    icon: Shield,
    label: "COREN Licensed",
    value: "Registered Engineers",
    issuer: "Council for the Regulation of Engineering in Nigeria",
    detail: "All principal engineers are COREN-licensed — the statutory requirement for practising engineering in Nigeria. COREN registration ensures our engineers meet the highest professional and ethical standards.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    label: "NSE Member",
    value: "Corporate Member",
    issuer: "Nigerian Society of Engineers",
    detail: "Corporate member of the Nigerian Society of Engineers — the premier professional body for engineers in Nigeria with over 60,000 members.",
    color: "#16a34a",
  },
  {
    icon: Award,
    label: "NSA Member",
    value: "Active Member",
    issuer: "Nigerian Society of Architects",
    detail: "Our architectural team maintains active membership of the Nigerian Society of Architects, ensuring our design work meets national professional standards.",
    color: "#7c3aed",
  },
]

const COMPANY_FACTS = [
  { label: "Year Established", value: "June 2008" },
  { label: "Share Capital", value: "₦11 Million" },
  { label: "Head Office", value: "51, Akanro Street, Ilasa Bustop, Yaba, Lagos" },
  { label: "Years in Practice", value: "16+ years" },
  { label: "Projects Completed", value: "60+" },
  { label: "Total Portfolio Value", value: "₦30+ Billion" },
]

const CAPABILITIES = [
  "Geotechnical investigations, subsoil testing and borehole drilling",
  "Structural design for residential, commercial, industrial and hospitality buildings",
  "Reinforced concrete, steel frame and hybrid structural systems",
  "Road design, pavement engineering and highway supervision",
  "Construction project management and resident engineering",
  "Deep foundation systems: bored piles, driven piles, micro-piles",
  "Bridge design, jetty construction and maritime structures",
  "Water and environmental engineering",
  "World Bank, AfDB and FGN procurement-compliant supervision",
  "Multi-storey hotel and high-rise structural engineering",
]

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section
        className="relative py-32 pt-40 text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(1,15,41,0.95) 0%, rgba(0,30,80,0.92) 100%), url('/swiss-international%20hotel.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Credentials</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Professional<br />
            <span className="text-amber-400">Accreditations</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            COREN licensed. NSE registered. CAC incorporated. 16 years of verified engineering excellence in Nigeria.
          </p>
        </div>
      </section>

      {/* Registrations grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="section-label">Regulatory Standing</span>
              <h2 className="section-title mb-4">Our Registrations & Licences</h2>
              <p className="section-desc">Every professional body that governs engineering practice in Nigeria has accredited Envostructs Nigeria Limited</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {REGISTRATIONS.map((reg, i) => (
              <Reveal key={reg.label} direction="up" delay={i * 80}>
                <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300" style={{ backgroundColor: `${reg.color}15` }}>
                      <reg.icon className="w-7 h-7" style={{ color: reg.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <p className="font-black text-gray-900 text-lg">{reg.label}</p>
                          <p className="text-gray-500 text-sm">{reg.issuer}</p>
                        </div>
                        <span className="text-sm font-bold px-3 py-1 rounded-full shrink-0" style={{ backgroundColor: `${reg.color}15`, color: reg.color }}>
                          {reg.value}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mt-3">{reg.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts — dark strip */}
      <section className="py-16 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">Company Profile</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Envostructs at a Glance</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {COMPANY_FACTS.map((fact, i) => (
              <Reveal key={fact.label} direction="up" delay={i * 60}>
                <div className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{fact.label}</p>
                  <p className="text-white font-black text-lg">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">Technical Capability</span>
              <h2 className="section-title mb-4">What We Are Qualified to Deliver</h2>
              <p className="section-desc">Backed by our registrations and 16 years of practice</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={i} direction="up" delay={(i % 2) * 60}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{cap}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download company profile + CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal direction="up">
              <div className="p-8 rounded-2xl border-2 border-amber-500/30 bg-amber-50">
                <Award className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-2">Download Company Profile</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">Full company profile including credentials, project portfolio, team profiles, and service capabilities.</p>
                <a
                  href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
                  download="ENVOSTRUCTS-Company-Profile.pdf"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
                >
                  Download PDF Profile
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={80}>
              <div className="p-8 rounded-2xl text-white" style={{ backgroundColor: "#003366" }}>
                <Phone className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-black mb-2">Verify Our Credentials</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">Government and corporate clients can contact us directly for verification letters and certified copies of all registrations.</p>
                <div className="space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="https://wa.me/2348034770098" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-sm font-bold transition-colors" style={{ backgroundColor: "#25D366" }}>
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
