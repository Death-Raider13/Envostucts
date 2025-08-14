"use client"
import Head from "next/head"
import Script from "next/script
export default function EnvostructsWebsite() {
  return (
    <>
      <Head>
        <title>Envostructs Nigeria Limited</title>
      </Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CXX7HW3QDT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CXX7HW3QDT');
</script>
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import WhatsAppPopup from "@/components/WhatsAppPopup"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import {
  Building2,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Wrench,
  Hammer,
  Ruler,
  HardHat,
  Truck,
  Droplets,
  Calendar,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Target,
  Globe,
  MessageSquare
} from "lucide-react"
import { useActionState } from "react"
import { submitContactForm } from "./actions"

export default function EnvostructsWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { toast } = useToast()

  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  // Handle toast messages based on server action state
  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "Success!" : "Error!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
  }, [state, toast])

  // Handle smooth scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "team", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ]

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Geotechnical Services",
      description: "Comprehensive soil investigation and foundation analysis",
      features: [
        "Feasibility Studies",
        "Site Investigations",
        "Laboratory Testing",
        "Engineering Analysis",
        "Pile Foundation Construction",
      ],
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Design & Documentation",
      description: "Complete architectural and engineering design solutions",
      features: [
        "Project Programming",
        "Architectural Designs",
        "Civil Engineering Drawings",
        "Tender Documentation",
        "Project Control Manual",
      ],
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Construction Works",
      description: "Full-scale construction and infrastructure development",
      features: [
        "Buildings Construction",
        "Road Works & Asphalting",
        "Jetties & Culverts",
        "Drainage Systems",
        "Concrete Pavements",
      ],
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end project coordination and oversight",
      features: [
        "Budgeting & Programming",
        "Progress Monitoring",
        "Contract Documentation",
        "Tender Evaluation",
        "Client Liaison",
      ],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Highway Design",
      description: "Transportation infrastructure and traffic solutions",
      features: [
        "Bridge Design",
        "Road Networks",
        "Urban Highways",
        "Traffic Control Systems",
        "Mass Transit Projects",
      ],
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water & Environmental",
      description: "Water resources and environmental engineering",
      features: [
        "Water Supply Projects",
        "Sewerage Systems",
        "Water Treatment Plants",
        "Drainage Design",
        "Environmental Protection",
      ],
    },
  ]

  const projects = [
    {
      title: "Swiss International Hotel Abeokuta",
      description: "15 Storey Hotel Structure",
      value: "₦6.5 Billion",
      category: "Hospitality",
      status: "Completed",
    },
    {
      title: "Detached Duplex Units",
      description: "4 Units at Gudu GRA Lagos",
      value: "₦300 Million",
      category: "Residential",
      status: "Ongoing",
    },
    {
      title: "Soilless Farm Lab Hostel",
      description: "12 Blocks at Awowo Village",
      value: "₦850 Million",
      category: "Educational",
      status: "Completed",
    },
    {
      title: "Community Bridge",
      description: "Ibeju Lekki - Iba-Oloja Link",
      value: "₦750 Million",
      category: "Infrastructure",
      status: "Design Phase",
    },
    {
      title: "Lekki Free Zone Roads",
      description: "Road N5 & E6A Construction",
      value: "₦464 Million",
      category: "Infrastructure",
      status: "Completed",
    },
    {
      title: "Swiss Budget Hotel",
      description: "Office Complex Conversion",
      value: "₦5.2 Billion",
      category: "Hospitality",
      status: "Completed",
    },
  ]

  const teamMembers = [
    {
      name: "Engr. S.I.A. Edidi",
      position: "Managing Consultant/Director",
      credentials: "B.Eng Civil Engineering, COREN: R6610, NSE: 07462",
      description:
        "Former Head of Department at Lagos State Polytechnic with extensive experience in civil/structural engineering.",
    },
    {
      name: "Engr. M.A. Adigun",
      position: "Deputy Managing Director",
      credentials: "B.Eng FUTO, MSc Geotechnics UNILAG",
      description: "21+ years experience in structural and civil engineering. Member COREN, NSE.",
    },
    {
      name: "Engr. A.D. Onitilo",
      position: "Executive Director Engineering",
      credentials: "BSc Civil Engineering UNILAG",
      description: "25+ years experience in design and construction works. Member COREN, NSE.",
    },
    {
      name: "Engr. Y.O. Bankole",
      position: "Director, Mechanical/Electrical",
      credentials: "Mechanical/Agric Engineering ABU Zaria, MSc",
      description: "20+ years experience in mechanical engineering. Member COREN, NSE.",
    },
    {
      name: "Adeyemi Adebayo",
      position: "Director, Planning & Research",
      credentials: "HND Town & Regional Planning, Yabatech",
      description: "Registered Town Planner. Leads Project Evaluation Committee.",
    },
    {
      name: "Ms. R.T. Fatoki",
      position: "Director, Admin & Finance",
      credentials: "HND Accountancy, Chartered Accountant, ICAN",
      description: "Oversees accounting and finance functions with extensive auditing experience.",
    },
  ]


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-900">ENVOSTRUCTS</h1>
                <p className="text-xs text-gray-600">NIGERIA LIMITED</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors shadow ${
                      activeSection === item.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-900 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700">
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-20 mt-16"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ENVOSTRUCTS NIGERIA LIMITED</h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">Accredited Continent International Hotels</p>
            <p className="text-lg md:text-xl mb-8 opacity-80">Design/Construction Consultants & Contractors</p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Since 2008</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>60+ Projects Completed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Multi-Disciplinary Team</span>
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Envostructs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A multi-disciplinary design consultancy, construction and project management practice outfit, offering
              wide range of Engineering consultancy services across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be recognized as a pre-eminent African Design/Construction Consultant and Contractors brand,
                  providing superior solutions within our niche markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Our Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To create satisfactory customers base by offering value to clients, staff, environment and the
                  investors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Established in 2008 with over 60 completed projects including government institutions, commercial
                  enterprises, and private developments.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Company Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Share Capital</span>
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                    ₦11,000,000
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Staff Strength</span>
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                    20+ Professionals
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Bank Projects</span>
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                    10+ Completed
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Government Projects</span>
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                    4+ Completed
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Commercial Projects</span>
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                    15+ Completed
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Individual Projects</span>
                  <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                    30+ Completed
                  </Badge>
                </div>
              </div>
            </div>

            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl">Our Team Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Architects",
                    "Civil/Structural Engineers",
                    "Mechanical Engineers",
                    "Electrical Engineers",
                    "Quantity Surveyors",
                    "Auxiliary Staffs",
                    "Specialist Consultants",
                  ].map((role, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {role}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive engineering solutions from conception to completion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-6 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notable Projects</h2>
            <p className="text-xl text-gray-600">Some of our major completed and ongoing projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600">{project.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet our experienced professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">{member.credentials}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch for your next project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-600">
                      51, Akanro Street, Off Apapa-Oshodi Express Road,
                      <br />
                      by Ilasa Bustop, P.O. Box 2890 Yaba, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">
                      +234-08034770098
                      <br />
                      +234-08127744990
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                      envostructs@yahoo.co.uk
                      <br />
                      envostructs@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" name="fullName" placeholder="Your full name" required className="mt-1" />
                      {state?.errors?.fullName && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.fullName.join(", ")}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 xxx xxx xxxx"
                        required
                        className="mt-1"
                      />
                      {state?.errors?.phone && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.phone.join(", ")}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="mt-1"
                    />
                    {state?.errors?.email && (
                      <p className="text-red-500 text-sm mt-1">{state.errors.email.join(", ")}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="service">Service Required *</Label>
                    <Select name="service" required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="geotechnical">Geotechnical Services</SelectItem>
                        <SelectItem value="design">Design & Documentation</SelectItem>
                        <SelectItem value="construction">Construction Works</SelectItem>
                        <SelectItem value="project-management">Project Management</SelectItem>
                        <SelectItem value="highway">Highway Design</SelectItem>
                        <SelectItem value="water-environmental">Water & Environmental</SelectItem>
                      </SelectContent>
                      {state?.errors?.service && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.service.join(", ")}</p>
                      )}
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="projectDetails">Project Details *</Label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      required
                      className="mt-1"
                    />
                    {state?.errors?.projectDetails && (
                      <p className="text-red-500 text-sm mt-1">{state.errors.projectDetails.join(", ")}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg" disabled={isPending}>
                    {isPending ? "Sending Request..." : "Send Consultation Request"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {state?.message && (
                    <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
                      {state.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">ENVOSTRUCTS NIGERIA LIMITED</h3>
              <p className="text-gray-300 mb-6">
                Accredited Continent International Hotels Design/Construction Consultants & Contractors. Providing
                superior engineering solutions since 2008.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Geotechnical Services</li>
                <li>Design & Documentation</li>
                <li>Construction Works</li>
                <li>Project Management</li>
                <li>Highway Design</li>
                <li>Water & Environmental</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="hover:text-white transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Envostructs Nigeria Limited. All rights reserved. | Registered: June 2008 | RC Number: [Company
              Registration Number]
            </p>
          </div>
        </div>
         <WhatsAppPopup />
      </footer>
    </div>
   </>
  )
}
