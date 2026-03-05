import type { Metadata } from "next"

import { Hero } from "@/app/_components/home/Hero"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { SuccessSection } from "@/app/_components/home/SuccessSection"
import { Testimonials } from "@/app/_components/home/Testimonials"
import { CookieBanner } from "@/app/_components/home/CookieBanner"
import { AboutSection } from "@/app/_components/home/AboutSection"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"
import { FaqSection } from "@/app/_components/home/FaqSection"
import { GreenInvoiceSection } from "@/app/_components/home/GreenInvoiceSection"

export const metadata: Metadata = {
  metadataBase: new URL("https://vow.co.il"),

  title: "VOW – AI Accountant, Digital Invoice & Web Development",
  description:
    "VOW provides advanced services for small and medium businesses: smart AI accountant, secure digital invoice for one year free, marketing, design and web development.",

  keywords: [
    "AI accountant",
    "digital invoice",
    "online invoices",
    "invoice system",
    "digital signature",
    "VAT connection",
    "web development",
    "product management",
    "AI-based marketing",
    "business management system",
    "design and branding for businesses",
  ],

  openGraph: {
    title: "VOW – AI Accountant, Digital Invoice & Web Development",
    description:
      "VOW provides advanced services for small and medium businesses: smart AI accountant, secure digital invoice for one year free, marketing, design and web development.",
    url: "https://vow.co.il/en",
    siteName: "VOW",
    images: [
      {
        url: "https://vow.co.il/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "VOW – AI Accountant & Digital Business Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VOW – AI Accountant, Digital Invoice & Web Development",
    description:
      "One year free for secure digital invoice + AI accountant, marketing, branding and systems development for businesses.",
    images: ["https://vow.co.il/og-home.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function EnHomePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <SiteHeader />

      <main id="main" role="main" dir="ltr"><main id="main" role="main" dir="ltr">
        <Hero />
        <LogoRow />
        <VisionToExecutionSection
          title="Specification, development, design and AI-based marketing that drives growth"
          subtitle="At VOW we build websites and digital products with marketing thinking from day one - from specification to the funnel that brings new customers."
          ctaLabel="Leave details"
          source="design_development"
          cards={[
            {
              id: "home-vto-1",
              src: "/1.webp",
              alt: "MVP development for entrepreneurs and startups",
              caption: "MVP development for entrepreneurs and startups",
            },
            {
              id: "home-vto-2",
              src: "/3.webp",
              alt: "Planning and development of websites and apps",
              caption: "Planning and development of websites and apps",
            },
            {
              id: "home-vto-3",
              src: "/2.webp",
              alt: "Paid marketing and SEO",
              caption: "Paid marketing and SEO",
            },
            {
              id: "home-vto-4",
              src: "/4.webp",
              alt: "Performance improvement, user experience - ROI",
              caption: "Performance improvement, user experience - ROI",
            },
          ]}
        />
        <SuccessSection />
        <Testimonials />
        <AboutSection />
        <GreenInvoiceSection />

        <PackagesSection />
        <FaqSection />
      </main>

      <CookieBanner />
      <SiteFooter />
    </div>
  )
}
