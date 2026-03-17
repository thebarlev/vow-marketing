import type { Metadata } from "next"
import Link from "next/link"

import type { PricePlan } from "@/app/_components/home/PriceSection"
import { seoAiConfigEn } from "@/app/en/_config/seoAiConfigEn"
import { SeoAiTemplateEn } from "@/app/en/_components/SeoAiTemplateEn"
import { H2, H3 } from "@/components/ui/Heading"

export const metadata: Metadata = seoAiConfigEn.metadata

const SEO_AI_PRICING_EN: readonly PricePlan[] = [
  {
    id: "price-starter-en",
    title: "Starter",
    kicker: "AI search engines",
    buttonLabel: "Free presence audit & join",
    buttonHref:
      "https://app.vow.co.il/en/auditor?link_id=a_basic",
    price: "$100/month",
    priceextra: "For early-stage businesses or limited budgets",
    badge: "",
    bullets: [
      "Monthly scan + focused report",
      "Top 5 priority actions per month",
      "One content update per month",
      "Basic performance metrics",
      "Chat support",
    ],
  },
  {
    id: "price-pro-en",
    title: "Pro",
    kicker: "Expert support + monthly execution",
    buttonLabel: "Free presence audit & join",
    buttonHref:
      "https://app.vow.co.il/en/auditor?link_id=a_pro",
    price: "$270/month",
    priceextra: "For businesses that want consistent growth",
    badge: "Most popular",
    bullets: [
      "Everything in Starter +",
      "Deep site scan & work plan",
      "Content & structure upgrades",
      "New pages optimized for Google & AI",
      "Optimization for ChatGPT, Gemini, Copilot",
      "⁠Monthly results report + strategy call",
      "Direct expert support",
    ],
  },
  {
    id: "price-expert-en",
    title: "Expert",
    kicker: "SEO + AI engines + personal expert",
    buttonLabel: "Free presence audit & join",
    buttonHref:
      "https://app.vow.co.il/en/auditor?link_id=a_premium",
    price: "$670/month",
    priceextra: "For competitive industries (legal, medical, finance)",
    badge: "",
    bullets: [
      "Everything in Pro +",
      "New page creation every month",
      "⁠Full topic & content strategy",
      "Advanced schema & internal linking",
      "Advanced tracking setup",
      "⁠Bi-weekly strategy calls",
      "Priority response + SLA",
    ],
  },
] as const

export default function SeoAiPageEn() {
  return (
    <SeoAiTemplateEn
      hero={{
        ...seoAiConfigEn.hero,
        ariaLabel: seoAiConfigEn.hero.title,
        ctaHref: "#price",
      }}
      heroTitle={<>Does your business show up in the answer?</>}
      heroSubtitleClassName="mt-5 text-[30px] font-semibold leading-[38px] text-[color:var(--vow-muted)]"
      vision={{
        title: seoAiConfigEn.vision?.title,
        subtitle: seoAiConfigEn.vision?.subtitle,
        ctaLabel: seoAiConfigEn.vision?.ctaLabel,
        ctaHref: seoAiConfigEn.vision?.ctaHref,
        source: seoAiConfigEn.vision?.source,
        cards: seoAiConfigEn.vision?.cards,
      }}
      about={
        seoAiConfigEn.about
          ? {
              title: seoAiConfigEn.about.title,
              subtitle: seoAiConfigEn.about.subtitle,
              ctaLabel: seoAiConfigEn.about.ctaLabel,
              ctaSource: seoAiConfigEn.about.ctaSource,
              ctaHref: seoAiConfigEn.about.ctaHref,
              items: seoAiConfigEn.about.items,
            }
          : undefined
      }
      price={{
        id: "price",
        title: "Plans & pricing",
        subtitle: "Choose the plan that fits your business stage. Upgrade anytime.",
        plans: SEO_AI_PRICING_EN,
        variant: "seo-ai",
      }}
      doubleHeading={{
        ...seoAiConfigEn.doubleHeading,
        buttonHref: "#price",
      }}
      faq={seoAiConfigEn.faq}
      extraContent={
        <section className="bg-[#F4F1EC] py-[var(--space-section)]" aria-label="Related growth guides">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
            <div className="mx-auto max-w-[1120px] rounded-2xl border border-black/[0.07] bg-white px-6 py-8 text-left">
              <H2>
                Growth Guides
              </H2>
              <H3 className="mt-4 max-w-[760px]">
                Read practical guides that support SEO and AI visibility:
                {" "}
                <Link href="/en/growth-guides/how-to-improve-website-seo" className="text-[#5389BB] underline hover:no-underline">
                  How to Improve Website SEO
                </Link>
                {" · "}
                <Link href="/en/growth-guides/how-to-rank-on-google-fast" className="text-[#5389BB] underline hover:no-underline">
                  How to Rank on Google Fast
                </Link>
                {" · "}
                <Link href="/en/growth-guides" className="text-[#5389BB] underline hover:no-underline">
                  All Growth Guides
                </Link>
              </H3>
            </div>
          </div>
        </section>
      }
    />
  )
}
