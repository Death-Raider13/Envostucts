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
import { LoadingScreen } from "@/components/LoadingScreen"
import { CookieBanner } from "@/components/CookieBanner"
import { QuoteWidget } from "@/components/QuoteWidget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  title: "Envostructs Nigeria Limited - Engineering & Construction Services",
  description:
    "Leading engineering consultancy and construction company in Nigeria. Specializing in geotechnical services, design, construction, and project management since 2008.",
  keywords:
    "engineering, construction, geotechnical, Nigeria, Lagos, civil engineering, structural engineering, project management",
  authors: [{ name: "Envostructs Nigeria Limited" }],
  creator: "Envostructs Nigeria Limited",
  publisher: "Envostructs Nigeria Limited",
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
    title: "Envostructs Nigeria Limited - Engineering & Construction Services",
    description:
      "Leading engineering consultancy and construction company in Nigeria. Specializing in geotechnical services, design, construction, and project management since 2008.",
    url: "https://envostructs.com",
    siteName: "Envostructs Nigeria Limited",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Envostructs Nigeria Limited - Engineering & Construction",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Envostructs Nigeria Limited - Engineering & Construction Services",
    description:
      "Leading engineering consultancy and construction company in Nigeria. Specializing in geotechnical services, design, construction, and project management since 2008.",
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
              name: "Envostructs Nigeria Limited",
              description: "Leading engineering consultancy and construction company in Nigeria",
              url: "https://envostructs.com",
              logo: "https://envostructs.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-08034770098",
                contactType: "customer service",
                availableLanguage: "English",
                areaServed: "NG",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "51, Akanro Street, Off Apapa-Oshodi Express Road",
                addressLocality: "Lagos",
                addressRegion: "Lagos State",
                postalCode: "100001",
                addressCountry: "NG",
              },
              foundingDate: "2008-06",
              sameAs: ["https://linkedin.com/company/envostructs", "https://facebook.com/envostructs"],
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
          <LoadingScreen />
          <QuoteWidget />
          <WhatsAppPopup />
          <ScrollToTop />
          <CookieBanner />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
