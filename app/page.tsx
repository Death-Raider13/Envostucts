"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { StatsCounter } from "@/components/stats-counter"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Reveal } from "@/components/Reveal"
import { ProfileViewerModal } from "@/components/ProfileViewerModal"
import { InternationalSection } from "@/components/InternationalSection"
import { ScopeEstimator } from "@/components/ScopeEstimator"
import { TimelineSection } from "@/components/TimelineSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { EquipmentSection } from "@/components/EquipmentSection"
import { InsightsSection } from "@/components/InsightsSection"
import { FAQSection } from "@/components/FAQSection"
import {
  submitInquiryToEnvostructs,
  buildMailtoUrl,
  ENVOSTRUCTS_EMAIL,
} from "@/lib/submit-inquiry"
import {
  Building2,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Hammer,
  Ruler,
  HardHat,
  Truck,
  Droplets,
  Star,
  Calendar,
  MessageCircle,
  ShieldCheck,
  FileDown,
  Eye,
  GraduationCap,
  Briefcase,
  Globe2,
  Send,
} from "lucide-react"

const HERO_SLIDES = [
  { img: "/soiless-farm-hostel.jpg", caption: "Soilless Farm Lab Hostel — ₦850 Million" },
  { img: "/lekki%20free%20zone.jpg", caption: "Lekki Free Zone Roads — ₦464 Million" },
  { img: "/dualization%20of%20ipele.jpg", caption: "Emuren–Ipele Road Dualization — ₦12.59 Billion" },
]

function uiAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=003366&color=ffffff&size=200&bold=true`
}

const SERVICE_DIVISIONS = [
  {
    id: "geotech",
    badge: "Division 01",
    title: "Geotechnical & Piling Engineering",
    subtitle: "Subsoil Investigation, Laboratory Soil Mechanics & Deep Pile Foundations",
    description:
      "We execute comprehensive geotechnical investigations (percussion boreholes, SPT, 20-Ton Dutch CPT, laboratory triaxial/consolidation testing) and install high-capacity bored, driven, and micropile foundations engineered for Nigeria's complex coastal, swamp, and inland formations.",
    image: "/mosque%20piling.jpeg",
    stats: [
      { value: "40+", label: "ESN Subsoil Reports" },
      { value: "900mm", label: "Max Bored Pile Ø" },
    ],
    deliverables: [
      "Percussion Borehole Drilling & Standard Penetration Testing (SPT)",
      "20-Ton Dutch Cone Penetrometer Testing (CPT) & Piezometer Monitoring",
      "Atterberg Limits, Triaxial Shear, Oedometer Consolidation & CBR Lab Analysis",
      "Bored, Driven & Micropile Foundation Installation & Pile Load/Integrity Testing",
      "Certified Geotechnical Engineering Reports (ESN/SI Series) to BS 5930 & Eurocode 7",
    ],
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    id: "structural",
    badge: "Division 02",
    title: "Structural Design, NDT & LASBCA-CAP Audits",
    subtitle: "Architectural/Structural Consultancy & Certified Structural Integrity Appraisals",
    description:
      "Full-lifecycle architectural, structural, and MEP engineering design alongside non-destructive testing (NDT) and statutory building control appraisals under the Lagos State Building Control Agency (LASBCA) Certified Accreditors Program (CAP) in Isolo/Okota.",
    image: "/onilegbale-palace.jpg",
    stats: [
      { value: "LASBCA", label: "CAP Accredited" },
      { value: "EC2 / BS", label: "Design Codes" },
    ],
    deliverables: [
      "Reinforced Concrete & Structural Steelwork Design (Eurocode 2, Eurocode 3, BS 8110)",
      "LASBCA-CAP Structural Stability Monitoring for Abandoned & Uncompleted Buildings",
      "Non-Destructive Testing (Schmidt Hammer, Ultrasonic Pulse Velocity & Profometer Rebar Scan)",
      "Architectural Programming, 3D Visualization, Working Drawings & Bending Schedules",
      "Retrofitting, Structural Strengthening & Foundation Underpinning Remediation",
    ],
    icon: <Ruler className="w-5 h-5" />,
  },
  {
    id: "civil",
    badge: "Division 03",
    title: "Highways, Airfields & Turnkey Construction",
    subtitle: "Trunk Roads, Airport Runways, Multi-Storey Buildings & Marine Jetties",
    description:
      "Heavy civil infrastructure and turnkey building execution—from the ₦12.59B Emuren–Ipele dual carriageway and MMIA Runway 18L/36R resurfacing to the 12-block Soilless Farm Lab Hostel, Lekki Free Zone industrial roads, and shoreline jetties.",
    image: "/dualization%20of%20ipele.jpg",
    stats: [
      { value: "₦500B+", label: "Portfolio Value" },
      { value: "100+", label: "Projects Delivered" },
    ],
    deliverables: [
      "Dual Carriageway Highway Construction, Stone-Base & Hot-Mix Asphalt Paving",
      "Airfield Runway Resurfacing (FAAN / ICAO Annex 14 Compliance)",
      "Turnkey Residential, Institutional, Commercial Bank & Hospitality Construction",
      "Marine Jetties, Shoreline Protection, Box Culverts & Storm-Water Drainage",
      "End-to-End Project Management, FIDIC Contract Administration & Cost Control",
    ],
    icon: <Truck className="w-5 h-5" />,
  },
]

const SERVICES = [
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Geotechnical Services",
    description: "Comprehensive soil investigation and foundation analysis",
    features: [
      "Feasibility Studies",
      "Site Investigations (Boreholes & CPT)",
      "Laboratory Soil & Material Testing",
      "Geotechnical Engineering Analysis",
      "Bored & Micropile Foundation Construction",
    ],
  },
  {
    icon: <Ruler className="w-7 h-7" />,
    title: "Design & Documentation",
    description: "Complete architectural and engineering design solutions",
    features: [
      "Project Programming",
      "Architectural Designs",
      "Civil & Structural Engineering Drawings",
      "Tender Documentation & BOQ",
      "Project Control Manual",
    ],
  },
  {
    icon: <Hammer className="w-7 h-7" />,
    title: "Construction Works",
    description: "Full-scale construction and infrastructure development",
    features: [
      "Multi-Storey Buildings Construction",
      "Road Works & Asphaltic Resurfacing",
      "Marine Jetties & Box Culverts",
      "Storm-Water Drainage Systems",
      "Rigid & Flexible Concrete Pavements",
    ],
  },
  {
    icon: <HardHat className="w-7 h-7" />,
    title: "Project Management & LASBCA-CAP",
    description: "End-to-end project coordination & statutory structural audits",
    features: [
      "LASBCA-CAP Building Control Audits",
      "NDT Structural Stability Appraisals",
      "Budgeting & Progress Monitoring",
      "Contract Documentation & FIDIC Liaison",
      "Tender Evaluation & QA/QC Supervision",
    ],
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Highway & Airfield Design",
    description: "Transportation infrastructure and aviation pavement solutions",
    features: [
      "Bridge & Flyover Substructure Design",
      "Dual Carriageway Road Networks",
      "Airport Runway Resurfacing (FAAN)",
      "Traffic Control & Corridor Systems",
      "Mass Transit Infrastructure",
    ],
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Water & Environmental",
    description: "Water resources and environmental engineering",
    features: [
      "Water Supply & Borehole Reticulation",
      "Sewerage & Effluent Systems",
      "Water Treatment Plants",
      "Hydrological & Drainage Design",
      "Environmental Impact Assessment (EIA)",
    ],
  },
]

const MD_PROFILE = {
  name: "Engr. S.I.A. Edidi",
  position: "Managing Consultant / Chief Executive Officer",
  credentials: "B.Eng (Civil), MSc (Structures, UNILAG) • COREN: R6610 • MNSE: 07462 • MNICE",
  experience: "40+ Years Experience",
  education: "University of Lagos (MSc Civil Engineering)",
  formerRole: "Former Head of Department (Civil Engineering), Lagos State Polytechnic",
  bio: "A seasoned civil, structural, and geotechnical engineer with over four decades of distinguished academic leadership and field execution across Nigeria. Former Head of Department of Civil Engineering at Lagos State Polytechnic, Engr. Edidi leads Envostructs' technical board, overseeing ₦500B+ in complex deep foundations, trunk highways, airfield pavements, multi-storey structures, and LASBCA-CAP structural stability accreditations.",
  specialties: [
    "Deep Pile Foundations & Coastal Geotechnics",
    "Multi-Storey Structural Engineering (EC2 / BS 8110)",
    "LASBCA-CAP Structural Stability & NDT Forensics",
    "Highway, Bridge & Airfield Pavement Engineering",
  ],
}

const TEAM = [
  /* { name: "Engr. M.A. Adigun", position: "Deputy Managing Director", credentials: "B.Eng FUTO, MSc Geotechnics UNILAG", description: "21+ years experience in structural and civil engineering. Member COREN, NSE." }, */
  {
    name: "Engr. A.D. Onitilo",
    position: "Executive Director, Engineering",
    credentials: "BSc Civil Engineering (UNILAG) • COREN Registered • MNSE",
    description:
      "Over 40+ years of senior civil and structural engineering experience directing major highway, water, and building construction works across Nigeria.",
  },
  /* { name: "Engr. Y.O. Bankole", position: "Director, Mechanical/Electrical", credentials: "Mechanical/Agric Eng ABU Zaria, MSc", description: "20+ years experience in mechanical engineering. Member COREN, NSE." }, */
  {
    name: "Arc. H.A. Quadri",
    position: "Senior Partner, Architecture",
    credentials: "BSc, MSc Architecture • NIA / ARCON Registered",
    description:
      "Over 22+ years of architectural design, urban master-planning, hospitality remodelling, and institutional building coordination.",
  },
  {
    name: "Adeyemi Adebayo",
    position: "Director, Planning & Research",
    credentials: "HND Town & Regional Planning (Yabatech) • MNITP • RTP",
    description:
      "Registered Town Planner with 20+ years experience leading the Project Evaluation Committee, environmental planning, and statutory development approvals.",
  },
  {
    name: "Ms. R.T. Fatoki",
    position: "Director, Admin & Finance",
    credentials: "HND Accountancy • ICAN Associate",
    description:
      "Directs corporate governance, project cost accounting, banking treasury liaison, and statutory audit compliance across all contracts.",
  },
]

const TESTIMONIALS = [
  {
    name: "Prof Wasiu Babalola",
    position: "Managing Director, Continent Hotels",
    text: "Envostructs exceeded our expectations in every aspect of the Continent Hotels project. Their engineering excellence and project management were remarkable.",
    rating: 5,
  },
  {
    name: "Farmer Samsom Ogbole",
    position: "Director, Soilless Farm Laboratory",
    text: "The team demonstrated exceptional understanding of our unique requirements. The sustainable construction practices across our 12-block hostel complex were particularly impressive.",
    rating: 5,
  },
  {
    name: "Engr. Funmi Adebisi",
    position: "Lagos State Ministry of Works",
    text: "Their comprehensive approach to geotechnical accuracy, environmental impact assessment, and statutory compliance sets them apart. Highly professional engineering firm.",
    rating: 5,
  },
]

const CLIENTS = [
  "Lagos State Government",
  "LASBCA Certified Accreditors Program (CAP)",
  "Federal Airports Authority of Nigeria (FAAN)",
  "Lekki Free Zone Development Co.",
  "Continent Hotels",
  "Soilless Farm Laboratory",
  "NASFAT Society of Nigeria",
  "Zenith Bank PLC",
  "Access / Diamond Bank",
  "Lagos State Polytechnic (LASUSTECH)",
  "World Bank Assisted Projects",
]

export default function EnvostructsWebsite() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedState, setSubmittedState] = useState<{
    submitted: boolean
    mailtoUrl: string
  }>({ submitted: false, mailtoUrl: "" })
  const [heroSlide, setHeroSlide] = useState(0)
  const [heroAnimating, setHeroAnimating] = useState(false)
  const [activeServiceTab, setActiveServiceTab] = useState(0)
  const [profileModalOpen, setProfileModalOpen] = useState(false)

  // Controlled Contact Form State (supports pre-fill from ScopeEstimator, Case Studies, Insights & Equipment)
  const [contactForm, setContactForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    clientType: "Direct Corporate / Private Developer",
    service: "Geotechnical Services",
    projectDetails: "",
  })

  const goToSlide = (index: number) => {
    if (heroAnimating) return
    setHeroAnimating(true)
    setHeroSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length)
    setTimeout(() => setHeroAnimating(false), 700)
  }

  useEffect(() => {
    const timer = setInterval(() => goToSlide(heroSlide + 1), 5500)
    return () => clearInterval(timer)
  }, [heroSlide])

  useEffect(() => {
    const handlePrefill = (event: Event) => {
      const customEvent = event as CustomEvent<{
        clientType?: string
        service?: string
        message?: string
      }>
      if (!customEvent.detail) return
      const { clientType, service, message } = customEvent.detail
      setSubmittedState({ submitted: false, mailtoUrl: "" })
      setContactForm((prev) => ({
        ...prev,
        clientType: clientType || prev.clientType,
        service: service || prev.service,
        projectDetails: message || prev.projectDetails,
      }))
    }
    window.addEventListener("envostructs:prefill-contact", handlePrefill)
    return () => window.removeEventListener("envostructs:prefill-contact", handlePrefill)
  }, [])

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await submitInquiryToEnvostructs(contactForm)

      if (!result.deliveredOnline) {
        // Guaranteed delivery fallback: open pre-filled email addressed to envostructs@gmail.com
        window.location.href = result.mailtoUrl
      }

      setSubmittedState({
        submitted: true,
        mailtoUrl: result.mailtoUrl,
      })

      toast({
        title: "Inquiry Dispatched!",
        description: `Your project inquiry has been connected to ${ENVOSTRUCTS_EMAIL}. Our engineering desk will respond within 24 hours.`,
      })
    } catch {
      const fallbackUrl = buildMailtoUrl(contactForm)
      window.location.href = fallbackUrl
      setSubmittedState({
        submitted: true,
        mailtoUrl: fallbackUrl,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppContact = () => {
    const text = `*TECHNICAL PROJECT INQUIRY — ENVOSTRUCTS NIGERIA LTD (RC: 694337)*
-----------------------------------------
*Name:* ${contactForm.fullName || "Prospective Client"}
*Company:* ${contactForm.company || "N/A"}
*Client Category:* ${contactForm.clientType}
*Location:* ${contactForm.country || "Nigeria"}
*Phone:* ${contactForm.phone || "N/A"}
*Email:* ${contactForm.email || "N/A"}
*Service Required:* ${contactForm.service}

*Project Scope / Message:*
${contactForm.projectDetails || "Please contact me regarding an engineering consultation."}`

    window.open(
      `https://wa.me/2348034770098?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const currentDivision = SERVICE_DIVISIONS[activeServiceTab]

  return (
    <div className="min-h-screen bg-white">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CXX7HW3QDT" />
      <Script id="google-analytics">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CXX7HW3QDT');`}
      </Script>

      {/* ── HERO SLIDESHOW ── */}
      <section id="home" className="relative text-white overflow-hidden w-full max-w-full" style={{ minHeight: "100vh" }}>
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.img}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{ backgroundImage: `url(${slide.img})`, opacity: i === heroSlide ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/88 via-black/65 to-[#001529]/75" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <button
          onClick={() => goToSlide(heroSlide - 1)}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all border border-white/20"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide(heroSlide + 1)}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all border border-white/20"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-28 sm:pb-32 flex flex-col justify-center w-full max-w-full"
          style={{ minHeight: "100vh" }}
        >
          <div className="max-w-3xl">
            <div className="mb-8">
              <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight break-words max-w-full">
                ENVOSTRUCTS
                <span className="block text-xl sm:text-3xl md:text-5xl text-white/95 font-light mt-2 mb-3">
                  NIGERIA LIMITED{" "}
                  <span className="inline-block text-base sm:text-2xl md:text-3xl text-amber-400 font-medium tracking-wide mt-1 sm:mt-0">
                    RC: 694337
                  </span>
                </span>
                <span className="block text-amber-400 drop-shadow-lg font-serif italic text-2xl sm:text-4xl md:text-6xl mt-4 sm:mt-6">
                  Engineering Excellence
                </span>
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
              Multi-disciplinary geotechnical, structural, civil construction, and project management powerhouse —
              delivering precision engineering across Nigeria since 2008. Accredited partner to{" "}
              <strong className="text-amber-300 font-semibold">LASBCA (CAP)</strong>.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-full px-6 sm:px-8 shadow-2xl shadow-amber-900/30 hover:scale-105 transition-all duration-300"
                >
                  View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/50 text-white hover:bg-white/15 bg-white/10 backdrop-blur-sm font-semibold rounded-full px-6 sm:px-8"
                onClick={() => document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" })}
              >
                Interactive Scope Estimator
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-amber-400/50 text-amber-300 hover:bg-amber-500 hover:text-slate-950 bg-slate-950/40 backdrop-blur-sm font-bold rounded-full px-6"
                onClick={() => setProfileModalOpen(true)}
              >
                <Eye className="mr-2 h-4 w-4" />
                Inspect Corporate Dossier
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === heroSlide ? "w-6 h-2 bg-amber-400" : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <p className="text-center text-white/40 text-[9px] sm:text-[10px] tracking-widest uppercase pt-2 pb-0.5 truncate px-2">
              {HERO_SLIDES[heroSlide].caption}
            </p>
            <div className="grid grid-cols-3 divide-x divide-white/10 py-2 sm:py-3">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "100+", label: "Projects Completed" },
                { value: "₦500B+", label: "Project Value" },
              ].map((item) => (
                <div key={item.label} className="text-center px-1 sm:px-4">
                  <div className="text-amber-400 font-black text-base sm:text-xl truncate">{item.value}</div>
                  <div className="text-white/60 text-[10px] sm:text-xs leading-tight line-clamp-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#003366] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x divide-white/20">
            {[
              { label: "Years of Experience", value: 20, suffix: "+" },
              { label: "Projects Completed", value: 100, suffix: "+" },
              { label: "Staff Strength", value: 100, suffix: "+" },
              { label: "Project Value (₦)", value: 500, suffix: "B+" },
            ].map((stat, i) => (
              <Reveal key={stat.label} direction="up" delay={i * 100} className="text-center px-6 py-4">
                <div className="text-4xl md:text-5xl font-black text-amber-400 tabular-nums">
                  <StatsCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-blue-200 text-xs md:text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK PILLARS STRIP ── */}
      <section className="bg-[#0a0e1a] py-20 grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                num: "01",
                label: "Quality",
                text: "Uncompromising engineering standards across every project, from percussion borehole soil investigation to final structural handover.",
              },
              {
                num: "02",
                label: "Precision",
                text: "Meticulous Eurocode and British Standard design and documentation ensuring every foundation and superstructure meets exact specifications.",
              },
              {
                num: "03",
                label: "Integrity",
                text: "Transparent FIDIC-aligned processes, LASBCA-CAP statutory compliance, and an unwavering commitment to public safety.",
              },
            ].map((p, i) => (
              <Reveal key={p.label} direction="up" delay={i * 120}>
                <div className="flex items-start gap-6 group">
                  <span className="text-5xl md:text-6xl font-black text-amber-500/25 leading-none tabular-nums group-hover:text-amber-500/50 transition-colors duration-500 shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <div className="w-8 h-0.5 bg-amber-500 mb-3" />
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">{p.label}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title mb-4">About Envostructs</h2>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 max-w-3xl mx-auto leading-relaxed mt-4">
                We are a multi-disciplinary design consultancy, construction, and project management powerhouse—delivering
                world-class engineering solutions across Nigeria.
              </p>
            </div>
          </Reveal>

          {/* LASBCA-CAP Partnership Banner */}
          <Reveal direction="up">
            <div className="mb-14 bg-gradient-to-r from-amber-50 via-amber-50/70 to-blue-50/40 border border-amber-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 bg-[#003366] text-amber-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003366] text-amber-400 text-[11px] font-extrabold uppercase tracking-widest mb-2">
                    Official Lagos State Statutory Accreditation • Isolo / Okota District
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    LASBCA Certified Accreditors Program (CAP / CAPS) Partner
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm max-w-3xl">
                    Envostructs works closely with the{" "}
                    <strong>Lagos State Building Control Agency (LASBCA)</strong> under the{" "}
                    <strong>Certified Accreditors Program (CAP)</strong>. Operating from our Isolo/Okota district base,
                    this specialized government initiative authorizes our COREN-certified engineers to monitor, inspect,
                    and conduct Non-Destructive Testing (NDT) structural stability appraisals on abandoned, uncompleted,
                    and distressed buildings across Lagos State.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("envostructs:prefill-contact", {
                      detail: {
                        clientType: "LASBCA-CAP Structural Audit / Compliance",
                        service: "Project Management",
                        message:
                          "We require a LASBCA-CAP Certified Structural Stability Audit / Non-Destructive Testing (NDT) inspection for a property in Lagos State:",
                      },
                    })
                  )
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-6 py-3.5 rounded-xl bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md"
              >
                Request LASBCA-CAP Audit →
              </button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                icon: <Award className="w-7 h-7 text-white" />,
                title: "Our Mission",
                text: "To be recognized as a pre-eminent African Design/Construction Consultant and Contractors brand, providing superior geotechnical, structural, and civil solutions within our niche markets.",
              },
              {
                icon: <CheckCircle className="w-7 h-7 text-white" />,
                title: "Our Objectives",
                text: "To create a satisfactory customer base by offering enduring engineering value, structural safety, and cost certainty to clients, staff, the environment, and investors.",
              },
              {
                icon: <Building2 className="w-7 h-7 text-white" />,
                title: "Our Experience",
                text: "Incorporated under CAC (RC: 694337) with over 20+ years of industry leadership and 100+ completed projects across federal/state institutions, commercial banks, and private developments.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 80}>
                <div className="border-t-4 border-amber-500 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#003366] rounded-xl mb-5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Reveal direction="right">
                <h3 className="text-2xl font-black mb-6 text-gray-900">Company Statistics</h3>
              </Reveal>
              <div className="space-y-3">
                {[
                  { label: "Share Capital", val: 1, suffix: "M ₦" },
                  { label: "Staff Strength", val: 100, suffix: "+ Professionals" },
                  { label: "Bank Projects", val: 15, suffix: "+ Completed" },
                  { label: "Government Projects", val: 20, suffix: "+ Completed" },
                  { label: "Commercial Projects", val: 10, suffix: "+ Completed" },
                  { label: "Individual Projects", val: 60, suffix: "+ Completed" },
                ].map((s, i) => (
                  <Reveal key={s.label} direction="right" delay={i * 60}>
                    <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-300 transition-colors">
                      <span className="font-semibold text-gray-700 text-sm">{s.label}</span>
                      <div className="font-black text-[#003366]">
                        <StatsCounter end={s.val} suffix={s.suffix} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal direction="left">
              <div className="bg-[#003366] rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-black mb-2">Multi-Disciplinary Composition</h3>
                <p className="text-blue-200 text-xs mb-6">
                  100+ COREN, NIA, NIQS & NITP certified specialists across 7 integrated departments:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Civil & Structural Engineers",
                    "Geotechnical & Piling Specialists",
                    "Registered Architects",
                    "Mechanical & Piping Engineers",
                    "Electrical & Power Engineers",
                    "Quantity Surveyors & Cost Estimators",
                    "Town & Regional Planners",
                    "NDT & LASBCA-CAP Auditors",
                  ].map((role) => (
                    <li key={role} className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3.5 py-2.5 border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-white/90 text-xs font-medium">{role}</span>
                    </li>
                  ))}
                </ul>

                {/* Corporate Profile Actions */}
                <div className="pt-6 border-t border-white/15 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setProfileModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md"
                  >
                    <Eye className="w-4 h-4" />
                    Inspect Corporate Dossier
                  </button>
                  <a
                    href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
                  >
                    <FileDown className="w-4 h-4 text-amber-400" />
                    Download 2025 Profile (PDF)
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES (Interactive Multi-Division Tabs + Full Service Grid) ── */}
      <section id="services" className="py-24 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">What We Do</span>
              <h2 className="section-title-light mb-4">Core Engineering Divisions</h2>
              <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
                Three integrated engineering divisions delivering full-lifecycle subsoil investigation, structural
                design, LASBCA-CAP compliance, and heavy civil construction.
              </p>
            </div>
          </Reveal>

          {/* Interactive Division Tabs (AJOF-Style) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {SERVICE_DIVISIONS.map((div, index) => (
              <button
                key={div.id}
                type="button"
                onClick={() => setActiveServiceTab(index)}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  activeServiceTab === index
                    ? "bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 scale-[1.02]"
                    : "bg-white/5 text-white/75 hover:bg-white/10 border border-white/10"
                }`}
              >
                {div.icon}
                <span>{div.title}</span>
              </button>
            ))}
          </div>

          {/* Active Division Spotlight */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 backdrop-blur-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-72 sm:h-80 border border-white/10">
                <img
                  src={currentDivision.image}
                  alt={currentDivision.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                  {currentDivision.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                  {currentDivision.stats.map((st) => (
                    <div
                      key={st.label}
                      className="bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-3 text-center"
                    >
                      <div className="text-xl font-black text-amber-400">{st.value}</div>
                      <div className="text-[11px] text-slate-300 font-semibold">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                  {currentDivision.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">{currentDivision.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {currentDivision.description}
                </p>
                <div className="space-y-2.5 mb-8">
                  {currentDivision.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => document.getElementById("estimator")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all"
                  >
                    Estimate Division Scope & BOQ →
                  </button>
                  <Link
                    href="/services"
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/15 transition-all"
                  >
                    Full Technical Specifications
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 6-Card Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} direction="up" delay={i * 60}>
                <div className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500 rounded-xl mb-5 flex items-center justify-center text-amber-400 group-hover:text-slate-950 transition-all duration-300 shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1.5 flex-1">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-white/70 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <Link
                      href="/services"
                      className="text-amber-400 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      View Service Details <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL EPC & DIASPORA GATEWAY + COMPLIANCE VAULT ── */}
      <InternationalSection onOpenProfileModal={() => setProfileModalOpen(true)} />

      {/* ── INTERACTIVE PROJECT SCOPE & BOQ ESTIMATOR ── */}
      <ScopeEstimator />

      {/* ── 20+ YEARS CORPORATE TIMELINE ── */}
      <TimelineSection />

      {/* ── PROJECTS & NIGERIA GEOLOGICAL FOOTPRINT EXPLORER ── */}
      <ProjectsSection />

      {/* ── EQUIPMENT FLEET, NDT APPARATUS & DESIGN SUITE ── */}
      <EquipmentSection />

      {/* ── TEAM (Featured Managing Director Card + Board of Directors) ── */}
      <section id="team" className="py-24 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">The People</span>
              <h2 className="section-title-light mb-4">Leadership & Technical Board</h2>
              <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
                Guided by COREN, NSE, NIA, NITP, and ICAN chartered principals with over four decades of field and
                academic excellence.
              </p>
            </div>
          </Reveal>

          {/* Featured Managing Consultant / Director Spotlight Card */}
          <Reveal direction="up">
            <div className="mb-12 rounded-3xl bg-gradient-to-br from-[#003366] via-[#002244] to-slate-900 border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      src={uiAvatar(MD_PROFILE.name)}
                      alt={MD_PROFILE.name}
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl object-cover ring-4 ring-amber-400 shadow-2xl"
                    />
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider whitespace-nowrap shadow">
                      COREN: R6610 • NSE: 07462
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-3">{MD_PROFILE.name}</h3>
                  <p className="text-amber-400 text-sm font-bold mt-1">{MD_PROFILE.position}</p>
                  <p className="text-blue-200 text-xs mt-1">{MD_PROFILE.formerRole}</p>
                </div>

                <div className="lg:col-span-8 text-white space-y-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-amber-300 text-xs font-bold">
                      <Briefcase className="w-3.5 h-3.5" />
                      {MD_PROFILE.experience}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-blue-200 text-xs font-semibold">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {MD_PROFILE.education}
                    </span>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{MD_PROFILE.bio}</p>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2.5">
                      Principal Technical Specialties
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {MD_PROFILE.specialties.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-200 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Executive Directors & Senior Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} direction="up" delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={uiAvatar(member.name)}
                        alt={member.name}
                        className="w-14 h-14 rounded-xl object-cover ring-2 ring-amber-500/30 group-hover:ring-amber-500 transition-all duration-300 shrink-0"
                      />
                      <div>
                        <h3 className="font-black text-white leading-tight">{member.name}</h3>
                        <p className="text-amber-400 text-xs font-bold mt-1">{member.position}</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">{member.description}</p>
                  </div>
                  <div>
                    <div className="text-[11px] text-white/40 bg-white/5 rounded-lg px-3 py-2 font-mono">
                      {member.credentials}
                    </div>
                    <div className="mt-4 h-0.5 w-8 group-hover:w-full bg-amber-500 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200} className="text-center mt-12">
            <Link href="/team">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-[#003366] bg-transparent rounded-full px-8 transition-all duration-300"
              >
                Meet the Full Team <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── ENGINEERING KNOWLEDGE HUB (INSIGHTS & TECHNICAL BRIEFS) ── */}
      <InsightsSection />

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Client Feedback</span>
              <h2 className="section-title mb-4">Clients view about envostructs</h2>
              <p className="section-desc">Testimonials from satisfied clients</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} direction="up" delay={i * 80}>
                <div className="relative border-l-4 border-amber-500 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                  <span className="absolute top-2 right-4 text-[80px] leading-none font-black text-amber-100 select-none">
                    &ldquo;
                  </span>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }, (_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-5 flex-1 relative z-10">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={uiAvatar(t.name)}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-[#003366] text-xs font-medium">{t.position}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200} className="text-center mt-12">
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent rounded-full px-8"
              >
                View All Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENT MARQUEE STRIP ── */}
      <section className="py-14 bg-gray-50 overflow-hidden border-y border-gray-100 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Reveal direction="up">
            <p className="section-label text-center">Trusted By Institutions, Banks & Government Agencies</p>
          </Reveal>
        </div>
        <div className="relative w-full max-w-full overflow-hidden">
          <div className="flex animate-marquee gap-6 whitespace-nowrap w-max">
          {[...CLIENTS, ...CLIENTS].map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 border border-amber-200 hover:border-amber-500 rounded-full px-6 py-3 text-sm font-semibold text-gray-700 hover:text-[#003366] bg-white transition-colors duration-300 shrink-0 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              {name}
            </span>
          ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <FAQSection />

      {/* ── CONTACT SECTION (With Pre-Fill Support, Google Maps & WhatsApp Dispatch) ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Reach Our Engineering Desk</span>
              <h2 className="section-title mb-4">Request a Technical Proposal or Site Mobilization</h2>
              <p className="section-desc max-w-2xl mx-auto">
                Whether you are a multinational EPC contractor, a diaspora developer, a government agency, or a property
                owner seeking a LASBCA-CAP structural stability audit, our COREN-certified engineers respond within 24
                hours.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Info + Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 space-y-6">
                <h3 className="text-xl font-black text-gray-900">Head Office & Geotechnical Lab</h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: <MapPin className="w-5 h-5 text-amber-400" />,
                      label: "Head Office Address",
                      text: "51, Akanro Street, Off Apapa-Oshodi Express Road, by Ilasa Bustop, P.O. Box 2890 Yaba, Lagos, Nigeria",
                    },
                    {
                      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
                      label: "LASBCA-CAP Operational District",
                      text: "Isolo / Okota District Office — Certified Accreditors Program (CAP) Structural Stability Monitoring",
                    },
                    {
                      icon: <Phone className="w-5 h-5 text-amber-400" />,
                      label: "Direct Engineering Hotlines",
                      text: "+234 803 477 0098\n+234 812 774 4990\n+234 712 017 5574",
                    },
                    {
                      icon: <Mail className="w-5 h-5 text-amber-400" />,
                      label: "Official Tender & Inquiry Emails",
                      text: "envostructs@yahoo.co.uk\nenvostructs@gmail.com",
                    },
                    {
                      icon: <Calendar className="w-5 h-5 text-amber-400" />,
                      label: "Working Hours (WAT / UTC+1)",
                      text: "Monday – Friday: 8:00 AM – 6:00 PM\nSaturday (Site & Lab Operations): 9:00 AM – 4:00 PM",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#003366] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Embedded Google Map */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-52 bg-slate-200">
                  <iframe
                    title="Envostructs Nigeria Limited Head Office Map"
                    src="https://www.google.com/maps?q=51+Akanro+Street+Ilasamaja+Lagos+Nigeria&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden">
                <div className="bg-[#003366] px-8 py-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block">
                      RC: 694337 • COREN R6610
                    </span>
                    <h3 className="text-2xl font-black text-white">Request a Technical Consultation</h3>
                    <p className="text-blue-200 text-xs sm:text-sm mt-0.5">
                      Submit your project parameters or pre-filled BOQ scope below
                    </p>
                  </div>
                  <Globe2 className="w-10 h-10 text-amber-400/40 hidden sm:block" />
                </div>

                <div className="p-6 sm:p-8">
                  {submittedState.submitted ? (
                    <div className="py-12 px-6 text-center bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-5">
                      <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-2">
                          Connected to {ENVOSTRUCTS_EMAIL}
                        </span>
                        <h4 className="text-2xl font-black text-gray-900">Inquiry Received!</h4>
                        <p className="text-gray-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                          Thank you for contacting <strong>Envostructs Nigeria Limited</strong>. Your technical
                          specifications have been routed to <strong>{ENVOSTRUCTS_EMAIL}</strong> and our engineering
                          desk will respond within 24 hours.
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 pt-2">
                        <Button
                          type="button"
                          onClick={handleWhatsAppContact}
                          className="text-white font-extrabold rounded-xl px-6 shadow-md"
                          style={{ backgroundColor: "#25D366" }}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Also Send via WhatsApp for Instant Reply
                        </Button>
                        <a
                          href={submittedState.mailtoUrl}
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white text-xs font-bold transition-colors"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Open Direct Email ({ENVOSTRUCTS_EMAIL})
                        </a>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmittedState({ submitted: false, mailtoUrl: "" })
                            setContactForm({
                              fullName: "",
                              company: "",
                              email: "",
                              phone: "",
                              country: "",
                              clientType: "Direct Corporate / Private Developer",
                              service: "Geotechnical Services",
                              projectDetails: "",
                            })
                          }}
                          className="text-xs font-bold text-gray-500 hover:text-[#003366] underline"
                        >
                          Submit Another Project Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={contactForm.fullName}
                            onChange={handleContactChange}
                            placeholder="Engr. / Arc. / Mr. / Mrs."
                            required
                            className="mt-1.5 h-11"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Organization / Company
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={contactForm.company}
                            onChange={handleContactChange}
                            placeholder="Company, Agency or Private Developer"
                            className="mt-1.5 h-11"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={contactForm.email}
                            onChange={handleContactChange}
                            placeholder="your@email.com"
                            required
                            className="mt-1.5 h-11"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Phone / WhatsApp *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={contactForm.phone}
                            onChange={handleContactChange}
                            placeholder="+234 or International"
                            required
                            className="mt-1.5 h-11"
                          />
                        </div>
                        <div>
                          <Label htmlFor="country" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Project / Client Location
                          </Label>
                          <Input
                            id="country"
                            name="country"
                            value={contactForm.country}
                            onChange={handleContactChange}
                            placeholder="e.g. Lagos, Abuja, UK, USA"
                            className="mt-1.5 h-11"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="clientType"
                            className="text-gray-700 font-bold text-xs uppercase tracking-wider"
                          >
                            Client Category
                          </Label>
                          <select
                            id="clientType"
                            name="clientType"
                            value={contactForm.clientType}
                            onChange={handleContactChange}
                            className="mt-1.5 w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                          >
                            <option value="Direct Corporate / Private Developer">
                              Direct Corporate / Private Developer
                            </option>
                            <option value="International EPC / Multinational Contractor">
                              International EPC / Multinational Contractor
                            </option>
                            <option value="Diaspora Investor / Project Owner">
                              Diaspora Investor / Project Owner (UK, US, EU, etc.)
                            </option>
                            <option value="Government Ministry / Agency (Federal or State)">
                              Government Ministry / Agency (Federal or State)
                            </option>
                            <option value="LASBCA-CAP Structural Audit / Compliance">
                              LASBCA-CAP Structural Audit / Compliance
                            </option>
                            <option value="Commercial Bank / Financial Institution">
                              Commercial Bank / Financial Institution
                            </option>
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="service" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Primary Service Required *
                          </Label>
                          <select
                            id="service"
                            name="service"
                            value={contactForm.service}
                            onChange={handleContactChange}
                            required
                            className="mt-1.5 w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                          >
                            <option value="Geotechnical Services">
                              Geotechnical Investigation & Pile Foundations
                            </option>
                            <option value="Design & Documentation">
                              Architectural & Structural Engineering Design
                            </option>
                            <option value="Construction Works">
                              Turnkey Building & Civil Construction Works
                            </option>
                            <option value="Project Management">
                              LASBCA-CAP Structural Audit / NDT / Project Management
                            </option>
                            <option value="Highway Design">
                              Highway, Bridge & Airfield Pavement Engineering
                            </option>
                            <option value="Water & Environmental">
                              Water Resources, Jetty & Environmental Engineering
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="projectDetails"
                          className="text-gray-700 font-bold text-xs uppercase tracking-wider"
                        >
                          Project Scope, Site Location & Technical Details *
                        </Label>
                        <Textarea
                          id="projectDetails"
                          name="projectDetails"
                          rows={5}
                          value={contactForm.projectDetails}
                          onChange={handleContactChange}
                          placeholder="Describe your site location, number of storeys/kilometers, or use the Interactive Scope Estimator above to auto-populate this field..."
                          required
                          className="mt-1.5 font-mono text-xs sm:text-sm"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        <Button
                          type="submit"
                          className="w-full h-12 bg-[#003366] hover:bg-[#002244] text-white font-extrabold rounded-xl transition-all duration-300 shadow-lg"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <LoadingSpinner size="sm" className="mr-2" />
                              Sending to {ENVOSTRUCTS_EMAIL}...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4 text-amber-400" />
                              Submit Official Inquiry
                            </>
                          )}
                        </Button>

                        <Button
                          type="button"
                          onClick={handleWhatsAppContact}
                          className="w-full h-12 text-white font-extrabold rounded-xl transition-all duration-300 shadow-lg hover:opacity-95"
                          style={{ backgroundColor: "#25D366" }}
                          size="lg"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Dispatch via WhatsApp
                        </Button>
                      </div>

                      <p className="text-center text-gray-400 text-xs pt-1">
                        All submissions are routed directly to{" "}
                        <a
                          href={`mailto:${ENVOSTRUCTS_EMAIL}`}
                          className="text-[#003366] font-bold hover:underline"
                        >
                          {ENVOSTRUCTS_EMAIL}
                        </a>
                        . Have drawings or BOQs to attach? Email them directly to{" "}
                        <a
                          href={`mailto:${ENVOSTRUCTS_EMAIL}`}
                          className="text-amber-600 font-bold hover:underline"
                        >
                          {ENVOSTRUCTS_EMAIL}
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CORPORATE DOSSIER & DELIVERABLE VIEWER MODAL ── */}
      <ProfileViewerModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </div>
  )
}
