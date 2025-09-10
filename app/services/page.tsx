import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  Ruler,
  Hammer,
  HardHat,
  Truck,
  Droplets,
  CheckCircle,
  ArrowRight,
  Building,
  Cog,
  Search,
  ClipboardCheck,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Services - Envostructs Nigeria Limited",
  description:
    "Comprehensive engineering solutions from conception to completion. Geotechnical services, design, construction, and project management.",
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Geotechnical Services",
      description: "Comprehensive soil investigation and foundation analysis for all types of construction projects.",
      features: [
        "Feasibility Studies Development",
        "Geotechnical Site Investigations",
        "Laboratory Testing & Analysis",
        "Engineering Analysis & Reporting",
        "Pile Foundation Construction",
        "Construction Observation & Testing",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Design & Documentation",
      description: "Complete architectural and engineering design solutions with detailed documentation.",
      features: [
        "Detailed Project Programming",
        "Architectural/Structural Designs",
        "Civil Engineering Drawings",
        "Tender Documentation",
        "Project Control Manual",
        "Complete Contract Documentation",
      ],
      color: "from-green-600 to-green-700",
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Construction Works",
      description: "Full-scale construction and infrastructure development services.",
      features: [
        "Buildings Construction",
        "Road Works & Asphalting",
        "Jetties & Culverts",
        "Drainage Systems",
        "Concrete Pavements",
        "Interlocking Paved Ways",
      ],
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "Project Management",
      description: "End-to-end project coordination and oversight from conception to completion.",
      features: [
        "Budgeting & Programming",
        "Progress Monitoring & Control",
        "Contract Documentation",
        "Tender Evaluation",
        "Client Liaison",
        "Quality Control/Commissioning",
      ],
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Highway Design",
      description: "Transportation infrastructure and traffic engineering solutions.",
      features: [
        "Bridge Design & Construction",
        "Road Networks Development",
        "Urban & Inter-urban Highways",
        "Traffic Control Systems",
        "Mass Transit Projects",
        "Route Location & Geometrical Design",
      ],
      color: "from-red-600 to-red-700",
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Water & Environmental",
      description: "Water resources and environmental health engineering services.",
      features: [
        "Water Supply Projects",
        "Sewerage Systems Design",
        "Water Treatment Plants",
        "Drainage & Canalization",
        "Environmental Protection",
        "Hydrological Studies",
      ],
      color: "from-cyan-600 to-cyan-700",
    },
  ]

  const specializedServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Inspection & Testing",
      description:
        "Quality control and reporting on materials, plants and equipment during manufacture and construction.",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Engineering Services in Buildings",
      description:
        "Rehabilitation of existing mechanical and electrical works, borehole installation, and security systems.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Construction Supervision",
      description:
        "Professional supervision of construction works for residential, commercial, and industrial projects.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Structural Appraisal",
      description: "Inspection of existing structures to determine structural stability and renovation requirements.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Comprehensive engineering solutions from conception to completion
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
              Multi-Disciplinary Expertise
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Our primary areas of expertise and specialization</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">Additional expertise to complement our core offerings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results for every project</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial project assessment and requirements gathering",
              },
              { step: "02", title: "Planning", description: "Detailed project planning and design development" },
              { step: "03", title: "Execution", description: "Professional implementation with quality control" },
              { step: "04", title: "Delivery", description: "Project completion and handover to client" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our team of experts to discuss your engineering needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
