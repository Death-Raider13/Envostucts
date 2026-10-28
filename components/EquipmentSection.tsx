"use client"

import { Reveal } from "@/components/Reveal"
import {
  Wrench,
  Layers,
  Hammer,
  Activity,
  Compass,
  Truck,
  Microscope,
  Cpu,
} from "lucide-react"

const EQUIPMENT_FLEET = [
  {
    name: "Dutch Cone Penetrometer (2.5T & 10T/20T CPT)",
    qty: 3,
    category: "Geotechnical",
    img: "/lekki%20freezone%20subsoil.png",
    desc: "Continuous cone tip resistance (qc) and sleeve friction sounding for deep bearing capacity profiling.",
    icon: Layers,
  },
  {
    name: "Percussion & Rotary Borehole Rigs",
    qty: 4,
    category: "Drilling & Sampling",
    img: "/micropile%20for%20billboards.png",
    desc: "Shell-and-auger percussion and rotary rigs for 30m+ borehole drilling, SPT N-values, and U100 sampling.",
    icon: Hammer,
  },
  {
    name: "Bored, Caisson & Micropile Plant",
    qty: 3,
    category: "Piling Works",
    img: "/nasfat-building.jpg",
    desc: "Specialized piling plant for 250mm–600mm cast-in-situ bored piles, caissons, and marine jetty foundations.",
    icon: Wrench,
  },
  {
    name: "NDT Structural Appraisal Suite (LASBCA-CAP)",
    qty: 4,
    category: "NDT & Appraisal",
    img: "/onilegbale2.jpg",
    desc: "Schmidt Rebound Hammers, Ultrasonic Pulse Velocity (UPV) testers, and Rebar Scanners for structural stability audits.",
    icon: Activity,
  },
  {
    name: "BS 1377 Soil & Materials Testing Lab Access",
    qty: 2,
    category: "Laboratory QA/QC",
    img: "/lagos-ikorodu(worldbank).png",
    desc: "Triaxial compression, Oedometer consolidation, California Bearing Ratio (CBR), Proctor compaction & concrete cube crushing.",
    icon: Microscope,
  },
  {
    name: "Highway Earthworks & Asphalt Compaction Plant",
    qty: 6,
    category: "Highway & Civil",
    img: "/dualization%20of%20ipele.jpg",
    desc: "Heavy-duty road graders, vibratory rollers, asphalt pavers, and concrete batching mixers for highway corridors.",
    icon: Truck,
  },
  {
    name: "Total Stations, Differential GPS & Optical Levels",
    qty: 5,
    category: "Survey & Geomatics",
    img: "/lekki%20free%20zone%202.jpg",
    desc: "High-precision topographic survey, highway route alignment, and foundation grid setting-out instruments.",
    icon: Compass,
  },
  {
    name: "CAD, BIM & Structural Analysis Suite",
    qty: 12,
    category: "Design & BIM",
    img: "/first-bank%20designs.png",
    desc: "Workstations running AutoCAD, Orion/ProtaStructure, STAAD.Pro, Civil 3D, WaterCAD, and MS Project.",
    icon: Cpu,
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Geotechnical: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Drilling & Sampling": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Piling Works": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "NDT & Appraisal": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "Laboratory QA/QC": "bg-rose-500/20 text-rose-300 border-rose-500/30",
  "Highway & Civil": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "Survey & Geomatics": "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "Design & BIM": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
}

const TOTAL_UNITS = EQUIPMENT_FLEET.reduce((sum, e) => sum + e.qty, 0)

export function EquipmentSection() {
  return (
    <section id="equipment" className="py-24 bg-[#070b14] relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Technical Arsenal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Field Plant, NDT Apparatus &amp; Design Suite
          </h2>
          <p className="text-white/55 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {TOTAL_UNITS}+ specialized field rigs, non-destructive structural testing instruments,
            and engineering design workstations — ensuring precision from subsoil investigation to
            highway and high-rise commissioning.
          </p>
        </Reveal>

        {/* Equipment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {EQUIPMENT_FLEET.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.name} direction="up" delay={i * 40}>
                <div className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 h-full flex flex-col">
                  {/* Photo */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 bg-amber-500 text-[#001529] text-xs font-black px-2.5 py-1 rounded-full">
                      ×{item.qty}
                    </div>
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-[#003366]/90 border border-white/15 flex items-center justify-center text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <span
                      className={`inline-block w-fit text-[10px] font-bold px-2.5 py-1 rounded-full border mb-2.5 ${
                        CATEGORY_COLORS[item.category] ??
                        "bg-amber-500/20 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-snug mb-2">{item.name}</h3>
                    <p className="text-white/50 text-xs leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Summary bar */}
        <Reveal direction="up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
            {[
              { value: `${TOTAL_UNITS}+`, label: "Field & Design Units" },
              { value: "8", label: "Specialist Categories" },
              { value: "LASBCA-CAP", label: "NDT Audit Accredited" },
              { value: "BS / Eurocode", label: "Calibrated Standards" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-amber-400">{value}</p>
                <p className="text-white/50 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
