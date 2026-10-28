"use client"

import { useState } from "react"
import {
  Globe2,
  ShieldCheck,
  FileCheck2,
  Video,
  Building,
  CheckCircle2,
  ArrowRight,
  HardHat,
  Scale,
  Download,
  FileText,
  Eye,
  Award,
  Briefcase,
} from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { ProfileViewerModal } from "@/components/ProfileViewerModal"

const STANDARDS = [
  {
    code: "BS 5930 & BS 8004",
    title: "British Geotechnical Codes",
    desc: "Code of practice for ground investigations (BS 5930), laboratory soil testing (BS 1377), and deep/shallow foundations (BS 8004).",
  },
  {
    code: "Eurocode 2, 3 & 7",
    title: "Structural & Foundation Codes",
    desc: "EN 1992 (Concrete Structures), EN 1993 (Steel Structures) & EN 1997 (Geotechnical Design) applied across all substructure and superstructure calculations.",
  },
  {
    code: "ICAO, FMW&H & World Bank",
    title: "Highway & Aviation Standards",
    desc: "ICAO airfield tarmac specifications (FAAN), Federal Ministry of Works highway dualization codes, and World Bank procurement & QA/QC protocols.",
  },
  {
    code: "COREN & LASBCA-CAP",
    title: "Statutory Nigerian Compliance",
    desc: "Full licensing by COREN (R6610), NSE (07462), and accredited partner under the Lagos State Building Control Agency Certified Accreditors Program (CAP).",
  },
]

const PARTNER_TRACKS = [
  {
    icon: Building,
    badge: "For Multinational EPCs, Banks & Government Agencies",
    title: "Your Local Content, Consultancy & Execution Partner in Nigeria",
    desc: "We serve as the trusted multidisciplinary engineering consultant, geotechnical investigator, and resident construction supervisor for state ministries, federal aviation authorities (FAAN), World Bank projects, commercial banks, and industrial free zones.",
    points: [
      "Proven delivery on ₦12.59B highway dualizations, Lekki Free Zone industrial roads, and FAAN international airport runway resurfacing",
      "Accredited partner with Lagos State Building Control Agency (LASBCA) under the Certified Accreditors Program (CAP) at Isolo/Okota District",
      "Bankable, audit-ready geotechnical reports, structural drawings, and Bills of Quantities (BOQs) stamped by COREN-registered directors",
      "Strict HSE (Health, Safety & Environment) protocols with a Zero-Incident track record across 100+ completed projects",
    ],
    ctaText: "Partner / Engage Our Practice",
    clientType: "Government / Multinational EPC / Corporate",
    service: "epc-government-partnership",
  },
  {
    icon: Globe2,
    badge: "For Diaspora & Overseas Property Developers",
    title: "Build Safely in Nigeria from Abroad with Zero Compromise",
    desc: "Managing residential duplexes, commercial complexes, or hospitality developments in Nigeria from the UK, USA, Canada, Europe, or the UAE requires absolute accountability. We eliminate the risk of building collapse and contractor opacity.",
    points: [
      "Live video site walkthroughs and GPS-stamped engineering milestone logs at every phase of construction",
      "Independent LASBCA-CAP structural stability & Non-Destructive Testing (NDT) appraisals before you purchase or remodel property",
      "Direct WhatsApp, Zoom & Teams consultations with our Managing Consultant (Engr. S.I.A. Edidi, COREN R6610) aligned with your timezone",
      "Phased milestone billing tied strictly to verified engineering certificates and quality control cube/soil tests",
    ],
    ctaText: "Schedule a Remote Consultation",
    clientType: "Diaspora Investor (UK / US / Canada / EU / UAE)",
    service: "diaspora-turnkey-supervision",
  },
]

const VENDOR_VAULT_ITEMS = [
  {
    label: "CAC Incorporation No.",
    value: "RC: 694337",
    sub: "Corporate Affairs Commission, Federal Republic of Nigeria (Incorporated June 2008 · ₦1M Fully Paid Share Capital)",
    status: "Verified & Active",
  },
  {
    label: "COREN & Professional Seal",
    value: "COREN R6610 · NSE 07462",
    sub: "Council for the Regulation of Engineering in Nigeria, NICE, NIA/ARCON & ICAN Chartered Leadership",
    status: "Current Year Valid",
  },
  {
    label: "LASBCA Building Control",
    value: "LASBCA-CAP Accredited",
    sub: "Certified Accreditors Program (CAP) Partner — Monitoring & Structural Stability Assessment (Isolo / Okota District)",
    status: "Government Partner",
  },
  {
    label: "Statutory & Multilateral Standing",
    value: "FIRS TIN · World Bank · FAAN",
    sub: "Pre-qualified track record on World Bank urban infrastructure, FAAN aviation works, and State Ministry tenders",
    status: "Audit-Ready",
  },
  {
    label: "Corporate Bankers & Auditors",
    value: "FCMB Plc · Chartered Auditors",
    sub: "Audited by Ayinde Babatunde & Co. (Chartered Accountants); Legal Advisors: Barr. Samuel Etaifo Esq.",
    status: "Bankable",
  },
  {
    label: "HSE & QA/QC Management",
    value: "ISO 9001 & ISO 45001 Aligned",
    sub: "Dedicated Project Evaluation & Assessment Committee with dual-director peer review and Zero-LTI safety record",
    status: "Zero-LTI Record",
  },
]

const HSE_PILLARS = [
  {
    icon: HardHat,
    label: "Zero-Incident Safety Culture",
    sub: "Mandatory PPE, daily toolbox briefings & airside/highway hazard audits on all sites",
  },
  {
    icon: FileCheck2,
    label: "LASBCA-CAP & ISO QA/QC",
    sub: "Calibrated testing, laboratory cube/soil verification & multi-disciplinary board review",
  },
  {
    icon: Video,
    label: "Digital Transparency",
    sub: "GPS-tagged field progress logs & remote live video walkthroughs for overseas clients",
  },
  {
    icon: Scale,
    label: "Bankable Deliverables",
    sub: "Accepted by commercial banks, World Bank PIUs, LASBCA, FAAN & institutional investors",
  },
]

export function InternationalSection() {
  const [viewerOpen, setViewerOpen] = useState(false)

  const handleTrackCTA = (track: (typeof PARTNER_TRACKS)[0]) => {
    window.dispatchEvent(
      new CustomEvent("envostructs:prefill-contact", {
        detail: {
          clientType: track.clientType,
          service: track.service,
        },
      })
    )
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleRequestTenderPack = () => {
    window.dispatchEvent(
      new CustomEvent("envostructs:prefill-contact", {
        detail: {
          clientType: "Government / Multinational EPC / Corporate",
          service: "epc-government-partnership",
          message:
            "Please send the complete Envostructs Nigeria Limited Vendor Pre-Qualification Dossier (CAC Certificate RC 694337, COREN Practicing Seal R6610, LASBCA-CAP Accreditation Details, Audited Financials, and HSE Policy Manual) for vendor registration / tender evaluation.",
        },
      })
    )
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="international" className="py-24 bg-[#070b14] text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 rounded-full px-4 py-1.5 mb-4">
            <Globe2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">
              Global Standards · Local Mastery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Engineered for Multinational EPCs, Government Agencies &amp; Global Investors
          </h2>
          <p className="text-white/60 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether you are procuring a COREN-certified consultant for major Nigerian infrastructure,
            verifying structural stability under LASBCA-CAP, or developing property in Nigeria from
            abroad, Envostructs delivers bankable British and Eurocode engineering.
          </p>
        </Reveal>

        {/* Two main tracks */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {PARTNER_TRACKS.map((track, idx) => {
            const Icon = track.icon
            return (
              <Reveal key={track.title} direction="up" delay={idx * 120}>
                <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-amber-500/50 rounded-3xl p-7 sm:p-9 h-full flex flex-col justify-between transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3.5 py-1.5 rounded-full">
                        {track.badge}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#003366] border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                      {track.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{track.desc}</p>

                    <ul className="space-y-3 mb-8">
                      {track.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                          <span className="text-white/80 text-sm leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleTrackCTA(track)}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#001529] text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    {track.ctaText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Interactive Company Dossier & Technical Deliverable Showcase Banner */}
        <Reveal direction="up" className="mb-16">
          <div className="bg-gradient-to-r from-[#003366]/60 via-[#002244]/60 to-[#003366]/60 border border-amber-400/25 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0 mt-1">
                <FileText className="w-6 h-6 text-[#001529]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Technical Dossier &amp; Deliverable Preview
                  </span>
                  <span className="bg-white/10 text-white/80 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    39 Pages · RC 694337 · COREN R6610 · BS / Eurocode
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Inspect Our Official Engineering Profile &amp; Executed Project Register
                </h3>
                <p className="text-white/65 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                  Flip through our COREN-certified corporate dossier right in your browser — featuring
                  our multidisciplinary board CVs, geotechnical borehole &amp; piling registers (ESN
                  series), and highway/structural engineering credentials.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setViewerOpen(true)}
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 bg-white text-[#001529] hover:bg-gray-100 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all duration-300 shadow-lg"
              >
                <Eye className="w-4 h-4 text-[#003366]" />
                Interactive Dossier Inspector
              </button>
              <a
                href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
                download="ENVOSTRUCTS-Company-Profile.pdf"
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#001529] font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </Reveal>

        {/* EPC Vendor Pre-Qualification & Compliance Vault */}
        <Reveal direction="up" className="mb-16">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-9">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                  <Briefcase className="w-4 h-4" />
                  EPC Vendor Registration &amp; Tender Compliance Vault
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Pre-Qualified for Government, Multilateral, Banking &amp; Industrial Procurement
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
                  download="ENVOSTRUCTS-Company-Profile.pdf"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold px-4 py-3 rounded-xl transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  Company Profile (PDF)
                </a>
                <button
                  type="button"
                  onClick={handleRequestTenderPack}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#001529] text-xs font-bold px-5 py-3 rounded-xl transition-colors"
                >
                  <Award className="w-3.5 h-3.5" />
                  Request Full Pre-Qualification Pack
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VENDOR_VAULT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-amber-400/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-white/50 text-[11px] font-bold uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item.status}
                      </span>
                    </div>
                    <p className="text-white font-black text-base mb-1">{item.value}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* International Codes & Standards */}
        <Reveal direction="up" className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              International Codes &amp; Regulatory Standards We Operate By
            </h3>
            <p className="text-white/50 text-sm mt-1">
              Seamless technical integration with foreign consultants, multilateral agencies, and Nigerian regulatory authorities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STANDARDS.map((std) => (
              <div
                key={std.code}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-amber-300 font-black text-xs tracking-wider uppercase">
                    {std.code}
                  </span>
                </div>
                <h4 className="text-white font-bold text-base mb-1.5">{std.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* HSE & QA/QC Strip */}
        <Reveal direction="up">
          <div className="bg-gradient-to-r from-[#003366]/40 via-[#003366]/20 to-[#003366]/40 border border-amber-500/30 rounded-3xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HSE_PILLARS.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#001529]" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{label}</h5>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Interactive Report & Dossier Viewer Modal */}
      <ProfileViewerModal isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />
    </section>
  )
}
