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
    <section aria-label="טכנולוגיה, מוצר ו-AI מהחזון לביצוע" className="py-[var(--space-section)] bg-[#F4F1EC]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="text-right md:text-center">
      <h2 className="text-right md:text-center w-full">טכנולוגיה, מוצר ו-AI מהחזון לביצוע</h2>
          <h3 className="mx-auto max-w-full sm:max-w-[85%] lg:max-w-[70%]">
            ב-VOW אנחנו מלווים בעלי עסקים ויזמים בפיתוח מוצרים דיגיטליים, מערכות חכמות ואתרי אינטרנט מתקדמים — משלב הרעיון וה-MVP ועד למוצר יציב, סקיילבילי ומוכן לצמיחה.
          </h3>
          <button
            type="button"
            onClick={onCtaClick}
            className="mt-7 inline-flex max-w-[260px] items-center justify-center rounded-[10px] bg-black px-10 py-3 text-[18px] font-semibold text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/15"
          >
            להשארת פרטים
          </button>
        </div>

        <div className="mt-10 mx-auto w-[97%] grid grid-cols-2 gap-6 lg:grid-cols-4 lg:max-w-6xl">
          {CARDS.map((card) => (
            <figure key={card.src} className="flex flex-col w-full items-start">
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-none bg-white shadow-sm">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-1 mb-2 text-right text-[20px] lg:text-[24px] font-semibold leading-tight text-black">
                {card.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}