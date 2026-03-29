import type { Metadata } from "next"
import fs from "node:fs"
import path from "node:path"

import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { PortfolioCtaSection } from "@/app/_components/portfolio/PortfolioCtaSection"
import { PortfolioGrid } from "@/app/_components/portfolio/PortfolioGrid"
import { PortfolioHero } from "@/app/_components/portfolio/PortfolioHero"
import { heEnAlternateLanguages } from "@/lib/seo/hreflang"

export const metadata: Metadata = {
  title: "Uxellent Portfolio | Web Development, AI & SEO",
  description:
    "Explore Uxellent projects in web development, AI systems, and digital marketing services built for performance, SEO, and ROI.",
  keywords: "web development, AI systems, web design, digital marketing, business websites",
  alternates: {
    canonical: "/en/portfolio",
    languages: heEnAlternateLanguages("/portfolio", "/en/portfolio"),
  },
}

type PortfolioImage = { src: string; alt: string }

function getPortfolioImages(): PortfolioImage[] {
  const dir = path.join(process.cwd(), "public", "portfolio")
  let filenames: string[] = []

  try {
    filenames = fs.readdirSync(dir)
  } catch {
    return []
  }

  const numericWebps = filenames
    .filter((name) => /^\d+\.webp$/.test(name))
    .map((name) => ({ name, n: Number.parseInt(name, 10) }))
    .filter((x) => Number.isFinite(x.n))
    .sort((a, b) => a.n - b.n)

  return numericWebps.map((x, idx) => ({
    src: `/portfolio/${x.name}`,
    alt: `Uxellent website development project ${idx + 1} - AI-powered design and digital marketing`,
  }))
}

const FAQ_ITEMS = [
  {
    id: "portfolio-faq-1",
    question: "How long does a project take?",
    answer:
      "Usually 2–6 weeks, depending on scope and complexity. We work in clear sprints and show measurable progress - so you know exactly where things stand and when it goes live.",
  },
  {
    id: "portfolio-faq-2",
    question: "Do you work with small businesses?",
    answer:
      "Yes. We build a process tailored to budget and goals: start smart, measure fast, scale. Even small businesses deserve a site or system that delivers real results, not just visibility.",
  },
  {
    id: "portfolio-faq-3",
    question: "What's the advantage of AI-based development?",
    answer:
      "AI lets us shorten timelines, sharpen specs, and improve quality - without compromising stability or security. Result: fewer revision rounds, more accuracy, faster path to ROI.",
  },
  {
    id: "portfolio-faq-4",
    question: "Do you offer marketing too?",
    answer:
      "Yes. We integrate marketing thinking from the spec stage: messaging, funnels, measurement, and analytics. You can launch with development only, or get a full performance and growth package.",
  },
  {
    id: "portfolio-faq-5",
    question: "How much does it cost?",
    answer:
      "Price depends on scope, technology, and target outcomes. After a short call we can offer a clear range and a detailed proposal - what's included, what's not, and what we measure to ensure success.",
  },
  {
    id: "portfolio-faq-6",
    question: "Can we start with a small project?",
    answer:
      "Absolutely. Many projects start with an MVP, a converting landing page, or performance improvements to an existing site. We move fast, measure, then decide together on the next step based on data.",
  },
] as const

export default function PortfolioPageEn() {
  const images = getPortfolioImages()

  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="ltr">
      <div id="main">
        <PortfolioHero locale="en" />

        <section aria-label="Projects" className="bg-[#F4F1EC] py-[var(--space-section)]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
            <PortfolioGrid images={images} />
          </div>
        </section>

        <PortfolioCtaSection locale="en" />

        <ServiceFaqSection title="FAQ" items={[...FAQ_ITEMS]} dir="ltr" />
      </div>
    </div>
  )
}
