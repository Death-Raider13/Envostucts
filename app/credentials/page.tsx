import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Award, CheckCircle, Building, Users, Phone, MessageCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"

export const metadata: Metadata = {
  title: "Credentials, LASBCA-CAP & Certifications | Envostructs Nigeria Limited",
  description:
    "Envostructs Nigeria Limited (RC: 694337) is COREN-licensed, LASBCA-CAP accredited (Isolo/Okota District), NSE-registered, and CAC-incorporated — 20+ years of verified engineering excellence.",
}

const REGISTRATIONS = [
  {
    icon: Building,
    label: "CAC Registration",
    value: "RC: 694337",
    issuer: "Corporate Affairs Commission",
    detail:
      "Fully incorporated under the Companies and Allied Matters Act (CAMA). Legally authorised to conduct geotechnical, structural, civil engineering consultancy, and construction business across Nigeria.",
    color: "#003366",
  },
  {
    icon: Shield,
    label: "COREN Licensed",
    value: "COREN: R6610",
    issuer: "Council for the Regulation of Engineering in Nigeria",
    detail:
      "All principal engineers are COREN-licensed — the statutory requirement for practising engineering in Nigeria. COREN registration ensures our engineers meet the highest technical and ethical standards.",
    color: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    label: "LASBCA-CAP Accredited",
    value: "Isolo / Okota District",
    issuer: "Lagos State Building Control Agency — Certified Accreditors Program (CAP / CAPS)",
    detail:
      "Accredited engineering partner working closely with LASBCA under the Certified Accreditors Program (CAP) in Isolo/Okota, Lagos State — responsible for monitoring and assessing abandoned, uncompleted, or structurally unstable buildings.",
    color: "#0284c7",
  },
  {
    icon: Users,
    label: "NSE & NICE Member",
    value: "MNSE: 07462",
    issuer: "Nigerian Society of Engineers & Nigerian Institution of Civil Engineers",
    detail:
      "Active corporate and fellow/member standing in the Nigerian Society of Engineers (NSE) and the Nigerian Institution of Civil Engineers (NICE).",
    color: "#16a34a",
  },
  {
    icon: Award,
    label: "NIA / NITP / ICAN",
    value: "Multi-Disciplinary Board",
    issuer: "Architecture, Town Planning & Chartered Accountancy Bodies",
    detail:
      "Our board of directors maintains active registrations across NIA/ARCON (Architecture), NITP/RTP (Town Planning), and ICAN (Chartered Accountancy).",
    color: "#7c3aed",
  },
  {
    icon: Building,
    label: "Corporate Bankers & Auditors",
    value: "FCMB • Chartered Auditors",
    issuer: "First City Monument Bank (FCMB) & Ayinde Babatunde & Co.",
    detail:
      "Audited financial governance via Ayinde Babatunde & Co. (Chartered Accountants), corporate legal retainer via Barr. Samuel Etaifo Esq., and corporate banking with First City Monument Bank (FCMB).",
    color: "#0f172a",
  },
]

const COMPANY_FACTS = [
  { label: "CAC Registration", value: "RC: 694337" },
  { label: "Share Capital", value: "₦1 Million" },
  { label: "Head Office", value: "51, Akanro Street, Ilasa Bustop, Yaba, Lagos" },
  { label: "Years in Practice", value: "20+ Years" },
  { label: "Projects Completed", value: "100+" },
  { label: "Total Portfolio Value", value: "₦500B+" },
]

const CAPABILITIES = [
  "Geotechnical investigations, percussion borehole drilling, SPT & 20-Ton Dutch CPT testing",
  "LASBCA-CAP structural stability audits for abandoned, uncompleted & distressed buildings",
  "Non-Destructive Testing (Schmidt Hammer, Ultrasonic Pulse Velocity, Profometer rebar scan)",
  "Structural design for residential, commercial, industrial and hospitality buildings (EC2 / BS 8110)",
  "Deep foundation systems: bored piles (up to 900mm Ø), driven piles, and micropiles",
  "Dual carriageway highway design, asphaltic concrete resurfacing & FAAN airport runway works",
  "Turnkey building construction, resident engineering & FIDIC project management",
  "Marine jetties, shoreline protection, box culverts and storm-water drainage engineering",
  "World Bank, Federal/State Ministry and commercial bank pre-qualified execution",
  "Laboratory soil mechanics (triaxial shear, oedometer consolidation, Atterberg, CBR)",
]

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative py-32 pt-40 text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(1,15,41,0.95) 0%, rgba(0,30,80,0.92) 100%), url('/soiless-farm-hostel.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Credentials • RC: 694337</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight break-words">
            Professional
            <br />
            <span className="text-amber-400">Accreditations</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            COREN licensed. LASBCA-CAP accredited. NSE registered. CAC incorporated. Over 20 years of verified
            engineering excellence in Nigeria.
          </p>
        </div>
      </section>

      {/* Registrations grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <span className="section-label">Regulatory Standing</span>
              <h2 className="section-title mb-4">Our Registrations, Licences & Governance</h2>
              <p className="section-desc">
                Every statutory and professional body that governs engineering and building control practice in Nigeria
                has accredited Envostructs Nigeria Limited
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {REGISTRATIONS.map((reg, i) => (
              <Reveal key={reg.label} direction="up" delay={i * 80}>
                <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{ backgroundColor: `${reg.color}15` }}
                    >
                      <reg.icon className="w-7 h-7" style={{ color: reg.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <p className="font-black text-gray-900 text-lg">{reg.label}</p>
                          <p className="text-gray-500 text-sm">{reg.issuer}</p>
                        </div>
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full shrink-0"
                          style={{ backgroundColor: `${reg.color}15`, color: reg.color }}
                        >
                          {reg.value}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mt-3">{reg.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts — dark strip */}
      <section className="py-16 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">Company Profile</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Envostructs at a Glance</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {COMPANY_FACTS.map((fact, i) => (
              <Reveal key={fact.label} direction="up" delay={i * 60}>
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{fact.label}</p>
                  <p className="text-white font-black text-lg">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">Technical Capability</span>
              <h2 className="section-title mb-4">What We Are Qualified to Deliver</h2>
              <p className="section-desc">Backed by our statutory registrations and 20+ years of practice</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={i} direction="up" delay={(i % 2) * 60}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{cap}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download company profile + CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal direction="up">
              <div className="p-8 rounded-2xl border-2 border-amber-500/30 bg-amber-50 h-full flex flex-col justify-between">
                <div>
                  <Award className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-xl font-black text-gray-900 mb-2">Download 2025 Company Profile</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Full 39-page corporate dossier including CAC/COREN credentials, ESN geotechnical report log, piling
                    register, project portfolio, and equipment fleet.
                  </p>
                </div>
                <a
                  href="/ENVOSTRUCTS COMPANY PROFILE POLY 2025.pdf"
                  download="ENVOSTRUCTS-Company-Profile-2025.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3 rounded-full text-sm transition-colors"
                >
                  Download PDF Profile
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={80}>
              <div className="p-8 rounded-2xl text-white h-full flex flex-col justify-between" style={{ backgroundColor: "#003366" }}>
                <div>
                  <Phone className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-xl font-black mb-2">Verify Our Credentials</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Government ministries, LASBCA-CAP applicants, and EPC procurement teams can contact us directly for
                    verification letters and certified copies of all registrations.
                  </p>
                </div>
                <div className="space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-full">
                      Contact Engineering Desk <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/2348034770098"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-sm font-bold transition-colors"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
