"use client"

import * as React from "react"
import Image from "next/image"
import { openLeadPopup } from "./leadPopupEvent"

export type VisionCard = {
  id: string
  src: string
  alt: string
  caption: string
}

type Props = {
  title?: string
  subtitle?: string
  ctaLabel?: string
  source?: "design_development" | "digital_marketing" | "smart_accounting_ai"
  cards?: VisionCard[]
}

const DEFAULT_CARDS: VisionCard[] = [
  { id: "default-4", src: "/services/marketing/1.webp", alt: "Google Ads", caption: "Google Ads" },
  { id: "default-3", src: "/services/marketing/2.webp", alt: "Meta Ads", caption: "Meta Ads" },
  { id: "default-2", src: "/services/marketing/3.webp", alt: "אנליטיקה ו-SEO", caption: "אנליטיקה ו-SEO" },
  { id: "default-1", src: "/services/marketing/4.webp", alt: "קופירייטינג ו-A/B test", caption: "קופירייטינג ו-A/B test" },
]

export function VisionToExecutionSection({
  title ="VOW תוצאות מהיום הראשון",
  subtitle = "עם מעל 20 שנות ניסיון בשיווק דיגיטלי, אנחנו בונים אסטרטגיה מדויקת, קריאייטיב שממיר ומערך קמפיינים שעובד - לא ניסויים, אלא ביצועים.",
  ctaLabel = "להשארת פרטים",
  source = "design_development",
  cards = DEFAULT_CARDS,
}: Props) {
  const onCtaClick = () => {
    document.getElementById("lead-design-development")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    openLeadPopup({ source })
  }

  return (
    <section
      aria-label={title}
      className="py-[var(--space-section)] bg-[#F4F1EC]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="text-right md:text-center">
          <h2 className="text-right md:text-center w-full pb-2">{title}</h2>

          <h3 className="mx-auto max-w-full sm:max-w-[85%] lg:max-w-[70%]">
            {subtitle}
          </h3>

          <button
            type="button"
            onClick={onCtaClick}
            className="mt-7 inline-flex max-w-[260px] items-center justify-center rounded-[10px] bg-black px-10 py-3 text-[18px] font-semibold text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/15"
          >
            {ctaLabel}
          </button>
        </div>

        <div className="mt-10 mx-auto w-[97%] grid grid-cols-2 gap-6 lg:grid-cols-4 lg:max-w-6xl">
          {cards.map((card) => (
            <figure key={card.id} className="flex flex-col w-full items-start">
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
