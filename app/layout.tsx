import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import WhatsAppPopup from "@/components/WhatsappPopup"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Envostructs Nigeria Limited - Design/Construction Consultants & Contractors",
    template: "%s | Envostructs Nigeria Limited",
  },
  description:
    "Accredited Continent International Hotels Design/Construction Consultants & Contractors. Providing superior engineering solutions since 2008. Specializing in geotechnical services, construction works, and project management across Nigeria.",
  keywords: [
    "construction",
    "engineering",
    "geotechnical",
    "design",
    "project management",
    "Nigeria",
    "Lagos",
    "civil engineering",
    "structural engineering",
    "hospitality construction",
    "infrastructure development",
  ],
  authors: [{ name: "Envostructs Nigeria Limited" }],
  creator: "Envostructs Nigeria Limited",
  publisher: "Envostructs Nigeria Limited",
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://envostructs.com",
    title: "Envostructs Nigeria Limited",
    description: "Design/Construction Consultants & Contractors providing superior engineering solutions since 2008",
    siteName: "Envostructs Nigeria Limited",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Envostructs+Nigeria",
        width: 1200,
        height: 630,
        alt: "Envostructs Nigeria Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envostructs Nigeria Limited",
    description: "Design/Construction Consultants & Contractors",
    images: ["/placeholder.svg?height=630&width=1200&text=Envostructs+Nigeria"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          <WhatsAppPopup />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
