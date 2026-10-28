import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Target, Eye, Zap, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { StatsCounter } from "@/components/stats-counter"

export const metadata = {
  title: "About Us - Envostructs Nigeria Limited (RC: 694337)",
  description:
    "Learn about Envostructs Nigeria Limited, a multi-disciplinary geotechnical, structural, civil engineering, and project management powerhouse with 20+ years of experience across Nigeria.",
}

const TIMELINE = [
  {
    year: "2008",
    title: "Corporate Incorporation & Geotechnical Foundation",
    description:
      "Envostructs Nigeria Limited established in Lagos (RC: 694337) and COREN licensed, launching coastal subsoil investigations and deep piling across Lagos Island, Ikoyi, and Lekki.",
    side: "right",
  },
  {
    year: "2012",
    title: "Commercial Banking & Institutional Rollouts",
    description:
      "Expanded into nationwide commercial bank developments (15+ branches for Zenith Bank, Access/Diamond Bank) and major institutional projects including NASFAT complexes.",
    side: "left",
  },
  {
    year: "2016",
    title: "World Bank Corridors & FAAN Aviation Runways",
    description:
      "Executed World Bank-assisted Mile 12–Ikorodu dual carriageway rehabilitation works and FAAN Domestic Runway 18L/36R asphaltic concrete resurfacing at Murtala Muhammed Airport.",
    side: "right",
  },
  {
    year: "2020",
    title: "Industrial Free Zones & National Landmarks",
    description:
      "Delivered multi-level car park structures at the National Theatre Iganmu (₦350M), Lekki Free Zone industrial roads N5 & E6A (₦464M), and the 12-block Soilless Farm Lab Hostel (₦850M).",
    side: "left",
  },
  {
    year: "2023",
    title: "₦12.59B Highway Dualization & Hospitality Upgrades",
    description:
      "Executed the landmark ₦12.59 Billion Emuren–Ipele Road Dualization in Ondo State, Continent Hotel Remodelling in Akure, and architectural/structural engineering for The New Onilegbale Palace.",
    side: "right",
  },
  {
    year: "2025",
    title: "LASBCA Certified Accreditors Program (CAP) & ₦500B+ Milestone",
    description:
      "Partnered with the Lagos State Building Control Agency (LASBCA) under the Certified Accreditors Program (CAP) in Isolo/Okota District, surpassing 100+ completed projects and ₦500B+ cumulative portfolio value.",
    side: "left",
  },
]

const CORE_VALUES = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Safety First",
    text: "Zero-compromise HSE record and statutory LASBCA-CAP structural stability monitoring across every site.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Client Focus",
    text: "Client needs always first in mind. Every solution is engineered to deliver maximum structural value within budget and schedule.",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Transparency",
    text: "Open FIDIC-aligned communication, audited corporate governance, and honest reporting throughout every project phase.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Precision",
    text: "Calibrated geotechnical soil testing, non-destructive testing (NDT), and Eurocode/British Standard structural design.",
  },
]

const CREDENTIALS = [
  { label: "CAC Registered", value: "RC: 694337" },
  { label: "COREN Licensed", value: "R6610 Registered" },
  { label: "LASBCA Partner", value: "CAP Accredited (Isolo/Okota)" },
  { label: "Experience", value: "20+ Years" },
  { label: "Share Capital", value: "₦1 Million" },
  { label: "Staff Strength", value: "100+ Professionals" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/soiless-farm-hostel.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Story • RC: 694337</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            About
            <br />
            <span className="text-amber-400">Envostructs</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed">
            We are a multi-disciplinary design consultancy, construction, and project management powerhouse—delivering
            world-class engineering solutions across Nigeria for over 20 years.
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
                  To be recognized as a pre-eminent African Design/Construction Consultant and Contractors brand,
                  providing superior solutions within our niche markets with our client&apos;s need always first in
                  mind, a fair return to the owners, and fulfilling and rewarding careers to all our staff.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div>
                <div className="w-10 h-0.5 bg-amber-500 mb-5" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Our Objectives</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  To create a satisfactory customer base by offering value to clients, staff, environment and the
                  investors.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver geotechnical and structural quality beyond client expectations",
                    "Maintain strict COREN, NSE, and LASBCA-CAP statutory standards",
                    "Invest in continuous staff development across our 100+ workforce",
                    "Apply sustainable and resilient civil engineering practices",
                  ].map((obj) => (
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

          {/* LASBCA-CAP Callout */}
          <Reveal direction="up">
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="w-16 h-16 bg-[#003366] text-amber-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#003366] block mb-1">
                  Government Regulatory Partnership • Isolo / Okota District, Lagos
                </span>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  LASBCA Certified Accreditors Program (CAP / CAPS)
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Envostructs works closely with the <strong>Lagos State Building Control Agency (LASBCA)</strong> under
                  the prestigious <strong>Certified Accreditors Program (CAP)</strong>. Operating from our Isolo/Okota
                  district office in Lagos State, we monitor, inspect, and evaluate abandoned, uncompleted, or
                  structurally unstable buildings using calibrated Non-Destructive Testing (NDT) to safeguard lives and
                  enforce statutory building compliance.
                </p>
              </div>
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
                    Envostructs Nigeria Limited (RC: 694337) is a full-service engineering consultancy and construction
                    firm with over 20 years of industry experience. We offer a complete spectrum of services from
                    geotechnical borehole investigation and pile foundation engineering to full-scale highway and
                    building construction.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our workforce of 100+ professionals includes COREN-registered civil/structural engineers,
                    geotechnical specialists, architects, mechanical and electrical engineers, quantity surveyors, and
                    town planners — enabling us to manage complex projects from a single point of accountability.
                  </p>
                </div>
              </Reveal>
              <Reveal direction="left">
                <div className="relative">
                  <img
                    src="/dualization%20of%20ipele.jpg"
                    alt="Emuren-Ipele Road Dualization"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-amber-500 text-slate-950 rounded-xl px-5 py-3 shadow-lg">
                    <p className="font-black text-xl">₦12.59B</p>
                    <p className="text-xs font-bold">Emuren–Ipele Road Dualization</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Row 2 — image left */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal direction="right">
                <div className="relative order-2 md:order-1">
                  <img
                    src="/lekki%20free%20zone.jpg"
                    alt="Lekki Free Zone Roads"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#003366] text-white rounded-xl px-5 py-3 shadow-lg">
                    <p className="font-black text-xl">100+</p>
                    <p className="text-xs opacity-80">Projects Completed</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left" className="order-1 md:order-2">
                <div>
                  <span className="section-label">Track Record</span>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Proven Across All Sectors</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    For over 20 years, Envostructs has delivered 100+ projects valued at over ₦500B+ across government
                    infrastructure (20+), commercial banking (15+), corporate commercial (10+), and private individual
                    developments (60+).
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our client portfolio includes the Lagos State Government, LASBCA (CAP), Federal Airports Authority
                    of Nigeria (FAAN), Continent Hotels, Soilless Farm Laboratory, NASFAT, Lekki Free Zone Development
                    Company, Zenith Bank, and Access/Diamond Bank.
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
              <p className="section-desc">Key milestones across 20+ years of engineering excellence</p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-amber-500 via-amber-300 to-amber-100 hidden md:block" />

            <div className="space-y-10">
              {TIMELINE.map((item) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    item.side === "right" ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <Reveal direction={item.side === "right" ? "right" : "left"} className="w-full md:w-5/12">
                    <div
                      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-amber-500 ${
                        item.side === "right" ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                      }`}
                    >
                      <div className="inline-block bg-amber-500 text-slate-950 font-black text-sm px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </div>
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
              { label: "Years of Experience", value: 20, suffix: "+" },
              { label: "Projects Completed", value: 100, suffix: "+" },
              { label: "Staff Strength", value: 100, suffix: "+" },
              { label: "Project Value (₦)", value: 500, suffix: "B+" },
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
            <p className="section-desc mb-8">
              Trusted by government agencies, banks, and developers across Nigeria for over 20 years. Let us bring the
              same engineering excellence to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#estimator">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-full px-8 hover:scale-105 transition-all duration-300"
                >
                  Launch Scope & BOQ Estimator <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent rounded-full px-8"
                >
                  View Our Portfolio (100+)
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
