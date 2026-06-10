"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Building, Home, GraduationCap, Hotel, ArrowRight, Calendar, MapPin,
  X, ExternalLink, FlaskConical,
} from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { NigeriaProjectMap } from "@/components/NigeriaProjectMap"

const IMGS = {
  swissHotel: "/swiss-international%20hotel.jpg",
  farmHostel: "/soiless-farm-hostel.jpg",
  bridge: "/community%20bridge%20project.jpg",
  duplex: "/ogudu%20GRA%20four%20bedroom.jpeg",
  roadDualization: "/dualization%20of%20ipele.jpg",
  commercial: "/first-bank%20designs.png",
  runway: "/airport%20runway.png",
  lekkiFreeZone: "/lekki%20free%20zone.jpg",
  mosque: "/nasfat-building.jpg",
  classrooms: "/block-of-classrrom(poly).jpg",
  church: "/celestial-church.png",
  jetty: "/igbologun%20jetty.jpg",
  geotechnical: "/lekki%20freezone%20subsoil.png",
  diamondBank: "/diamond%20bank%20herbert%20macaulay.jpg",
  roadWorld: "/oyo-ogbomoso-road%20construction.jpg",
  owoIyereRoad: "/owo%20iyere%20road.jpg",
  ikoroduRoad: "/lagos-ikorodu(worldbank).png",
  carpark: "/national-theather-multiparks.jpg",
  micropile: "/micropile%20for%20billboards.png",
  arepoMosque: "/arepo%20central%20mosque.png",
  budgetHotel: "/swiss%20hotel.jpg",
  hotelMakurdi: "/swiss.jpg",
  onilegbalePalace: "/onilegbale.jpg",
  continentHotel: "/continent-hotel.jpg",
}

const FEATURED = [
  {
    title: "The New Onilegbale Palace",
    description: "Grand bespoke palace for the Onilegbale of Lagos — First Class Akarigbere Royal Chief and Kingmaker of Lagos Island, designed by the royal chief himself",
    value: "₦1.5 Billion",
    category: "Residential",
    status: "Completed",
    location: "Isale Eko, Lagos Island",
    year: "2025",
    slug: "onilegbale-palace-lagos-island",
    image: IMGS.onilegbalePalace,
    details: [
      "Grand ceremonial entrance and throne room",
      "Traditional Yoruba architectural heritage integrated into modern structure",
      "Architecturally designed by the client himself — Arc. Gbolahan Owodunni Oki",
      "Premium marble floors, custom millwork and bespoke finishes",
    ],
  },
  {
    title: "Continent Hotel Akure — Full Remodelling",
    description: "Complete remodelling of Akure's first international hotel — a 4-star Turkish brand, 70 rooms, winner of Most Exciting Brand Nigeria 2021",
    value: "₦1.2 Billion",
    category: "Hospitality",
    status: "Completed",
    location: "Alagbaka, Akure, Ondo State",
    year: "2024",
    slug: "continent-hotel-akure",
    image: IMGS.continentHotel,
    details: [
      "Full remodelling of all 70 rooms across 5 room categories",
      "Lobby, reception, restaurant and conference area redesign",
      "MEP upgrades — electrical, plumbing and air conditioning",
      "Akure's first international hotel brand — Continent International (Turkish)",
    ],
  },
  {
    title: "Emuren–Ipele Road Dualization",
    description: "Resident engineering supervision and project management on the 14.85 km dual carriageway in Owo LGA — Envostructs' largest active consultancy assignment",
    value: "₦12.59 Billion",
    category: "Infrastructure",
    status: "Ongoing",
    location: "Owo LGA, Ondo State",
    year: "2024",
    slug: "emuren-ipele-road-dualization",
    image: IMGS.roadDualization,
    details: [
      "14.85 km dual carriageway — Emuren junction to Ipele, Owo LGA",
      "Resident engineering supervision, quality control and project management",
      "Bridges, culverts, roadside drainage, signage and street lighting",
      "₦12.59 Billion — Envostructs' largest single consultancy engagement",
    ],
  },
  {
    title: "Swiss International Hotel Abeokuta",
    description: "15 Storey Hotel Structure — a landmark hospitality project featuring modern design and engineering excellence",
    value: "₦6.5 Billion",
    category: "Hospitality",
    status: "Completed",
    location: "Abeokuta, Ogun State",
    year: "2023",
    slug: "swiss-international-hotel-abeokuta",
    image: IMGS.swissHotel,
    details: ["15-storey modern hotel structure", "State-of-the-art engineering design", "Complete MEP systems integration", "Luxury hospitality standards"],
  },
  {
    title: "Soilless Farm Lab Hostel",
    description: "12 Blocks of hostel accommodation for an agricultural research facility",
    value: "₦850 Million",
    category: "Educational",
    status: "Completed",
    location: "Awowo Village, Abeokuta",
    year: "2022",
    slug: "soilless-farm-lab-hostel",
    image: IMGS.farmHostel,
    details: ["12 blocks of modern hostel accommodation", "Specialized agricultural research facility", "Sustainable construction practices", "Modern amenities and utilities"],
  },
  {
    title: "Community Bridge Project",
    description: "Bridge linking Ibeju Lekki Community with Iba-Oloja Community",
    value: "₦750 Million",
    category: "Infrastructure",
    status: "Design Phase",
    location: "Ibeju Lekki, Lagos State",
    year: "2024",
    slug: "community-bridge-project",
    image: IMGS.bridge,
    details: ["Strategic community connectivity", "Advanced bridge engineering", "Environmental impact consideration", "Sustainable transportation solution"],
  },
]

type Project = {
  title: string
  description: string
  value: string
  category: string
  status: string
  location: string
  image: string
  slug?: string
}

const ALL_PROJECTS: Project[] = [
  { title: "Continent Hotel Akure — Remodelling", description: "Full remodelling of the 4-star Continent Hotel — Akure's first international hotel brand, 70 rooms, Ondo State", value: "₦1.2 Billion", category: "Hospitality", status: "Completed", location: "Alagbaka, Akure, Ondo State", image: IMGS.continentHotel, slug: "continent-hotel-akure" },
  { title: "The New Onilegbale Palace", description: "Grand palace for the Onilegbale of Lagos — First Class Akarigbere Royal Chief and Kingmaker, Isale Eko", value: "₦1.5 Billion", category: "Residential", status: "Completed", location: "Lagos Island, Lagos", image: IMGS.onilegbalePalace, slug: "onilegbale-palace-lagos-island" },
  { title: "Swiss Budget Hotel Conversion", description: "Office complex converted to hotel in the heart of the Balogun commercial district, Lagos Island", value: "₦5.2 Billion", category: "Hospitality", status: "Completed", location: "Balogun, Lagos", image: IMGS.budgetHotel, slug: "swiss-budget-hotel-balogun" },
  { title: "Emuren – Ipele Road Dualization", description: "Consultancy works on 14.85 km road dualization — Envostructs' largest active consultancy assignment", value: "₦12.59 Billion", category: "Infrastructure", status: "Ongoing", location: "Ondo State", image: IMGS.roadDualization, slug: "emuren-ipele-road-dualization" },
  { title: "Swiss Spirit Hotel Makurdi", description: "Structural design and construction works for the Swiss Spirit Hotel, Makurdi", value: "₦1.2 Billion", category: "Hospitality", status: "Completed", location: "Makurdi, Benue State", image: IMGS.hotelMakurdi, slug: "swiss-spirit-hotel-makurdi" },
  { title: "Lekki Free Zone Roads (N5 & E6A)", description: "Design and construction of internal roads N5 and E6A within the Lekki Free Zone", value: "₦464 Million", category: "Infrastructure", status: "Completed", location: "Lekki Free Zone, Lagos", image: IMGS.lekkiFreeZone, slug: "lekki-free-zone-roads" },
  { title: "NASFAT Central Mosque", description: "Construction of the NASFAT central mosque complex at Isolo, serving 500+ worshippers", value: "₦80 Million", category: "Religious", status: "Completed", location: "Isolo, Lagos", image: IMGS.mosque, slug: "nasfat-central-mosque" },
  { title: "Detached Duplex Units — OGUDU GRA", description: "4 units of 5-bedroom fully detached luxury duplexes at OGUDU GRA", value: "₦300 Million", category: "Residential", status: "Ongoing", location: "OGUDU GRA, Lagos", image: IMGS.duplex, slug: "ogudu-gra-duplex" },
  { title: "Block of Classrooms — Lagos State Polytechnic", description: "New classroom block for the Department of Insurance, Lagos State Polytechnic Ikorodu campus", value: "₦110 Million", category: "Educational", status: "Completed", location: "Ikorodu, Lagos", image: IMGS.classrooms, slug: "lagos-poly-classrooms" },
  { title: "Celestial Church Headquarters", description: "Completion of construction at the CCC Celestial City world headquarters — the Jerusalem of the CCC", value: "₦50 Million", category: "Religious", status: "Completed", location: "Imeko, Ogun State", image: IMGS.church, slug: "celestial-church-headquarters" },
  { title: "Igbologun Community Jetty", description: "Design and construction of a local jetty serving the Igbologun fishing community", value: "₦4.1 Million", category: "Infrastructure", status: "Completed", location: "Snake Island, Lagos", image: IMGS.jetty },
  { title: "Residential Jetties — Lekki", description: "Design and construction of private residential jetties", value: "₦6 Million", category: "Infrastructure", status: "Completed", location: "Lekki, Lagos", image: IMGS.jetty },
  { title: "NASFAT Bored Pile Foundation", description: "Subsoil investigation, design and installation of bored piles for NASFAT complex", value: "₦12 Million", category: "Geotechnical", status: "Completed", location: "Isolo, Lagos", image: IMGS.geotechnical },
  { title: "Lagos Free Zone Subsoil Investigation", description: "Subsoil investigation for the Lagos Free Zone Development Company", value: "₦2.1 Million", category: "Geotechnical", status: "Completed", location: "Lekki, Lagos", image: IMGS.geotechnical },
  { title: "Akanro Road, Ilasa", description: "Design and supervision of road rehabilitation works on Akanro Street — home of the Envostructs HQ", value: "₦85 Million", category: "Infrastructure", status: "Completed", location: "Ilasa, Lagos", image: IMGS.roadWorld, slug: "akanro-road-ilasa" },
  { title: "National Theatre Multi-Car Parks", description: "Design and supervision of multi-storey car parks and access roads at the National Arts Theatre", value: "₦350 Million", category: "Infrastructure", status: "Completed", location: "Iganmu, Lagos", image: IMGS.carpark, slug: "national-theatre-car-parks" },
  { title: "Owo/Iyere Road", description: "Design and supervision of road construction on the Owo–Iyere corridor, Ondo State", value: "₦175 Million", category: "Infrastructure", status: "Completed", location: "Owo, Ondo State", image: IMGS.owoIyereRoad, slug: "owo-iyere-road" },
  { title: "First Bank Nigeria — Branch Designs", description: "Structural design programme for multiple First Bank branch buildings across Nigeria", value: "₦95 Million", category: "Commercial", status: "Completed", location: "Multiple States", image: IMGS.commercial, slug: "first-bank-branch-designs" },
  { title: "Diamond Bank — Herbert Macaulay", description: "Structural design and engineering for Diamond Bank branch at 238 Herbert Macaulay Way, Yaba", value: "₦48 Million", category: "Commercial", status: "Completed", location: "Herbert Macaulay, Lagos", image: IMGS.diamondBank, slug: "diamond-bank-herbert-macaulay" },
  { title: "Arepo Estate Road Resurfacing", description: "Resurfacing of internal estate roads", value: "₦32 Million", category: "Infrastructure", status: "Completed", location: "Arepo, Ogun State", image: IMGS.roadWorld },
  { title: "Mile 12 – Ikorodu Road (World Bank)", description: "Quality control and safety supervision on the World Bank-funded Mile 12–Ikorodu rehabilitation", value: "₦215 Million", category: "Infrastructure", status: "Completed", location: "Lagos", image: IMGS.ikoroduRoad, slug: "mile12-ikorodu-road" },
  { title: "Nigerian Airport Authority — Runway Resurfacing", description: "Resurfacing of tarmac runway at Murtala Muhammed International Airport for FAAN", value: "₦285 Million", category: "Infrastructure", status: "Completed", location: "Lagos", image: IMGS.runway, slug: "airport-runway-resurfacing" },
  { title: "Micropile for Billboard — Surulere", description: "Design and installation of micropile foundation for spectacular LED billboard", value: "₦5.4 Million", category: "Geotechnical", status: "Completed", location: "Surulere, Lagos", image: IMGS.micropile },
  { title: "Arepo Central Mosque", description: "Design and construction of the Arepo community central mosque, Ogun State", value: "₦42 Million", category: "Religious", status: "Completed", location: "Arepo, Ogun State", image: IMGS.arepoMosque, slug: "arepo-central-mosque" },
]

const FILTERS = ["All", "Hospitality", "Infrastructure", "Educational", "Religious", "Residential", "Geotechnical", "Commercial"]

const CATEGORY_COLORS: Record<string, string> = {
  Hospitality: "bg-purple-100 text-purple-800",
  Residential: "bg-green-100 text-green-800",
  Educational: "bg-blue-100 text-blue-800",
  Infrastructure: "bg-orange-100 text-orange-800",
  Religious: "bg-indigo-100 text-indigo-800",
  Geotechnical: "bg-yellow-100 text-yellow-800",
  Commercial: "bg-gray-100 text-gray-800",
}

const STATUS_COLORS: Record<string, string> = {
  Completed: "bg-green-100 text-green-800",
  Ongoing: "bg-amber-100 text-amber-800",
  "Design Phase": "bg-blue-100 text-blue-800",
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [modal, setModal] = useState<Project | null>(null)

  const filtered = activeFilter === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(1,15,41,0.92) 0%, rgba(0,30,80,0.88) 100%), url('${IMGS.lekkiFreeZone}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Our<br />
            <span className="text-amber-400">Projects</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Showcasing our portfolio of successful engineering and construction projects across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full">60+ Projects Completed</span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full">₦30+ Billion in Value</span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full">7 Sectors</span>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="section-label">Flagship Work</span>
              <h2 className="section-title mb-4">Featured Projects</h2>
              <p className="section-desc">Our most significant and impactful engineering achievements</p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {FEATURED.map((project, index) => (
              <Reveal key={project.title} direction="up" delay={index * 100}>
                <div className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-72 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""} overflow-hidden`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[project.category] ?? "bg-gray-100 text-gray-800"}`}>{project.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${STATUS_COLORS[project.status] ?? "bg-gray-100"}`}>{project.status}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-500"><MapPin className="w-4 h-4 shrink-0 text-amber-500" />{project.location}</div>
                      <div className="flex items-center gap-2 text-gray-500"><Calendar className="w-4 h-4 shrink-0 text-amber-500" />{project.year}</div>
                      <div className="col-span-2">
                        <span className="text-2xl font-black text-amber-600">{project.value}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-amber-500 rounded-full shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {project.slug && (
                      <Link href={`/projects/${project.slug}`}>
                        <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold hover:scale-105 transition-all duration-300">
                          View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#003366] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
            {[
              { value: "22+", label: "Projects Listed" },
              { value: "₦30B+", label: "Total Portfolio Value" },
              { value: "7", label: "Sectors Served" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-2">
                <div className="text-3xl md:text-4xl font-black text-amber-400">{stat.value}</div>
                <p className="text-blue-200 text-xs md:text-sm mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT MAP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">Nationwide Reach</span>
              <h2 className="section-title mb-4">Projects Across Nigeria</h2>
              <p className="section-desc">From Lagos Island to Benue State — engineering excellence delivered nationwide</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <NigeriaProjectMap />
          </Reveal>
        </div>
      </section>

      {/* ── PORTFOLIO GRID with FILTER PILLS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-10">
              <span className="section-label">Full Portfolio</span>
              <h2 className="section-title mb-4">Project Portfolio</h2>
              <p className="section-desc">Complete record of our engineering and construction achievements</p>
            </div>
          </Reveal>

          {/* Filter pills */}
          <Reveal direction="up" delay={100} className="flex flex-wrap gap-2 justify-center mb-10">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeFilter === filter ? "bg-amber-500 text-white shadow-md scale-105" : "bg-white border border-gray-200 text-gray-600 hover:border-amber-400 hover:text-amber-600"}`}
              >
                {filter}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <Reveal key={project.title} direction="up" delay={(index % 3) * 80}>
                <button
                  onClick={() => setModal(project)}
                  className="group w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[project.category] ?? "bg-gray-100 text-gray-800"}`}>{project.category}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">Quick View <ExternalLink className="w-3 h-3" /></span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-black text-gray-900 text-base leading-tight group-hover:text-amber-600 transition-colors pr-2">{project.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${STATUS_COLORS[project.status] ?? "bg-gray-100"}`}>{project.status}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                      <span className="font-black text-amber-600 text-sm">{project.value}</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Start Your Project</span>
            <h2 className="section-title-light mb-5">Ready to Start Your Project?</h2>
            <p className="text-white/50 text-lg mb-10">Join our portfolio of successful projects and experience excellence in engineering.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── QUICK-VIEW MODAL ── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img src={modal.image} alt={modal.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[modal.category] ?? "bg-gray-100"}`}>{modal.category}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-gray-900 pr-4">{modal.title}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${STATUS_COLORS[modal.status] ?? "bg-gray-100"}`}>{modal.status}</span>
              </div>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{modal.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-500"><MapPin className="w-4 h-4 text-amber-500 shrink-0" />{modal.location}</div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-amber-600">{modal.value}</span>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                {modal.slug ? (
                  <Link href={`/projects/${modal.slug}`} onClick={() => setModal(null)} className="flex-1">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold">
                      View Full Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="/contact" onClick={() => setModal(null)} className="flex-1">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold">
                      Inquire About This Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
