import type { MetadataRoute } from "next"

const BASE_URL = "https://envostructs.com"

const projectSlugs = [
  "onilegbale-palace-lagos-island",
  "swiss-international-hotel-abeokuta",
  "soilless-farm-lab-hostel",
  "community-bridge-project",
  "emuren-ipele-road-dualization",
  "swiss-budget-hotel-balogun",
  "swiss-spirit-hotel-makurdi",
  "lekki-free-zone-roads",
  "national-theatre-car-parks",
  "ogudu-gra-duplex",
  "airport-runway-resurfacing",
  "mile12-ikorodu-road",
  "owo-iyere-road",
  "lagos-poly-classrooms",
  "first-bank-branch-designs",
  "akanro-road-ilasa",
  "nasfat-central-mosque",
  "celestial-church-headquarters",
  "diamond-bank-herbert-macaulay",
  "arepo-central-mosque",
  "continent-hotel-akure",
]

const blogSlugs = [
  "sustainable-construction-innovations",
  "urban-infrastructure-nigeria",
  "geotechnical-investigations-crucial",
  "project-management-best-practices",
]

const serviceSlugs = [
  "geotechnical-services",
  "design-documentation",
  "construction-works",
  "project-management",
  "highway-design",
  "water-environmental",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/credentials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes, ...serviceRoutes]
}
