import type { Metadata } from "next"
import Link from "next/link"

import { HeroEN } from "./_components/home/HeroEN"
import { LogoRowEN } from "./_components/home/LogoRowEN"
import { PackagesSectionEN } from "./_components/home/PackagesSectionEN"
import { SuccessSectionEN } from "./_components/home/SuccessSectionEN"
import { TestimonialsEN } from "./_components/home/TestimonialsEN"
import { AboutSectionEN } from "./_components/home/AboutSectionEN"
import { VisionToExecutionSectionEN } from "./_components/home/VisionToExecutionSectionEN"
import { FaqSectionEN } from "./_components/home/FaqSectionEN"
import { GreenInvoiceSectionEN } from "./_components/home/GreenInvoiceSectionEN"
import { H2, H3 } from "@/components/ui/Heading"

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
      <section className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-4" aria-label="Growth Guides">
  <div className="mx-auto max-w-[1120px] overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">

      {/* Left: Title + description */}
      <div className="border-b border-black/[0.07] p-8 md:border-b-0 md:border-r md:p-10">
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <polyline points="1,10 5,5 8,7 13,2" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10,2 13,2 13,5" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <H3>Growth Guides</H3>
        </div>
        <p className="max-w-[480px] text-sm leading-relaxed text-gray-500">
          Practical guides on traffic, SEO, and customer acquisition to help you grow faster.
        </p>
      </div>

      {/* Right: Links list */}
      <div className="flex min-w-[260px] flex-col divide-y divide-black/[0.07]">
        <Link
          href="/en/growth-guides/how-to-get-traffic-to-my-website"
          className="flex items-center justify-between gap-4 px-6 py-3.5 text-[13.5px] text-[#5389BB] transition-colors hover:bg-gray-50"
        >
          How to Get Traffic to Your Website
          <ArrowUpRight className="h-3 w-3 shrink-0 opacity-50" />
        </Link>
        <Link
          href="/en/growth-guides/how-to-get-customers-online"
          className="flex items-center justify-between gap-4 px-6 py-3.5 text-[13.5px] text-[#5389BB] transition-colors hover:bg-gray-50"
        >
          How to Get Customers Online
          <ArrowUpRight className="h-3 w-3 shrink-0 opacity-50" />
        </Link>
        <Link
          href="/en/growth-guides"
          className="flex items-center justify-between gap-4 px-6 py-3.5 text-[13.5px] text-gray-500 transition-colors hover:bg-gray-50"
        >
          All Growth Guides
          <ArrowRight className="h-3 w-3 shrink-0 opacity-40" />
        </Link>
      </div>

    </div>
  </div>
</section>
    </>
  )
}
