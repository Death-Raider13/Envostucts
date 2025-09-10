import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export function SEOHead({
  title = "Envostructs Nigeria Limited - Design/Construction Consultants & Contractors",
  description = "Accredited Continent International Hotels Design/Construction Consultants & Contractors. Providing superior engineering solutions since 2008.",
  keywords = "construction, engineering, geotechnical, design, project management, Nigeria, Lagos, civil engineering, structural engineering",
  ogImage = "/placeholder.svg?height=630&width=1200&text=Envostructs+Nigeria",
  canonicalUrl,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Envostructs Nigeria Limited" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Envostructs Nigeria Limited",
            description: description,
            url: "https://envostructs.com",
            logo: "/placeholder.svg?height=200&width=200&text=Envostructs+Logo",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-08034770098",
              contactType: "customer service",
              areaServed: "NG",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "51, Akanro Street, Off Apapa-Oshodi Express Road",
              addressLocality: "Lagos",
              addressCountry: "NG",
              postalCode: "100001",
            },
            sameAs: ["https://linkedin.com/company/envostructs", "https://facebook.com/envostructs"],
          }),
        }}
      />
    </Head>
  )
}
