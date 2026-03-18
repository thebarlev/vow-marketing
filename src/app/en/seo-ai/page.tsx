import type { Metadata } from "next"

import type { PricePlan } from "@/app/_components/home/PriceSection"
import { seoAiConfigEn } from "@/app/en/_config/seoAiConfigEn"
import { SeoAiTemplateEn } from "@/app/en/_components/SeoAiTemplateEn"
import { GrowthGuidesCard } from "@/components/marketing/GrowthGuidesCard"
import { DailyExecutionBlock } from "@/components/marketing/DailyExecutionBlock"

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
      heroTitle={<>Get your business to appear in Google &amp; AI answers - or stay invisible</>}
      trustHeading={{
        title: "Industry leaders chose us. Ready to join them?",
        description: "Join the brands that trust us to drive visibility, traffic, and real results.",
      }}
      postLogoContent={
        <DailyExecutionBlock
          title="Daily & weekly growth execution (not just strategy)"
          subtitle="We actively grow your visibility every day."
          bullets={[
            {
              label: "Daily execution",
              description: "Daily execution: we improve pages, content, and AI visibility signals",
            },
            {
              label: "Weekly growth pushes",
              description: "Weekly growth pushes: new pages, new keywords, new opportunities",
            },
          ]}
          closingLine="More visibility → more clicks → more customers."
          imageSrc="/services/d-green-invocie.webp"
          imageAlt="Daily SEO and AI visibility execution by VOW"
        />
      }
      stats={{ title: "If you're not in AI answers - your competitors are." }}
      heroSubtitleClassName="mt-5 text-[25px] font-semibold leading-[30px] text-[color:var(--vow-muted)]"
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
        <GrowthGuidesCard
          title="Growth Guides"
          description="Practical guides on traffic, SEO, and customer acquisition to help you grow faster."
          links={[
            { href: "/en/growth-guides/how-to-get-traffic-to-my-website", label: "How to Get Traffic to Your Website" },
            { href: "/en/growth-guides/how-to-get-customers-online", label: "How to Get Customers Online" },
          ]}
          indexLink={{ href: "/en/growth-guides", label: "All Growth Guides" }}
        />
      }
    />
  )
}
