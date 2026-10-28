"use client"

import { Reveal } from "@/components/Reveal"

const TIMELINE_EVENTS = [
  {
    year: "2008",
    title: "Company Founded & CAC Incorporation",
    desc: "Envostructs Nigeria Limited established in Lagos in June 2008 (CAC RC: 694337), led by Managing Consultant Engr. S.I.A. Edidi (MSc UNILAG, COREN R6610) with a mission to deliver pre-eminent African design, geotechnical, and construction excellence.",
    highlight: true,
  },
  {
    year: "2012",
    title: "World Bank & Institutional Infrastructure",
    desc: "Executed quality control, geotechnical, and safety supervision on the World Bank-funded Mile 12 – Ikorodu Road project and multi-site borehole/subsoil campaigns across Ikoyi, Lekki, and Ikorodu.",
    highlight: false,
  },
  {
    year: "2016",
    title: "FAAN International Airport Runway & Banking Programme",
    desc: "Completed tarmac runway resurfacing at Murtala Muhammed International Airport (MMIA) for FAAN and structural engineering programmes for commercial bank branches across Nigeria.",
    highlight: true,
  },
  {
    year: "2018",
    title: "National Arts Theatre Multi-Car Parks",
    desc: "Designed and supervised multi-storey car parks (500+ vehicles) and arterial access roads at the iconic National Arts Theatre, Iganmu, Lagos.",
    highlight: false,
  },
  {
    year: "2019",
    title: "Lekki Free Zone Industrial Road Corridors",
    desc: "Delivered heavy-duty pavement design and construction for Roads N5 & E6A (₦464M) within the 16,000-hectare Lekki Free Trade Zone for LFZDC.",
    highlight: true,
  },
  {
    year: "2022",
    title: "Soilless Farm Lab 12-Block Hostel & NASFAT Complex",
    desc: "Completed the ₦850M 12-block agricultural research hostel at Awowo, Abeokuta, alongside bored pile foundations and construction of the NASFAT Central Mosque at Isolo.",
    highlight: false,
  },
  {
    year: "2024",
    title: "₦12.59B Emuren–Ipele Road Dualization & Continent Hotel",
    desc: "Commenced resident engineering consultancy on the 14.85 km Emuren–Ipele Road Dualization in Ondo State (₦12.59B) and completed the full remodelling of Continent Hotel Akure (₦1.2B).",
    highlight: true,
  },
  {
    year: "2025",
    title: "The New Onilegbale Palace & LASBCA-CAP Partnership",
    desc: "Handed over The New Onilegbale Palace in Isale Eko, Lagos Island (₦1.5B) and partnered with the Lagos State Building Control Agency (LASBCA) under the Certified Accreditors Program (CAP) at Isolo/Okota District.",
    highlight: true,
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="text-center mb-16">
          <span className="section-label">Our Journey</span>
          <h2 className="section-title max-w-2xl mx-auto">
            20+ Years of Engineering Excellence
          </h2>
          <p className="section-desc mt-4 max-w-xl mx-auto">
            From foundational civil engineering works to a COREN-certified multidisciplinary
            powerhouse trusted by state governments, FAAN, commercial banks, and LASBCA — our story
            in milestones.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 sm:-translate-x-px" />

          <div className="space-y-10">
            {TIMELINE_EVENTS.map((event, i) => {
              const isRight = i % 2 === 0
              return (
                <Reveal key={event.year} direction="up" delay={i * 60}>
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-14 sm:pl-0 ${
                        isRight ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-2xl p-5 sm:p-6 border shadow-sm transition-shadow hover:shadow-md ${
                          event.highlight ? "border-amber-500/40" : "border-gray-100"
                        }`}
                      >
                        {event.highlight && (
                          <div
                            className={`w-8 h-0.5 bg-amber-500 rounded-full mb-3 ${
                              isRight ? "sm:ml-auto" : ""
                            }`}
                          />
                        )}
                        <h3 className="font-bold text-gray-900 text-base mb-1">{event.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{event.desc}</p>
                      </div>
                    </div>

                    {/* Year dot */}
                    <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-5 flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs border-2 shadow-md z-10 ${
                          event.highlight
                            ? "bg-[#003366] text-amber-400 border-amber-500"
                            : "bg-white text-gray-700 border-gray-200"
                        }`}
                      >
                        {event.year}
                      </div>
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
