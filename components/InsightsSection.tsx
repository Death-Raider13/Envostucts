"use client"

import { useState } from "react"
import { ShieldCheck, ArrowRight, X, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/Reveal"

type Article = {
  id: string
  tag: string
  readTime: string
  title: string
  excerpt: string
  author: string
  initials: string
  standards: string
  keyTakeaways: string[]
  fullContent: string[]
  ctaService: string
}

const ARTICLES: Article[] = [
  {
    id: "lasbca-cap-structural-audits",
    tag: "LASBCA-CAP · Structural Appraisal",
    readTime: "4 Min Technical Read",
    title:
      "LASBCA Certified Accreditors Program (CAP): How NDT Structural Audits Prevent Building Collapse in Lagos",
    excerpt:
      "Why the Lagos State Building Control Agency (LASBCA) partnered with accredited engineering firms like Envostructs to monitor abandoned, uncompleted, and distressed structures across Isolo, Okota, and Lagos State.",
    author: "Engr. S.I.A. Edidi (MSc, MNSE, COREN R6610)",
    initials: "SE",
    standards: "LASBCA-CAP · BS EN 12504 · Eurocode 2",
    keyTakeaways: [
      "Visual inspection alone cannot identify honeycombed concrete cores, sub-standard 12 MPa concrete mixes, or corroded reinforcement in long-abandoned carcasses.",
      "Under the LASBCA Certified Accreditors Program (CAP), combined Ultrasonic Pulse Velocity (UPV), Schmidt Hammer Rebound, and Ferroscan rebar mapping establish true in-situ structural capacity.",
      "Property buyers, banks, and diaspora investors should always commission a COREN-sealed structural stability appraisal before purchasing or adding floors to an existing building.",
    ],
    fullContent: [
      "In response to recurring structural failures across urban Nigeria, the Lagos State Building Control Agency (LASBCA) instituted the Certified Accreditors Program (CAP) — engaging vetted, COREN-licensed engineering consultancies to monitor stage-by-stage construction and evaluate abandoned, uncompleted, or structurally suspect buildings.",
      "Operating from our Isolo/Okota district operational base, Envostructs Nigeria Limited works closely with LASBCA-CAP to perform forensic structural stability appraisals. Our field engineers deploy Non-Destructive Testing (NDT) — pairing Ultrasonic Pulse Velocity (UPV) stress-wave measurements with calibrated Schmidt Rebound Hammer tests and electromagnetic rebar scanning.",
      "Where foundation adequacy is in doubt, we excavate foundation exposure pits and execute adjacent Dutch Cone Penetrometer (CPT) soundings and borehole checks. The resulting COREN-stamped Structural Stability Report provides definitive engineering guidance on whether a structure is safe for occupation, requires structural retrofitting/jacketing, or must be decommissioned.",
    ],
    ctaService: "lasbca-structural-audit",
  },
  {
    id: "coastal-lagos-subsoil-piling",
    tag: "Geotechnics & Piling · BS 5930 / BS 8004",
    readTime: "5 Min Technical Read",
    title:
      "Subsoil Investigation & Deep Foundation Design in Coastal Lagos (Lekki Free Zone, Ikoyi & Lagos Island)",
    excerpt:
      "Why coastal and island developments require combined percussion boreholes, SPT blow counts, BS 1377 consolidation testing, and bored/caisson/micropile foundations to prevent differential settlement.",
    author: "Engr. S.I.A. Edidi (MSc, MNSE, COREN R6610)",
    initials: "SE",
    standards: "BS 5930:2015 · BS 1377 · BS 8004 · Eurocode 7",
    keyTakeaways: [
      "Reclaimed sand fill in Lekki, Ikoyi, and Lagos Island frequently overlies compressible fibrous peat and soft marine clay layers between 4m and 24m depth.",
      "Combining 10T/20T CPT soundings with deep percussion boreholes (U100 undisturbed sampling) enables accurate Terzaghi/Meyerhof bearing capacity and oedometer settlement calculations.",
      "Depending on superstructure loads, engineered Raft Foundations (as used on The New Onilegbale Palace and National Theatre Car Parks) or Bored/Caisson/Micropiles transfer loads safely without settlement.",
    ],
    fullContent: [
      "Across Lagos Island (Isale Eko), Ikoyi, Victoria Island, and the Lekki Free Zone corridor, subsurface stratigraphy is governed by high groundwater tables and alternating horizons of loose alluvial sand, organic peat, and soft marine clay. Designing foundations without a rigorous BS 5930 geotechnical investigation is the leading cause of tilting and differential settlement.",
      "At Envostructs Nigeria Limited, our geotechnical division pairs Dutch Cone Penetrometer (CPT) soundings with shell-and-auger percussion boreholes. Undisturbed cohesive samples are subjected to BS 1377 laboratory triaxial compression, Atterberg plasticity, and oedometer consolidation testing, alongside groundwater chemical analysis (pH, sulphate, and chloride aggressivity).",
      "From bored pile installations for the NASFAT Central Mosque complex at Isolo and caisson piles at Ifako-Gbagada to 250mm cast-in-situ micropiles in Surulere and heavy raft foundations in Lagos Island, our integrated geotechnical and structural teams match every structure with the most economical, failure-proof foundation system.",
    ],
    ctaService: "geotechnical",
  },
  {
    id: "highway-airfield-pavement-engineering",
    tag: "Highways & Aviation · FMW&H / ICAO",
    readTime: "4 Min Technical Read",
    title:
      "Heavy-Duty Highway & Airfield Pavement Engineering: Lessons from ₦12.59B Dualizations & FAAN Runways",
    excerpt:
      "Key engineering controls for long-life arterial dual carriageways, industrial free-zone corridors, and international airport tarmac resurfacing in tropical Nigerian climates.",
    author: "Engr. A.D. Onitilo (BSc UNILAG, MNSE, COREN)",
    initials: "AO",
    standards: "FMW&H Highway Manual · ICAO Annex 14 · BS 594987",
    keyTakeaways: [
      "Premature road failure in Nigeria is primarily driven by inadequate subgrade drainage, unverified California Bearing Ratio (CBR) values, and poor asphalt compaction temperatures.",
      "Heavy industrial corridors (such as Lekki Free Zone Roads N5 & E6A) and 14.85 km arterial dualizations (Emuren–Ipele Road) demand strict resident engineering QA/QC at every earthwork and base-course lift.",
      "Airfield runway resurfacing (MMIA Lagos for FAAN) requires precision night-window milling, polymer-modified bituminous Marshall mix verification, and strict ICAO surface friction compliance.",
    ],
    fullContent: [
      "Delivering durable transport infrastructure under heavy axle loads and intense tropical rainfall requires total integration of geotechnical earthworks, hydraulic drainage design, and pavement materials testing. On the ₦12.59 Billion Emuren–Ipele 14.85 km Road Dualization in Ondo State and the Lekki Free Zone industrial roads (N5 & E6A), Envostructs established continuous resident engineering quality control.",
      "Every section undergoes subgrade CBR profiling, Proctor dry-density compaction checks, stone-base gradation verification, and reinforced concrete line-drain/box-culvert hydraulic sizing to prevent water ingress into the pavement structural layers.",
      "Similarly, on the Murtala Muhammed International Airport (MMIA) tarmac runway resurfacing for FAAN, our team executed precision milling and bituminous asphalt laying within strict overnight curfew windows — validating Marshall stability, flow, void ratios, and surface macro-texture to meet international ICAO aviation safety standards.",
    ],
    ctaService: "highway",
  },
]

export function InsightsSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const handleConsultArticle = (article: Article) => {
    setSelectedArticle(null)
    window.dispatchEvent(
      new CustomEvent("envostructs:prefill-contact", {
        detail: {
          service: article.ctaService,
          message: `I just read your technical brief "${article.title}" and would like to consult Envostructs regarding a project requiring ${article.tag}.`,
        },
      })
    )
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="insights" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-14">
          <span className="section-label">Engineering Knowledge Hub</span>
          <h2 className="section-title max-w-3xl mx-auto">
            Technical Briefs &amp; Field Advisories
          </h2>
          <p className="section-desc mt-4 max-w-2xl mx-auto">
            Practical structural stability, geotechnical, and highway engineering guidance authored
            by our COREN-licensed directors for government agencies, corporate developers, and
            diaspora property investors.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-7">
          {ARTICLES.map((art, idx) => (
            <Reveal key={art.id} direction="up" delay={idx * 100}>
              <article className="bg-gray-50 hover:bg-white border border-gray-200/80 hover:border-[#003366]/40 rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-[#003366]/10 text-[#003366] text-[11px] font-bold px-3 py-1 rounded-full">
                      {art.tag}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">{art.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {art.excerpt}
                  </p>

                  <div className="bg-white rounded-2xl p-4 border border-gray-100 mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Key Engineering Takeaways
                    </p>
                    <ul className="space-y-2">
                      {art.keyTakeaways.slice(0, 2).map((kt) => (
                        <li
                          key={kt}
                          className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{kt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#003366] text-amber-400 flex items-center justify-center shrink-0 text-xs font-black">
                      {art.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-gray-900 truncate">{art.author}</p>
                      <p className="text-[10px] text-gray-400 truncate">{art.standards}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(art)}
                    className="inline-flex items-center gap-1.5 text-[#003366] hover:text-amber-600 font-bold text-xs shrink-0"
                  >
                    Read Brief
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="bg-[#003366]/10 text-[#003366] text-xs font-bold px-3 py-1 rounded-full">
                  {selectedArticle.tag}
                </span>
                <span className="text-gray-400 text-xs">{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 leading-snug">
              {selectedArticle.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-6">
              <span className="font-semibold text-gray-800">{selectedArticle.author}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[#003366] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                {selectedArticle.standards}
              </span>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-6">
              {selectedArticle.fullContent.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#003366] mb-3">
                Summary Checklist for Project Owners &amp; Engineers
              </p>
              <ul className="space-y-2.5">
                {selectedArticle.keyTakeaways.map((kt) => (
                  <li key={kt} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{kt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => handleConsultArticle(selectedArticle)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Consult Our Engineers on This Topic
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-800"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
