"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, Building, ArrowRight, Send, CheckCircle } from "lucide-react"
import { useActionState } from "react"
import { submitContactForm } from "../actions"

export default function ContactPage() {
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

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      details: [
        "51, Akanro Street, Off Apapa-Oshodi Express Road,",
        "by Ilasa Bustop, P.O. Box 2890 Yaba, Lagos, Nigeria",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+234-08034770098", "+234-08127744990"],
      color: "from-green-600 to-green-700",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["envostructs@yahoo.co.uk", "envostructs@gmail.com"],
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      color: "from-orange-600 to-orange-700",
    },
  ]

  const bankingPartners = [
    {
      bank: "FCMB",
      branch: "Ojuelegba, Lagos",
      account: "1455147011",
    },
    {
      bank: "Zenith Bank",
      branch: "Ojuelegba, Lagos",
      account: "1013653955",
    },
    {
      bank: "ECOBANK Plc",
      branch: "33/35 Lagos Road, Epe",
      account: "5693004488",
    },
  ]

  const services = [
    "Geotechnical Services",
    "Design & Documentation",
    "Construction Works",
    "Project Management",
    "Highway Design",
    "Water & Environmental",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ready to start your next engineering project? Get in touch with our expert team
            </p>
            <div className="flex justify-center">
              <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free Consultation Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white`}
                  >
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl">
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
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {state?.errors?.service && (
                      <p className="text-red-500 text-sm mt-1">{state.errors.service.join(", ")}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="projectDetails">Project Details *</Label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={4}
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      required
                      className="mt-1"
                    />
                    {state?.errors?.projectDetails && (
                      <p className="text-red-500 text-sm mt-1">{state.errors.projectDetails.join(", ")}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg" disabled={isPending}>
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Consultation Request
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {state?.message && (
                    <div
                      className={`mt-4 p-4 rounded-lg text-center ${
                        state.success
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {state.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Envostructs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "16+ years of proven experience",
                      "60+ successful projects completed",
                      "Multi-disciplinary team of experts",
                      "Comprehensive engineering solutions",
                      "Quality assurance and control",
                      "Competitive pricing and timely delivery",
                    ].map((reason, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Banking Partners */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Building className="w-6 h-6 mr-2" />
                    Banking Partners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bankingPartners.map((bank, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold text-gray-900">{bank.bank}</h4>
                        <p className="text-gray-600 text-sm">{bank.branch}</p>
                        <p className="text-blue-600 font-mono text-sm">Account: {bank.account}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Advisors */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Professional Advisors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Auditor/Tax Consultants</h4>
                      <p className="text-gray-600 text-sm">
                        Ayinde Babatunde & Co (Chartered Accountants)
                        <br />
                        9, Koseh Street Apongbon, Lagos, Nigeria
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal Advisor</h4>
                      <p className="text-gray-600 text-sm">
                        Barr. Samuel Etaifo Esq
                        <br />
                        12, Simpson Street, Lagos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Lagos for easy accessibility</p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2847982842845!2d3.3792057!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0x4f8b8b8b8b8b8b8b!2sAkanro%20Street%2C%20Yaba%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1703123456789!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Envostructs Nigeria Limited Office Location"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-sm">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Our Office</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    51, Akanro Street, Off Apapa-Oshodi Express Road,
                    <br />
                    by Ilasa Bustop, Yaba, Lagos, Nigeria
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 bg-transparent"
                    onClick={() =>
                      window.open("https://maps.google.com/?q=51+Akanro+Street+Yaba+Lagos+Nigeria", "_blank")
                    }
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - contact us today and let's bring your engineering vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +234-08034770098
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
