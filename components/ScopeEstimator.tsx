"use client"

import { useState, useMemo } from "react"
import {
  Calculator,
  Layers,
  Building2,
  MapPin,
  Ruler,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Clock,
  Wrench,
  FileCheck2,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"

const SOIL_ZONES = [
  {
    id: "lagos-coastal",
    name: "Lagos Coastal, Island & Free Zone (Lekki, Ikoyi, Victoria Island, Lagos Island, Snake Island)",
    geology:
      "Deep compressible marine clays, organic peat & reclaimed hydraulic sand fill; competent dense sand typically at 16m – 32m.",
    minDepth: 30,
    cptMultiplier: 1.5,
    pileLikely: true,
    note: "High water table (0.3m – 1.5m). Deep percussion boring with U100 sampling & 20T CPT strongly recommended alongside raft or bored pile foundations.",
  },
  {
    id: "lagos-mainland",
    name: "Lagos Mainland & Uplands (Isolo/Okota, Ogudu GRA, Ikeja, Surulere, Gbagada, Ikorodu, Yaba)",
    geology:
      "Lateritic silty clays over medium-to-dense coastal plain sands (Benin Formation); localized estuarine valley pockets in Gbagada/Ikorodu.",
    minDepth: 20,
    cptMultiplier: 1.2,
    pileLikely: false,
    note: "Isolated pad/strip or raft foundations viable for low-to-mid-rise; bored/caisson/micropiles required in swampy corridors or high-load structures.",
  },
  {
    id: "ogun-southwest",
    name: "Ogun & South-West Corridor (Abeokuta, Arepo, Mowe, Sagamu, Imeko, Ibadan)",
    geology:
      "Sedimentary Ewekoro/Abeokuta formations transitioning into Pre-Cambrian Basement Complex residual soils and weathered rock.",
    minDepth: 20,
    cptMultiplier: 1.0,
    pileLikely: false,
    note: "Ideal for multi-block institutional hostels, industrial facilities & estates; requires CBR, compaction, and consolidation testing.",
  },
  {
    id: "ondo-highway",
    name: "Ondo, Ekiti & Southern Highway Belt (Owo, Ipele, Akure, Benin/Delta Corridor)",
    geology:
      "Lateritic residual overburden, variable valley alluvium, and basement complex outcrops along inter-urban alignments.",
    minDepth: 20,
    cptMultiplier: 1.1,
    pileLikely: false,
    note: "Requires route alignment geotechnical investigation, California Bearing Ratio (CBR), earthworks compaction, and hydraulic bridge/culvert design.",
  },
  {
    id: "abuja-benue-nationwide",
    name: "Abuja FCT, Benue (Makurdi), Rivers (Port Harcourt), Enugu & Nationwide",
    geology:
      "Alluvial river plains (Benue/Niger Delta) or weathered saprolite over crystalline bedrock (Abuja/Enugu).",
    minDepth: 25,
    cptMultiplier: 1.2,
    pileLikely: true,
    note: "Tailored deep foundation or pad/raft design based on local borehole stratigraphy, seasonal water table, and structural load class.",
  },
]

const STRUCTURE_TYPES = [
  {
    id: "residential-low",
    label: "Residential Duplexes, Royal Palace or Low-Rise Commercial (1 – 4 Storeys)",
    baseBH: 2,
    baseCPT: 3,
    depthAdd: 0,
    serviceSlug: "construction",
    labSuite:
      "Moisture Content, Atterberg Limits, Particle Size (Sieve), Quick Undrained Triaxial (UU) & Oedometer Consolidation (BS 1377)",
    foundationHint:
      "Isolated Pad / Strip or Reinforced Raft Foundation + RC Framed Superstructure (BS 8110 / Eurocode 2)",
  },
  {
    id: "mid-high-rise",
    label: "Multi-Storey Hospitality, Banking Hall, Mosque or Office Complex (5 – 15+ Storeys)",
    baseBH: 4,
    baseCPT: 5,
    depthAdd: 10,
    serviceSlug: "design",
    labSuite:
      "Full BS 1377 Geotechnical Suite + Concrete Cube Crushing, Steel Tensile Verification & Groundwater Chemical Aggressivity (pH, SO4, Cl)",
    foundationHint:
      "Bored Cast-in-Place Piles / Caisson Piles with Rigid Pile Caps + Shear Wall / Lift Shaft RC Frame",
  },
  {
    id: "highway-infrastructure",
    label: "Highway Dualization, Industrial Road, Bridge, Culvert or Airfield Runway",
    baseBH: 5,
    baseCPT: 6,
    depthAdd: 5,
    serviceSlug: "highway",
    labSuite:
      "Subgrade California Bearing Ratio (CBR), Proctor Compaction, Bituminous/Asphalt Marshall Mix Design & Bridge Abutment Boring",
    foundationHint:
      "Heavy-Duty Flexible/Rigid Pavement, Box Culverts, Concrete Lined Drains & Piled Bridge Abutments",
  },
  {
    id: "lasbca-audit",
    label: "LASBCA-CAP Structural Stability Appraisal & Non-Destructive Testing (NDT Audit)",
    baseBH: 1,
    baseCPT: 2,
    depthAdd: 0,
    isAudit: true,
    serviceSlug: "lasbca-structural-audit",
    labSuite:
      "Non-Destructive Testing (Schmidt Rebound Hammer, Ultrasonic Pulse Velocity, Rebar Scanning), Core Extraction & Foundation Pit Exposure",
    foundationHint:
      "Official COREN & LASBCA-CAP Structural Stability Certificate + Retrofitting / Underpinning Engineering Design",
  },
  {
    id: "jetty-micropile",
    label: "Waterfront Jetty, Marine Structure, Micropile Foundation or Borehole/Water Plant",
    baseBH: 3,
    baseCPT: 4,
    depthAdd: 5,
    serviceSlug: "geotechnical",
    labSuite:
      "Marine/Estuarine Subsoil Boring, Sieve & Hydrometer Analysis, Hydrological Yield & Water Quality Testing",
    foundationHint:
      "250mm–600mm Bored Cast-in-Situ Micropiles / Marine Piles (BS 6349 / BS 8004) + RC Decking",
  },
]

const FOOTPRINT_SCALES = [
  { id: "single", label: "Single Plot / Compact Site (< 700 m²)", factor: 1.0, days: "5 – 10 Working Days" },
  { id: "multi", label: "Multi-Plot / Medium Complex (700 – 3,000 m²)", factor: 1.5, days: "10 – 15 Working Days" },
  { id: "estate", label: "Large Estate / Multi-Block Facility (3,000 – 15,000 m²)", factor: 2.3, days: "2 – 4 Weeks" },
  { id: "corridor", label: "Major Highway / Free Zone Corridor (> 15,000 m²)", factor: 3.5, days: "3 – 6 Weeks" },
]

export function ScopeEstimator() {
  const [zoneId, setZoneId] = useState(SOIL_ZONES[0].id)
  const [structId, setStructId] = useState(STRUCTURE_TYPES[0].id)
  const [scaleId, setScaleId] = useState(FOOTPRINT_SCALES[0].id)
  const [includeDesignBOQ, setIncludeDesignBOQ] = useState(true)
  const [includeSupervision, setIncludeSupervision] = useState(false)

  const zone = useMemo(() => SOIL_ZONES.find((z) => z.id === zoneId) || SOIL_ZONES[0], [zoneId])
  const struct = useMemo(
    () => STRUCTURE_TYPES.find((s) => s.id === structId) || STRUCTURE_TYPES[0],
    [structId]
  )
  const scale = useMemo(
    () => FOOTPRINT_SCALES.find((f) => f.id === scaleId) || FOOTPRINT_SCALES[0],
    [scaleId]
  )

  const recommendation = useMemo(() => {
    const bhCount = Math.max(1, Math.round(struct.baseBH * scale.factor))
    const cptCount = Math.max(2, Math.round(struct.baseCPT * scale.factor * zone.cptMultiplier))
    const targetDepth = struct.isAudit ? 15 : zone.minDepth + struct.depthAdd

    const standards = ["BS 5930 / BS 1377", "BS 8110 / Eurocode 2", "COREN R6610"]
    if (struct.isAudit || includeSupervision) standards.push("LASBCA-CAP Certified")
    if (zone.pileLikely) standards.push("BS 8004 (Deep Piles)")
    if (struct.id === "highway-infrastructure") standards.push("FMW&H / ICAO Pavement")

    return {
      bhCount,
      cptCount,
      targetDepth,
      standards,
      mobilization: "24 – 48 Hours Nationwide",
      turnaround: scale.days,
    }
  }, [zone, struct, scale, includeSupervision])

  const buildSummaryText = () => {
    return [
      "=== GENERATED ENVOSTRUCTS ENGINEERING BOQ / SCOPE ESTIMATE ===",
      `Location / Terrain Zone: ${zone.name}`,
      `Project / Structure Type: ${struct.label}`,
      `Site Footprint Scale: ${scale.label}`,
      "",
      "--- RECOMMENDED TECHNICAL & ENGINEERING SCOPE ---",
      `• Geotechnical Boreholes (SPT + Undisturbed Sampling): ${recommendation.bhCount} Nos. to ${recommendation.targetDepth}m depth`,
      `• Dutch Cone Penetrometer Tests (CPT): ${recommendation.cptCount} Nos.`,
      `• Laboratory / Field Testing Suite: ${struct.labSuite}`,
      `• Anticipated Structural / Foundation System: ${struct.foundationHint}`,
      includeDesignBOQ
        ? "• Included Package: Architectural, Structural & MEP Engineering Drawings + Detailed Bill of Quantities (BOQ)"
        : null,
      includeSupervision
        ? "• Included Package: Resident Engineering Construction Supervision & LASBCA-CAP Compliance Sign-Off"
        : null,
      `• Applicable Codes: ${recommendation.standards.join(", ")}`,
      "",
      "Please provide an official technical & commercial proposal for the above scope.",
    ]
      .filter(Boolean)
      .join("\n")
  }

  const handlePushToContactForm = () => {
    const summary = buildSummaryText()
    window.dispatchEvent(
      new CustomEvent("envostructs:prefill-contact", {
        detail: {
          service: struct.serviceSlug,
          message: summary,
        },
      })
    )
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Envostructs Nigeria Limited, I generated an engineering project scope on your website and would like an official quotation:\n\n${buildSummaryText()}`
    )
    window.open(`https://wa.me/2348034770098?text=${text}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="estimator" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-14">
          <span className="section-label">Interactive Engineering Configurator</span>
          <h2 className="section-title max-w-3xl mx-auto">
            Instant Soil, Structural &amp; Construction Scope Estimator (BOQ Builder)
          </h2>
          <p className="section-desc mt-4 max-w-2xl mx-auto">
            Planning a building, road, or LASBCA structural appraisal in Nigeria? Select your site
            terrain, structure type, and land scale below to generate your recommended BS / Eurocode
            engineering scope in seconds.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Configurator Controls */}
          <Reveal
            direction="right"
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#003366]/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#003366]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Configure Your Project Parameters
                </h3>
                <p className="text-gray-400 text-xs">
                  Calibrated to Nigerian geological zones, LASBCA-CAP &amp; British/Eurocode standards
                </p>
              </div>
            </div>

            {/* Step 1: Geological Zone */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                1. Select Project Location / Geological Terrain
              </label>
              <select
                value={zoneId}
                onChange={(e) => setZoneId(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-colors"
              >
                {SOIL_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name}
                  </option>
                ))}
              </select>
              <div className="mt-2.5 bg-amber-50/80 border border-amber-200/70 rounded-xl p-3 text-xs text-amber-900 leading-relaxed">
                <strong className="font-bold">Subsurface Profile:</strong> {zone.geology}{" "}
                <span className="text-amber-800">{zone.note}</span>
              </div>
            </div>

            {/* Step 2: Structure Type */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                <Building2 className="w-3.5 h-3.5 text-amber-500" />
                2. Select Structure Type / Engineering Scope
              </label>
              <div className="grid gap-2.5">
                {STRUCTURE_TYPES.map((st) => {
                  const active = st.id === structId
                  return (
                    <button
                      type="button"
                      key={st.id}
                      onClick={() => setStructId(st.id)}
                      className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                        active
                          ? "bg-[#003366]/5 border-[#003366] text-gray-900 shadow-sm"
                          : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <span>{st.label}</span>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          active ? "border-[#003366] bg-[#003366]" : "border-gray-300"
                        }`}
                      >
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Site Footprint */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                <Ruler className="w-3.5 h-3.5 text-amber-500" />
                3. Select Site Land Area / Corridor Scale
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {FOOTPRINT_SCALES.map((fp) => {
                  const active = fp.id === scaleId
                  return (
                    <button
                      type="button"
                      key={fp.id}
                      onClick={() => setScaleId(fp.id)}
                      className={`text-left px-3.5 py-3 rounded-xl border text-xs font-semibold transition-all ${
                        active
                          ? "bg-[#003366] text-white border-[#003366] shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {fp.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                4. Optional Multi-Disciplinary Add-Ons
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-gray-200 bg-gray-50/70 cursor-pointer hover:border-[#003366]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeDesignBOQ}
                    onChange={(e) => setIncludeDesignBOQ(e.target.checked)}
                    className="mt-0.5 accent-[#003366] rounded"
                  />
                  <span className="text-xs text-gray-700 leading-snug">
                    <strong className="block text-gray-900">
                      Include Full Design &amp; Tender BOQ
                    </strong>
                    Architectural, Structural, Civil &amp; MEP Drawings + Bill of Quantities
                  </span>
                </label>
                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-gray-200 bg-gray-50/70 cursor-pointer hover:border-[#003366]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeSupervision}
                    onChange={(e) => setIncludeSupervision(e.target.checked)}
                    className="mt-0.5 accent-[#003366] rounded"
                  />
                  <span className="text-xs text-gray-700 leading-snug">
                    <strong className="block text-gray-900">
                      Resident Supervision &amp; LASBCA-CAP
                    </strong>
                    Full construction supervision, QA/QC testing &amp; regulatory sign-off
                  </span>
                </label>
              </div>
            </div>
          </Reveal>

          {/* Right: Live Engineering Recommendation Output Card */}
          <Reveal direction="left" delay={120} className="lg:col-span-5">
            <div className="bg-[#070b14] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    Recommended Technical BOQ
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                    BS / Eurocode Engineering Scope
                  </h3>
                </div>
                <span className="bg-amber-500 text-[#001529] text-[10px] font-black px-3 py-1 rounded-full">
                  COREN R6610
                </span>
              </div>

              {/* Key metrics grid */}
              <div className="grid grid-cols-3 gap-3 my-6">
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-3.5 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-amber-400">
                    {recommendation.bhCount}
                  </p>
                  <p className="text-[11px] text-white/70 font-medium mt-0.5">Boreholes (SPT)</p>
                </div>
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-3.5 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-amber-400">
                    {recommendation.targetDepth}m
                  </p>
                  <p className="text-[11px] text-white/70 font-medium mt-0.5">Target Depth</p>
                </div>
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-3.5 text-center">
                  <p className="text-2xl sm:text-3xl font-black text-amber-400">
                    {recommendation.cptCount}
                  </p>
                  <p className="text-[11px] text-white/70 font-medium mt-0.5">CPT Soundings</p>
                </div>
              </div>

              {/* Detailed specifications */}
              <div className="space-y-4 text-xs sm:text-sm mb-6">
                <div className="flex items-start gap-3">
                  <FileCheck2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/50 text-[11px] uppercase font-bold tracking-wider">
                      Testing &amp; Verification Suite
                    </p>
                    <p className="text-white/90 text-xs mt-0.5 leading-relaxed">
                      {struct.labSuite}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/50 text-[11px] uppercase font-bold tracking-wider">
                      Anticipated Foundation &amp; Structural System
                    </p>
                    <p className="text-white/90 text-xs mt-0.5 leading-relaxed">
                      {struct.foundationHint}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                    <Wrench className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-bold">Mobilization</p>
                      <p className="text-xs font-semibold text-white mt-0.5">
                        {recommendation.mobilization}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-bold">
                        Investigation Window
                      </p>
                      <p className="text-xs font-semibold text-white mt-0.5">
                        {recommendation.turnaround}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Standards pills */}
                <div className="pt-2">
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-2">
                    Applicable International &amp; Statutory Codes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {recommendation.standards.map((std) => (
                      <span
                        key={std}
                        className="inline-flex items-center gap-1 bg-white/10 text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      >
                        <ShieldCheck className="w-3 h-3 text-amber-400" />
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handlePushToContactForm}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#001529] font-black text-xs sm:text-sm py-3.5 px-5 rounded-xl transition-all shadow-lg"
                >
                  Request Official Quotation for This Scope
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send This BOQ Scope via WhatsApp
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
