import type { Metadata } from "next"

import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
import type { PricePlan } from "@/app/_components/home/PriceSection"
import { PriceSection } from "@/app/_components/home/PriceSection"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"
import { DoubleHeadingCtaSection } from "@/app/_components/services/DoubleHeadingCtaSection"
import { ServiceAboutSection } from "@/app/_components/services/ServiceAboutSection"
import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { ServiceHero } from "@/app/_components/services/ServiceHero"
import { seoAiConfig } from "@/app/_components/services/services.config"

export const metadata: Metadata = seoAiConfig.metadata

const SEO_AI_PRICING: readonly PricePlan[] = [
  {
    title: "בסיסי",
    kicker: "מנועי חיפוש AI",
    buttonLabel: "להצטרפות",
    buttonHref:
      "https://app.vow.co.il/auditor/register?link_id=a_basic&utm_source=website&utm_medium=cta&utm_campaign=auditor_pricing",
    price: "97 ₪ לחודש",
    priceextra: "מיועדת לעסקים קטנים שרוצים חשיפה מוגברת ב AI",
    badge: "",
    bullets: [
 "סריקת אתר אוטומטית",
 "יצירת כלים לחשיפה ב-AI",
 "ניתוח וקבלת כלים לשיפור מבנה",
 "תבנית Meta Titles בסיסית",
    ],
  },
  {
    title: "מקצועי",
    kicker: " SEO + מנועי חיפוש AI",
    buttonLabel: "להצטרפות",
    buttonHref:
      "https://app.vow.co.il/auditor/register?link_id=a_pro&utm_source=website&utm_medium=cta&utm_campaign=auditor_pricing",
    price: "497 ₪ לחודש",
    priceextra: " SEO + מנועי חיפוש AI",
    badge: "המומלץ ביותר",
    bullets: [
"כל מה שבבסיסי +",
"מחקר מילות מפתח ראשוני",
"אופטימיזציית Titles + Descriptions",
"המלצות מבנה H1/H2",
"בניית תוכן לקידום ב-AI ואורגני",
"תוכנית תוכן לחשיפה מהירה",
"בדיקת Schema מלאה",
    ],
  },
  {
    title: "מומחים",
    kicker: "SEO + מנועי חיפוש AI + מומחה אישי",
    buttonLabel: "השאירו פרטים ונחזור אליכם",
    buttonHref: "/contact",
    price: "החל מ-997 ₪ לחודש",
    priceextra: "לעסקים שרוצים ליווי אמיתי ותוצאות מקסימליות",
    badge: "",
    bullets: [
"כל מה שבבייסיק +",
"ניתוח עומק מלא של האתר",
"התאמת אסטרטגיית תוכן אישית",
"בניית מבנה משפך אורגני",
"תכנון 3 חודשי תוכן",
"שיחת אסטרטגיה 1:1",
"התאמה למטרות העסק",
"אופטימיזציה מתקדמת ל-AI Exposure",
    ],
  },
] as const

export default function SeoAiServicePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="rtl">
      <SiteHeader />
      <main id="main" role="main">
        <ServiceHero {...seoAiConfig.hero} ctaHref="#price" />
        <LogoRow />
        <VisionToExecutionSection
          title={seoAiConfig.vision?.title}
          subtitle={seoAiConfig.vision?.subtitle}
          ctaLabel={seoAiConfig.vision?.ctaLabel}
          source={seoAiConfig.vision?.source}
          cards={seoAiConfig.vision?.cards}
        />

        {seoAiConfig.about ? (
          <ServiceAboutSection
            title={seoAiConfig.about.title}
            subtitle={seoAiConfig.about.subtitle}
            ctaLabel={seoAiConfig.about.ctaLabel}
            ctaSource={seoAiConfig.about.ctaSource}
            items={seoAiConfig.about.items}
          />
        ) : null}

        {/* Unique pricing section ONLY for /seo-ai */}
        <PriceSection id="price"
          title="מחירון — SEO / AI אורגני"
          subtitle="מגדילים את ההחשיפה והנוכחות של עסק שלנו!"
          plans={SEO_AI_PRICING}
          variant="seo-ai"
        />

        <DoubleHeadingCtaSection {...seoAiConfig.doubleHeading} />
        {seoAiConfig.faq ? <ServiceFaqSection {...seoAiConfig.faq} /> : null}
        <PackagesSection />
      </main>
      <SiteFooter />
    </div>
  )
}

