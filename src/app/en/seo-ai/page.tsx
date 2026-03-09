import type { Metadata } from "next"

import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSectionEN } from "@/app/en/_components/home/PackagesSectionEN"
import type { PricePlan } from "@/app/_components/home/PriceSection"
import { PriceSection } from "@/app/_components/home/PriceSection"
import { SuccessSection } from "@/app/_components/home/SuccessSection"
import { Testimonials } from "@/app/_components/home/Testimonials"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"
import { DoubleHeadingCtaSection } from "@/app/_components/services/DoubleHeadingCtaSection"
import { SeoAiProcessSteps } from "@/app/_components/services/SeoAiProcessSteps"
import { ServiceAboutSection } from "@/app/_components/services/ServiceAboutSection"
import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { ServiceHero } from "@/app/_components/services/ServiceHero"
import { SeoAiStatsBar } from "@/app/_components/services/SeoAiStatsBar"
import { seoAiConfigEn } from "@/app/en/_config/seoAiConfigEn"

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
    priceextra: "For: early-stage businesses or limited budget",
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
    kicker: "Expert support + full monthly execution",
    buttonLabel: "Free presence audit & join",
    buttonHref:
      "https://app.vow.co.il/en/auditor/register?link_id=a_pro",
    price: "$270/month",
    priceextra: "For: businesses that want results without the hassle",
    badge: "Most popular",
    bullets: [
      "Everything in Starter +",
      "Deep scan + work plan",
      "Content & structure upgrades (2–4/mo)",
      "ChatGPT, Gemini, Copilot...",
      "New pages that drive traffic",
      "Monthly results report + update call",
      "Direct expert support (not a bot)",
    ],
  },
  {
    id: "price-expert-en",
    title: "Expert",
    kicker: "SEO + AI engines + personal expert",
    buttonLabel: "Free presence audit & join",
    buttonHref:
      "https://app.vow.co.il/en/auditor/register?link_id=a_premium",
    price: "$670/month",
    priceextra: "For: medical / legal / real estate / finance",
    badge: "",
    bullets: [
      "Everything in Pro +",
      "New page creation",
      "Full topic and content strategy",
      "Advanced schemas + internal links",
      "Advanced tracking + biweekly call",
      "Priority response + defined SLA",
    ],
  },
] as const

export default function SeoAiPageEn() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="ltr">
      <div id="main" role="main">
        <ServiceHero
          {...seoAiConfigEn.hero}
          ariaLabel={seoAiConfigEn.hero.title}
          ctaHref="#price"
          dir="ltr"
          subtitleClassName="mt-5 text-[30px] font-semibold leading-[38px] text-[color:var(--vow-muted)]"
          title={
            <>
              Make your business appear in ChatGPT, Google and AI search.
            </>
          }
        />
        <LogoRow locale="en" />
        <SeoAiStatsBar locale="en" />
        <SeoAiProcessSteps locale="en" />
        <VisionToExecutionSection
          title={seoAiConfigEn.vision?.title}
          subtitle={seoAiConfigEn.vision?.subtitle}
          ctaLabel={seoAiConfigEn.vision?.ctaLabel}
          ctaHref={seoAiConfigEn.vision?.ctaHref}
          source={seoAiConfigEn.vision?.source}
          cards={seoAiConfigEn.vision?.cards}
          dir="ltr"
        />

        {seoAiConfigEn.about ? (
          <ServiceAboutSection
            title={seoAiConfigEn.about.title}
            subtitle={seoAiConfigEn.about.subtitle}
            ctaLabel={seoAiConfigEn.about.ctaLabel}
            ctaSource={seoAiConfigEn.about.ctaSource}
            items={seoAiConfigEn.about.items}
            dir="ltr"
          />
        ) : null}

        <PriceSection
          id="price"
          title="Plans & pricing"
          subtitle="Choose the plan that fits your business stage. Upgrade anytime."
          plans={SEO_AI_PRICING_EN}
          variant="seo-ai"
          locale="en"
        />

        <SuccessSection locale="en" />
        <Testimonials locale="en" />

        <DoubleHeadingCtaSection {...seoAiConfigEn.doubleHeading} buttonHref="#price" dir="ltr" />
        {seoAiConfigEn.faq ? <ServiceFaqSection {...seoAiConfigEn.faq} dir="ltr" /> : null}
        <PackagesSectionEN />
      </div>
    </div>
  )
}
