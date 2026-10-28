"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  submitInquiryToEnvostructs,
  buildMailtoUrl,
  ENVOSTRUCTS_EMAIL,
} from "@/lib/submit-inquiry"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  CheckCircle2,
  Send,
  ShieldCheck,
} from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedState, setSubmittedState] = useState<{
    submitted: boolean
    mailtoUrl: string
  }>({ submitted: false, mailtoUrl: "" })
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    clientType: "Direct Corporate / Private Developer",
    subject: "Geotechnical Services",
    message: "",
  })
  const { toast } = useToast()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const payload = {
      fullName: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      clientType: formData.clientType,
      service: formData.subject,
      projectDetails: formData.message,
    }

    try {
      const result = await submitInquiryToEnvostructs(payload)

      if (!result.deliveredOnline) {
        window.location.href = result.mailtoUrl
      }

      setSubmittedState({
        submitted: true,
        mailtoUrl: result.mailtoUrl,
      })

      toast({
        title: "Message Dispatched!",
        description: `Your inquiry has been connected to ${ENVOSTRUCTS_EMAIL}. We will respond within 24 hours.`,
      })
    } catch {
      const fallbackUrl = buildMailtoUrl(payload)
      window.location.href = fallbackUrl
      setSubmittedState({
        submitted: true,
        mailtoUrl: fallbackUrl,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppContact = () => {
    const text = `*TECHNICAL PROJECT INQUIRY — ENVOSTRUCTS NIGERIA LTD (RC: 694337)*
-----------------------------------------
*Name:* ${formData.name || "Prospective Client"}
*Company:* ${formData.company || "N/A"}
*Client Category:* ${formData.clientType}
*Location:* ${formData.country || "Nigeria"}
*Phone:* ${formData.phone || "N/A"}
*Email:* ${formData.email || "N/A"}
*Service / Subject:* ${formData.subject}

*Project Scope / Message:*
${formData.message || "Please contact me regarding an engineering consultation."}`

    window.open(
      `https://wa.me/2348034770098?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative text-white py-24 pt-32"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/lekki%20free%20zone.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch • RC: 694337
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Our Engineering Desk</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Ready to start your next geotechnical, structural, LASBCA-CAP audit, or construction project? All online
            inquiries connect directly to <strong>{ENVOSTRUCTS_EMAIL}</strong>.
          </p>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="bg-[#003366] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
            <a
              href="tel:+2348034770098"
              className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              +234-08127744990, +234-08034770098, +2347120175574
            </a>
            <a
              href={`mailto:${ENVOSTRUCTS_EMAIL}`}
              className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors font-semibold"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              {ENVOSTRUCTS_EMAIL}
            </a>
            <a
              href="https://wa.me/2348034770098"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors"
            >
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
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="bg-[#003366] px-8 py-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block">
                    Direct Inbox: {ENVOSTRUCTS_EMAIL}
                  </span>
                  <h2 className="text-2xl font-black text-white mt-0.5">Send Us an Official Project Inquiry</h2>
                  <p className="text-blue-200 text-sm mt-1">
                    Fill in the form below and our COREN-certified engineers will respond within 24 hours.
                  </p>
                </div>

                <div className="p-8 md:p-10">
                  {submittedState.submitted ? (
                    <div className="py-12 px-6 text-center bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-5">
                      <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-2">
                          Connected to {ENVOSTRUCTS_EMAIL}
                        </span>
                        <h3 className="text-2xl font-black text-gray-900">Inquiry Received!</h3>
                        <p className="text-gray-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                          Thank you for contacting <strong>Envostructs Nigeria Limited</strong>. Your message has been
                          routed to <strong>{ENVOSTRUCTS_EMAIL}</strong> and our engineering desk will respond within 24
                          hours.
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 pt-2">
                        <Button
                          type="button"
                          onClick={handleWhatsAppContact}
                          className="text-white font-extrabold rounded-xl px-6 shadow-md"
                          style={{ backgroundColor: "#25D366" }}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Also Send via WhatsApp for Instant Reply
                        </Button>
                        <a
                          href={submittedState.mailtoUrl}
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white text-xs font-bold transition-colors"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Open Direct Email ({ENVOSTRUCTS_EMAIL})
                        </a>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmittedState({ submitted: false, mailtoUrl: "" })
                            setFormData({
                              name: "",
                              company: "",
                              email: "",
                              phone: "",
                              country: "",
                              clientType: "Direct Corporate / Private Developer",
                              subject: "Geotechnical Services",
                              message: "",
                            })
                          }}
                          className="text-xs font-bold text-gray-500 hover:text-[#003366] underline"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="company"
                            className="text-gray-700 font-bold text-xs uppercase tracking-wider"
                          >
                            Company / Organization
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company, Agency or Private"
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your@email.com"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="phone" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                            Phone / WhatsApp *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+234 xxx xxx xxxx"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="country"
                            className="text-gray-700 font-bold text-xs uppercase tracking-wider"
                          >
                            Site / Client Location
                          </Label>
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="Lagos, Abuja, UK, USA..."
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="clientType"
                            className="text-gray-700 font-bold text-xs uppercase tracking-wider"
                          >
                            Client Category
                          </Label>
                          <select
                            id="clientType"
                            name="clientType"
                            value={formData.clientType}
                            onChange={handleInputChange}
                            className="w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                          >
                            <option value="Direct Corporate / Private Developer">
                              Direct Corporate / Private Developer
                            </option>
                            <option value="International EPC / Multinational Contractor">
                              International EPC / Multinational Contractor
                            </option>
                            <option value="Diaspora Investor / Project Owner">
                              Diaspora Investor / Project Owner
                            </option>
                            <option value="Government Ministry / Agency">Government Ministry / Agency</option>
                            <option value="LASBCA-CAP Structural Audit / Compliance">
                              LASBCA-CAP Structural Audit / Compliance
                            </option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="subject"
                            className="text-gray-700 font-bold text-xs uppercase tracking-wider"
                          >
                            Service Required *
                          </Label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                          >
                            <option value="Geotechnical Services">
                              Geotechnical Investigation & Pile Foundations
                            </option>
                            <option value="Design & Documentation">
                              Architectural & Structural Engineering Design
                            </option>
                            <option value="Construction Works">Turnkey Building & Civil Construction Works</option>
                            <option value="LASBCA-CAP Structural Audit / Project Management">
                              LASBCA-CAP Structural Audit / NDT / Project Management
                            </option>
                            <option value="Highway & Airfield Pavement Design">
                              Highway, Bridge & Airfield Pavement Engineering
                            </option>
                            <option value="Water & Environmental">
                              Water Resources, Jetty & Environmental Engineering
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-gray-700 font-bold text-xs uppercase tracking-wider">
                          Project Scope & Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Describe your project site, number of storeys, borehole/piling scope, or LASBCA-CAP audit requirements..."
                          rows={6}
                          className="resize-none"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        <Button
                          type="submit"
                          className="w-full h-12 bg-[#003366] hover:bg-[#002244] text-white font-extrabold rounded-xl shadow-lg"
                          disabled={isSubmitting}
                        >
                          <Send className="mr-2 h-4 w-4 text-amber-400" />
                          {isSubmitting ? `Sending to ${ENVOSTRUCTS_EMAIL}...` : "Submit Official Inquiry"}
                        </Button>

                        <Button
                          type="button"
                          onClick={handleWhatsAppContact}
                          className="w-full h-12 text-white font-extrabold rounded-xl shadow-lg hover:opacity-95"
                          style={{ backgroundColor: "#25D366" }}
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Send via WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
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
                  Head Office Address
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  51, Akanro Street
                  <br />
                  Off Apapa-Oshodi Express Road
                  <br />
                  Ilasa Bustop, P.O. Box 2890 Yaba
                  <br />
                  <span className="font-semibold text-gray-800">Lagos, Nigeria</span>
                </p>
              </div>

              {/* LASBCA-CAP card */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-sm p-6">
                <h3 className="text-base font-black text-gray-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#003366]" />
                  LASBCA-CAP District Office
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Operating in the <strong>Isolo / Okota District</strong> under the Lagos State Building Control Agency
                  (LASBCA) <strong>Certified Accreditors Program (CAP)</strong> for structural stability monitoring.
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
                <div className="space-y-2 text-sm">
                  <a
                    href="tel:+2348034770098"
                    className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
                  >
                    +234-080-3477-0098
                  </a>
                  <a
                    href="tel:+2348127744990"
                    className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
                  >
                    +234-081-2774-4990
                  </a>
                  <a
                    href="tel:+2347120175574"
                    className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors font-medium"
                  >
                    +234-712-017-5574
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
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${ENVOSTRUCTS_EMAIL}`}
                    className="block text-[#003366] hover:text-amber-600 transition-colors font-bold"
                  >
                    {ENVOSTRUCTS_EMAIL} (Primary)
                  </a>
                  <a
                    href="mailto:envostructs@yahoo.co.uk"
                    className="block text-gray-700 hover:text-amber-600 transition-colors font-medium"
                  >
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
                    <span className="font-medium text-gray-800">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-gray-800">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>
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
                src="https://maps.google.com/maps?q=51+Akanro+Street+Ilasa+Lagos+Nigeria&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Envostructs Office — 51 Akanro Street, Ilasa, Lagos"
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
            <p className="text-blue-200">Trusted by clients across Nigeria for over 20 years</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "20+ Years", sub: "Engineering Experience" },
              { title: "100+ Projects", sub: "Successfully Delivered" },
              { title: "COREN & LASBCA-CAP", sub: "Certified Professionals" },
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
