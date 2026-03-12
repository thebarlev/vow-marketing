import type { Metadata } from "next"

import { HeroEN } from "./_components/home/HeroEN"
import { LogoRowEN } from "./_components/home/LogoRowEN"
import { PackagesSectionEN } from "./_components/home/PackagesSectionEN"
import { SuccessSectionEN } from "./_components/home/SuccessSectionEN"
import { TestimonialsEN } from "./_components/home/TestimonialsEN"
import { CookieBannerEN } from "./_components/home/CookieBannerEN"
import { AboutSectionEN } from "./_components/home/AboutSectionEN"
import { VisionToExecutionSectionEN } from "./_components/home/VisionToExecutionSectionEN"
import { FaqSectionEN } from "./_components/home/FaqSectionEN"
import { GreenInvoiceSectionEN } from "./_components/home/GreenInvoiceSectionEN"

export const metadata: Metadata = {
  metadataBase: new URL("https://vow.co.il"),

  title: "VOW | AI Websites, SEO & Marketing for Business Growth",
  description:
    "AI-powered websites, SEO and digital marketing that help businesses rank in Google and AI search. Get more visibility, traffic and customers with VOW.",

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
    title: "VOW | AI Websites, SEO & Marketing for Business Growth",
    description:
      "AI-powered websites, SEO and digital marketing that help businesses rank in Google and AI search. Get more visibility, traffic and customers with VOW.",
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
    title: "VOW | AI Websites, SEO & Marketing for Business Growth",
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
    <>
      <HeroEN />
      <LogoRowEN />
      <VisionToExecutionSectionEN
        title="Specification, Development, Design & AI Marketing That Drives Growth"
        subtitle="We build websites and digital products with marketing thinking from day one—from spec to the funnel that brings new customers."
        ctaLabel="Get in touch"
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
      <SuccessSectionEN />
      <TestimonialsEN />
      <AboutSectionEN />
      <GreenInvoiceSectionEN />
      <PackagesSectionEN />
      <FaqSectionEN />
      <CookieBannerEN />
    </>
  )
}
