import { Button } from "@/components/ui/button"
import { Users, Award, GraduationCap, Briefcase, ArrowRight, Building, Cog, Calculator, PenTool } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"

export const metadata = {
  title: "Our Team - Envostructs Nigeria Limited",
  description: "Meet our experienced team of engineers, architects, and construction professionals.",
}

function uiAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=003366&color=ffffff&size=200&bold=true`
}

const LEADERSHIP = [
  {
    name: "Engr. S.I.A. Edidi",
    position: "Managing Consultant/Director",
    credentials: "B.Eng Civil Engineering, COREN: R6610, NSE: 07462",
    description: "Former Head of Department at Lagos State Polytechnic with extensive experience in civil/structural engineering. Oversees overall management and heads the firm's business negotiation team.",
    experience: "30+ years",
    specialization: "Civil/Structural Engineering",
    education: "University of Ilorin (B.Eng), Lagos State Polytechnic (ND)",
    memberships: ["COREN", "NSE", "NICE"],
  },
  {
    name: "Engr. M.A. Adigun",
    position: "Deputy Managing Director",
    credentials: "B.Eng FUTO, MSc Geotechnics UNILAG",
    description: "21+ years experience in structural and civil engineering with specialized expertise in geotechnical engineering.",
    experience: "21+ years",
    specialization: "Geotechnical Engineering",
    education: "FUTO (B.Eng), UNILAG (MSc Geotechnics)",
    memberships: ["COREN", "NSE"],
  },
  {
    name: "Engr. A.D. Onitilo",
    position: "Executive Director Engineering",
    credentials: "BSc Civil Engineering UNILAG",
    description: "25+ years experience in design and construction works with expertise in both structural and civil engineering projects.",
    experience: "25+ years",
    specialization: "Design & Construction",
    education: "University of Lagos (BSc Civil Engineering)",
    memberships: ["COREN", "NSE"],
  },
  {
    name: "Engr. Y.O. Bankole",
    position: "Director, Mechanical/Electrical",
    credentials: "Mechanical/Agric Engineering ABU Zaria, MSc",
    description: "20+ years experience in mechanical engineering with expertise in agricultural engineering and MEP systems.",
    experience: "20+ years",
    specialization: "Mechanical/Electrical Engineering",
    education: "ABU Zaria (Mechanical/Agric Eng), MSc Mechanical Engineering",
    memberships: ["COREN", "NSE"],
  },
  {
    name: "Adeyemi Adebayo",
    position: "Director, Planning & Research",
    credentials: "HND Town & Regional Planning, Yabatech",
    description: "Registered Town Planner who leads the Project Evaluation Committee and coordinates planning and research activities.",
    experience: "15+ years",
    specialization: "Urban Planning & Research",
    education: "Yabatech (HND Town & Regional Planning)",
    memberships: ["Registered Town Planner"],
  },
  {
    name: "Ms. R.T. Fatoki",
    position: "Director, Admin & Finance",
    credentials: "HND Accountancy, Chartered Accountant, ICAN",
    description: "Oversees accounting and finance functions with extensive experience in auditing and accounting across various firms.",
    experience: "18+ years",
    specialization: "Finance & Administration",
    education: "The Polytechnic, Ibadan (HND Accountancy)",
    memberships: ["ICAN"],
  },
]

const COMPOSITION = [
  { role: "Architects", count: "3+", icon: <Building className="w-6 h-6" /> },
  { role: "Civil/Structural Engineers", count: "8+", icon: <Building className="w-6 h-6" /> },
  { role: "Mechanical Engineers", count: "3+", icon: <Cog className="w-6 h-6" /> },
  { role: "Electrical Engineers", count: "2+", icon: <Cog className="w-6 h-6" /> },
  { role: "Quantity Surveyors", count: "2+", icon: <Calculator className="w-6 h-6" /> },
  { role: "Support Staff", count: "5+", icon: <Users className="w-6 h-6" /> },
]

const VALUES = [
  { title: "Excellence", description: "Highest standards in all engineering solutions", icon: <Award className="w-7 h-7" /> },
  { title: "Innovation", description: "Embracing new technologies for superior results", icon: <GraduationCap className="w-7 h-7" /> },
  { title: "Integrity", description: "Highest ethical standards in all professional dealings", icon: <Users className="w-7 h-7" /> },
  { title: "Collaboration", description: "Working together to achieve exceptional outcomes", icon: <Briefcase className="w-7 h-7" /> },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/soiless-farm-hostel.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our People</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Our<br />
            <span className="text-amber-400">Leadership Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Meet the experienced professionals who bring decades of engineering expertise to every project.
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
              <p className="text-white/50 text-lg">Combined 130+ years of engineering experience</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {LEADERSHIP.map((member, i) => (
              <Reveal key={member.name} direction="up" delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-5 mb-5">
                    <img src={uiAvatar(member.name)} alt={member.name} className="w-20 h-20 rounded-2xl object-cover ring-2 ring-amber-500/30 group-hover:ring-amber-500 transition-all duration-300 shrink-0" />
                    <div>
                      <h3 className="font-black text-white text-lg leading-tight">{member.name}</h3>
                      <p className="text-amber-400 text-sm font-semibold mt-1">{member.position}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {member.memberships.map((m) => (
                          <span key={m} className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded-full">{m}</span>
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
                  <div className="text-xs text-white/25 bg-white/5 rounded-lg px-3 py-2 font-mono">{member.credentials}</div>
                  <div className="mt-4 h-0.5 w-8 group-hover:w-full bg-amber-500 transition-all duration-500 rounded-full" />
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
              <h2 className="section-title mb-4">Team Composition</h2>
              <p className="section-desc">A diverse multi-disciplinary team of 20+ professionals</p>
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
                  <p className="text-gray-400 text-xs mt-1">Professional Staff</p>
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

      {/* ── MANAGEMENT PHILOSOPHY (dark quotes) ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">How We Operate</span>
              <h2 className="section-title-light mb-4">Management Philosophy</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal direction="right">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
                <span className="absolute top-4 right-6 text-[80px] leading-none font-black text-white/5 select-none">"</span>
                <h3 className="text-xl font-black text-white mb-4">Administrative Team</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">Our administrative arm ensures seamless project delivery through rigorous financial management and operational excellence.</p>
                <ul className="space-y-2">
                  {["Finance Management", "Administration & HR", "Logistics Coordination", "Invoicing & Payments", "Salary Administration"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/60 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
                <span className="absolute top-4 right-6 text-[80px] leading-none font-black text-white/5 select-none">"</span>
                <h3 className="text-xl font-black text-white mb-4">Technical Team</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">Led by Project Managers, our technical units deliver investigation, design, and construction with precision and accountability.</p>
                <ul className="space-y-2">
                  {["Investigation & Design", "Technical Drafting", "Bid Preparation", "Site Visits & Supervision", "Quality Assurance & Control"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/60 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Work With Us</span>
            <h2 className="section-title mb-5">Work With Our Expert Team</h2>
            <p className="section-desc mb-8">Ready to collaborate with Nigeria's leading engineering professionals?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent rounded-full px-8">
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
