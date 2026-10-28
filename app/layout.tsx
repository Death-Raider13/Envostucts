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
  title:
    "Envostructs Nigeria Limited | Geotechnical Investigation, Pile Foundations, Structural Design & Civil Construction in Nigeria (RC: 694337)",
  description:
    "Envostructs Nigeria Limited (RC: 694337) is a COREN-certified geotechnical, structural, civil engineering, and project management firm in Lagos, Nigeria. LASBCA-CAP Accredited Partner in Isolo/Okota. 20+ years experience, 100+ projects, ₦500B+ portfolio across soil testing, bored piling, highways, and multi-storey buildings.",
  keywords:
    "Envostructs Nigeria Limited, geotechnical engineering company in Nigeria, soil investigation Lagos, bored pile foundation contractors Nigeria, LASBCA CAP certified accreditors program Isolo Okota, structural integrity test Lagos, NDT concrete testing Nigeria, civil engineering contractors Lagos, road and highway construction Nigeria, EPC local content geotechnical subcontractor Nigeria",
  authors: [{ name: "Envostructs Nigeria Limited (RC: 694337)" }],
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
    title:
      "Envostructs Nigeria Limited (RC: 694337) — Geotechnical, Structural & Civil Engineering Excellence",
    description:
      "20+ years of COREN-certified geotechnical soil investigation, pile foundations, LASBCA-CAP structural audits, highway dualization, and turnkey building construction across Nigeria.",
    url: "https://envostructs.com",
    siteName: "Envostructs Nigeria Limited",
    images: [
      {
        url: "/soiless-farm-hostel.jpg",
        width: 1200,
        height: 630,
        alt: "Envostructs Nigeria Limited - Engineering & Construction Excellence",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Envostructs Nigeria Limited (RC: 694337) - Engineering Excellence",
    description:
      "COREN-certified geotechnical, structural, civil construction & LASBCA-CAP accredited engineering firm in Lagos, Nigeria.",
    images: ["/soiless-farm-hostel.jpg"],
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
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos, Nigeria",
    "geo.position": "6.5244;3.3792",
    ICBM: "6.5244, 3.3792",
  },
}

const engineeringFirmSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Envostructs Nigeria Limited",
  alternateName: "ENVOSTRUCTS (RC: 694337)",
  url: "https://envostructs.com",
  logo: "https://envostructs.com/logo.png",
  image: "https://envostructs.com/soiless-farm-hostel.jpg",
  description:
    "Multi-disciplinary geotechnical investigation, pile foundation, structural engineering, LASBCA-CAP building control accreditation, and civil construction firm operating across Nigeria.",
  foundingDate: "2008",
  taxID: "RC: 694337",
  telephone: "+234-803-477-0098",
  email: "envostructs@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "51, Akanro Street, Off Apapa-Oshodi Express Road, by Ilasa Bustop, P.O. Box 2890 Yaba",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    postalCode: "100001",
    addressCountry: "NG",
  },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "AdministrativeArea", name: "Lagos State" },
    { "@type": "AdministrativeArea", name: "Ogun State" },
    { "@type": "AdministrativeArea", name: "Ondo State" },
    { "@type": "AdministrativeArea", name: "Abuja FCT" },
  ],
  founder: {
    "@type": "Person",
    name: "Engr. S.I.A. Edidi",
    jobTitle: "Managing Consultant / Chief Executive Officer",
    description: "B.Eng, MSc (UNILAG), COREN R6610, MNSE 07462. Former HOD Civil Engineering, Lagos State Polytechnic.",
  },
  knowsAbout: [
    "Geotechnical Subsoil Investigation",
    "Bored and Driven Pile Foundations",
    "Dutch Cone Penetrometer Testing (CPT)",
    "Structural Engineering Design (Eurocode 2, BS 8110)",
    "LASBCA Certified Accreditors Program (CAP) Structural Audits",
    "Non-Destructive Testing (NDT)",
    "Highway Dualization and Airfield Pavement Resurfacing",
  ],
  sameAs: ["https://linkedin.com/company/envostructs", "https://facebook.com/envostructs"],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Envostructs' role in the LASBCA Certified Accreditors Program (CAP)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Envostructs Nigeria Limited is an accredited engineering partner working closely with the Lagos State Building Control Agency (LASBCA) under the Certified Accreditors Program (CAP / CAPS), operating from the Isolo/Okota district in Lagos State to monitor and assess abandoned, uncompleted, and structurally unstable buildings.",
      },
    },
    {
      "@type": "Question",
      name: "Why is a geotechnical soil investigation mandatory before building or piling in Lagos and Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Subsoil conditions across Nigeria vary dramatically—from deep compressible marine clays in Lekki, Ikoyi, and Victoria Island to variable lateritic profiles on the mainland. A certified geotechnical investigation determines safe bearing capacity, pile depth, and settlement parameters to prevent differential settlement or structural failure.",
      },
    },
    {
      "@type": "Question",
      name: "How can diaspora Nigerians or international EPC firms engage Envostructs remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "International EPC firms and diaspora developers can use the Interactive Scope & BOQ Estimator on our website or submit site coordinates to receive a formal milestone-based technical and commercial proposal, backed by verified corporate banking with First City Monument Bank (FCMB) and stage-by-stage photo/video progress reporting.",
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(engineeringFirmSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden max-w-full w-full`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col w-full max-w-full overflow-x-hidden">
            <SiteHeader />
            <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
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
