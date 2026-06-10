"use client"

import { useState } from "react"
import { MapPin, X } from "lucide-react"
import Link from "next/link"

type ProjectPin = {
  id: string
  city: string
  state: string
  x: number
  y: number
  projects: { title: string; value: string; slug?: string }[]
}

// Approximate x/y positions on a 400×480 Nigeria SVG viewBox
const PROJECT_PINS: ProjectPin[] = [
  {
    id: "lagos",
    city: "Lagos",
    state: "Lagos State",
    x: 105,
    y: 385,
    projects: [
      { title: "The New Onilegbale Palace", value: "₦1.5B", slug: "onilegbale-palace-lagos-island" },
      { title: "National Theatre Car Parks", value: "₦350M", slug: "national-theatre-car-parks" },
      { title: "NASFAT Central Mosque", value: "₦80M", slug: "nasfat-central-mosque" },
      { title: "Lekki Free Zone Roads", value: "₦464M", slug: "lekki-free-zone-roads" },
      { title: "Mile 12 – Ikorodu Road", value: "₦215M", slug: "mile12-ikorodu-road" },
      { title: "Murtala Muhammed Airport Runway", value: "₦285M", slug: "airport-runway-resurfacing" },
      { title: "Diamond Bank Herbert Macaulay", value: "₦48M", slug: "diamond-bank-herbert-macaulay" },
      { title: "Akanro Road Rehabilitation", value: "₦85M", slug: "akanro-road-ilasa" },
      { title: "OGUDU GRA Duplexes", value: "₦300M", slug: "ogudu-gra-duplex" },
    ],
  },
  {
    id: "abeokuta",
    city: "Abeokuta",
    state: "Ogun State",
    x: 110,
    y: 340,
    projects: [
      { title: "Swiss International Hotel", value: "₦6.5B", slug: "swiss-international-hotel-abeokuta" },
      { title: "Soilless Farm Lab Hostel", value: "₦850M", slug: "soilless-farm-lab-hostel" },
    ],
  },
  {
    id: "arepo",
    city: "Arepo",
    state: "Ogun State",
    x: 125,
    y: 355,
    projects: [
      { title: "Arepo Central Mosque", value: "₦42M", slug: "arepo-central-mosque" },
    ],
  },
  {
    id: "imeko",
    city: "Imeko",
    state: "Ogun State",
    x: 85,
    y: 345,
    projects: [
      { title: "Celestial Church HQ", value: "₦50M", slug: "celestial-church-headquarters" },
    ],
  },
  {
    id: "owo",
    city: "Owo / Ipele",
    state: "Ondo State",
    x: 185,
    y: 345,
    projects: [
      { title: "Emuren–Ipele Road Dualization", value: "₦12.59B", slug: "emuren-ipele-road-dualization" },
      { title: "Owo–Iyere Road", value: "₦175M", slug: "owo-iyere-road" },
    ],
  },
  {
    id: "akure",
    city: "Akure",
    state: "Ondo State",
    x: 168,
    y: 358,
    projects: [
      { title: "Continent Hotel — Full Remodelling", value: "₦1.2 Billion", slug: "continent-hotel-akure" },
    ],
  },
  {
    id: "makurdi",
    city: "Makurdi",
    state: "Benue State",
    x: 255,
    y: 250,
    projects: [
      { title: "Swiss Spirit Hotel", value: "₦1.2B", slug: "swiss-spirit-hotel-makurdi" },
    ],
  },
  {
    id: "ikorodu",
    city: "Ikorodu",
    state: "Lagos State",
    x: 130,
    y: 375,
    projects: [
      { title: "Lagos Poly Classrooms", value: "₦110M", slug: "lagos-poly-classrooms" },
    ],
  },
]

// Simplified Nigeria outline as SVG path (approximate)
const NIGERIA_PATH = `M 155 30 L 175 28 L 200 35 L 230 30 L 265 40 L 295 35 L 320 45 L 345 55 L 360 75 L 365 100 L 375 120 L 380 145 L 370 165 L 360 185 L 355 210 L 350 235 L 340 255 L 330 270 L 315 280 L 300 290 L 280 295 L 265 310 L 250 325 L 235 340 L 220 350 L 200 360 L 185 370 L 170 385 L 155 395 L 140 400 L 120 405 L 100 400 L 80 390 L 65 375 L 55 360 L 50 340 L 45 315 L 40 290 L 42 265 L 48 245 L 55 225 L 60 205 L 65 185 L 70 165 L 72 145 L 75 125 L 80 105 L 88 88 L 98 72 L 112 58 L 128 45 L 145 35 Z`

export function NigeriaProjectMap() {
  const [active, setActive] = useState<ProjectPin | null>(null)

  return (
    <div className="relative w-full">
      <div className="grid lg:grid-cols-2 gap-8 items-center">

        {/* SVG Map */}
        <div className="relative">
          <svg
            viewBox="30 20 360 400"
            className="w-full max-w-sm mx-auto"
            style={{ filter: "drop-shadow(0 4px 24px rgba(0,51,102,0.15))" }}
          >
            {/* Nigeria shape */}
            <path
              d={NIGERIA_PATH}
              fill="rgba(0,51,102,0.08)"
              stroke="rgba(0,51,102,0.3)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Project pins */}
            {PROJECT_PINS.map((pin) => (
              <g key={pin.id} onClick={() => setActive(active?.id === pin.id ? null : pin)} style={{ cursor: "pointer" }}>
                {/* Pulse ring */}
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r="10"
                  fill="rgba(245,158,11,0.2)"
                  className="animate-ping"
                  style={{ transformOrigin: `${pin.x}px ${pin.y}px`, animationDuration: "2.5s" }}
                />
                {/* Pin circle */}
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r="7"
                  fill={active?.id === pin.id ? "#F59E0B" : "#003366"}
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Project count badge */}
                <text
                  x={pin.x}
                  y={pin.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="6"
                  fontWeight="bold"
                >
                  {pin.projects.length}
                </text>
                {/* City label */}
                <text
                  x={pin.x + 11}
                  y={pin.y + 1}
                  dominantBaseline="middle"
                  fill={active?.id === pin.id ? "#F59E0B" : "#003366"}
                  fontSize="7"
                  fontWeight="bold"
                >
                  {pin.city}
                </text>
              </g>
            ))}
          </svg>

          <p className="text-center text-xs text-gray-400 mt-2">Click a pin to see projects in that location</p>
        </div>

        {/* Active pin detail / default list */}
        <div>
          {active ? (
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1px solid rgba(0,51,102,0.12)" }}>
              <div className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: "#003366" }}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-white font-black">{active.city}</p>
                    <p className="text-white/60 text-xs">{active.state}</p>
                  </div>
                </div>
                <button onClick={() => setActive(null)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="divide-y divide-gray-50">
                {active.projects.map((p) => (
                  <div key={p.title} className="px-5 py-3 flex items-center justify-between gap-3 hover:bg-amber-50 transition-colors">
                    <div className="flex-1 min-w-0">
                      {p.slug ? (
                        <Link href={`/projects/${p.slug}`} className="text-gray-900 text-sm font-semibold hover:text-amber-600 transition-colors truncate block">
                          {p.title}
                        </Link>
                      ) : (
                        <p className="text-gray-900 text-sm font-semibold truncate">{p.title}</p>
                      )}
                    </div>
                    <span className="text-amber-600 font-black text-sm shrink-0">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Projects Across Nigeria</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">From Lagos Island to Benue State — Envostructs has delivered engineering excellence in every corner of the country.</p>
              <div className="space-y-3">
                {PROJECT_PINS.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setActive(pin)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition-all text-left group"
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors" style={{ backgroundColor: "#003366" }}>
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-sm">{pin.city}</p>
                      <p className="text-gray-400 text-xs">{pin.state}</p>
                    </div>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                      {pin.projects.length} project{pin.projects.length > 1 ? "s" : ""}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
