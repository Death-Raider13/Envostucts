"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"

const FAQS = [
  {
    q: "What is Envostructs' role in the LASBCA Certified Accreditors Program (CAP)?",
    a: "Envostructs Nigeria Limited is an accredited engineering partner working closely with the Lagos State Building Control Agency (LASBCA) under the Certified Accreditors Program (CAP / CAPS), operating from our Isolo/Okota district base in Lagos State. We inspect, monitor, and conduct Non-Destructive Testing (NDT) structural stability audits on abandoned, uncompleted, or distressed buildings to ensure public safety and statutory compliance.",
  },
  {
    q: "What types of engineering services does Envostructs provide?",
    a: "Envostructs provides six core services: Geotechnical & Subsoil Investigation (including Bored & Micropile Foundations), Architectural & Structural Design, Turnkey Building & Civil Construction Works, Project Management & LASBCA-CAP Audits, Highway & Airfield Pavement Engineering, and Water & Environmental Engineering.",
  },
  {
    q: "Is Envostructs registered and certified to operate in Nigeria?",
    a: "Yes. Envostructs Nigeria Limited is registered with the Corporate Affairs Commission (RC: 694337). Our principal engineers are licensed by COREN (R6610) and registered with the Nigerian Society of Engineers (NSE: 07462), with over 20+ years of industry experience and 100+ completed projects.",
  },
  {
    q: "What is the typical timeline for a geotechnical site investigation?",
    a: "A standard geotechnical investigation typically takes 10–14 working days from site mobilization to final COREN-stamped report delivery (ESN/SI series), depending on the number of percussion boreholes, 20-Ton Dutch CPT soundings, and laboratory consolidation/triaxial tests required.",
  },
  {
    q: "Can Envostructs handle projects outside Lagos?",
    a: "Absolutely. We execute projects nationwide across Ogun State, Oyo State, Ondo State, Benue State, Abuja FCT, and South-South corridors. Notable commissions outside Lagos include the ₦12.59 Billion Emuren–Ipele Road Dualization in Ondo State, Continent Hotel Remodelling in Akure, and the 12-block Soilless Farm Lab Hostel (₦850M) in Abeokuta.",
  },
  {
    q: "How do you price your services and projects?",
    a: "You can generate an instant preliminary scope and Bill of Quantities (BOQ) using our Interactive Scope Estimator on the homepage, or send us your site coordinates and architectural drawings for a formal fixed-fee or milestone-based commercial proposal.",
  },
  {
    q: "Do you handle both design and construction, or only one?",
    a: "Envostructs is a full-service firm handling both design consultancy and turnkey construction. We provide standalone geotechnical/structural consultancy, construction-only execution, or integrated EPC Design-and-Build packages with single-point accountability.",
  },
  {
    q: "What quality and safety standards do you follow?",
    a: "We adhere strictly to Eurocodes (EC2, EC3, EC7), British Standards (BS 5930, BS 1377, BS 8004, BS 8110, BS EN 12504), Federal Ministry of Works & Housing (FMWH) Highway Specifications, and LASBCA statutory building control regulations.",
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/dualization%20of%20ipele.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Common Questions</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Frequently Asked
            <br />
            <span className="text-amber-400">Questions</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to know about working with Envostructs Nigeria Limited (RC: 694337).
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
                    We&apos;ve answered the most common questions about our geotechnical investigations, LASBCA-CAP
                    structural audits, piling works, and construction services.
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
                      WhatsApp Engineering Desk
                    </a>
                  </div>
                  <div className="mt-8">
                    <Link href="/#estimator">
                      <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-full px-6 hover:scale-105 transition-all duration-300">
                        Launch BOQ Estimator <ArrowRight className="ml-2 h-4 w-4" />
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
    </div>
  )
}
