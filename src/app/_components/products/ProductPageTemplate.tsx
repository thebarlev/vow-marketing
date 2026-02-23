import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"

import { DoubleHeadingCtaSection } from "@/app/_components/services/DoubleHeadingCtaSection"
import { ServiceAboutSection } from "@/app/_components/services/ServiceAboutSection"
import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { ServiceHero } from "@/app/_components/services/ServiceHero"
import type { ProductPageConfig, ProductSectionType } from "./products.config"

const SECTION_RENDERERS: Record<ProductSectionType, (config: ProductPageConfig) => React.ReactNode> = {
  SiteHeader: () => <SiteHeader />,
  ServiceHero: (config) => <ServiceHero {...config.hero} />,
  LogoRow: () => <LogoRow />,
  VisionToExecutionSection: (config) => (
    <VisionToExecutionSection
      title={config.vision?.title}
      subtitle={config.vision?.subtitle}
      ctaLabel={config.vision?.ctaLabel}
      source={config.vision?.source}
      ctaHref={config.vision?.ctaHref}
      cards={config.vision?.cards}
    />
  ),
  AboutSection: (config) =>
    config.about ? (
      <ServiceAboutSection
        title={config.about.title}
        subtitle={config.about.subtitle}
        ctaLabel={config.about.ctaLabel}
        ctaSource={config.about.ctaSource}
        ctaHref={config.about.ctaHref}
        items={config.about.items}
      />
    ) : null,
  DoubleHeadingCtaSection: (config) => <DoubleHeadingCtaSection {...config.doubleHeading} />,
  FaqSection: (config) => (config.faq ? <ServiceFaqSection {...config.faq} /> : null),
  PackagesSection: () => <PackagesSection />,
  SiteFooter: () => <SiteFooter />,
}

export function ProductPageTemplate({ config }: { config: ProductPageConfig }) {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="rtl">
      {config.sections.map((section) => (
        <div key={section}>{SECTION_RENDERERS[section](config)}</div>
      ))}
    </div>
  )
}

