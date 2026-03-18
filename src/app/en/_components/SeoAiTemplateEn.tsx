import type { ComponentProps, ReactNode } from "react"

import { LogoRow } from "@/app/_components/home/LogoRow"
import type { PricePlan } from "@/app/_components/home/PriceSection"
import { PriceSection } from "@/app/_components/home/PriceSection"
import { SuccessSection } from "@/app/_components/home/SuccessSection"
import { Testimonials } from "@/app/_components/home/Testimonials"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"
import { DoubleHeadingCtaSection } from "@/app/_components/services/DoubleHeadingCtaSection"
import { SeoAiProcessSteps, type SeoAiProcessStep } from "@/app/_components/services/SeoAiProcessSteps"
import { ServiceAboutSection } from "@/app/_components/services/ServiceAboutSection"
import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { ServiceHero, type ServiceHeroProps } from "@/app/_components/services/ServiceHero"
import { SeoAiStatsBar, type SeoAiStatsBarItem } from "@/app/_components/services/SeoAiStatsBar"
import { H2 } from "@/components/ui/Heading"
import { PackagesSectionEN } from "./home/PackagesSectionEN"

type SeoAiTemplateEnProps = {
  hero: Omit<ServiceHeroProps, "dir">
  heroTitle?: ReactNode
  heroSubtitleClassName?: string
  trustHeading?: { title: string; description: string }
  postLogoContent?: ReactNode
  stats?: {
    ariaLabel?: string
    items?: readonly SeoAiStatsBarItem[]
    title?: ReactNode
  }
  process?: {
    label?: ReactNode
    title?: ReactNode
    subtitle?: ReactNode
    steps?: readonly SeoAiProcessStep[]
  }
  vision: Omit<ComponentProps<typeof VisionToExecutionSection>, "dir">
  about?: Omit<ComponentProps<typeof ServiceAboutSection>, "dir">
  price: {
    id?: string
    title: string
    subtitle: string
    plans: readonly PricePlan[]
    variant?: "default" | "seo-ai"
  }
  doubleHeading: Omit<ComponentProps<typeof DoubleHeadingCtaSection>, "dir">
  faq?: Omit<ComponentProps<typeof ServiceFaqSection>, "dir">
  extraContent?: ReactNode
  dataKeyword?: string
}

export function SeoAiTemplateEn({
  hero,
  heroTitle,
  heroSubtitleClassName,
  trustHeading,
  postLogoContent,
  stats,
  process,
  vision,
  about,
  price,
  doubleHeading,
  faq,
  extraContent,
  dataKeyword,
}: SeoAiTemplateEnProps) {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="ltr" data-keyword={dataKeyword}>
      <div id="main" role="main" data-keyword={dataKeyword}>
        <ServiceHero
          {...hero}
          ariaLabel={hero.ariaLabel ?? (typeof hero.title === "string" ? hero.title : undefined)}
          dir="ltr"
          subtitleClassName={heroSubtitleClassName}
          title={heroTitle ?? hero.title}
        />

        {trustHeading ? (
          <section className="bg-[#F4F1EC] pb-2 pt-[var(--space-section)]">
            <div className="mx-auto max-w-[1440px] px-4 text-center sm:px-6 lg:px-4">
              <H2>{trustHeading.title}</H2>
              <p className="mx-auto mt-3 max-w-[940px] text-[18px] leading-relaxed text-center">
                {trustHeading.description}
              </p>
            </div>
          </section>
        ) : null}

        <LogoRow locale="en" />
        {postLogoContent}
        <SeoAiStatsBar locale="en" ariaLabel={stats?.ariaLabel} items={stats?.items} title={stats?.title} />
        <SeoAiProcessSteps
          locale="en"
          label={process?.label}
          title={process?.title}
          subtitle={process?.subtitle}
          steps={process?.steps}
        />
        <VisionToExecutionSection {...vision} dir="ltr" />

        {about ? <ServiceAboutSection {...about} dir="ltr" /> : null}

        <PriceSection
          id={price.id}
          title={price.title}
          subtitle={price.subtitle}
          plans={price.plans}
          variant={price.variant ?? "seo-ai"}
          locale="en"
        />

        <SuccessSection locale="en" />
        <Testimonials locale="en" />

        <DoubleHeadingCtaSection {...doubleHeading} dir="ltr" />
        {faq ? <ServiceFaqSection {...faq} dir="ltr" /> : null}
        {extraContent}
        <PackagesSectionEN />
      </div>
    </div>
  )
}
