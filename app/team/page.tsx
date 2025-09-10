import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, GraduationCap, Briefcase, ArrowRight, Building, Cog, Calculator, PenTool } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Team - Envostructs Nigeria Limited",
  description: "Meet our experienced team of engineers, architects, and construction professionals.",
}

export default function TeamPage() {
  const leadership = [
    {
      name: "Engr. S.I.A. Edidi",
      position: "Managing Consultant/Director",
      credentials: "B.Eng Civil Engineering, COREN: R6610, NSE: 07462",
      description:
        "Former Head of Department at Lagos State Polytechnic with extensive experience in civil/structural engineering. Oversees overall management and heads the firm's business negotiation team.",
      experience: "30+ years",
      specialization: "Civil/Structural Engineering",
      education: "University of Ilorin (B.Eng), Lagos State Polytechnic (ND)",
      memberships: ["COREN", "NSE", "NICE"],
      icon: <Building className="w-8 h-8" />,
    },
    {
      name: "Engr. M.A. Adigun",
      position: "Deputy Managing Director",
      credentials: "B.Eng FUTO, MSc Geotechnics UNILAG",
      description:
        "21+ years experience in structural and civil engineering with specialized expertise in geotechnical engineering.",
      experience: "21+ years",
      specialization: "Geotechnical Engineering",
      education: "FUTO (B.Eng), UNILAG (MSc Geotechnics)",
      memberships: ["COREN", "NSE"],
      icon: <Cog className="w-8 h-8" />,
    },
    {
      name: "Engr. A.D. Onitilo",
      position: "Executive Director Engineering",
      credentials: "BSc Civil Engineering UNILAG",
      description:
        "25+ years experience in design and construction works with expertise in both structural and civil engineering projects.",
      experience: "25+ years",
      specialization: "Design & Construction",
      education: "University of Lagos (BSc Civil Engineering)",
      memberships: ["COREN", "NSE"],
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      name: "Engr. Y.O. Bankole",
      position: "Director, Mechanical/Electrical",
      credentials: "Mechanical/Agric Engineering ABU Zaria, MSc",
      description:
        "20+ years experience in mechanical engineering with expertise in agricultural engineering and MEP systems.",
      experience: "20+ years",
      specialization: "Mechanical/Electrical Engineering",
      education: "ABU Zaria (Mechanical/Agric Eng), MSc Mechanical Engineering",
      memberships: ["COREN", "NSE"],
      icon: <Cog className="w-8 h-8" />,
    },
    {
      name: "Adeyemi Adebayo",
      position: "Director, Planning & Research",
      credentials: "HND Town & Regional Planning, Yabatech",
      description:
        "Registered Town Planner who leads the Project Evaluation Committee and coordinates planning and research activities.",
      experience: "15+ years",
      specialization: "Urban Planning & Research",
      education: "Yabatech (HND Town & Regional Planning)",
      memberships: ["Registered Town Planner"],
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      name: "Ms. R.T. Fatoki",
      position: "Director, Admin & Finance",
      credentials: "HND Accountancy, Chartered Accountant, ICAN",
      description:
        "Oversees accounting and finance functions with extensive experience in auditing and accounting across various firms.",
      experience: "18+ years",
      specialization: "Finance & Administration",
      education: "The Polytechnic, Ibadan (HND Accountancy)",
      memberships: ["ICAN"],
      icon: <Calculator className="w-8 h-8" />,
    },
  ]

  const teamComposition = [
    { role: "Architects", count: "3+", icon: <Building className="w-6 h-6" /> },
    { role: "Civil/Structural Engineers", count: "8+", icon: <Building className="w-6 h-6" /> },
    { role: "Mechanical Engineers", count: "3+", icon: <Cog className="w-6 h-6" /> },
    { role: "Electrical Engineers", count: "2+", icon: <Cog className="w-6 h-6" /> },
    { role: "Quantity Surveyors", count: "2+", icon: <Calculator className="w-6 h-6" /> },
    { role: "Support Staff", count: "5+", icon: <Users className="w-6 h-6" /> },
  ]

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in all our engineering solutions",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and methodologies to deliver superior results",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our professional dealings",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Collaboration",
      description: "Working together as a team to achieve exceptional outcomes for our clients",
      icon: <Briefcase className="w-8 h-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Meet our experienced professionals who bring expertise and dedication to every project
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
              20+ Professional Staff
            </Badge>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Our experienced leaders driving innovation and excellence</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {member.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium text-base">
                        {member.position}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{member.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Experience:</span>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Specialization:</span>
                      <p className="text-gray-600">{member.specialization}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Education:</span>
                    <p className="text-gray-600 text-sm">{member.education}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-900 text-sm">Professional Memberships:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {member.memberships.map((membership, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {membership}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 font-mono">{member.credentials}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Composition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Team Composition</h2>
            <p className="text-xl text-gray-600">Our diverse team of professionals across multiple disciplines</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamComposition.map((team, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                    {team.icon}
                  </div>
                  <CardTitle className="text-lg">{team.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{team.count}</div>
                  <p className="text-gray-600 text-sm">Professional Staff</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our team and drive our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Management Philosophy</h2>
          </div>

          <Card className="max-w-4xl mx-auto bg-white">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Team-Leadership Approach</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                Our Management embraces a team-leadership approach in which everyone from the top sees himself as part
                of the team. Our Units are controlled by Management Team Leaders (Project Managers) and supported by a
                competent team, comprising of diverse professionals as reflected on the Board.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Administrative Team</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Finance Management</li>
                    <li>• Administration</li>
                    <li>• Logistics Coordination</li>
                    <li>• Invoicing & Payments</li>
                    <li>• Salary Administration</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Team</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Investigation & Design</li>
                    <li>• Technical Drafting</li>
                    <li>• Bid Preparation</li>
                    <li>• Site Visits & Supervision</li>
                    <li>• Quality Assurance & Control</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work With Our Expert Team</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to collaborate with Nigeria's leading engineering professionals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
