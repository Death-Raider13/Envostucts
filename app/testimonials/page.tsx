import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, Building, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Client Testimonials - Envostructs Nigeria Limited",
  description:
    "Read what our clients say about our engineering and construction services. Real testimonials from satisfied customers.",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Adebayo Ogundimu",
      position: "Managing Director",
      company: "Swiss International Hotels",
      project: "Swiss International Hotel Abeokuta",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Dr.+Adebayo",
      testimonial:
        "Envostructs Nigeria Limited exceeded our expectations in every aspect of the Swiss International Hotel Abeokuta project. Their attention to detail, professional project management, and ability to deliver on time and within budget was remarkable. The 15-storey structure stands as a testament to their engineering excellence.",
      category: "Hospitality",
      year: "2023",
    },
    {
      id: 2,
      name: "Prof. Olumide Adeyemi",
      position: "Director",
      company: "Soilless Farm Laboratory",
      project: "Soilless Farm Lab Hostel",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Prof.+Olumide",
      testimonial:
        "The team at Envostructs demonstrated exceptional understanding of our unique requirements for the agricultural research facility. The 12 hostel blocks were constructed with sustainable practices and modern amenities that perfectly serve our research community. Their commitment to environmental considerations was particularly impressive.",
      category: "Educational",
      year: "2022",
    },
    {
      id: 3,
      name: "Engr. Funmi Adebisi",
      position: "Project Coordinator",
      company: "Lagos State Ministry of Works",
      project: "Community Bridge Project",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Engr.+Funmi",
      testimonial:
        "Working with Envostructs on the Community Bridge Project has been a pleasure. Their comprehensive approach to environmental impact assessment and community engagement set them apart. The technical expertise and innovative solutions they brought to this infrastructure project are commendable.",
      category: "Infrastructure",
      year: "2024",
    },
    {
      id: 4,
      name: "Alhaji Musa Ibrahim",
      position: "Chairman",
      company: "NASFAT Central Mosque Committee",
      project: "NASFAT Central Mosque Construction",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Alhaji+Musa",
      testimonial:
        "Envostructs handled our mosque construction project with great sensitivity to our religious requirements while maintaining the highest engineering standards. The project was completed on schedule and the quality of workmanship is exceptional. We highly recommend their services.",
      category: "Religious",
      year: "2021",
    },
    {
      id: 5,
      name: "Mrs. Folake Adeyinka",
      position: "Estate Developer",
      company: "Adeyinka Properties Ltd",
      project: "Residential Development at Lekki",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Mrs.+Folake",
      testimonial:
        "From geotechnical investigation to final handover, Envostructs provided comprehensive services for our residential development. Their expertise in foundation design and construction supervision ensured our project met all safety standards. The team's professionalism and technical competence are outstanding.",
      category: "Residential",
      year: "2023",
    },
    {
      id: 6,
      name: "Mr. Chinedu Okafor",
      position: "Operations Manager",
      company: "Lekki Free Zone Development Company",
      project: "Road Construction N5 & E6A",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Mr.+Chinedu",
      testimonial:
        "The road construction projects handled by Envostructs in the Lekki Free Zone were executed with precision and efficiency. Their understanding of industrial infrastructure requirements and ability to work within our operational constraints was impressive. The quality of the completed roads exceeds our expectations.",
      category: "Infrastructure",
      year: "2022",
    },
  ]

  const stats = [
    { label: "Satisfied Clients", value: "50+", icon: Users },
    { label: "5-Star Reviews", value: "95%", icon: Star },
    { label: "Repeat Clients", value: "80%", icon: Award },
    { label: "Projects Delivered", value: "60+", icon: Building },
  ]

  const clientLogos = [
    { name: "Swiss International Hotels", logo: "/placeholder.svg?height=60&width=120&text=Swiss+Hotels" },
    { name: "Lagos State Government", logo: "/placeholder.svg?height=60&width=120&text=Lagos+State" },
    { name: "NASFAT", logo: "/placeholder.svg?height=60&width=120&text=NASFAT" },
    { name: "Lekki Free Zone", logo: "/placeholder.svg?height=60&width=120&text=Lekki+FZ" },
    { name: "First Bank Nigeria", logo: "/placeholder.svg?height=60&width=120&text=First+Bank" },
    { name: "Zenith Bank", logo: "/placeholder.svg?height=60&width=120&text=Zenith+Bank" },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hospitality":
        return "bg-purple-100 text-purple-800"
      case "Educational":
        return "bg-blue-100 text-blue-800"
      case "Infrastructure":
        return "bg-orange-100 text-orange-800"
      case "Religious":
        return "bg-green-100 text-green-800"
      case "Residential":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with Envostructs Nigeria Limited
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
                95% Client Satisfaction Rate
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

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real clients about real projects</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <p className="text-blue-600 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                      <Badge className={getCategoryColor(testimonial.category)}>{testimonial.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed pl-6 mb-4">{testimonial.testimonial}</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Project: {testimonial.project}</span>
                    <span>{testimonial.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-600">We're proud to work with these esteemed clients</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Key achievements that demonstrate our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Safety Incidents",
                description: "Maintained perfect safety record across all major projects",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "from-green-600 to-green-700",
              },
              {
                title: "On-Time Delivery",
                description: "95% of projects completed on or ahead of schedule",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-600 to-blue-700",
              },
              {
                title: "Budget Compliance",
                description: "Consistently delivered projects within approved budgets",
                icon: <Star className="w-8 h-8" />,
                color: "from-purple-600 to-purple-700",
              },
            ].map((story, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white`}
                  >
                    {story.icon}
                  </div>
                  <CardTitle className="text-xl">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the same level of excellence and professionalism that our clients rave about
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
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
