import { Button } from "@/components/ui/button"
import { Users, Award, GraduationCap, Briefcase, ArrowRight, Building, Cog, Calculator, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"

export const metadata = {
  title: "Our Team - Envostructs Nigeria Limited (RC: 694337)",
  description:
    "Meet our experienced leadership board and 100+ professionals in geotechnical, structural, civil engineering, and architecture.",
}

function uiAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=003366&color=ffffff&size=200&bold=true`
}

const LEADERSHIP = [
  {
    name: "Engr. S.I.A. Edidi",
    position: "Managing Consultant / Chief Executive Officer",
    credentials: "B.Eng Civil Engineering, MSc (UNILAG), COREN: R6610, NSE: 07462",
    description:
      "Former Head of Department at Lagos State Polytechnic with over 40+ years of experience in civil, structural, and geotechnical engineering. Oversees overall corporate governance, LASBCA-CAP structural accreditations, and principal technical negotiations.",
    experience: "40+ years",
    specialization: "Civil, Structural & Geotechnical Engineering",
    education: "University of Lagos (MSc), University of Ilorin (B.Eng)",
    memberships: ["COREN (R6610)", "NSE (07462)", "NICE"],
  },
  /*{
    name: "Engr. M.A. Adigun",
    position: "Deputy Managing Director",
    credentials: "B.Eng FUTO, MSc Geotechnics UNILAG",
    description: "21+ years experience in structural and civil engineering with specialized expertise in geotechnical engineering.",
    experience: "21+ years",
    specialization: "Geotechnical Engineering",
    education: "FUTO (B.Eng), UNILAG (MSc Geotechnics)",
    memberships: ["COREN", "NSE"],
  },*/
  {
    name: "Engr. A.D. Onitilo",
    position: "Executive Director, Engineering",
    credentials: "BSc Civil Engineering UNILAG, COREN, MNSE",
    description:
      "Over 40+ years experience in design and construction works with senior expertise across highways, water works, and multi-storey structural engineering projects.",
    experience: "40+ years",
    specialization: "Civil Design & Construction",
    education: "University of Lagos (BSc Civil Engineering)",
    memberships: ["COREN", "NSE"],
  },
  /*{
    name: "Engr. Y.O. Bankole",
    position: "Director, Mechanical/Electrical",
    credentials: "Mechanical/Agric Engineering ABU Zaria, MSc",
    description: "20+ years experience in mechanical engineering with expertise in agricultural engineering and MEP systems.",
    experience: "20+ years",
    specialization: "Mechanical/Electrical Engineering",
    education: "ABU Zaria (Mechanical/Agric Eng), MSc Mechanical Engineering",
    memberships: ["COREN", "NSE"],
  },*/
  {
    name: "Arc. H.A. Quadri",
    position: "Senior Partner, Architecture",
    credentials: "BSc, MSc Architecture • NIA / ARCON",
    description:
      "Over 22+ years of architectural master-planning, institutional and hospitality design, and turnkey building coordination.",
    experience: "22+ years",
    specialization: "Architectural Design & Master-Planning",
    education: "BSc & MSc Architecture",
    memberships: ["NIA", "ARCON"],
  },
  {
    name: "Adeyemi Adebayo",
    position: "Director, Planning & Research",
    credentials: "HND Town & Regional Planning, Yabatech • MNITP, RTP",
    description:
      "Registered Town Planner who leads the Project Evaluation Committee and coordinates statutory urban planning and environmental research activities.",
    experience: "20+ years",
    specialization: "Urban Planning & Statutory Approvals",
    education: "Yabatech (HND Town & Regional Planning)",
    memberships: ["MNITP", "Registered Town Planner"],
  },
  {
    name: "Ms. R.T. Fatoki",
    position: "Director, Admin & Finance",
    credentials: "HND Accountancy, Chartered Accountant, ICAN",
    description:
      "Oversees corporate accounting, banking treasury liaison, and project cost auditing functions across all engineering divisions.",
    experience: "18+ years",
    specialization: "Finance, Audit & Administration",
    education: "The Polytechnic, Ibadan (HND Accountancy)",
    memberships: ["ICAN"],
  },
]

const COMPOSITION = [
  { role: "Civil, Structural & Geotech Engineers", count: "30+", icon: <Building className="w-6 h-6" /> },
  { role: "Geotechnical Drilling & Lab Technologists", count: "25+", icon: <Cog className="w-6 h-6" /> },
  { role: "Architects & CAD Specialists", count: "10+", icon: <Building className="w-6 h-6" /> },
  { role: "Mechanical & Electrical (MEP) Engineers", count: "12+", icon: <Cog className="w-6 h-6" /> },
  { role: "Quantity Surveyors & Cost Controllers", count: "8+", icon: <Calculator className="w-6 h-6" /> },
  { role: "Site Supervisors, HSE & Support Staff", count: "15+", icon: <Users className="w-6 h-6" /> },
]

const VALUES = [
  {
    title: "Excellence",
    description: "Highest COREN, Eurocode & British Standard compliance in all engineering solutions",
    icon: <Award className="w-7 h-7" />,
  },
  {
    title: "Innovation",
    description: "Calibrated NDT diagnostics, geotechnical laboratory precision, and modern CAD/BIM workflows",
    icon: <GraduationCap className="w-7 h-7" />,
  },
  {
    title: "Integrity",
    description: "Uncompromising statutory compliance under LASBCA-CAP and transparent FIDIC contract delivery",
    icon: <Users className="w-7 h-7" />,
  },
  {
    title: "Collaboration",
    description: "100+ multi-disciplinary specialists working seamlessly under one roof",
    icon: <Briefcase className="w-7 h-7" />,
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/soiless-farm-hostel.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
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
          <span className="section-label">Our People • 100+ Staff Strength</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Our
            <br />
            <span className="text-amber-400">Leadership Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Meet the COREN, NSE, NIA, NITP, and ICAN registered principals who bring over four decades of engineering
            leadership to every project.
          </p>
        </div>
      </section>

      {/* ── LEADERSHIP GRID (dark) ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Board of Directors</span>
              <h2 className="section-title-light mb-4">Leadership &amp; Management</h2>
              <p className="text-white/50 text-lg">Combined 140+ years of senior engineering and executive experience</p>
            </div>
          </Reveal>

          {/* Featured Managing Director Card */}
          <Reveal direction="up">
            <div className="mb-10 rounded-3xl bg-gradient-to-br from-[#003366] via-[#002244] to-slate-900 border border-amber-500/30 p-8 shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 text-center">
                  <img
                    src={uiAvatar(LEADERSHIP[0].name)}
                    alt={LEADERSHIP[0].name}
                    className="w-32 h-32 rounded-3xl mx-auto object-cover ring-4 ring-amber-400 shadow-xl mb-4"
                  />
                  <h3 className="text-2xl font-black text-white">{LEADERSHIP[0].name}</h3>
                  <p className="text-amber-400 text-sm font-bold mt-1">{LEADERSHIP[0].position}</p>
                  <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                    {LEADERSHIP[0].memberships.map((m) => (
                      <span
                        key={m}
                        className="text-xs bg-amber-500/20 border border-amber-400/40 text-amber-300 px-3 py-0.5 rounded-full font-bold"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-8 text-white space-y-4">
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{LEADERSHIP[0].description}</p>
                  <div className="grid sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                      <p className="text-amber-400 uppercase font-bold mb-1">Experience</p>
                      <p className="text-white font-semibold">{LEADERSHIP[0].experience}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                      <p className="text-amber-400 uppercase font-bold mb-1">Specialization</p>
                      <p className="text-white font-semibold">{LEADERSHIP[0].specialization}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                      <p className="text-amber-400 uppercase font-bold mb-1">Academic Pedigree</p>
                      <p className="text-white font-semibold">{LEADERSHIP[0].education}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {LEADERSHIP.slice(1).map((member, i) => (
              <Reveal key={member.name} direction="up" delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-5 mb-5">
                      <img
                        src={uiAvatar(member.name)}
                        alt={member.name}
                        className="w-20 h-20 rounded-2xl object-cover ring-2 ring-amber-500/30 group-hover:ring-amber-500 transition-all duration-300 shrink-0"
                      />
                      <div>
                        <h3 className="font-black text-white text-lg leading-tight">{member.name}</h3>
                        <p className="text-amber-400 text-sm font-semibold mt-1">{member.position}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {member.memberships.map((m) => (
                            <span
                              key={m}
                              className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded-full"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{member.description}</p>
                    <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                      <div>
                        <p className="text-white/30 uppercase tracking-wider mb-0.5">Experience</p>
                        <p className="text-white/80 font-semibold">{member.experience}</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase tracking-wider mb-0.5">Specialization</p>
                        <p className="text-white/80 font-semibold">{member.specialization}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-white/30 uppercase tracking-wider mb-0.5">Education</p>
                        <p className="text-white/80 font-semibold">{member.education}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 bg-white/5 rounded-lg px-3 py-2 font-mono">
                      {member.credentials}
                    </div>
                    <div className="mt-4 h-0.5 w-8 group-hover:w-full bg-amber-500 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM COMPOSITION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Staff Breakdown</span>
              <h2 className="section-title mb-4">100+ Multi-Disciplinary Workforce</h2>
              <p className="section-desc">
                A deep technical and field operations workforce of 100+ professionals across Nigeria
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPOSITION.map((team, i) => (
              <Reveal key={team.role} direction="up" delay={i * 80}>
                <div className="group border border-gray-100 rounded-2xl p-8 hover:border-amber-500 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-amber-600 group-hover:text-white transition-all duration-300">
                    {team.icon}
                  </div>
                  <div className="text-5xl font-black text-amber-500 mb-1 tabular-nums">{team.count}</div>
                  <p className="text-gray-700 font-semibold text-sm">{team.role}</p>
                  <p className="text-gray-400 text-xs mt-1">Professional & Technical Staff</p>
                  <div className="mt-4 h-0.5 w-8 group-hover:w-full bg-amber-500 transition-all duration-500 rounded-full mx-auto" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Our Principles</span>
              <h2 className="section-title mb-4">Our Values</h2>
              <p className="section-desc">The principles that guide our team and drive our success</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} direction="up" delay={i * 80}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-amber-500 hover:shadow-xl transition-all duration-300 h-full text-center">
                  <div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500 rounded-xl mx-auto mb-5 flex items-center justify-center text-amber-600 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Work With Us</span>
            <h2 className="section-title mb-5">Work With Our Expert Team</h2>
            <p className="section-desc mb-8">Ready to collaborate with Nigeria&apos;s leading engineering professionals?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-full px-8 hover:scale-105 transition-all duration-300"
                >
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent rounded-full px-8"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
