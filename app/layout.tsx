import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppPopup } from "@/components/WhatsAppPopup"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Envostructs - Premier Construction & Engineering Solutions",
    template: "%s | Envostructs",
  },
  description:
    "Leading construction and engineering company specializing in residential, commercial, and industrial projects. Expert structural engineering, project management, and sustainable building solutions.",
  keywords: [
    "construction",
    "engineering",
    "structural engineering",
    "project management",
    "residential construction",
    "commercial construction",
    "industrial construction",
    "sustainable building",
    "architecture",
    "building design",
  ],
  authors: [{ name: "Envostructs Team" }],
  creator: "Envostructs",
  publisher: "Envostructs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://envostructs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://envostructs.com",
    siteName: "Envostructs",
    title: "Envostructs - Premier Construction & Engineering Solutions",
    description:
      "Leading construction and engineering company specializing in residential, commercial, and industrial projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Envostructs - Construction & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envostructs - Premier Construction & Engineering Solutions",
    description:
      "Leading construction and engineering company specializing in residential, commercial, and industrial projects.",
    images: ["/og-image.jpg"],
    creator: "@envostructs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Envostructs",
              description: "Premier construction and engineering solutions company",
              url: "https://envostructs.com",
              logo: "https://envostructs.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Construction Ave",
                addressLocality: "Building City",
                addressRegion: "BC",
                postalCode: "12345",
                addressCountry: "US",
              },
              sameAs: [
                "https://facebook.com/envostructs",
                "https://twitter.com/envostructs",
                "https://linkedin.com/company/envostructs",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <WhatsAppPopup />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
