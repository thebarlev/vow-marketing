import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { seoAiConfigEn } from "@/app/en/_config/seoAiConfigEn"
import { SEO_AI_PRICING_EN } from "@/app/en/_config/seoAiPricingEn"
import { SeoAiTemplateEn } from "@/app/en/_components/SeoAiTemplateEn"

const DailyExecutionBlock = dynamic(
  () => import("@/components/marketing/DailyExecutionBlock").then((m) => m.DailyExecutionBlock),
  { ssr: true },
)
const GrowthGuidesCard = dynamic(
  () => import("@/components/marketing/GrowthGuidesCard").then((m) => m.GrowthGuidesCard),
  { ssr: true },
)

export const metadata: Metadata = seoAiConfigEn.metadata

export default function SeoAiPageEn() {
  return (
    <SeoAiTemplateEn
      hero={{
        ...seoAiConfigEn.hero,
        ariaLabel: seoAiConfigEn.hero.title,
        ctaHref: "#price",
      }}
      heroTitle={<>Get your business to appear in Google & AI answers</>}
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
      heroSubtitleClassName="mt-5 text-[22px] font-semibold leading-[28px] text-[color:var(--vow-muted)]"
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
