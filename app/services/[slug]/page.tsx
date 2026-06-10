import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, ChevronDown, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getService, getAllServices } from "@/lib/services-data"
import { Reveal } from "@/components/Reveal"

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return { title: "Not Found" }
  return {
    title: `${service.title} | Envostructs Nigeria Limited`,
    description: service.tagline,
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end text-white"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,10,30,0.97) 0%, rgba(0,10,30,0.65) 50%, rgba(0,10,30,0.35) 100%), url('${service.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <span className="section-label">Envostructs Service</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">{service.title}</h1>
          <p className="text-xl text-amber-400 font-semibold">{service.tagline}</p>
        </div>
      </section>

      {/* Overview + deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <Reveal direction="up">
              <div>
                <span className="section-label">What We Do</span>
                <h2 className="section-title mb-6">Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{service.overview}</p>
                <div className="mt-8 flex gap-3">
                  <Link href="/contact">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-6">
                      Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="https://wa.me/2348034770098" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-gray-200 font-bold rounded-full px-6 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={80}>
              <div>
                <span className="section-label">What We Deliver</span>
                <h2 className="text-2xl font-black text-gray-900 mb-5">Our Capabilities</h2>
                <ul className="space-y-2.5">
                  {service.whatWeDeliver.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process — dark section */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Our Process</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-4">
            {service.process.map((step, i) => (
              <Reveal key={i} direction="up" delay={i * 80}>
                <div className="relative p-5 rounded-2xl text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(245,158,11,0.15)" }}>
                    <span className="text-amber-400 font-black text-lg">{step.step}</span>
                  </div>
                  <p className="text-white font-bold text-sm mb-2">{step.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{step.description}</p>
                  {i < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-amber-500/30" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">Proven Track Record</span>
              <h2 className="section-title mb-3">Example Projects</h2>
              <p className="section-desc">Real projects where we delivered this service</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {service.projectExamples.map((project, i) => (
              <Reveal key={i} direction="up" delay={(i % 2) * 80}>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-black text-gray-900 text-base leading-tight">{project.title}</h3>
                    <span className="text-amber-600 font-black text-sm shrink-0">{project.value}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  {project.slug && (
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-amber-600 text-sm font-bold hover:text-amber-700 transition-colors">
                      View Project <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="section-label">Common Questions</span>
              <h2 className="section-title mb-3">Frequently Asked</h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <Reveal key={i} direction="up" delay={i * 50}>
                <details className="group border border-gray-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-bold text-gray-900 hover:bg-amber-50 transition-colors">
                    <span className="text-sm leading-snug">{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-amber-500 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{faq.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#003366]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Ready to Start?</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need {service.title}?</h2>
            <p className="text-white/60 text-lg mb-8">Talk to our engineers today — no obligation, just a straight conversation about your project.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+2348034770098">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-full px-8 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 080-3477-0098
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
