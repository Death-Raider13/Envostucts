import { Button } from "@/components/ui/button"
import {
  Wrench, Ruler, Hammer, HardHat, Truck, Droplets,
  CheckCircle, ArrowRight, Building, Cog, Search, ClipboardCheck,
  Phone, MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"

export const metadata = {
  title: "Our Services - Envostructs Nigeria Limited",
  description: "Comprehensive engineering solutions from conception to completion. Geotechnical services, design, construction, and project management.",
}

const MAIN_SERVICES = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Geotechnical Services",
    description: "Comprehensive soil investigation and foundation analysis for all types of construction projects.",
    features: ["Feasibility Studies Development", "Geotechnical Site Investigations", "Laboratory Testing & Analysis", "Engineering Analysis & Reporting", "Pile Foundation Construction", "Construction Observation & Testing"],
    photo: "/lekki%20freezone%20subsoil.png",
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Design & Documentation",
    description: "Complete architectural and engineering design solutions with detailed documentation.",
    features: ["Detailed Project Programming", "Architectural/Structural Designs", "Civil Engineering Drawings", "Tender Documentation", "Project Control Manual", "Complete Contract Documentation"],
    photo: "/first-bank%20designs.png",
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Construction Works",
    description: "Full-scale construction and infrastructure development services.",
    features: ["Buildings Construction", "Road Works & Asphalting", "Jetties & Culverts", "Drainage Systems", "Concrete Pavements", "Interlocking Paved Ways"],
    photo: "/swiss-international%20hotel.jpg",
  },
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Project Management",
    description: "End-to-end project coordination and oversight from conception to completion.",
    features: ["Budgeting & Programming", "Progress Monitoring & Control", "Contract Documentation", "Tender Evaluation", "Client Liaison", "Quality Control/Commissioning"],
    photo: "/soiless-farm-hostel.jpg",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Highway Design",
    description: "Transportation infrastructure and traffic engineering solutions.",
    features: ["Bridge Design & Construction", "Road Networks Development", "Urban & Inter-urban Highways", "Traffic Control Systems", "Mass Transit Projects", "Route Location & Geometrical Design"],
    photo: "/dualization%20of%20ipele.jpg",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Water & Environmental",
    description: "Water resources and environmental health engineering services.",
    features: ["Water Supply Projects", "Sewerage Systems Design", "Water Treatment Plants", "Drainage & Canalization", "Environmental Protection", "Hydrological Studies"],
    photo: "/community%20bridge%20project.jpg",
  },
]

const SPECIALIZED = [
  { icon: <Search className="w-7 h-7" />, title: "Inspection & Testing", description: "Quality control and reporting on materials, plants and equipment during manufacture and construction." },
  { icon: <Building className="w-7 h-7" />, title: "Engineering Services in Buildings", description: "Rehabilitation of existing mechanical and electrical works, borehole installation, and security systems." },
  { icon: <Cog className="w-7 h-7" />, title: "Construction Supervision", description: "Professional supervision of construction works for residential, commercial, and industrial projects." },
  { icon: <ClipboardCheck className="w-7 h-7" />, title: "Structural Appraisal", description: "Inspection of existing structures to determine structural stability and renovation requirements." },
]

const WHY_US = [
  { img: "/lekki%20free%20zone.jpg", label: "Infrastructure", title: "Road & Highway Excellence", text: "From rural roads to multi-lane urban highways — Envostructs brings precision design and quality construction to every kilometre." },
  { img: "/swiss-international%20hotel.jpg", label: "Hospitality", title: "High-Rise Construction", text: "15-storey landmark projects delivered on time and to exacting specifications, combining structural engineering with architectural elegance." },
]

const PROCESS_STEPS = [
  { num: "01", title: "Site Investigation", text: "Geotechnical and topographic survey to understand ground conditions and site constraints." },
  { num: "02", title: "Design", text: "Structural, civil, and MEP engineering designs with full documentation and tender packages." },
  { num: "03", title: "Documentation", text: "Contract administration, BOQs, specifications, and regulatory approvals managed for you." },
  { num: "04", title: "Execution", text: "Quality construction with continuous supervision, testing, and progress reporting to clients." },
  { num: "05", title: "Handover", text: "Full commissioning, as-built drawings, and post-completion support to ensure long-term performance." },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/lekki%20free%20zone.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">What We Offer</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Engineering<br />
            <span className="text-amber-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Comprehensive engineering solutions from conception to completion across six core disciplines.
          </p>
        </div>
      </section>

      {/* ── CORE SERVICES (dark grid) ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Core Expertise</span>
              <h2 className="section-title-light mb-4">Our Services</h2>
              <p className="text-white/50 text-lg">Six disciplines — one team — total engineering accountability</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((service, i) => (
              <Reveal key={service.title} direction="up" delay={i * 60}>
                <div className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-36 overflow-hidden">
                    <img src={service.photo} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-amber-500/20 group-hover:bg-amber-500 rounded-xl flex items-center justify-center text-amber-400 group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-black text-white mb-2">{service.title}</h3>
                    <p className="text-white/50 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1.5 flex-1">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-white/60 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIZED SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Additional Expertise</span>
              <h2 className="section-title mb-4">Specialized Services</h2>
              <p className="section-desc">Complementary capabilities that complete our end-to-end offering</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZED.map((svc, i) => (
              <Reveal key={svc.title} direction="up" delay={i * 80}>
                <div className="group border border-gray-100 rounded-2xl p-7 hover:border-amber-500 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500 rounded-xl mb-5 flex items-center justify-center text-amber-600 group-hover:text-white transition-all duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                  <div className="mt-4 h-0.5 w-8 group-hover:w-full bg-amber-500 transition-all duration-500 rounded-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="section-label">How We Work</span>
              <h2 className="section-title mb-4">Our Process</h2>
              <p className="section-desc">Five disciplined phases for every successful project</p>
            </div>
          </Reveal>

          {/* Desktop connector line */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.num} direction="up" delay={i * 80}>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-white border-2 border-amber-500 rounded-full mx-auto mb-5 flex items-center justify-center text-amber-600 font-black text-xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-lg relative z-10">
                    {step.num}
                  </div>
                  <h3 className="text-base font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US — alternating rows ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="section-label">Why Envostructs</span>
              <h2 className="section-title mb-4">Why Choose Us</h2>
              <p className="section-desc">See the difference in our completed works</p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {WHY_US.map((item, i) => (
              <div key={item.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                <Reveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <div>
                    <span className="section-label">{item.label}</span>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.text}</p>
                    <ul className="space-y-3">
                      {["16+ years of proven experience", "COREN certified engineers", "Transparent project reporting", "On-time, on-budget delivery"].map((point) => (
                        <li key={point} className="flex items-center gap-3 text-gray-700 text-sm">
                          <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "md:col-start-1" : ""}>
                  <img src={item.img} alt={item.title} className="w-full h-80 object-cover rounded-2xl shadow-2xl" />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA DARK ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Get Started</span>
            <h2 className="section-title-light mb-5">Ready to Start Your Project?</h2>
            <p className="text-white/50 text-lg mb-10">Get in touch with our team of experts to discuss your engineering needs. We respond within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+2348034770098">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-full px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 080-3477-0098
                </Button>
              </a>
              <a href="https://wa.me/2348034770098" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-semibold rounded-full px-8" style={{ backgroundColor: "#25D366" }}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
