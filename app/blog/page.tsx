import { BlogPostCard } from "@/components/blog-post-card"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Innovations in Sustainable Construction",
      date: "July 25, 2024",
      description:
        "Exploring the latest trends and technologies in eco-friendly building practices that are shaping the future of construction.",
      slug: "sustainable-construction-innovations",
    },
    {
      title: "The Future of Urban Infrastructure in Nigeria",
      date: "July 18, 2024",
      description:
        "A deep dive into the challenges and opportunities for developing robust urban infrastructure across Nigeria.",
      slug: "urban-infrastructure-nigeria",
    },
    {
      title: "Geotechnical Investigations: Why They Are Crucial for Every Project",
      date: "July 10, 2024",
      description:
        "Understanding the importance of thorough geotechnical studies in ensuring the stability and longevity of construction projects.",
      slug: "geotechnical-investigations-crucial",
    },
    {
      title: "Project Management Best Practices for Large-Scale Developments",
      date: "June 30, 2024",
      description:
        "Key strategies and methodologies for successful execution of complex construction and engineering projects.",
      slug: "project-management-best-practices",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {" "}
      {/* Adjusted padding for fixed header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, news, and expertise from Envostructs Nigeria Limited.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
