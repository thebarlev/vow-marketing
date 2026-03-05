import type { Metadata } from "next"

import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
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
import { seoAiConfig } from "@/app/_components/services/services.config"

export const metadata: Metadata = seoAiConfig.metadata

const SEO_AI_PRICING: readonly PricePlan[] = [
  {
    title: "מתחילים",
    kicker: "מנועי חיפוש AI",
    buttonLabel: "אבחון נוכחות בחינם והצטרפות",
    buttonHref:
      "https://app.vow.co.il/auditor?link_id=a_basic&utm_source=website&utm_medium=cta&utm_campaign=auditor_pricing",
    price: "197 ₪ לחודש",
    priceextra: "מתאים ל: עסקים בתחילת דרך או תקציב מוגבל",
    badge: "",
    bullets: [
 'סריקה חודשית + דו"ח ממוקד',
 "רשימת 5 פעולות עדיפות לחודש",
 "עדכון תוכן אחד לחודש",
 "מדדי ביצוע בסיסיים",
 "תמיכה בצ׳אט",
    ],
  },
  {
    title: "מקצועי",
    kicker: "ליווי מומחה + ביצוע חודשי מלא",
    buttonLabel: "אבחון נוכחות בחינם והצטרפות",
    buttonHref:
      "https://app.vow.co.il/auditor?link_id=a_pro&utm_source=website&utm_medium=cta&utm_campaign=auditor_pricing",
    price: "597 ₪ לחודש",
    priceextra: "מתאים ל: עסקים שרוצים תוצאות בלי להתעסק",
    badge: "המומלץ ביותר",
    bullets: [
"כל מה שבבסיסי +",
 "סריקה מעמיקה + תכנית עבודה",
 "שדרוג תוכן ומבנה, 2–4 משימות/חודש",
 "ChatGPT, Gemini, Copilot...",
 "יצירת עמודים חדשים שמביאים תנועה",
 'דו"ח תוצאות חודשי + שיחת עדכון',
 "ליווי מומחה ישיר (לא בוט)",

    ],
  },
  {
    title: "מומחים",
    kicker: "SEO + מנועי AI + מומחה אישי",
    buttonLabel: "אבחון נוכחות בחינם והצטרפות",
    buttonHref: "/contact",
    price: "1,497 ₪ לחודש",
    priceextra: 'מתאים ל: רפואה / עו"ד / נדל"ן / פיננסים',
    badge: "",
    bullets: [
"כל מה שמקצועי +",
"יצירה של עמודים חדשים",
"אסטרטגיית נושאים ותוכן מלאה",
"סכמות מתקדמות + לינקים פנימיים",
"מעקב מתקדם + שיחה דו-שבועית",
"עדיפות בתגובה + SLA מוגדר",
    ],
  },
] as const

export default function SeoAiServicePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="rtl">
      <SiteHeader />
      <main id="main" role="main">
        <ServiceHero
          {...seoAiConfig.hero}
          ariaLabel={seoAiConfig.hero.title}
          ctaHref="#price"
          subtitleClassName="mt-5 text-[30px] font-semibold leading-[38px] text-[color:var(--vow-muted)]"
          title={
            <>
              לקוחות כבר לא <span className="line-through">מחפשים בגוגל</span> הם שואלים AI.
            </>
          }
        />
        <LogoRow />
        <SeoAiStatsBar />
        <SeoAiProcessSteps />
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
          title="חבילות  ומחירים"
          subtitle="בחר את החבילה שמתאימה לשלב שבו העסק שלך נמצא. אפשר לשדרג בכל עת."
          plans={SEO_AI_PRICING}
          variant="seo-ai"
        />

        <SuccessSection />
        <Testimonials />

        <DoubleHeadingCtaSection {...seoAiConfig.doubleHeading} buttonHref="#price" />
        {seoAiConfig.faq ? <ServiceFaqSection {...seoAiConfig.faq} /> : null}
        <PackagesSection />
      </main>
      <SiteFooter />
    </div>
  )
}

