import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { Reveal } from "@/components/Reveal"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return { title: "Not Found" }
  return {
    title: `${post.title} | Envostructs Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.heroImage] },
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  Sustainability: "bg-green-100 text-green-800",
  Infrastructure: "bg-orange-100 text-orange-800",
  Geotechnical: "bg-yellow-100 text-yellow-800",
  "Project Management": "bg-blue-100 text-blue-800",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const relatedPosts = post.relatedSlugs.map(getBlogPost).filter(Boolean)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.heroImage}')` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,10,30,0.97) 0%, rgba(0,10,30,0.6) 50%, rgba(0,10,30,0.3) 100%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-800"}`}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-amber-400" />{post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-amber-400" />{post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Article body */}
            <div className="lg:col-span-2">
              <Reveal direction="up">
                <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium border-l-4 border-amber-500 pl-5">
                  {post.excerpt}
                </p>
              </Reveal>

              <div className="prose prose-lg max-w-none">
                {post.body.map((block, i) => (
                  <Reveal key={i} direction="up" delay={i * 40}>
                    {block.type === "heading" && (
                      <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4 flex items-center gap-3">
                        <span className="w-1 h-7 bg-amber-500 rounded-full inline-block shrink-0" />
                        {block.content}
                      </h2>
                    )}
                    {block.type === "paragraph" && (
                      <p className="text-gray-700 leading-relaxed mb-5 text-base">{block.content}</p>
                    )}
                    {block.type === "list" && (
                      <div className="mb-6">
                        {block.content && <p className="text-gray-700 mb-3 text-base">{block.content}</p>}
                        <ul className="space-y-3">
                          {block.items?.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-700 text-base">
                              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {block.type === "callout" && (
                      <div className="my-8 p-6 rounded-2xl border-l-4 border-amber-500" style={{ backgroundColor: "#fffbeb" }}>
                        <p className="text-gray-800 font-medium leading-relaxed text-base italic">{block.content}</p>
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>

              {/* Author card */}
              <Reveal direction="up" delay={80}>
                <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=003366&color=F59E0B&size=80&bold=true`}
                    alt={post.author}
                    className="w-16 h-16 rounded-full shrink-0"
                  />
                  <div>
                    <p className="font-black text-gray-900">{post.author}</p>
                    <p className="text-amber-600 text-sm font-semibold mb-2">{post.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Engineering professional with over 16 years of experience in construction and project management across Nigeria.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA card */}
              <Reveal direction="up" delay={100}>
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: "#003366" }}>
                  <div className="p-6">
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Talk to an Engineer</p>
                    <h3 className="text-white font-black text-xl mb-3 leading-tight">Have a project in mind?</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">Our team is ready to discuss your engineering and construction requirements.</p>
                    <div className="space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl">
                          Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <a href="tel:+2348034770098" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white/70 hover:text-white text-sm font-semibold transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                        <Phone className="w-4 h-4" /> 080-3477-0098
                      </a>
                      <a href="https://wa.me/2348034770098" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-bold transition-colors" style={{ backgroundColor: "#25D366" }}>
                        <MessageCircle className="w-4 h-4" /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <Reveal direction="up" delay={140}>
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-4">Related Articles</h4>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => related && (
                        <Link key={related.slug} href={`/blog/${related.slug}`} className="group flex items-start gap-3">
                          <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                            <img src={related.heroImage} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">{related.title}</p>
                            <p className="text-gray-400 text-xs mt-1">{related.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* All posts link */}
              <Reveal direction="up" delay={160}>
                <Link href="/blog" className="flex items-center justify-between p-4 rounded-2xl bg-amber-50 border border-amber-100 group hover:bg-amber-500 transition-colors">
                  <span className="text-amber-700 group-hover:text-white font-bold text-sm">View all articles</span>
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:text-white" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
