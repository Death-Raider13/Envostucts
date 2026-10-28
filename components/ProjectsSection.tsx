"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  MapPin,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  X,
  Building2,
  ShieldCheck,
  Wrench,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface RegionItem {
  id: string
  name: string
  states: string
  soilProfile: string
  foundationType: string
  highlight: string
  projects: string[]
}

const REGIONS: RegionItem[] = [
  {
    id: "lagos-coastal",
    name: "Lagos Island & Coastal Zone",
    states: "Lekki Free Zone • Ikoyi • Victoria Island • Ajah • Apapa",
    soilProfile:
      "Deep marine clay, organic fibrous peat, and loose fine-to-medium sand aquifers requiring deep bored piling and sand-compaction consolidation.",
    foundationType: "Bored & Driven Piles (450mm–900mm Ø) • Raft Foundations • Jetty Works",
    highlight: "35+ Subsoil Investigations, Bored Piling & Coastal Road Works Executed",
    projects: [
      "Lekki Free Zone Roads N5 & E6A Construction (₦464M)",
      "The New Onilegbale Palace, Lagos Island (Architectural & Structural Design)",
      "Residential Bored Pile Foundation at Lekki Phase I (Prince Tunde Ponle)",
      "Ikoyi Crescent & Gerrard Road Multi-Storey Subsoil Investigations (ESN/SI)",
      "Igbologun Community Jetty & Shoreline Works, Apapa Lagos",
    ],
  },
  {
    id: "lagos-mainland",
    name: "Lagos Mainland & Industrial Corridors",
    states: "Ikeja • Isolo/Okota • Surulere • Iganmu • Ogudu GRA • Ikorodu",
    soilProfile:
      "Variable alluvial silty sands, swampy valley fills, and firm-to-stiff lateritic clay horizons requiring customized pile/pad foundations and LASBCA-CAP structural audits.",
    foundationType: "Micropiles • Bored Piles • Pad/Raft Substructures • Asphaltic Pavements",
    highlight: "40+ Structural Designs, Airport/World Bank Pavements & LASBCA-CAP Audits",
    projects: [
      "MMIA Domestic Runway 18L/36R Asphaltic Concrete Resurfacing, Ikeja (₦285M)",
      "National Theatre Multi-Level Car Parks (4 Nos.), Iganmu Lagos (₦350M)",
      "Mile 12 – Ikorodu Town Dual Carriageway Rehabilitation (World Bank Assisted, ₦215M)",
      "4 Units Detached Luxury Duplexes at Ogudu GRA, Lagos (₦300M — Ongoing)",
      "NASFAT Central Mosque Structural Consultancy & Bored Piling, Ikeja (₦120M)",
      "LASBCA-CAP Certified Accreditors Structural Stability Audits, Isolo/Okota District",
    ],
  },
  {
    id: "southwest",
    name: "Ogun & South-West Industrial Belt",
    states: "Abeokuta • Awowo • Sagamu • Mowe-Ofada • Ibadan • Osogbo",
    soilProfile:
      "Residual lateritic clays, weathered basement complex schists, and localized alluvial river valleys suitable for high-capacity pad, strip, and raft foundations.",
    foundationType: "Reinforced Concrete Framed Structures • Rigid/Flexible Pavements • Hostels",
    highlight: "18+ Institutional, Agro-Industrial & Commercial Developments Delivered",
    projects: [
      "Soilless Farm Lab 12-Block Student Hostel Complex, Awowo Abeokuta (₦850M)",
      "NASFAT Islamic Centre Structural Engineering & Supervision, Mowe Ogun State",
      "Multi-Site Commercial Bank Branch Developments (Zenith Bank & Access/Diamond Bank)",
      "Subsoil & Foundation Investigations across Ogun & Oyo Industrial Corridors",
    ],
  },
  {
    id: "ondo-highway",
    name: "Ondo & Southern Highway Corridor",
    states: "Ipele • Owo • Akure • Emuren • Ore",
    soilProfile:
      "Undulating lateritic terrain, basement rock outcrops, and seasonal river crossings requiring heavy earthworks, box culverts, and high-CBR sub-base stabilization.",
    foundationType: "Dual Carriageways • Box/Pipe Culverts • Multi-Storey Hospitality Remodelling",
    highlight: "₦12.59B+ Major Trunk Highway Dualization & Hospitality Engineering",
    projects: [
      "Emuren – Ipele Dual Carriageway Road Dualization, Ondo State (₦12.59 Billion)",
      "Continent Hotel Remodelling & Structural Upgrade, Akure Ondo State",
      "Subgrade California Bearing Ratio (CBR) & Borrow Pit Material Evaluations",
    ],
  },
  {
    id: "national",
    name: "Abuja (FCT), Benue & Nationwide",
    states: "Abuja FCT • Makurdi • Port Harcourt • Enugu • Northern Corridors",
    soilProfile:
      "Pre-Cambrian basement complex gneiss/granites in FCT/North-Central and Niger Delta chicoco/silty clays in the South-South.",
    foundationType: "Geotechnical Subsoil Investigations • Bank Rollouts • Federal Infrastructure",
    highlight: "Nationwide Geotechnical Drilling & Commercial Bank Infrastructure",
    projects: [
      "Geotechnical Subsoil Investigation at Makurdi, Benue State (ESN/SI Log)",
      "Federal & Commercial Bank Branch Structural Audits & Turnkey Developments",
      "Specialized NDT Structural Integrity Assessments for Institutional Clients",
    ],
  },
]

export interface CaseStudyProject {
  title: string
  category: "Infrastructure" | "Buildings" | "Geotechnical" | "Hospitality" | "Residential"
  location: string
  year: string
  status: "Completed" | "Ongoing"
  value: string
  slug?: string
  image: string
  client: string
  standard: string
  equipment: string
  desc: string
  scopeDeliverables: string[]
  tags: string[]
}

export const FEATURED_CASE_STUDIES: CaseStudyProject[] = [
  {
    title: "Emuren–Ipele Road Dualization",
    category: "Infrastructure",
    location: "Ondo State",
    year: "2023",
    status: "Completed",
    value: "₦12.59 Billion",
    image: "/dualization%20of%20ipele.jpg",
    client: "State Ministry of Works & Infrastructure",
    standard: "FMWH General Specs (Roads & Bridges) / BS 8110",
    equipment: "Asphalt Pavers, Vibratory Rollers, Surveying Total Stations & Soil Lab",
    desc: "Full-scale highway engineering and dualization of the Emuren–Ipele arterial corridor, incorporating geometric realignment, stone-base stabilization, asphaltic concrete wearing courses, and reinforced concrete drainage/culvert networks.",
    scopeDeliverables: [
      "Route topographic survey, hydrological catchment modeling, and geometric design",
      "Subgrade CBR testing, borrow pit material qualification, and stone-base compaction",
      "Reinforced concrete box culverts, line drains, and erosion protection works",
      "Binder and wearing course hot-mix asphalt paving with strict Marshall stability QA/QC",
    ],
    tags: ["Dual Carriageway", "₦12.59 Billion", "Highway Engineering", "Drainage & Culverts"],
  },
  {
    title: "Soilless Farm Lab Hostel (12 Blocks)",
    category: "Buildings",
    location: "Awowo, Abeokuta, Ogun State",
    year: "2022",
    status: "Completed",
    value: "₦850 Million",
    slug: "soilless-farm-lab-hostel",
    image: "/soiless-farm-hostel.jpg",
    client: "Soilless Farm Laboratory",
    standard: "Eurocode 2 / BS 8110 & National Building Code",
    equipment: "Concrete Batching Plant, Total Station, Cube Crushing Press & NDT Suite",
    desc: "Turnkey design and construction of a 12-block student residential hostel complex at Awowo Village, Abeokuta, engineered for sustainable ventilation, structural durability, and rapid modular program delivery.",
    scopeDeliverables: [
      "Geotechnical foundation design and reinforced concrete framed superstructure across 12 blocks",
      "Complete architectural, structural, mechanical, and electrical (M&E) engineering integration",
      "Water supply reticulation, sewage treatment, and perimeter civil infrastructure",
      "Delivered on schedule and within the ₦850M budget with zero lost-time HSE incidents",
    ],
    tags: ["12 Hostel Blocks", "₦850 Million", "Turnkey Construction", "Institutional"],
  },
  {
    title: "Lekki Free Zone Roads (N5 & E6A)",
    category: "Infrastructure",
    location: "Lekki Free Trade Zone, Lagos",
    year: "2023",
    status: "Completed",
    value: "₦464 Million",
    image: "/lekki%20free%20zone.jpg",
    client: "Lekki Free Zone Development Company (LFZDC)",
    standard: "FMWH Highway Manual / BS 1377 Soil Mechanics",
    equipment: "Bulldozers, Motor Graders, Vibro-Rollers, CBR Rigs & Asphalt Paver",
    desc: "Engineering design and heavy civil construction of industrial corridor Roads N5 and E6A within the Lekki Free Trade Zone, engineered to withstand heavy container and haulage axle loads over coastal subgrades.",
    scopeDeliverables: [
      "Subsoil stabilization of coastal sandy/clayey formation and geotextile reinforcement",
      "Crushed-stone base course, prime coat, and high-stability asphaltic concrete surfacing",
      "Heavy-duty reinforced concrete storm-water drainage channels and street lighting ducts",
      "Full in-situ field density (sand replacement) and Marshall asphalt core verification",
    ],
    tags: ["Industrial Roads", "₦464 Million", "Coastal Subgrade", "Lekki Free Zone"],
  },
  {
    title: "Detached Luxury Duplex Units (4 Nos.)",
    category: "Residential",
    location: "Ogudu GRA, Lagos State",
    year: "2024",
    status: "Ongoing",
    value: "₦300 Million",
    image: "/ogudu%20GRA%20four%20bedroom.jpeg",
    client: "Private Residential Estate Developer",
    standard: "BS 8110 / Eurocode 2 & LASBCA Statutory Code",
    equipment: "Rotary Piling Rig, Concrete Mixers, Rebar Bender & Laser Level",
    desc: "Complete structural engineering, foundation works, and turnkey building construction of 4 luxury detached four-bedroom duplexes in Ogudu GRA, Lagos, featuring contemporary cantilevers and high-grade finishes.",
    scopeDeliverables: [
      "Subsoil borehole & CPT investigation to determine optimal foundation bearing horizon",
      "Reinforced concrete substructure, suspended floor slabs, and architectural blockwork",
      "Full LASBCA stage-by-stage statutory inspection and cube crushing strength compliance",
      "Integrated M&E conduits, drainage, and paved external driveway works",
    ],
    tags: ["4 Detached Duplexes", "₦300 Million", "Ogudu GRA Lagos", "Turnkey Residential"],
  },
  {
    title: "The New Onilegbale Palace",
    category: "Buildings",
    location: "Lagos Island, Lagos State",
    year: "2024",
    status: "Completed",
    value: "Landmark Cultural & Civic Edifice",
    image: "/onilegbale-palace.jpg",
    client: "Onilegbale Chieftaincy Family / Lagos Island",
    standard: "Eurocode 2 (EN 1992) & BS 8004 Deep Foundations",
    equipment: "Percussion Drilling Rig, 20-Ton CPT, Orion / CSC Tedds Structural Suite",
    desc: "Comprehensive architectural and structural engineering design for The New Onilegbale Palace on Lagos Island — blending royal Yoruba cultural heritage aesthetics with multi-storey coastal foundation engineering.",
    scopeDeliverables: [
      "Coastal Lagos Island geotechnical soil investigation and deep pile foundation design",
      "Multi-storey reinforced concrete frame, long-span palace hall beams, and dome detailing",
      "Complete architectural 3D visualization, working drawings, and structural bending schedules",
      "Designed for 50+ year durability in an aggressive marine/lagoon atmospheric exposure zone",
    ],
    tags: ["Lagos Island", "Cultural Landmark", "Architectural & Structural", "Deep Foundation"],
  },
  {
    title: "Continent Hotel Remodelling",
    category: "Hospitality",
    location: "Akure, Ondo State",
    year: "2023",
    status: "Completed",
    value: "Major Hospitality Upgrade",
    image: "/continent-hotel-akure.jpg",
    client: "Continent Hotels Limited",
    standard: "BS 8110 / BS EN 12504 NDT Assessment",
    equipment: "Schmidt Hammer, Ultrasonic Pulse Velocity (UPV), Rebar Scanner & CAD Suite",
    desc: "Structural integrity appraisal, architectural remodelling, and engineering upgrade of Continent Hotel in Akure — transforming an existing structure into a modern luxury hospitality destination.",
    scopeDeliverables: [
      "Non-Destructive Testing (NDT) and structural load-capacity audit of existing RC columns/slabs",
      "Architectural façade modernization, internal space reconfiguration, and structural strengthening",
      "Upgraded MEP services, fire safety compliance, and external civil/landscape works",
      "Delivered with minimal disruption and commended by the Managing Director for excellence",
    ],
    tags: ["Hospitality", "Structural Remodelling", "NDT Audit", "Akure Ondo State"],
  },
  {
    title: "National Theatre Multi-Level Car Parks (4 Nos.)",
    category: "Buildings",
    location: "Iganmu, Lagos State",
    year: "2022",
    status: "Completed",
    value: "₦350 Million",
    image: "/national%20theatre.jpg",
    client: "Federal / Central Bank Intervention Project",
    standard: "Eurocode 2 & BS 8004 Pile Foundations",
    equipment: "Hydraulic Rotary Piling Rigs, Dynamic Load Tester, Total Station",
    desc: "Specialist structural and geotechnical consultancy for 4 multi-level reinforced concrete car park structures at the National Arts Theatre complex in Iganmu, Lagos, founded on deep swamp/estuarine subsoils.",
    scopeDeliverables: [
      "Deep geotechnical borehole investigation across organic peat and marine clay strata",
      "High-capacity bored pile foundation design and pile integrity testing (PIT) supervision",
      "Heavy-duty suspended ramp and deck structural engineering for concentrated vehicular loads",
      "Full QA/QC construction supervision and structural certification",
    ],
    tags: ["Multi-Storey Car Parks", "₦350 Million", "Iganmu Swamp Piling", "National Landmark"],
  },
  {
    title: "MMIA Airport Runway 18L/36R Resurfacing",
    category: "Infrastructure",
    location: "Ikeja, Lagos State",
    year: "2019",
    status: "Completed",
    value: "₦285 Million",
    image: "/murtala%20muhammed%20airport.jpg",
    client: "Federal Airports Authority of Nigeria (FAAN)",
    standard: "ICAO Annex 14 / FAAN Airfield Pavement Specs",
    equipment: "Precision Milling Machine, Heavy Asphalt Paver, Nuclear Density Gauge",
    desc: "Critical airfield pavement engineering and asphaltic concrete resurfacing of Domestic Runway 18L/36R at Murtala Muhammed International Airport (MMIA), Ikeja, executed under strict aviation safety windows.",
    scopeDeliverables: [
      "Airfield pavement distress survey, core extraction, and PCN/ACN structural evaluation",
      "Precision scarification/milling of fatigued surface and application of polymer-modified tack coat",
      "High-stability Marshall asphaltic concrete wearing course placement under night-shift windows",
      "Zero runway closure overrun and full compliance with ICAO surface friction tolerances",
    ],
    tags: ["Airport Runway", "₦285 Million", "FAAN Aviation", "Asphalt Resurfacing"],
  },
  {
    title: "NASFAT Central Mosque & Bored Piling",
    category: "Geotechnical",
    location: "Ikeja & Mowe, Lagos/Ogun",
    year: "2021",
    status: "Completed",
    value: "₦120 Million",
    image: "/mosque%20piling.jpeg",
    client: "NASFAT Society of Nigeria",
    standard: "BS 8004 / BS 8110 Structural Use of Concrete",
    equipment: "Rotary Bored Piling Rig, Tremie Concrete System, Ultrasonic Integrity Tester",
    desc: "Geotechnical investigation, bored pile foundation construction, and structural engineering consultancy for the NASFAT Central Mosque complex — engineered for high crowd live loads and long-span prayer halls.",
    scopeDeliverables: [
      "Subsoil boreholes, SPT N-value profiling, and laboratory consolidation/triaxial testing",
      "Installation of reinforced concrete bored piles with bentonite/casing stabilization",
      "Pile static load testing and low-strain Pile Integrity Testing (PIT) verification",
      "Superstructure frame, minaret foundation, and long-span roof truss engineering",
    ],
    tags: ["Bored Piling", "₦120 Million", "Geotechnical & Structural", "Institutional"],
  },
]

const CATEGORIES = ["All", "Infrastructure", "Buildings", "Geotechnical", "Hospitality", "Residential"] as const

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [activeRegion, setActiveRegion] = useState<string>("lagos-coastal")
  const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? FEATURED_CASE_STUDIES
      : FEATURED_CASE_STUDIES.filter((p) => p.category === activeCategory)

  const currentRegion = REGIONS.find((r) => r.id === activeRegion) || REGIONS[0]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null)
    }
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject])

  const handleRequestSimilarProject = (project: CaseStudyProject) => {
    const summaryText = `SIMILAR PROJECT INQUIRY — ${project.title.toUpperCase()}
• Reference Case Study: ${project.title} (${project.location})
• Reference Category: ${project.category}
• Reference Standard: ${project.standard}

Please contact us with a technical proposal and fee schedule for a similar project scope:`

    setSelectedProject(null)

    window.dispatchEvent(
      new CustomEvent("envostructs:prefill-contact", {
        detail: {
          clientType: "Direct Corporate / Private Developer",
          service:
            project.category === "Geotechnical"
              ? "Geotechnical Services"
              : project.category === "Infrastructure"
              ? "Highway Design"
              : "Construction Works",
          message: summaryText,
        },
      })
    )

    setTimeout(() => {
      const contactEl = document.getElementById("contact")
      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003366]/10 text-[#003366] text-xs font-bold uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              Proven Field Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Selected Engineering{" "}
              <span className="text-[#003366] underline decoration-amber-500/40 decoration-wavy underline-offset-8">
                Case Studies
              </span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
            Over 100+ geotechnical investigations, piling works, highways, and structural building contracts worth{" "}
            <strong className="text-gray-900">₦500B+</strong> delivered across Nigeria since 2008.
          </p>
        </div>

        {/* Interactive Regional & Soil Footprint Explorer */}
        <div className="mb-16 bg-[#0a0e1a] rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Nigeria Geological Zones
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
                Regional Field Execution Footprint
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Select a region below to inspect our local subsoil experience, foundation engineering methodology, and
                representative contracts across Nigeria&apos;s geological belts.
              </p>
              <div className="flex flex-col gap-2">
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActiveRegion(r.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-bold transition-all ${
                      activeRegion === r.id
                        ? "bg-amber-500 text-slate-950 shadow-lg"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <MapPin
                        className={`w-4 h-4 ${activeRegion === r.id ? "text-slate-950" : "text-amber-400"}`}
                      />
                      {r.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md font-extrabold ${
                        activeRegion === r.id ? "bg-slate-950/20 text-slate-950" : "bg-white/10 text-slate-300"
                      }`}
                    >
                      Inspect →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Active Zone</span>
                  <h4 className="text-xl font-black text-white mt-0.5">{currentRegion.name}</h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  {currentRegion.highlight}
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Cities & Operational Corridors
                  </span>
                  <p className="text-white font-semibold">{currentRegion.states}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                      Typical Subsoil Formation
                    </span>
                    <p className="text-slate-200 text-xs leading-relaxed">{currentRegion.soilProfile}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                      Engineered Foundation Systems
                    </span>
                    <p className="text-slate-200 text-xs leading-relaxed">{currentRegion.foundationType}</p>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Representative Regional Commissions
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentRegion.projects.map((proj) => (
                      <div
                        key={proj}
                        className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 px-3 py-2 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === category
                  ? "bg-[#003366] text-white shadow-md shadow-[#003366]/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#003366]/30 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#003366]/90 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md ${
                      project.status === "Completed"
                        ? "bg-emerald-500/90 text-white"
                        : "bg-amber-500/90 text-slate-950"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-amber-500 text-slate-950 shadow">
                  {project.value}
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <span className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#003366] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Technical Metadata Strip */}
                  <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100 space-y-1.5 text-xs">
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-400 font-medium">Client:</span>
                      <span className="text-slate-700 font-bold text-right truncate">{project.client}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-400 font-medium">Standard:</span>
                      <span className="text-[#003366] font-bold text-right truncate">{project.standard}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-[#003366] group-hover:text-amber-600 flex items-center gap-1 shrink-0">
                    Inspect Scope →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Full Projects Register */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-full px-8 shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Full Project Register (100+ Commissions) <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-white">
                    {selectedProject.value}
                  </span>
                  <span className="text-xs text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {selectedProject.location}
                  </span>
                  <span className="text-xs text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {selectedProject.year} ({selectedProject.status})
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Engineering Scope & Project Summary
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{selectedProject.desc}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase mb-1">
                    <Building2 className="w-3.5 h-3.5 text-[#003366]" />
                    Client / Sector
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{selectedProject.client}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#003366]" />
                    Code / Standard
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#003366]">{selectedProject.standard}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase mb-1">
                    <Wrench className="w-3.5 h-3.5 text-[#003366]" />
                    Plant & Suite Deployed
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{selectedProject.equipment}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Engineering Deliverables Executed
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.scopeDeliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#003366]/10 text-[#003366] text-xs font-bold"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Need a similar geotechnical, structural, or construction scope for your site?
                </p>
                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                  {selectedProject.slug && (
                    <Link
                      href={`/projects/${selectedProject.slug}`}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors text-center"
                    >
                      Full Project Page
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRequestSimilarProject(selectedProject)}
                    className="px-5 py-2.5 rounded-xl bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold transition-colors flex-1 sm:flex-initial text-center"
                  >
                    Request Similar Scope Proposal →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
