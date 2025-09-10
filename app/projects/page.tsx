import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building,
  Home,
  GraduationCap,
  BracketsIcon as Bridge,
  Hotel,
  ArrowRight,
  Calendar,
  MapPin,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Projects - Envostructs Nigeria Limited",
  description: "Explore our portfolio of completed and ongoing construction and engineering projects across Nigeria.",
}

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "Swiss International Hotel Abeokuta",
      description:
        "15 Storey Hotel Structure - A landmark hospitality project featuring modern design and engineering excellence",
      value: "₦6.5 Billion",
      category: "Hospitality",
      status: "Completed",
      location: "Abeokuta, Ogun State",
      year: "2023",
      slug: "swiss-international-hotel-abeokuta",
      icon: <Hotel className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400&text=Swiss+International+Hotel",
      details: [
        "15-storey modern hotel structure",
        "State-of-the-art engineering design",
        "Complete MEP systems integration",
        "Luxury hospitality standards",
      ],
    },
    {
      title: "Soilless Farm Lab Hostel",
      description: "12 Blocks of Hostel accommodation for agricultural research facility",
      value: "₦850 Million",
      category: "Educational",
      status: "Completed",
      location: "Awowo Village, Abeokuta",
      year: "2022",
      slug: "soilless-farm-lab-hostel",
      icon: <GraduationCap className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400&text=Soilless+Farm+Lab",
      details: [
        "12 blocks of modern hostel accommodation",
        "Specialized agricultural research facility",
        "Sustainable construction practices",
        "Modern amenities and utilities",
      ],
    },
    {
      title: "Community Bridge Project",
      description: "Bridge linking Ibeju Lekki Community with Iba-Oloja Community",
      value: "₦750 Million",
      category: "Infrastructure",
      status: "Design Phase",
      location: "Ibeju Lekki, Lagos State",
      year: "2024",
      slug: "community-bridge-project",
      icon: <Bridge className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400&text=Community+Bridge",
      details: [
        "Strategic community connectivity",
        "Advanced bridge engineering",
        "Environmental impact consideration",
        "Sustainable transportation solution",
      ],
    },
  ]

  const allProjects = [
    {
      title: "Swiss Budget Hotel Conversion",
      description: "Office Complex Conversion on Balogun Lagos",
      value: "₦5.2 Billion",
      category: "Hospitality",
      status: "Completed",
      location: "Balogun, Lagos",
    },
    {
      title: "Detached Duplex Units",
      description: "4 Units at Gudu GRA Lagos",
      value: "₦300 Million",
      category: "Residential",
      status: "Ongoing",
      location: "Gudu GRA, Lagos",
    },
    {
      title: "Lekki Free Zone Roads",
      description: "Road N5 & E6A Construction",
      value: "₦464 Million",
      category: "Infrastructure",
      status: "Completed",
      location: "Lekki Free Zone, Lagos",
    },
    {
      title: "NASFAT Central Mosque",
      description: "Construction of Central Mosque at Isolo",
      value: "₦159 Million",
      category: "Religious",
      status: "Completed",
      location: "Isolo, Lagos",
    },
    {
      title: "Swiss Spirit Hotel Makurdi",
      description: "Structural Design/Construction Works",
      value: "₦1.2 Billion",
      category: "Hospitality",
      status: "Completed",
      location: "Makurdi, Benue State",
    },
    {
      title: "Emuren – Ipele Road Dualization",
      description: "Consultancy Works on Road Dualization (14.85KM)",
      value: "₦12.59 Billion",
      category: "Infrastructure",
      status: "Ongoing",
      location: "Ondo State",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hospitality":
        return <Hotel className="w-5 h-5" />
      case "Residential":
        return <Home className="w-5 h-5" />
      case "Educational":
        return <GraduationCap className="w-5 h-5" />
      case "Infrastructure":
        return <Bridge className="w-5 h-5" />
      case "Religious":
        return <Building className="w-5 h-5" />
      default:
        return <Building className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hospitality":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Residential":
        return "bg-green-100 text-green-800 border-green-200"
      case "Educational":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Infrastructure":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Religious":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
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
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Showcasing our portfolio of successful engineering and construction projects across Nigeria
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
                60+ Projects Completed
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
                ₦30+ Billion in Value
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Our most significant and impactful projects</p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(project.category)}>
                        {getCategoryIcon(project.category)}
                        <span className="ml-1">{project.category}</span>
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white mr-4">
                        {project.icon}
                      </div>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                        <span className="font-semibold text-green-600">{project.value}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center text-gray-600 col-span-2">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/projects/${project.slug}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Project Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600">Complete portfolio of our engineering achievements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(project.category)}>
                      {getCategoryIcon(project.category)}
                      <span className="ml-1">{project.category}</span>
                    </Badge>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Project Value:</span>
                      <span className="font-semibold text-green-600">{project.value}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our portfolio of successful projects and experience excellence in engineering
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
