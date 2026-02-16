"use client"
import Image from "next/image"
import { openLeadPopup } from "./leadPopupEvent"

const CARDS = [
  {
    src: "/1.webp",
    alt: "אוטומציות, אינטגרציות ו-AI עסקי",
    caption: "אוטומציות, אינטגרציות ו-AI עסקי",
  },
  {
    src: "/2.webp",
    alt: "שיפור ביצועים, חוויית משתמש וסקייל",
    caption: "שיפור ביצועים, חוויית משתמש וסקייל",
  },
  {
    src: "/3.webp",
    alt: "תכנון ופיתוח אתרים ואפליקציות",
    caption: "תכנון ופיתוח אתרים ואפליקציות",
  },
  {
    src: "/4.webp",
    alt: "פיתוח MVP ליזמים וסטארטאפים",
    caption: "פיתוח MVP ליזמים וסטארטאפים",
  },
] as const

export function VisionToExecutionSection() {
  const onCtaClick = () => {
    document
      .getElementById("lead-design-development")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    openLeadPopup({ source: "design_development" })
  }

  return (
    <section aria-label="טכנולוגיה, מוצר ו-AI מהחזון לביצוע" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2>טכנולוגיה, מוצר ו-AI מהחזון לביצוע</h2>
          
          <h3 className="mx-auto max-w-full sm:max-w-[85%] lg:max-w-[70%] text-center">
            אנחנו ב-VOW מלווים בעלי עסקים ויזמים בבניית מוצרים דיגיטליים, מערכות חכמות ואתרי אינטרנט מתקדמים -
            משלב הרעיון וה-MVP ועד למוצר יציב, סקיילבילי ומוכן לצמיחה.
          </h3>

          <button
            type="button"
            onClick={onCtaClick}
            className="mx-auto mt-7 inline-flex w-full max-w-[260px] items-center justify-center rounded-[10px] bg-black px-10 py-3 text-[18px] font-semibold text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/15 sm:w-auto"
          >
            להשארת פרטים
          </button>
        </div>

        <div dir="ltr" className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4">
          {CARDS.map((card) => (
            <figure key={card.src} className="flex flex-col w-full max-w-xs items-end">
            <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[0px] bg-white shadow-sm">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 300px"
                className="object-cover"
              />
            </div>
            <figcaption
              dir="rtl"
              className="mt-4 text-right text-[16px] lg:text-[18px] font-bold leading-snug text-black lg:w-[75%]"
            >
              {card.caption}
            </figcaption>
          </figure>
          ))}
        </div>
      </div>
    </section>
  )
}