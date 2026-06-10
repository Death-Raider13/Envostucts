"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { StatsCounter } from "@/components/stats-counter"
import { ProjectCard } from "@/components/project-card"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Reveal } from "@/components/Reveal"
import { submitContactForm } from "./actions"
import {
  Building2, Award, Phone, Mail, MapPin, CheckCircle, ArrowRight,
  Wrench, Hammer, Ruler, HardHat, Truck, Droplets, Star, Calendar, MessageCircle,
} from "lucide-react"

const IMAGES = {
  swissHotel: "/swiss-international%20hotel.jpg",
  duplex: "/ogudu%20GRA%20four%20bedroom.jpeg",
  farmHostel: "/soiless-farm-hostel.jpg",
  bridge: "/community%20bridge%20project.jpg",
  roads: "/lekki%20free%20zone.jpg",
  budgetHotel: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
}

const HERO_SLIDES = [
  { img: "/swiss-international%20hotel.jpg",  caption: "Swiss International Hotel Abeokuta — ₦6.5 Billion" },
  { img: "/soiless-farm-hostel.jpg",           caption: "Soilless Farm Lab Hostel — ₦850 Million" },
  { img: "/community%20bridge%20project.jpg",  caption: "Community Bridge Project — Ibeju Lekki" },
  { img: "/lekki%20free%20zone.jpg",           caption: "Lekki Free Zone Roads — ₦464 Million" },
  { img: "/dualization%20of%20ipele.jpg",      caption: "Emuren–Ipele Road Dualization — ₦12.59 Billion" },
]

function uiAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=003366&color=ffffff&size=200&bold=true`
}

const SERVICES = [
  { icon: <Wrench className="w-7 h-7" />, title: "Geotechnical Services", description: "Comprehensive soil investigation and foundation analysis", features: ["Feasibility Studies", "Site Investigations", "Laboratory Testing", "Engineering Analysis", "Pile Foundation Construction"] },
  { icon: <Ruler className="w-7 h-7" />, title: "Design & Documentation", description: "Complete architectural and engineering design solutions", features: ["Project Programming", "Architectural Designs", "Civil Engineering Drawings", "Tender Documentation", "Project Control Manual"] },
  { icon: <Hammer className="w-7 h-7" />, title: "Construction Works", description: "Full-scale construction and infrastructure development", features: ["Buildings Construction", "Road Works & Asphalting", "Jetties & Culverts", "Drainage Systems", "Concrete Pavements"] },
  { icon: <HardHat className="w-7 h-7" />, title: "Project Management", description: "End-to-end project coordination and oversight", features: ["Budgeting & Programming", "Progress Monitoring", "Contract Documentation", "Tender Evaluation", "Client Liaison"] },
  { icon: <Truck className="w-7 h-7" />, title: "Highway Design", description: "Transportation infrastructure and traffic solutions", features: ["Bridge Design", "Road Networks", "Urban Highways", "Traffic Control Systems", "Mass Transit Projects"] },
  { icon: <Droplets className="w-7 h-7" />, title: "Water & Environmental", description: "Water resources and environmental engineering", features: ["Water Supply Projects", "Sewerage Systems", "Water Treatment Plants", "Drainage Design", "Environmental Protection"] },
]

const TEAM = [
  { name: "Engr. S.I.A. Edidi", position: "Managing Consultant/Director", credentials: "B.Eng Civil Eng, COREN: R6610, NSE: 07462", description: "Former Head of Department at Lagos State Polytechnic. 30+ years in civil/structural engineering." },
  { name: "Engr. M.A. Adigun", position: "Deputy Managing Director", credentials: "B.Eng FUTO, MSc Geotechnics UNILAG", description: "21+ years experience in structural and civil engineering. Member COREN, NSE." },
  { name: "Engr. A.D. Onitilo", position: "Executive Director Engineering", credentials: "BSc Civil Engineering UNILAG", description: "25+ years experience in design and construction works. Member COREN, NSE." },
  { name: "Engr. Y.O. Bankole", position: "Director, Mechanical/Electrical", credentials: "Mechanical/Agric Eng ABU Zaria, MSc", description: "20+ years experience in mechanical engineering. Member COREN, NSE." },
  { name: "Adeyemi Adebayo", position: "Director, Planning & Research", credentials: "HND Town & Regional Planning, Yabatech", description: "Registered Town Planner. Leads Project Evaluation Committee." },
  { name: "Ms. R.T. Fatoki", position: "Director, Admin & Finance", credentials: "HND Accountancy, ICAN", description: "Oversees accounting and finance functions with extensive auditing experience." },
]

const TESTIMONIALS = [
  { name: "Dr. Adebayo Ogundimu", position: "Managing Director, Swiss International Hotels", text: "Envostructs exceeded our expectations in every aspect of the Swiss International Hotel project. Their engineering excellence and project management were remarkable.", rating: 5 },
  { name: "Prof. Olumide Adeyemi", position: "Director, Soilless Farm Laboratory", text: "The team demonstrated exceptional understanding of our unique requirements. The sustainable construction practices were particularly impressive.", rating: 5 },
  { name: "Engr. Funmi Adebisi", position: "Lagos State Ministry of Works", text: "Their comprehensive approach to environmental impact assessment and community engagement set them apart. Highly professional team.", rating: 5 },
]

const CLIENTS = [
  "Swiss International Hotels", "Lagos State Govt", "NASFAT", "Lekki Free Zone", "First Bank Nigeria",
  "Zenith Bank", "Lagos State Polytechnic", "Soilless Farm Lab", "Diamond Bank",
]

export default function EnvostructsWebsite() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)
  const [heroAnimating, setHeroAnimating] = useState(false)

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

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(null, formData)
      if (result.success) {
        toast({ title: "Success!", description: result.message })
        const form = document.querySelector("form") as HTMLFormElement
        form?.reset()
      } else {
        toast({ title: "Error!", description: result.message, variant: "destructive" })
      }
    } catch {
      toast({ title: "Error!", description: "Something went wrong. Please try again.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CXX7HW3QDT" />
      <Script id="google-analytics">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CXX7HW3QDT');`}
      </Script>

      {/* ── HERO SLIDESHOW ── */}
      <section id="home" className="relative text-white overflow-hidden" style={{ minHeight: "100vh" }}>
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.img}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{ backgroundImage: `url(${slide.img})`, opacity: i === heroSlide ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/88 via-black/65 to-[#001529]/70" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <button onClick={() => goToSlide(heroSlide - 1)} className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all border border-white/20" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={() => goToSlide(heroSlide + 1)} className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all border border-white/20" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 flex flex-col justify-center" style={{ minHeight: "100vh" }}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">COREN Licensed · RC 694337 · Est. 2008</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-6">
              Engineering
              <span className="block text-amber-400 drop-shadow-lg">Excellence</span>
              <span className="text-white/80 text-3xl sm:text-4xl md:text-5xl font-light block mt-2">Built for Nigeria</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-xl mb-10 leading-relaxed font-light">
              Multi-disciplinary design consultancy, construction and project management — delivering precision engineering across Nigeria since 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8 shadow-2xl shadow-amber-900/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/15 bg-white/10 backdrop-blur-sm font-semibold rounded-full px-8 w-full sm:w-auto" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => goToSlide(i)} className={`rounded-full transition-all duration-300 ${i === heroSlide ? "w-6 h-2 bg-amber-400" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-white/40 text-[10px] tracking-widest uppercase pt-2 pb-0.5">{HERO_SLIDES[heroSlide].caption}</p>
            <div className="grid grid-cols-3 divide-x divide-white/10 py-3">
              {[{ value: "16+", label: "Years Experience" }, { value: "60+", label: "Projects Completed" }, { value: "₦30B+", label: "Project Value" }].map((item) => (
                <div key={item.label} className="text-center px-4">
                  <div className="text-amber-400 font-black text-xl">{item.value}</div>
                  <div className="text-white/50 text-xs">{item.label}</div>
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
              { label: "Years of Experience", value: 16, suffix: "+" },
              { label: "Projects Completed", value: 60, suffix: "+" },
              { label: "Professional Staff", value: 20, suffix: "+" },
              { label: "Project Value (₦)", value: 30, suffix: "B+" },
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
              { num: "01", label: "Quality", text: "Uncompromising engineering standards across every project, from soil investigation to final handover." },
              { num: "02", label: "Precision", text: "Meticulous design and documentation ensuring every structure meets the highest technical specifications." },
              { num: "03", label: "Integrity", text: "Transparent processes, honest communication, and a commitment to delivering on every promise made." },
            ].map((p, i) => (
              <Reveal key={p.label} direction="up" delay={i * 120}>
                <div className="flex items-start gap-6 group">
                  <span className="text-5xl md:text-6xl font-black text-amber-500/25 leading-none tabular-nums group-hover:text-amber-500/50 transition-colors duration-500 shrink-0">{p.num}</span>
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title mb-4">About Envostructs</h2>
              <p className="section-desc max-w-3xl mx-auto">
                A multi-disciplinary design consultancy, construction and project management practice outfit, offering wide range of engineering consultancy services across Nigeria.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              { icon: <Award className="w-7 h-7 text-white" />, title: "Our Mission", text: "To be recognized as a pre-eminent African Design/Construction Consultant and Contractors brand, providing superior solutions within our niche markets." },
              { icon: <CheckCircle className="w-7 h-7 text-white" />, title: "Our Objectives", text: "To create satisfactory customers base by offering value to clients, staff, environment and the investors." },
              { icon: <Building2 className="w-7 h-7 text-white" />, title: "Our Experience", text: "Established in 2008 with over 60 completed projects including government institutions, commercial enterprises, and private developments." },
            ].map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 80}>
                <div className="border-t-4 border-amber-500 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#003366] rounded-xl mb-5 flex items-center justify-center">{item.icon}</div>
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
                  { label: "Share Capital", val: 11, suffix: "M ₦" },
                  { label: "Staff Strength", val: 20, suffix: "+ Professionals" },
                  { label: "Bank Projects", val: 10, suffix: "+ Completed" },
                  { label: "Government Projects", val: 4, suffix: "+ Completed" },
                  { label: "Commercial Projects", val: 15, suffix: "+ Completed" },
                  { label: "Individual Projects", val: 30, suffix: "+ Completed" },
                ].map((s, i) => (
                  <Reveal key={s.label} direction="right" delay={i * 60}>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                      <span className="font-medium text-gray-700 text-sm">{s.label}</span>
                      <StatsCounter end={s.val} suffix={s.suffix} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal direction="left">
              <div className="bg-[#003366] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-black mb-6">Our Team Composition</h3>
                <ul className="space-y-3">
                  {["Architects", "Civil/Structural Engineers", "Mechanical Engineers", "Electrical Engineers", "Quantity Surveyors", "Auxiliary Staffs", "Specialist Consultants"].map((role) => (
                    <li key={role} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-white/80 text-sm">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES (dark) ── */}
      <section id="services" className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">What We Do</span>
              <h2 className="section-title-light mb-4">Our Services</h2>
              <p className="text-white/50 text-lg">Comprehensive engineering solutions from conception to completion</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} direction="up" delay={i * 60}>
                <div className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500 rounded-xl mb-5 flex items-center justify-center text-amber-400 group-hover:text-white transition-all duration-300 shrink-0">
                    {service.icon}
                  </div>
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
                  <div className="mt-4 pt-3 border-t border-white/10 overflow-hidden max-h-0 group-hover:max-h-8 transition-all duration-300">
                    <Link href="/services" className="text-amber-400 text-xs font-semibold flex items-center gap-1">
                      View Service <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200} className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Our Work</span>
              <h2 className="section-title mb-4">Notable Projects</h2>
              <p className="section-desc">Some of our major completed and ongoing projects</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {([
              { title: "Swiss International Hotel Abeokuta", description: "15 Storey Hotel Structure", value: "₦6.5 Billion", category: "Hospitality", status: "Completed", location: "Abeokuta, Ogun State", year: "2023", slug: "swiss-international-hotel-abeokuta", image: IMAGES.swissHotel },
              { title: "Detached Duplex Units", description: "4 Units at OGUDU GRA Lagos", value: "₦300 Million", category: "Residential", status: "Ongoing", location: "Lagos State", year: "2024", image: IMAGES.duplex },
              { title: "Soilless Farm Lab Hostel", description: "12 Blocks at Awowo Village", value: "₦850 Million", category: "Educational", status: "Completed", location: "Abeokuta", year: "2022", slug: "soilless-farm-lab-hostel", image: IMAGES.farmHostel },
              { title: "Community Bridge", description: "Ibeju Lekki – Iba-Oloja Link", value: "₦750 Million", category: "Infrastructure", status: "Design Phase", location: "Lagos State", year: "2024", slug: "community-bridge-project", image: IMAGES.bridge },
              { title: "Lekki Free Zone Roads", description: "Road N5 & E6A Construction", value: "₦464 Million", category: "Infrastructure", status: "Completed", location: "Lagos State", year: "2023", image: IMAGES.roads },
              { title: "Swiss Budget Hotel", description: "Office Complex Conversion", value: "₦5.2 Billion", category: "Hospitality", status: "Completed", location: "Lagos State", year: "2022", image: IMAGES.budgetHotel },
            ] as Parameters<typeof ProjectCard>[0][]).map((p, i) => (
              <Reveal key={p.title} direction="up" delay={(i % 3) * 80}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200} className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full px-8 hover:scale-105 transition-all duration-300">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── TEAM (dark) ── */}
      <section id="team" className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">The People</span>
              <h2 className="section-title-light mb-4">Leadership Team</h2>
              <p className="text-white/50 text-lg">Meet our experienced professionals</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} direction="up" delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={uiAvatar(member.name)} alt={member.name} className="w-16 h-16 rounded-xl object-cover ring-2 ring-amber-500/30 group-hover:ring-amber-500 transition-all duration-300 shrink-0" />
                    <div>
                      <h3 className="font-black text-white leading-tight">{member.name}</h3>
                      <p className="text-amber-400 text-sm font-medium mt-0.5">{member.position}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{member.description}</p>
                  <div className="text-xs text-white/30 bg-white/5 rounded-lg px-3 py-2 font-mono">{member.credentials}</div>
                  <div className="mt-4 h-0.5 w-8 group-hover:w-full bg-amber-500 transition-all duration-500 rounded-full" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200} className="text-center mt-12">
            <Link href="/team">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#003366] bg-transparent rounded-full px-8 transition-all duration-300">
                Meet the Full Team <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Client Feedback</span>
              <h2 className="section-title mb-4">What Our Clients Say</h2>
              <p className="section-desc">Testimonials from satisfied clients</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} direction="up" delay={i * 80}>
                <div className="relative border-l-4 border-amber-500 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                  <span className="absolute top-2 right-4 text-[80px] leading-none font-black text-amber-100 select-none">"</span>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }, (_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />)}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-5 flex-1 relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={uiAvatar(t.name)} alt={t.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
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
              <Button size="lg" variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent rounded-full px-8">
                View All Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENT MARQUEE STRIP ── */}
      <section className="py-14 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Reveal direction="up">
            <p className="section-label text-center">Trusted By</p>
          </Reveal>
        </div>
        <div className="flex animate-marquee gap-6 whitespace-nowrap w-max">
          {[...CLIENTS, ...CLIENTS].map((name, i) => (
            <span key={i} className="inline-flex items-center gap-2 border border-amber-200 hover:border-amber-500 rounded-full px-6 py-3 text-sm font-semibold text-gray-600 hover:text-amber-600 bg-white transition-colors duration-300 shrink-0">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Reach Us</span>
              <h2 className="section-title mb-4">Contact Us</h2>
              <p className="section-desc">Get in touch for your next project</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal direction="right">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  {[
                    { icon: <MapPin className="w-5 h-5 text-white" />, label: "Address", text: "51, Akanro Street, Off Apapa-Oshodi Express Road, by Ilasa Bustop, P.O. Box 2890 Yaba, Lagos, Nigeria" },
                    { icon: <Phone className="w-5 h-5 text-white" />, label: "Phone", text: "+234-08034770098\n+234-08127744990" },
                    { icon: <Mail className="w-5 h-5 text-white" />, label: "Email", text: "envostructs@yahoo.co.uk\nenvostructs@gmail.com" },
                    { icon: <Calendar className="w-5 h-5 text-white" />, label: "Working Hours", text: "Monday – Friday: 8am – 6pm\nSaturday: 9am – 2pm" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#003366] rounded-xl flex items-center justify-center shrink-0">{item.icon}</div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm mb-0.5">{item.label}</p>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/2348034770098" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg" style={{ backgroundColor: "#25D366" }}>
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
                <div className="bg-[#003366] px-8 py-6">
                  <h3 className="text-2xl font-black text-white">Request a Consultation</h3>
                  <p className="text-blue-200 text-sm mt-1">Fill out the form and we'll get back to you within 24 hours</p>
                </div>
                <div className="p-8">
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      await handleFormSubmit(formData)
                    }}
                    className="space-y-5"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-gray-700 font-medium text-sm">Full Name *</Label>
                        <Input id="fullName" name="fullName" placeholder="Your full name" required className="mt-1 h-11" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+234 xxx xxx xxxx" required className="mt-1 h-11" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required className="mt-1 h-11" />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-gray-700 font-medium text-sm">Service Required *</Label>
                      <Select name="service" required>
                        <SelectTrigger className="mt-1 h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="geotechnical">Geotechnical Services</SelectItem>
                          <SelectItem value="design">Design & Documentation</SelectItem>
                          <SelectItem value="construction">Construction Works</SelectItem>
                          <SelectItem value="project-management">Project Management</SelectItem>
                          <SelectItem value="highway">Highway Design</SelectItem>
                          <SelectItem value="water-environmental">Water & Environmental</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="projectDetails" className="text-gray-700 font-medium text-sm">Project Details *</Label>
                      <Textarea id="projectDetails" name="projectDetails" rows={4} placeholder="Tell us about your project requirements..." required className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.02]" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? <><LoadingSpinner size="sm" className="mr-2" />Sending Request...</> : <>Send Consultation Request <ArrowRight className="ml-2 h-5 w-5" /></>}
                    </Button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
