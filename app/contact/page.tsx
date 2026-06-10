"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (response.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." })
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        toast({ title: "Error sending message", description: result.message || "Please try again or contact us directly.", variant: "destructive" })
      }
    } catch {
      toast({ title: "Error sending message", description: "Please try again or reach us on WhatsApp.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative text-white py-24 pt-32"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/lekki%20free%20zone.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Ready to start your next project? Our team of experts is here to help.
          </p>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="bg-[#003366] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
            <a href="tel:+2348034770098" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
              <Phone className="w-4 h-4 text-amber-400" />
              +234-08034770098
            </a>
            <a href="mailto:envostructs@gmail.com" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
              <Mail className="w-4 h-4 text-amber-400" />
              envostructs@gmail.com
            </a>
            <a href="https://wa.me/2348034770098" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
              <MessageCircle className="w-4 h-4 text-green-400" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact form — wider column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-8">Fill in the form and we'll respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your@email.com" className="h-11" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+234 xxx xxx xxxx" className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Project inquiry, quote request..." className="h-11" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required placeholder="Describe your project or inquiry in detail..." rows={6} className="resize-none" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Address card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </span>
                  Office Address
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  51, Akanro Street<br />
                  Off Apapa-Oshodi Express Road<br />
                  Ilasa Bustop, Yaba<br />
                  <span className="font-semibold text-gray-800">Lagos, Nigeria</span>
                </p>
              </div>

              {/* Phone card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </span>
                  Phone Numbers
                </h3>
                <div className="space-y-2">
                  <a href="tel:+2348034770098" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors font-medium">
                    +234-080-3477-0098
                  </a>
                  <a href="tel:+2348127744990" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors font-medium">
                    +234-081-2774-4990
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-green-600" />
                  </span>
                  Email Addresses
                </h3>
                <div className="space-y-2">
                  <a href="mailto:envostructs@gmail.com" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
                    envostructs@gmail.com
                  </a>
                  <a href="mailto:envostructs@yahoo.co.uk" className="block text-gray-700 hover:text-amber-600 transition-colors font-medium">
                    envostructs@yahoo.co.uk
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </span>
                  Business Hours
                </h3>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-gray-800">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-gray-800">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348034770098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl p-5 transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 pt-6 pb-2">
              <h2 className="text-xl font-bold text-gray-900">Find Our Office</h2>
              <p className="text-gray-500 text-sm">51 Akanro Street, Ilasa, Lagos</p>
            </div>
            <div className="h-80">
              <iframe
                src="https://maps.google.com/maps?q=Akanro+Street+Ilasa+Lagos+Nigeria&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Envostructs Office — Akanro Street, Ilasa, Lagos"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why contact us strip */}
      <section className="bg-[#003366] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Work With Us?</h2>
            <p className="text-blue-200">Trusted by clients across Nigeria since 2008</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "16+ Years", sub: "Engineering Experience" },
              { title: "60+ Projects", sub: "Successfully Delivered" },
              { title: "COREN Registered", sub: "Certified Professionals" },
              { title: "24hr Response", sub: "To All Inquiries" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-amber-400" />
                <p className="text-xl font-bold text-amber-400">{item.title}</p>
                <p className="text-blue-200 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
