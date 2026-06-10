import { Button } from "@/components/ui/button"
import { Award, CheckCircle, Building2, Users, ArrowRight, Shield, Target, Eye, Zap } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { StatsCounter } from "@/components/stats-counter"

export const metadata = {
  title: "About Us - Envostructs Nigeria Limited",
  description: "Learn about Envostructs Nigeria Limited, a multi-disciplinary design consultancy established in 2008.",
}

const TIMELINE = [
  { year: "2008", title: "Company Founded", description: "Envostructs Nigeria Limited established in Lagos. Registered with CAC (RC: 694337) and COREN licensed from day one.", side: "right" },
  { year: "2010", title: "First Major Hotel Project", description: "Secured our first multi-million naira hospitality project, marking entry into high-rise construction engineering.", side: "left" },
  { year: "2012", title: "Road Infrastructure Contracts", description: "Expanded into government road contracts including the Lekki Free Zone internal roads and national highway supervision.", side: "right" },
  { year: "2015", title: "Swiss International Hotel Begins", description: "Commenced the flagship 15-storey Swiss International Hotel project in Abeokuta — the largest project in the firm's history.", side: "left" },
  { year: "2020", title: "₦30B+ Portfolio Milestone", description: "Cumulative project portfolio exceeded ₦30 billion. Expanded team to 20+ professionals across all engineering disciplines.", side: "right" },
  { year: "2023", title: "Swiss Hotel Completed", description: "Successfully handed over the Swiss International Hotel Abeokuta — a ₦6.5 billion landmark hospitality structure.", side: "left" },
  { year: "2024", title: "Emuren–Ipele Road", description: "Commenced consultancy works on the ₦12.59 billion Emuren–Ipele Road Dualization — 14.85 km of dual carriageway.", side: "right" },
]

const CORE_VALUES = [
  { icon: <Shield className="w-7 h-7" />, title: "Safety First", text: "Zero-incident safety record across all major projects through rigorous protocols and continuous training." },
  { icon: <Target className="w-7 h-7" />, title: "Client Focus", text: "Client needs always first in mind. Every solution is tailored to deliver maximum value within budget and schedule." },
  { icon: <Eye className="w-7 h-7" />, title: "Transparency", text: "Open communication and honest reporting throughout every project phase — no surprises, no hidden costs." },
  { icon: <Zap className="w-7 h-7" />, title: "Innovation", text: "Embracing modern engineering methodologies and technologies to deliver superior, future-proof solutions." },
]

const CREDENTIALS = [
  { label: "CAC Registered", value: "RC: 694337" },
  { label: "COREN Licensed", value: "Registered Engineers" },
  { label: "NSE Members", value: "Nigerian Society of Eng." },
  { label: "Established", value: "June 2008, Lagos" },
  { label: "Share Capital", value: "₦11 Million" },
  { label: "Staff Strength", value: "20+ Professionals" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/swiss-international%20hotel.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            About<br />
            <span className="text-amber-400">Envostructs</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A multi-disciplinary design consultancy, construction and project management practice outfit — delivering engineering excellence across Nigeria since 2008.
          </p>
        </div>
      </section>

      {/* ── MISSION / VISION DARK STRIP ── */}
      <section className="bg-[#0a0e1a] py-20 grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal direction="right">
              <div>
                <div className="w-10 h-0.5 bg-amber-500 mb-5" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Our Mission</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  To be recognized as a pre-eminent African Design/Construction Consultant and Contractors brand, providing superior solutions within our niche markets with our client's need always first in mind, a fair return to the owners, and fulfilling and rewarding careers to all our staff.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div>
                <div className="w-10 h-0.5 bg-amber-500 mb-5" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Our Objectives</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  To create satisfactory customers base by offering value to clients, staff, environment and the investors.
                </p>
                <ul className="space-y-3">
                  {["Deliver quality beyond client expectations", "Maintain ethical and professional standards", "Invest in continuous staff development", "Apply sustainable engineering practices"].map((obj) => (
                    <li key={obj} className="flex items-center gap-3 text-white/60 text-sm">
                      <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE — alternating image + text ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="section-label">Background</span>
              <h2 className="section-title mb-4">Who We Are</h2>
            </div>
          </Reveal>

          <div className="space-y-20">
            {/* Row 1 — image right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal direction="right">
                <div>
                  <span className="section-label">Engineering Depth</span>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Multi-Disciplinary Expertise</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Envostructs Nigeria Limited is a full-service engineering firm established in Lagos in June 2008. We offer a wide range of consultancy services from geotechnical investigation and foundation design to full-scale construction management.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our team of 20+ professionals includes civil/structural engineers, architects, mechanical and electrical engineers, quantity surveyors, and specialist consultants — enabling us to manage complex, multi-disciplinary projects from a single point of accountability.
                  </p>
                </div>
              </Reveal>
              <Reveal direction="left">
                <div className="relative">
                  <img src="/swiss-international%20hotel.jpg" alt="Swiss International Hotel" className="w-full h-80 object-cover rounded-2xl shadow-2xl" />
                  <div className="absolute -bottom-4 -left-4 bg-amber-500 text-white rounded-xl px-5 py-3">
                    <p className="font-black text-xl">₦6.5B</p>
                    <p className="text-xs opacity-80">Swiss International Hotel</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Row 2 — image left */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal direction="right">
                <div className="relative order-2 md:order-1">
                  <img src="/lekki%20free%20zone.jpg" alt="Lekki Free Zone Roads" className="w-full h-80 object-cover rounded-2xl shadow-2xl" />
                  <div className="absolute -bottom-4 -right-4 bg-[#003366] text-white rounded-xl px-5 py-3">
                    <p className="font-black text-xl">60+</p>
                    <p className="text-xs opacity-80">Projects Completed</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left" className="order-1 md:order-2">
                <div>
                  <span className="section-label">Track Record</span>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Proven Across All Sectors</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Over 16 years, Envostructs has delivered projects across hospitality, educational, government, commercial, religious, and infrastructure sectors — from luxury hotels and research hostels to bridges, roads, and jetties.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our client portfolio includes Lagos State Government, Swiss International Hotels, First Bank Nigeria, NASFAT, Lekki Free Zone Development Company, and numerous private developers across Nigeria.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="section-label">Our Journey</span>
              <h2 className="section-title mb-4">Company Timeline</h2>
              <p className="section-desc">Key milestones in our 16-year history</p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-amber-500 via-amber-300 to-amber-100 hidden md:block" />

            <div className="space-y-10">
              {TIMELINE.map((item) => (
                <div key={item.year} className={`relative flex items-center ${item.side === "right" ? "md:justify-start" : "md:justify-end"}`}>
                  <Reveal direction={item.side === "right" ? "right" : "left"} className="w-full md:w-5/12">
                    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-amber-500 ${item.side === "right" ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}`}>
                      <div className="inline-block bg-amber-500 text-white font-black text-sm px-3 py-1 rounded-full mb-3">{item.year}</div>
                      <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </Reveal>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-md hidden md:block z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS (dark) ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">By The Numbers</span>
              <h2 className="section-title-light mb-4">Our Impact</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Experience", value: 16, suffix: "+" },
              { label: "Projects Completed", value: 60, suffix: "+" },
              { label: "Professional Staff", value: 20, suffix: "+" },
              { label: "Project Value (₦B)", value: 30, suffix: "B+" },
            ].map((stat, i) => (
              <Reveal key={stat.label} direction="up" delay={i * 100}>
                <div>
                  <div className="text-5xl md:text-6xl font-black text-amber-400 tabular-nums mb-2">
                    <StatsCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">What Drives Us</span>
              <h2 className="section-title mb-4">Core Values</h2>
              <p className="section-desc">The principles that guide every decision and every project</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((val, i) => (
              <Reveal key={val.title} direction="up" delay={i * 80}>
                <div className="group border border-gray-100 rounded-2xl p-8 hover:border-amber-500 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500 rounded-xl mb-5 flex items-center justify-center text-amber-600 group-hover:text-white transition-all duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.text}</p>
                  <div className="mt-4 h-0.5 w-8 group-hover:w-full bg-amber-500 transition-all duration-500 rounded-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ── */}
      <section className="py-14 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-10">
              <span className="section-label">Certifications & Registration</span>
              <h2 className="text-2xl font-black text-white">Professional Credentials</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.label} direction="up" delay={i * 60}>
                <div className="border border-white/20 rounded-xl px-4 py-4 text-center hover:bg-white/10 transition-colors duration-300">
                  <p className="text-white/50 text-xs mb-1">{c.label}</p>
                  <p className="text-white font-bold text-sm">{c.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Work With Us</span>
            <h2 className="section-title mb-5">Ready to Start Your Project?</h2>
            <p className="section-desc mb-8">Trusted by clients across Nigeria for over 16 years. Let us bring the same engineering excellence to your next project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent rounded-full px-8">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
