"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/Reveal"

const FAQS = [
  {
    q: "What is Envostructs' role in the LASBCA Certified Accreditors Program (CAP)?",
    a: "Envostructs Nigeria Limited is an accredited engineering partner with the Lagos State Building Control Agency (LASBCA) under the Certified Accreditors Program (CAP), operating from our Isolo/Okota district base. We monitor stage-by-stage construction compliance and conduct non-destructive structural stability assessments (NDT) on abandoned, uncompleted, or distressed buildings to prevent collapse and ensure public safety.",
  },
  {
    q: "Do you partner with multinational EPC contractors, banks, and government ministries?",
    a: "Yes. We have delivered over 20 government infrastructure projects and 15+ commercial bank branch projects. Our portfolio includes World Bank-funded road supervision (Mile 12–Ikorodu), FAAN international airport runway resurfacing (MMIA Lagos), the ₦12.59B Emuren–Ipele Road Dualization in Ondo State, and Lekki Free Zone internal roads.",
  },
  {
    q: "How do you support Diaspora clients building property in Nigeria from the UK, US, Canada, or Europe?",
    a: "We provide complete remote transparency and single-point engineering accountability. Every phase — from subsoil investigation and foundation piling to structural frame casting and finishing — is documented with GPS-stamped photo/video logs, laboratory concrete cube/soil test certificates, and live Zoom/Teams walkthroughs aligned with your timezone.",
  },
  {
    q: "How long does a geotechnical subsoil investigation take?",
    a: "A standard residential or commercial plot investigation takes 2–5 working days on-site for percussion borehole drilling and Dutch Cone Penetrometer (CPT) soundings, followed by BS 1377 laboratory analysis and delivery of a COREN-sealed engineering report within 7–14 working days.",
  },
  {
    q: "Can Envostructs handle both architectural/structural design and full construction?",
    a: "Yes. Our 100+ multidisciplinary staff strength comprises COREN-licensed Civil/Structural Engineers, Mechanical & Electrical (MEP) Engineers, NIA/ARCON Registered Architects, Town Planners, and Quantity Surveyors. We execute design-only consultancy, resident supervision, or turnkey design-and-build construction.",
  },
  {
    q: "Do you execute projects outside Lagos State?",
    a: "Absolutely. While our head office is in Lagos, we mobilize nationwide and have completed flagship projects in Ogun State (Abeokuta, Arepo, Imeko), Ondo State (Owo, Ipele, Akure), Benue State (Makurdi), Oyo State, Edo State, Enugu State, Rivers State, and Abuja (FCT).",
  },
  {
    q: "What foundation systems does Envostructs design and install?",
    a: "Depending on the subsoil stratigraphy and structural loads, we design and construct isolated pad/strip foundations, reinforced concrete cellular raft foundations, bored cast-in-place piles, caisson piles, and 250mm+ micropiles (as deployed on NASFAT Isolo, Ifako-Gbagada, and Surulere projects).",
  },
  {
    q: "Can I request a pre-purchase structural integrity audit before buying an existing building?",
    a: "Yes. Using Non-Destructive Testing (Schmidt Rebound Hammer, Ultrasonic Pulse Velocity, and Rebar Ferroscan) alongside foundation exposure pits, our engineers evaluate the actual concrete strength and structural stability of existing buildings or unfinished carcasses before you invest or remodel.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <Reveal direction="right" className="lg:col-span-2">
            <span className="section-label">FAQ</span>
            <h2 className="section-title mb-4">Common Questions Answered</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Key technical and commercial information for government procurement teams, corporate
              developers, diaspora investors, and private property owners.
            </p>

            {/* Quick contact card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#003366]/10 rounded-xl flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5 text-[#003366]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Still have questions?</p>
                  <p className="text-gray-400 text-xs">Direct Engineering Desk (WAT / UTC+1)</p>
                </div>
              </div>
              <a
                href="https://wa.me/2348034770098?text=Hello%20Envostructs%20Nigeria%20Limited%2C%20I%20have%20a%20technical%20engineering%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </a>
              <a
                href="tel:+2348034770098"
                className="flex items-center justify-center gap-2 w-full border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold py-3 rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                Call: +234 803 477 0098
              </a>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal direction="left" className="lg:col-span-3 space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-[#003366]/30 shadow-md bg-white"
                      : "border-gray-100 hover:border-gray-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <span
                      className={`font-bold text-sm sm:text-base leading-snug transition-colors ${
                        isOpen ? "text-[#003366]" : "text-gray-900"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 mt-0.5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-amber-500" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 border-t border-gray-50">
                      <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
