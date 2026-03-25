import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { heEnAlternateLanguages } from "@/lib/seo/hreflang"
import { HeroEN } from "./_components/home/HeroEN"
import { LogoRowEN } from "./_components/home/LogoRowEN"
import { VisionToExecutionSectionEN } from "./_components/home/VisionToExecutionSectionEN"

const SuccessSectionEN = dynamic(() => import("./_components/home/SuccessSectionEN").then((m) => m.SuccessSectionEN))
const TestimonialsEN = dynamic(() => import("./_components/home/TestimonialsEN").then((m) => m.TestimonialsEN))
const AboutSectionEN = dynamic(() => import("./_components/home/AboutSectionEN").then((m) => m.AboutSectionEN))
const GreenInvoiceSectionEN = dynamic(() => import("./_components/home/GreenInvoiceSectionEN").then((m) => m.GreenInvoiceSectionEN))
const PackagesSectionEN = dynamic(() => import("./_components/home/PackagesSectionEN").then((m) => m.PackagesSectionEN))
const FaqSectionEN = dynamic(() => import("./_components/home/FaqSectionEN").then((m) => m.FaqSectionEN))
const GrowthGuidesCard = dynamic(() => import("@/components/marketing/GrowthGuidesCard").then((m) => m.GrowthGuidesCard))

export const metadata: Metadata = {
  metadataBase: new URL("https://vow.co.il"),
  alternates: {
    canonical: "/en",
    languages: heEnAlternateLanguages("/", "/en"),
  },

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
        subtitle="We build websites and digital products with marketing thinking from day one-from spec to the funnel that brings new customers."
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
      <GrowthGuidesCard
        title="Growth Guides"
        description="Practical guides on traffic, SEO, and customer acquisition to help you grow faster."
        links={[
          { href: "/en/growth-guides/how-to-get-traffic-to-my-website", label: "How to Get Traffic to Your Website" },
          { href: "/en/growth-guides/how-to-get-customers-online", label: "How to Get Customers Online" },
        ]}
        indexLink={{ href: "/en/growth-guides", label: "All Growth Guides" }}
      />
      <FaqSectionEN />
    </>
  )
}
