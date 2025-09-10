import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, DollarSign, CheckCircle, ArrowLeft, ArrowRight, Clock, Award } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Project data - in a real app, this would come from a database
const projectsData = {
  "swiss-international-hotel-abeokuta": {
    title: "Swiss International Hotel Abeokuta",
    description:
      "15 Storey Hotel Structure - A landmark hospitality project featuring modern design and engineering excellence",
    value: "₦6.5 Billion",
    category: "Hospitality",
    status: "Completed",
    location: "Abeokuta, Ogun State",
    year: "2023",
    duration: "36 months",
    client: "Swiss International Hotels",
    projectManager: "Engr. S.I.A. Edidi",
    images: [
      "/placeholder.svg?height=400&width=600&text=Swiss+Hotel+Main+View",
      "/placeholder.svg?height=400&width=600&text=Swiss+Hotel+Interior",
      "/placeholder.svg?height=400&width=600&text=Swiss+Hotel+Construction",
      "/placeholder.svg?height=400&width=600&text=Swiss+Hotel+Completed",
    ],
    overview:
      "The Swiss International Hotel Abeokuta represents one of our most ambitious hospitality projects, featuring a 15-storey modern structure that has become a landmark in Abeokuta. This project showcased our expertise in high-rise construction, advanced MEP systems integration, and luxury hospitality standards.",
    challenges: [
      "Complex foundation design for high-rise structure",
      "Integration of advanced MEP systems",
      "Coordination with international hospitality standards",
      "Managing construction in urban environment",
    ],
    solutions: [
      "Deep pile foundation system with advanced geotechnical analysis",
      "Comprehensive MEP design with redundancy systems",
      "Close collaboration with Swiss International Hotels standards team",
      "Phased construction approach to minimize urban disruption",
    ],
    keyFeatures: [
      "15-storey modern hotel structure",
      "200+ luxury guest rooms and suites",
      "State-of-the-art conference facilities",
      "Advanced fire safety and security systems",
      "Energy-efficient HVAC systems",
      "Luxury spa and wellness center",
      "Multi-level parking facility",
      "Rooftop restaurant and bar",
    ],
    technicalSpecs: [
      { label: "Total Floor Area", value: "25,000 sqm" },
      { label: "Building Height", value: "60 meters" },
      { label: "Foundation Type", value: "Bored Pile Foundation" },
      { label: "Structural System", value: "Reinforced Concrete Frame" },
      { label: "Guest Rooms", value: "200+" },
      { label: "Parking Spaces", value: "150" },
    ],
    timeline: [
      { phase: "Design & Planning", duration: "6 months", status: "Completed" },
      { phase: "Foundation Work", duration: "8 months", status: "Completed" },
      { phase: "Structural Construction", duration: "18 months", status: "Completed" },
      { phase: "MEP Installation", duration: "8 months", status: "Completed" },
      { phase: "Finishing & Handover", duration: "4 months", status: "Completed" },
    ],
  },
  "soilless-farm-lab-hostel": {
    title: "Soilless Farm Lab Hostel",
    description: "12 Blocks of Hostel accommodation for agricultural research facility",
    value: "₦850 Million",
    category: "Educational",
    status: "Completed",
    location: "Awowo Village, Abeokuta",
    year: "2022",
    duration: "24 months",
    client: "Soilless Farm Laboratory",
    projectManager: "Engr. M.A. Adigun",
    images: [
      "/placeholder.svg?height=400&width=600&text=Soilless+Farm+Hostel+Overview",
      "/placeholder.svg?height=400&width=600&text=Hostel+Block+Construction",
      "/placeholder.svg?height=400&width=600&text=Interior+Facilities",
      "/placeholder.svg?height=400&width=600&text=Completed+Complex",
    ],
    overview:
      "The Soilless Farm Lab Hostel project involved the construction of 12 modern hostel blocks designed to accommodate researchers and students at the agricultural research facility. This project emphasized sustainable construction practices and modern amenities suitable for academic accommodation.",
    challenges: [
      "Remote location with limited infrastructure",
      "Sustainable construction requirements",
      "Coordination with ongoing research activities",
      "Specialized utility requirements for research facility",
    ],
    solutions: [
      "Established temporary construction infrastructure",
      "Implemented eco-friendly construction materials and methods",
      "Phased construction to minimize disruption to research",
      "Custom utility design for research facility needs",
    ],
    keyFeatures: [
      "12 blocks of modern hostel accommodation",
      "400+ bed capacity with modern amenities",
      "Central dining and recreation facilities",
      "Research-friendly study spaces",
      "Sustainable water and waste management systems",
      "Solar power integration",
      "Landscaped common areas",
      "24/7 security systems",
    ],
    technicalSpecs: [
      { label: "Total Blocks", value: "12" },
      { label: "Bed Capacity", value: "400+" },
      { label: "Total Floor Area", value: "15,000 sqm" },
      { label: "Building Height", value: "3 storeys" },
      { label: "Foundation Type", value: "Strip Foundation" },
      { label: "Structural System", value: "Load Bearing Masonry" },
    ],
    timeline: [
      { phase: "Site Preparation", duration: "3 months", status: "Completed" },
      { phase: "Foundation & Structure", duration: "12 months", status: "Completed" },
      { phase: "MEP Installation", duration: "6 months", status: "Completed" },
      { phase: "Finishing Works", duration: "3 months", status: "Completed" },
    ],
  },
  "community-bridge-project": {
    title: "Community Bridge Project",
    description: "Bridge linking Ibeju Lekki Community with Iba-Oloja Community",
    value: "₦750 Million",
    category: "Infrastructure",
    status: "Design Phase",
    location: "Ibeju Lekki, Lagos State",
    year: "2024",
    duration: "18 months (projected)",
    client: "Lagos State Government",
    projectManager: "Engr. A.D. Onitilo",
    images: [
      "/placeholder.svg?height=400&width=600&text=Bridge+Design+Concept",
      "/placeholder.svg?height=400&width=600&text=Site+Survey",
      "/placeholder.svg?height=400&width=600&text=Environmental+Study",
      "/placeholder.svg?height=400&width=600&text=Community+Consultation",
    ],
    overview:
      "The Community Bridge Project is a strategic infrastructure development aimed at connecting the Ibeju Lekki and Iba-Oloja communities. This bridge will significantly improve transportation, economic activities, and social integration between these communities while considering environmental sustainability.",
    challenges: [
      "Complex environmental impact assessment",
      "Community stakeholder management",
      "Waterway navigation requirements",
      "Sustainable design for coastal environment",
    ],
    solutions: [
      "Comprehensive environmental impact study with mitigation measures",
      "Extensive community consultation and engagement program",
      "Bridge design with adequate clearance for water traffic",
      "Corrosion-resistant materials for coastal conditions",
    ],
    keyFeatures: [
      "Strategic community connectivity solution",
      "Advanced bridge engineering design",
      "Environmental impact mitigation measures",
      "Sustainable transportation infrastructure",
      "Pedestrian and vehicle access",
      "Navigation clearance for waterway traffic",
      "Flood-resistant design",
      "Community economic development catalyst",
    ],
    technicalSpecs: [
      { label: "Bridge Length", value: "450 meters" },
      { label: "Bridge Width", value: "12 meters" },
      { label: "Design Load", value: "HS20-44" },
      { label: "Navigation Clearance", value: "15 meters" },
      { label: "Foundation Type", value: "Driven Pile" },
      { label: "Superstructure", value: "Prestressed Concrete" },
    ],
    timeline: [
      { phase: "Environmental Impact Assessment", duration: "4 months", status: "In Progress" },
      { phase: "Detailed Design", duration: "6 months", status: "Planned" },
      { phase: "Construction", duration: "12 months", status: "Planned" },
      { phase: "Testing & Commissioning", duration: "2 months", status: "Planned" },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Envostructs Nigeria Limited`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hospitality":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Educational":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Infrastructure":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="ml-2">
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl opacity-90 mb-6">{project.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-semibold">{project.value}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{project.overview}</p>
                </CardContent>
              </Card>

              {/* Image Gallery */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Project Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-600">Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-600">Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Key Features */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">Client:</span>
                    <p className="text-gray-600">{project.client}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Project Manager:</span>
                    <p className="text-gray-600">{project.projectManager}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Duration:</span>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Status:</span>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="ml-2">
                      {project.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.technicalSpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-900">{spec.label}:</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Project Timeline */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Project Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.timeline.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center">
                          <div
                            className={`w-4 h-4 rounded-full mr-3 ${
                              phase.status === "Completed"
                                ? "bg-green-500"
                                : phase.status === "In Progress"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{phase.phase}</h4>
                            <p className="text-sm text-gray-600">{phase.duration}</p>
                            <Badge
                              variant={phase.status === "Completed" ? "default" : "secondary"}
                              className="text-xs mt-1"
                            >
                              {phase.status}
                            </Badge>
                          </div>
                        </div>
                        {index < project.timeline.length - 1 && <div className="w-px h-6 bg-gray-200 ml-2 mt-2"></div>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in a Similar Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your vision to life with our expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
