import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  GraduationCap,
  Award,
  ArrowRight,
  Building,
  Cog,
  Calculator,
  PenTool,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react"

export const metadata = {
  title: "Careers - Join Envostructs Nigeria Limited",
  description:
    "Explore career opportunities at Envostructs Nigeria Limited. Join our team of engineering professionals and build your career with us.",
}

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Civil/Structural Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₦300,000 - ₦500,000",
      posted: "2 days ago",
      description:
        "We are seeking an experienced Civil/Structural Engineer to join our design team. The ideal candidate will have extensive experience in structural design, project management, and construction supervision.",
      requirements: [
        "B.Eng/B.Sc in Civil Engineering",
        "5-8 years of relevant experience",
        "COREN registration required",
        "Proficiency in AutoCAD, SAP2000, ETABS",
        "Strong project management skills",
        "Experience with high-rise buildings",
      ],
      responsibilities: [
        "Structural design and analysis",
        "Project supervision and management",
        "Client liaison and consultation",
        "Preparation of technical reports",
        "Mentoring junior engineers",
        "Quality assurance and control",
      ],
      icon: <Building className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Geotechnical Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₦250,000 - ₦400,000",
      posted: "1 week ago",
      description:
        "Join our geotechnical team to conduct soil investigations, foundation analysis, and provide geotechnical consulting services for various construction projects.",
      requirements: [
        "B.Eng/B.Sc in Civil Engineering or Geology",
        "3-5 years in geotechnical engineering",
        "Experience with soil investigation",
        "Knowledge of foundation design",
        "Laboratory testing experience",
        "Report writing skills",
      ],
      responsibilities: [
        "Conduct geotechnical investigations",
        "Soil and rock testing",
        "Foundation design recommendations",
        "Site supervision during drilling",
        "Prepare geotechnical reports",
        "Client consultation on foundation issues",
      ],
      icon: <Cog className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Project Manager",
      department: "Project Management",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "7-10 years",
      salary: "₦400,000 - ₦600,000",
      posted: "3 days ago",
      description:
        "Lead and manage multiple construction projects from inception to completion. Ensure projects are delivered on time, within budget, and to the highest quality standards.",
      requirements: [
        "B.Eng/B.Sc in Engineering or related field",
        "7-10 years project management experience",
        "PMP certification preferred",
        "Strong leadership and communication skills",
        "Experience with large-scale projects",
        "Knowledge of construction contracts",
      ],
      responsibilities: [
        "Overall project planning and execution",
        "Budget management and cost control",
        "Team leadership and coordination",
        "Client relationship management",
        "Risk assessment and mitigation",
        "Quality assurance oversight",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Quantity Surveyor",
      department: "Commercial",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₦280,000 - ₦450,000",
      posted: "5 days ago",
      description:
        "Manage all aspects of the contractual and financial side of construction projects. Prepare cost estimates, manage budgets, and ensure value for money.",
      requirements: [
        "B.Sc in Quantity Surveying",
        "4-6 years relevant experience",
        "NIQS membership preferred",
        "Proficiency in QS software",
        "Strong analytical skills",
        "Knowledge of construction contracts",
      ],
      responsibilities: [
        "Prepare cost estimates and budgets",
        "Manage project finances",
        "Conduct feasibility studies",
        "Prepare tender documents",
        "Contract administration",
        "Value engineering analysis",
      ],
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Architect",
      department: "Design",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₦250,000 - ₦400,000",
      posted: "1 week ago",
      description:
        "Create innovative architectural designs for various building types. Work closely with engineering teams to ensure design feasibility and client satisfaction.",
      requirements: [
        "B.Arch or equivalent",
        "3-6 years architectural experience",
        "ARCON registration preferred",
        "Proficiency in AutoCAD, Revit, SketchUp",
        "Strong design and visualization skills",
        "Knowledge of building codes",
      ],
      responsibilities: [
        "Architectural design and planning",
        "Prepare architectural drawings",
        "Client consultation and presentation",
        "Coordinate with engineering teams",
        "Site supervision and inspection",
        "Design development and documentation",
      ],
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Graduate Engineer Trainee",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₦150,000 - ₦250,000",
      posted: "2 weeks ago",
      description:
        "Join our graduate trainee program and kickstart your engineering career. Receive mentorship and hands-on experience across various engineering disciplines.",
      requirements: [
        "B.Eng/B.Sc in Engineering (Civil, Mechanical, Electrical)",
        "Fresh graduate or 0-2 years experience",
        "Strong academic record",
        "Willingness to learn and adapt",
        "Good communication skills",
        "Basic computer skills",
      ],
      responsibilities: [
        "Assist senior engineers in design work",
        "Participate in site visits and inspections",
        "Prepare technical drawings and reports",
        "Learn company procedures and standards",
        "Support project teams as required",
        "Attend training programs and workshops",
      ],
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Market-competitive compensation packages with performance bonuses",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities, training programs, and conference attendance",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health insurance coverage for employees and their families",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Career Growth",
      description: "Clear career progression paths with opportunities for advancement",
      icon: <ArrowRight className="w-8 h-8" />,
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous leave policies",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Team Environment",
      description: "Collaborative and supportive work environment with experienced professionals",
      icon: <Users className="w-8 h-8" />,
    },
  ]

  const companyValues = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Teamwork",
      description: "We believe in the power of collaboration and mutual support",
      icon: <Users className="w-6 h-6" />,
    },
  ]

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800"
      case "Part-time":
        return "bg-blue-100 text-blue-800"
      case "Contract":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Build your career with Nigeria's leading engineering consultancy. We're looking for talented professionals
              to join our growing team.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
                20+ Team Members
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
                16+ Years Experience
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-xl text-gray-600">Explore exciting career opportunities with us</p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white">
                        {job.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </Badge>
                          <Badge variant="outline" className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </Badge>
                          <Badge className={getJobTypeColor(job.type)}>{job.type}</Badge>
                        </div>
                        <CardDescription className="text-base">{job.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600 mb-1">{job.salary}</div>
                      <div className="text-sm text-gray-500">{job.posted}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">Comprehensive benefits and a supportive work environment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
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
            <p className="text-xl text-gray-600">The principles that guide our team and culture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">How to apply for a position with us</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Send your CV and cover letter to our HR department",
              },
              {
                step: "02",
                title: "Initial Review",
                description: "Our team reviews your application and qualifications",
              },
              {
                step: "03",
                title: "Interview Process",
                description: "Technical and HR interviews with our team",
              },
              {
                step: "04",
                title: "Job Offer",
                description: "Successful candidates receive a formal job offer",
              },
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

      {/* Contact HR */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-xl mb-8 opacity-90">
                Don't see a position that matches your skills? Send us your CV anyway - we're always looking for
                talented professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Mail className="mr-2 h-5 w-5" />
                  Email: hr@envostructs.com
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +234-08034770098
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
