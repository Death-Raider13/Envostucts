import { Button } from "@/components/ui/button"
import { Star, Users, Award, Building, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { StatsCounter } from "@/components/stats-counter"

export const metadata = {
  title: "Client Testimonials - Envostructs Nigeria Limited",
  description: "Read what our clients say about our engineering and construction services.",
}

function uiAvatar(name: string, bg = "003366") {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=ffffff&size=200&bold=true`
}

const TESTIMONIALS = [
  {
    name: "Dr. Adebayo Ogundimu",
    position: "Managing Director",
    company: "Swiss International Hotels",
    project: "Swiss International Hotel Abeokuta",
    rating: 5,
    avatar: uiAvatar("Dr. Adebayo Ogundimu", "003366"),
    category: "Hospitality",
    year: "2023",
    testimonial: "Envostructs Nigeria Limited exceeded our expectations in every aspect of the Swiss International Hotel Abeokuta project. Their attention to detail, professional project management, and ability to deliver on time and within budget was remarkable. The 15-storey structure stands as a testament to their engineering excellence.",
  },
  {
    name: "Prof. Olumide Adeyemi",
    position: "Director",
    company: "Soilless Farm Laboratory",
    project: "Soilless Farm Lab Hostel",
    rating: 5,
    avatar: uiAvatar("Prof. Olumide Adeyemi", "1a4a7a"),
    category: "Educational",
    year: "2022",
    testimonial: "The team at Envostructs demonstrated exceptional understanding of our unique requirements for the agricultural research facility. The 12 hostel blocks were constructed with sustainable practices and modern amenities that perfectly serve our research community. Their commitment to environmental considerations was particularly impressive.",
  },
  {
    name: "Engr. Funmi Adebisi",
    position: "Project Coordinator",
    company: "Lagos State Ministry of Works",
    project: "Community Bridge Project",
    rating: 5,
    avatar: uiAvatar("Engr. Funmi Adebisi", "2d4a1e"),
    category: "Infrastructure",
    year: "2024",
    testimonial: "Working with Envostructs on the Community Bridge Project has been a pleasure. Their comprehensive approach to environmental impact assessment and community engagement set them apart. The technical expertise and innovative solutions they brought to this infrastructure project are commendable.",
  },
  {
    name: "Alhaji Musa Ibrahim",
    position: "Chairman",
    company: "NASFAT Central Mosque Committee",
    project: "NASFAT Central Mosque Construction",
    rating: 5,
    avatar: uiAvatar("Alhaji Musa Ibrahim", "4a3000"),
    category: "Religious",
    year: "2021",
    testimonial: "Envostructs handled our mosque construction project with great sensitivity to our religious requirements while maintaining the highest engineering standards. The project was completed on schedule and the quality of workmanship is exceptional. We highly recommend their services.",
  },
  {
    name: "Mrs. Folake Adeyinka",
    position: "Estate Developer",
    company: "Adeyinka Properties Ltd",
    project: "Residential Development at Lekki",
    rating: 5,
    avatar: uiAvatar("Mrs. Folake Adeyinka", "6b1a4a"),
    category: "Residential",
    year: "2023",
    testimonial: "From geotechnical investigation to final handover, Envostructs provided comprehensive services for our residential development. Their expertise in foundation design and construction supervision ensured our project met all safety standards. The team's professionalism and technical competence are outstanding.",
  },
  {
    name: "Mr. Chinedu Okafor",
    position: "Operations Manager",
    company: "Lekki Free Zone Development Company",
    project: "Road Construction N5 & E6A",
    rating: 5,
    avatar: uiAvatar("Mr. Chinedu Okafor", "1a4a3a"),
    category: "Infrastructure",
    year: "2022",
    testimonial: "The road construction projects handled by Envostructs in the Lekki Free Zone were executed with precision and efficiency. Their understanding of industrial infrastructure requirements and ability to work within our operational constraints was impressive. The quality of the completed roads exceeds our expectations.",
  },
]

const CLIENTS = [
  "Swiss International Hotels", "Lagos State Government", "NASFAT", "Lekki Free Zone Authority",
  "First Bank Nigeria", "Zenith Bank", "Lagos State Polytechnic", "Diamond Bank", "Soilless Farm Lab",
  "Swiss International Hotels", "Lagos State Government", "NASFAT", "Lekki Free Zone Authority",
  "First Bank Nigeria", "Zenith Bank", "Lagos State Polytechnic", "Diamond Bank", "Soilless Farm Lab",
]

const CATEGORY_COLORS: Record<string, string> = {
  Hospitality: "bg-purple-100 text-purple-800",
  Educational: "bg-blue-100 text-blue-800",
  Infrastructure: "bg-orange-100 text-orange-800",
  Religious: "bg-green-100 text-green-800",
  Residential: "bg-indigo-100 text-indigo-800",
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative text-white py-32 pt-40"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(1,15,41,0.93) 0%, rgba(0,30,80,0.89) 100%), url('/community%20bridge%20project.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#001529",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Client Feedback</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Client<br />
            <span className="text-amber-400">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with Envostructs Nigeria Limited.
          </p>
        </div>
      </section>

      {/* ── STATS (dark) ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users className="w-7 h-7" />, label: "Satisfied Clients", value: 50, suffix: "+" },
              { icon: <Star className="w-7 h-7" />, label: "5-Star Reviews", value: 95, suffix: "%" },
              { icon: <Award className="w-7 h-7" />, label: "Repeat Clients", value: 80, suffix: "%" },
              { icon: <Building className="w-7 h-7" />, label: "Projects Delivered", value: 60, suffix: "+" },
            ].map((stat, i) => (
              <Reveal key={stat.label} direction="up" delay={i * 100}>
                <div>
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-amber-400">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-amber-400 tabular-nums mb-2">
                    <StatsCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Real Clients</span>
              <h2 className="section-title mb-4">What Our Clients Say</h2>
              <p className="section-desc">Real feedback from real clients about real projects</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} direction="up" delay={(i % 2) * 100}>
                <div className="relative border-l-4 border-amber-500 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                  {/* Decorative quote */}
                  <span className="absolute top-4 right-6 text-[100px] leading-none font-black text-amber-100 select-none">"</span>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-xl object-cover ring-2 ring-amber-100 shrink-0" />
                      <div>
                        <h3 className="font-black text-gray-900">{t.name}</h3>
                        <p className="text-gray-500 text-sm">{t.position}</p>
                        <p className="text-[#003366] text-sm font-semibold">{t.company}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ml-4 ${CATEGORY_COLORS[t.category] ?? "bg-gray-100 text-gray-800"}`}>{t.category}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }, (_, j) => <Star key={j} className={`w-4 h-4 ${j < t.rating ? "text-amber-400 fill-current" : "text-gray-200"}`} />)}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed flex-1 text-sm relative z-10 mb-4">{t.testimonial}</p>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <span className="font-medium">Project: {t.project}</span>
                    <span>{t.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT MARQUEE ── */}
      <section className="py-14 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Our Clients</span>
            <h2 className="text-2xl font-black text-gray-900">Trusted by Leading Organizations</h2>
          </Reveal>
        </div>
        <div className="flex animate-marquee gap-6 whitespace-nowrap w-max">
          {CLIENTS.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-2 border border-amber-200 hover:border-amber-500 rounded-full px-6 py-3 text-sm font-semibold text-gray-600 hover:text-amber-600 bg-white transition-colors duration-300 shrink-0">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <span className="section-label">Key Achievements</span>
              <h2 className="section-title mb-4">Success Stories</h2>
              <p className="section-desc">Achievements that demonstrate our commitment to excellence</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Zero Safety Incidents", description: "Maintained perfect safety record across all major projects through rigorous protocols and continuous monitoring.", color: "border-green-500", bg: "bg-green-50", text: "text-green-700" },
              { title: "95% On-Time Delivery", description: "95% of all projects completed on or ahead of the agreed schedule — because your timeline matters.", color: "border-amber-500", bg: "bg-amber-50", text: "text-amber-700" },
              { title: "Budget Compliance", description: "Consistently delivered projects within approved budgets with full financial transparency throughout.", color: "border-blue-500", bg: "bg-blue-50", text: "text-blue-700" },
            ].map((story, i) => (
              <Reveal key={story.title} direction="up" delay={i * 80}>
                <div className={`border-t-4 ${story.color} ${story.bg} rounded-2xl p-8 h-full`}>
                  <h3 className={`text-xl font-black ${story.text} mb-3`}>{story.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0a0e1a] grid-texture">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="section-label">Join Our Clients</span>
            <h2 className="section-title-light mb-5">Ready to Join Our Success Stories?</h2>
            <p className="text-white/50 text-lg mb-10">Experience the same level of excellence and professionalism that our clients rave about.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-full px-8">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
