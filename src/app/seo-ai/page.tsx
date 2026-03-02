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
    buttonLabel: "לתיאום שיחת היכרות",
    buttonHref: "/contact",
    price: "97 ₪ לחודש",
    priceextra: "מיועדת לעסקים קטנים שרוצים התחלה חכמה ומהירה",
    badge: "",
    bullets: [
    " סריקת אתר אוטומטית (עד 20 עמודים)",
    " ציון SEO טכני (0–100)",
    " בדיקת robots.txt + sitemap",
    " בדיקת Schema בסיסית",
    "זיהוי נוכחות",
    "יצירת llms.txt",
    "יצירת ai.json",
    "pass / warn / fail חיווי ",
    ],
  },
  {
    title: "מקצועי",
    kicker: " SEO + מנועי חיפוש AI",
    buttonLabel: "לתיאום שיחת היכרות",
    buttonHref: "/contact",
    price: "197 ₪ לחודש",
    priceextra: " SEO + מנועי חיפוש AI",
    badge: "המומלץ ביותר",
    bullets: [
    "כולל את מה שקיים בבסיסי",
    "ניתוח מבני מלא",
    "זיהוי Titles/Descriptions חלשים או כפולים",
    "הצעות Meta Titles משופרות",
    "הצעות Meta Descriptions מותאמות",
    "בדיקת מבנה תוכן לעמודי שירות",
    "יצירת תוצרים שמקדמים חשיפה",
    "זיהוי חוסר FAQ + יצירת 8–12 שאלות רלוונטיות",
    ],
  },
  {
    title: "מומחים",
    kicker: "SEO + מנועי חיפוש AI + מומחה אישי",
    buttonLabel: "לתיאום שיחת היכרות",
    buttonHref: "/contact",
    price: "החל מ-997 ₪ לחודש",
    priceextra: "לעסקים שרוצים ליווי אמיתי ותוצאות מקסימליות",
    badge: "",
    bullets: [
"כולל הכל ממקצועי +",
"ניתוח עומק של עמודי שירות",
"בניית 2 עמודי תוכן לקידום אורגני",
"בניית 2 עמודי תוכן לקידום אורגני",
"שיחת אסטרטגיה 1:1",
"תעדוף משימות לפי ROI",
"מעקב חודשי והשוואת ציון",
"אופטימיזציה מתקדמת ל-AI Exposure",
"התאמה לשאילתות חיפוש מבוססות AI",
    ],
  },
] as const

export default function SeoAiServicePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="rtl">
      <SiteHeader />
      <main id="main" role="main">
        <ServiceHero {...seoAiConfig.hero} />
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
        <PriceSection
          title="מחירון — SEO / AI אורגני"
          subtitle="3 מסלולים ברורים כדי להתחיל לזוז קדימה. (אפשר להחליף את הטקסט בהתאם לשירות החדש.)"
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

