import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  CheckCircle,
  Building2,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - Envostructs Nigeria Limited",
  description: "Learn about Envostructs Nigeria Limited, a multi-disciplinary design consultancy established in 2008.",
}

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "16+", icon: Calendar },
    { label: "Projects Completed", value: "60+", icon: Building2 },
    { label: "Professional Staff", value: "20+", icon: Users },
    { label: "Share Capital", value: "₦11M", icon: Award },
  ]

  const milestones = [
    { year: "2008", title: "Company Established", description: "Founded as Envostructs Nigeria Limited" },
    { year: "2010", title: "First Major Project", description: "Completed first multi-million naira project" },
    { year: "2015", title: "Team Expansion", description: "Expanded to 20+ professional staff" },
    { year: "2020", title: "Major Contracts", description: "Secured billion-naira hotel projects" },
    { year: "2024", title: "Continued Growth", description: "Leading engineering consultancy in Nigeria" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Envostructs</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              A multi-disciplinary design consultancy, construction and project management practice outfit
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
                Established 2008
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-blue-600">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be recognized as a pre-eminent African Design/Construction Consultant and Contractors brand,
                providing superior solutions within our niche markets with our client's need always first in mind, a
                fair return to the owners, and fulfilling and rewarding careers to all our staff.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Objectives</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To create satisfactory customers base by offering value to clients, staff, environment and the
                investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Areas of Competence</h2>
            <p className="text-xl text-gray-600">Our main business activities and specializations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Geotechnic / Geophysical Investigation",
              "Design and Documentation",
              "Project Management",
              "Construction Works",
              "Inspection and Testing",
              "Engineering Services in Buildings",
            ].map((competency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{competency}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our company's growth</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your next project with us?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Visit Our Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  51, Akanro Street, Off Apapa-Oshodi Express Road,
                  <br />
                  by Ilasa Bustop, P.O. Box 2890 Yaba, Lagos, Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  +234-08034770098
                  <br />
                  +234-08127744990
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  envostructs@yahoo.co.uk
                  <br />
                  envostructs@gmail.com
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
