import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { AboutSection } from "@/app/_components/home/AboutSection"
import { FaqSection } from "@/app/_components/home/FaqSection"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"

import { DoubleHeadingCtaSection } from "./DoubleHeadingCtaSection"
import { ServiceHero } from "./ServiceHero"
import type { ServicePageConfig, ServiceSectionType } from "./services.config"

const SECTION_RENDERERS: Record<ServiceSectionType, (config: ServicePageConfig) => React.ReactNode> = {
  SiteHeader: () => <SiteHeader />,
  ServiceHero: (config) => <ServiceHero {...config.hero} />,
  LogoRow: () => <LogoRow />,
  VisionToExecutionSection: (config) => (
    <VisionToExecutionSection
      title={config.vision?.title}
      subtitle={config.vision?.subtitle}
      ctaLabel={config.vision?.ctaLabel}
      source={config.vision?.source}
      cards={config.vision?.cards}
    />
  ),
  AboutSection: () => <AboutSection />,
  DoubleHeadingCtaSection: (config) => <DoubleHeadingCtaSection {...config.doubleHeading} />,
  FaqSection: () => <FaqSection />,
  PackagesSection: () => <PackagesSection />,
  SiteFooter: () => <SiteFooter />,
}

export function ServicePageTemplate({ config }: { config: ServicePageConfig }) {
  return (
    <div className="min-h-screen bg-[#FAF9F5]" dir="rtl">
      {config.sections.map((section) => (
        <div key={section}>{SECTION_RENDERERS[section](config)}</div>
      ))}
    </div>
  )
}

