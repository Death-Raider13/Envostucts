"use client"

import { useState, useEffect } from "react"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileCheck2,
  ShieldCheck,
  ZoomIn,
  ZoomOut,
  CheckCircle2,
  Building2,
  Award,
} from "lucide-react"

type DeliverableSlide = {
  id: number
  page: string
  title: string
  standard: string
  img?: string
  caption: string
  docHeader: string
  docSub: string
  highlights: { label: string; value: string }[]
  excerpt: string[]
}

const DELIVERABLE_SLIDES: DeliverableSlide[] = [
  {
    id: 1,
    page: "Section 1 · Page 1–4 of 39",
    title: "Official Corporate Profile & Statutory Registration",
    standard: "CAC RC 694337 · COREN R6610",
    img: "/lekki%20freezone%20subsoil.png",
    caption:
      "Every Envostructs Nigeria Limited engineering deliverable is sealed and signed by COREN-licensed principal engineers (led by Engr. S.I.A. Edidi, MSc, MNSE, COREN R6610), accepted by LASBCA, federal/state ministries, commercial banks, and World Bank project implementation units.",
    docHeader: "ENVOSTRUCTS NIGERIA LIMITED — CORPORATE & STATUTORY DOSSIER",
    docSub: "Design / Construction Consultants & Contractors · Incorporated June 2008 (RC: 694337)",
    highlights: [
      { label: "CAC Registration", value: "RC: 694337 (June 2008)" },
      { label: "Share Capital", value: "₦1,000,000 Fully Paid" },
      { label: "Principal Officer", value: "Engr. S.I.A. Edidi (COREN R6610)" },
      { label: "LASBCA Standing", value: "Certified Accreditor (CAP)" },
    ],
    excerpt: [
      "OUR MISSION: To be recognized as a pre-eminent African Design/Construction Consultant and Contractors brand, providing superior solutions within our niche markets with our client's need always first in mind.",
      "CORE COMPETENCIES: Geotechnical & Geophysical Investigation · Architectural & Structural Design · Construction Works · Project Management · Highway & Bridge Engineering · Inspection, NDT & LASBCA-CAP Structural Appraisals.",
      "CORPORATE GOVERNANCE: Audited by Ayinde Babatunde & Co. (Chartered Accountants); Corporate Bankers: FCMB Plc; Legal Advisors: Barr. Samuel Etaifo Esq.",
    ],
  },
  {
    id: 2,
    page: "Section 2 · Page 6–9 of 39",
    title: "Geotechnical, Structural & Highway Methodology",
    standard: "BS 5930 · BS 8004 · Eurocode 2 & 7",
    img: "/lekki%20free%20zone.jpg",
    caption:
      "Comprehensive methodology covering surface and subsurface geologic investigations, Dutch Cone Penetrometer (CPT) soundings, percussion borehole drilling, laboratory triaxial/consolidation testing (BS 1377), and bored/micropile foundation execution.",
    docHeader: "TECHNICAL METHODOLOGY & ENGINEERING SCOPE SPECIFICATION",
    docSub: "Geotechnics · Structural Design · Highway Engineering · Water & Environmental",
    highlights: [
      { label: "Subsoil Investigation", value: "BH Drilling, SPT & 20T CPT" },
      { label: "Lab Testing Suite", value: "BS 1377 Triaxial, CBR & Sieve" },
      { label: "Deep Foundations", value: "Bored Piles, Caisson & Micropiles" },
      { label: "Design Codes", value: "BS 8110, Eurocode 2/3/7 & FMW&H" },
    ],
    excerpt: [
      "GEOTECHNICS: We routinely conduct surface and subsurface geologic and geotechnical investigations including Feasibility Studies, Site Investigations, Laboratory Testing (CBR, Compaction, Sieve Analysis, Consolidation), and Pile Foundation Construction.",
      "HIGHWAY & INFRASTRUCTURE: Bridges and long-span culverts in concrete or structural steel, urban and inter-urban dual carriageways, geometric route design, earthworks, and heavy-duty industrial/airfield pavements.",
      "INSPECTION & STRUCTURAL APPRAISAL: Non-destructive testing (NDT) and structural stability evaluation of existing buildings for renovation, vertical extension, and LASBCA-CAP compliance.",
    ],
  },
  {
    id: 3,
    page: "Section 3 · Page 10–17 of 39",
    title: "Multidisciplinary Board & Technical Leadership",
    standard: "COREN · NSE · NICE · NIA · ARCON · ICAN",
    img: "/onilegbale.jpg",
    caption:
      "Details of Envostructs' Board of Directors and Technical Unit Leaders — combining over 140+ years of senior institutional experience across UNILAG, Lagos State Polytechnic, Federal/State Ministries of Works, and FAAN.",
    docHeader: "KEY OFFICERS & MULTIDISCIPLINARY PROJECT ORGANISATION",
    docSub: "Board of Directors · Technical Team Leaders · Administrative & Audit Controls",
    highlights: [
      { label: "Managing Director", value: "Engr. S.I.A. Edidi (MSc UNILAG, COREN R6610)" },
      { label: "Exec. Director Eng.", value: "Engr. A.D. Onitilo (BSc UNILAG, COREN, MNSE)" },
      { label: "Director Planning", value: "Adeyemi Adebayo (RTP, Town Planner)" },
      { label: "Director Finance", value: "Ms. R.T. Fatoki (ACA, ICAN Chartered)" },
    ],
    excerpt: [
      "Engr. S.I.A. Edidi (Managing Consultant/Director): Holds an MSc in Civil Engineering (UNILAG) and B.Eng (Unilorin). Former Senior Lecturer & Head of Department of Civil Engineering, Lagos State Polytechnic. Registered with COREN (R6610), NSE (07462), and NICE.",
      "Engr. A.D. Onitilo (Executive Director, Engineering): BSc Civil Engineering (UNILAG), COREN & MNSE. Over 35–40 years of senior project delivery across highways, bridges, jetties, and multi-storey structures.",
      "Supported by COREN Project Engineers, Registered Architects (NIA/ARCON), Engineering Geologists (MSc UNILAG, NAPE, NMGS, SEG), and Quantity Surveyors.",
    ],
  },
  {
    id: 4,
    page: "Section 4 · Page 13 & 33–38 of 39",
    title: "Executed Geotechnical, Piling & Infrastructure Log",
    standard: "Verified Track Record · ₦500B+ Portfolio",
    img: "/dualization%20of%20ipele.jpg",
    caption:
      "Sample extract from Envostructs' executed project register covering borehole/subsoil investigations (ESN report series), bored/caisson/micropile installations, World Bank highway supervision, and FAAN airport runway resurfacing.",
    docHeader: "EXECUTED GEOTECHNICAL, PILING & CIVIL WORKS REGISTER",
    docSub: "Selected Geotechnical Report Numbers (ESN Series) & Major Infrastructure Contracts",
    highlights: [
      { label: "Highway Consultancy", value: "Emuren–Ipele Dualization (₦12.59B)" },
      { label: "Industrial Roads", value: "Lekki Free Zone N5 & E6A (₦464M)" },
      { label: "Aviation Infrastructure", value: "MMIA Runway Resurfacing (FAAN)" },
      { label: "Deep Piling Works", value: "NASFAT Bored Piles & Surulere Micropiles" },
    ],
    excerpt: [
      "• Subsoil Investigation for Lagos Free Zone Development Company at Lekki, Lagos — Full Borehole & CPT Campaign.",
      "• Subsoil Investigation, Design & Installation of Bored Piles for NASFAT Central Mosque Complex at Isolo, Lagos.",
      "• Subsoil Investigation & Design of Caisson Piles for Residential Development at Ifako Gbagada, Lagos.",
      "• Design & Installation of 250mm Bored Cast-in-Situ Micropiles (15m depth with Pile Cap) at Surulere, Lagos.",
      "• Quality Control & Safety Supervision on World Bank-Funded Mile 12 – Ikorodu Road Project & FAAN Tarmac Runway Resurfacing.",
    ],
  },
]

export function ProfileViewerModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [current, setCurrent] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % DELIVERABLE_SLIDES.length)
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + DELIVERABLE_SLIDES.length) % DELIVERABLE_SLIDES.length)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const slide = DELIVERABLE_SLIDES[current]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-[#070b14] border border-white/15 rounded-3xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#0a1120]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5 text-[#001529]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-sm sm:text-base truncate">
                  Interactive Engineering Dossier &amp; Deliverable Inspector
                </h3>
                <span className="hidden md:inline-flex items-center gap-1 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  COREN R6610 · RC 694337
                </span>
              </div>
              <p className="text-white/50 text-xs truncate">
                {slide.page} — {slide.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setZoomed((z) => !z)}
              className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-3 py-2 rounded-xl transition-colors"
              title="Toggle Zoom"
            >
              {zoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
              {zoomed ? "Fit Page" : "Zoom In"}
            </button>
            <a
              href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
              download="ENVOSTRUCTS-Company-Profile.pdf"
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-[#001529] text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download Full 39-Page PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close report viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main body */}
        <div className="flex-1 grid lg:grid-cols-12 overflow-hidden">
          {/* Left: Interactive Document Sheet Preview */}
          <div className="lg:col-span-8 bg-slate-950 relative flex items-center justify-center overflow-auto p-3 sm:p-6 max-h-[55vh] lg:max-h-[72vh]">
            <div
              onClick={() => setZoomed((z) => !z)}
              className={`bg-white text-gray-900 rounded-2xl shadow-2xl border-2 border-[#003366]/20 p-5 sm:p-8 transition-all duration-300 cursor-zoom-in ${
                zoomed ? "w-full max-w-none scale-105 origin-top" : "w-full max-w-2xl"
              }`}
            >
              {/* Simulated Official Document Header */}
              <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b-2 border-[#003366]">
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-amber-600">
                    {slide.standard}
                  </p>
                  <h4 className="text-sm sm:text-base font-black text-[#003366] mt-0.5">
                    {slide.docHeader}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{slide.docSub}</p>
                </div>
                <div className="px-2.5 py-1.5 rounded-lg bg-[#003366] text-white text-[10px] font-bold shrink-0 text-right">
                  <div>RC: 694337</div>
                  <div className="text-amber-300">COREN R6610</div>
                </div>
              </div>

              {/* Key Metrics Strip inside Document */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                {slide.highlights.map((h) => (
                  <div key={h.label} className="bg-slate-50 border border-slate-200 rounded-xl p-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      {h.label}
                    </p>
                    <p className="text-xs font-black text-[#003366] mt-0.5 leading-snug">
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Visual + Excerpts */}
              {slide.img && (
                <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 h-36 sm:h-44 relative bg-gray-100">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    Verified Envostructs Field &amp; Design Record
                  </div>
                </div>
              )}

              <div className="space-y-2.5 text-xs text-gray-700 leading-relaxed">
                {slide.excerpt.map((line, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>

              {/* Official Seal Footer */}
              <div className="mt-6 pt-3 border-t border-gray-200 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                <span>ENVOSTRUCTS NIGERIA LIMITED · 51, Akanro Street, Ilasa, Lagos</span>
                <span className="text-[#003366] font-bold">{slide.page}</span>
              </div>
            </div>

            {/* Left / Right arrows */}
            <button
              onClick={() =>
                setCurrent((c) => (c - 1 + DELIVERABLE_SLIDES.length) % DELIVERABLE_SLIDES.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-[#001529] flex items-center justify-center shadow-lg transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % DELIVERABLE_SLIDES.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-[#001529] flex items-center justify-center shadow-lg transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Engineering commentary & section selector */}
          <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between bg-[#0a1120] border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  {slide.page}
                </span>
                <span className="bg-white/10 text-white/90 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {slide.standard}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2 leading-snug">{slide.title}</h4>
              <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-5">
                {slide.caption}
              </p>

              <p className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2.5">
                Jump to Dossier Section ({DELIVERABLE_SLIDES.length} Featured Extracts)
              </p>
              <div className="space-y-1.5 max-h-52 lg:max-h-64 overflow-y-auto pr-1">
                {DELIVERABLE_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setCurrent(idx)
                      setZoomed(false)
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 ${
                      current === idx
                        ? "bg-amber-500 text-[#001529] font-bold shadow-md"
                        : "bg-white/[0.04] hover:bg-white/[0.08] text-white/75"
                    }`}
                  >
                    <span className="truncate">
                      {idx + 1}. {s.title}
                    </span>
                    <span className="text-[10px] opacity-75 shrink-0">Sec {idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#001529] hover:bg-gray-100 font-bold text-xs py-3 px-4 rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#003366]" />
                Open Full 39-Page PDF in Browser Tab
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
