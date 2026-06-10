"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"

const FAQS = [
  {
    q: "What types of engineering services does Envostructs provide?",
    a: "Envostructs provides six core services: Geotechnical & Geophysical Investigation, Design & Documentation, Construction Works, Project Management, Highway Design, and Water & Environmental Engineering. We also offer specialized services including Inspection & Testing, Structural Appraisal, and Engineering Services in Buildings.",
  },
  {
    q: "Is Envostructs registered and certified to operate in Nigeria?",
    a: "Yes. Envostructs Nigeria Limited is fully registered with the Corporate Affairs Commission (CAC) with RC Number 694337. All our engineers are registered with COREN (Council for the Regulation of Engineering in Nigeria) and the Nigerian Society of Engineers (NSE). We have been operating since June 2008.",
  },
  {
    q: "What is the typical timeline for a geotechnical site investigation?",
    a: "A standard geotechnical investigation typically takes 2–4 weeks from site mobilization to final report delivery, depending on the site size, number of boreholes, and complexity of the ground conditions. Emergency turnarounds can be arranged where required. We provide detailed investigation reports with engineering recommendations.",
  },
  {
    q: "Can Envostructs handle projects outside Lagos?",
    a: "Absolutely. We have successfully completed projects across Nigeria including Ogun State, Oyo State, Ondo State, Benue State, and multiple other locations. Our team mobilizes to site as required. Notable out-of-Lagos projects include the Swiss International Hotel Abeokuta, Emuren–Ipele Road Dualization in Ondo State, and the Swiss Spirit Hotel in Makurdi.",
  },
  {
    q: "How do you price your services and projects?",
    a: "Pricing depends on project scope, complexity, location, and timeline. We provide detailed Bills of Quantities (BOQs) and cost estimates during the design phase. For consultancy services, we follow professional fee scales set by COREN and relevant professional bodies. We are transparent about all costs — no hidden charges. Contact us for a free initial assessment.",
  },
  {
    q: "Do you handle both design and construction, or only one?",
    a: "Envostructs is a full-service firm handling both design and construction. We can provide design-only services, construction-only services (with client-provided designs), or full design-and-build packages. Many clients find the integrated approach most efficient as it reduces coordination challenges and creates single-point accountability.",
  },
  {
    q: "What quality and safety standards do you follow?",
    a: "We adhere to Nigerian Building Code standards, British Standards (BS), and international engineering codes applicable to our projects. Our site teams conduct daily safety briefings and maintain detailed QA/QC records throughout construction. We have maintained a zero major incident record across all our projects.",
  },
  {
    q: "How do I get a quote or start a project with Envostructs?",
    a: "The easiest way is to call us at +234-080-3477-0098 or send us a WhatsApp message for a quick response. You can also fill out the contact form on our Contact page or email envostructs@gmail.com. For complex projects, we prefer an initial site visit and briefing session to fully understand your requirements before preparing a detailed proposal.",
  },
  {
    q: "Do you work with government agencies and large corporations?",
    a: "Yes. We have extensive experience working with government ministries and agencies including Lagos State Ministry of Works, the Nigerian Airport Authority, and World Bank-funded projects. Our corporate client list includes First Bank Nigeria, Diamond Bank (now Access Bank), Lekki Free Zone Development Company, and Swiss International Hotels.",
  },
  {
    q: "What is Envostructs' largest completed project to date?",
    a: "Our largest completed project by contract value is the Swiss International Hotel Abeokuta — a 15-storey luxury hotel structure valued at ₦6.5 Billion, completed in 2023. Our largest ongoing consultancy assignment is the Emuren–Ipele Road Dualization in Ondo State, valued at ₦12.59 Billion covering 14.85 km of dual carriageway.",
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/dualization%20of%20ipele.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Common Questions</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Frequently Asked<br />
            <span className="text-amber-400">Questions</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to know about working with Envostructs Nigeria Limited.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Left intro */}
            <div className="lg:col-span-2 lg:sticky top-28">
              <Reveal direction="right">
                <div>
                  <span className="section-label">FAQ</span>
                  <h2 className="section-title mb-5">Have Questions?</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We've answered the most common questions about our services, process, certifications, and how to work with us. Can't find what you're looking for? Reach out directly.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+2348034770098"
                      className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors font-medium"
                    >
                      <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-amber-600" />
                      </div>
                      +234-080-3477-0098
                    </a>
                    <a
                      href="https://wa.me/2348034770098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors font-medium"
                    >
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      WhatsApp Us
                    </a>
                  </div>
                  <div className="mt-8">
                    <Link href="/contact">
                      <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-6 hover:scale-105 transition-all duration-300">
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-3 space-y-3">
              {FAQS.map((faq, i) => (
                <Reveal key={i} direction="left" delay={i * 50}>
                  <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-amber-200 transition-colors">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-gray-900 text-base leading-snug">{faq.q}</span>
                      <ChevronDown
                        className="w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300"
                        style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: open === i ? "500px" : "0px" }}
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Still Have Questions?</span>
            <h2 className="section-title-light mb-5">Let's Talk About Your Project</h2>
            <p className="text-white/50 text-lg mb-10">Our team is available Monday–Friday 8am–6pm and Saturday 9am–2pm. We respond to all inquiries within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                  Send Us a Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+2348034770098">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-full px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
