"use client"

import Image from "next/image"

import { openLeadPopup } from "@/app/_components/home/leadPopupEvent"
import { HeroRotatingTags } from "@/app/_components/home/HeroRotatingTags"
import type { LeadSource } from "@/app/_components/home/Popup"

export type ServiceHeroProps = {
  title: string
  subtitle?: string
  tags: readonly string[]
  ctaLabel: string
  ctaSource: LeadSource
  imageSrc?: string
  imageAlt?: string
}

export function ServiceHero({
  title,
  subtitle,
  tags,
  ctaLabel,
  ctaSource,
  imageSrc = "/D-hero.webp",
  imageAlt = "",
}: ServiceHeroProps) {
  const onCtaClick = () => {
    document
      .getElementById("lead-design-development")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    openLeadPopup({ source: ctaSource })
  }

  return (
    <section aria-label={title} className="w-full bg-[#F4F1EC]" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4 py-[var(--space-section)]">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="order-2 md:order-1 w-full text-right">
            <h1 className="text-black w-full text-right font-semibold leading-[1.05] text-balance text-[56px] sm:text-[72px] sm:leading-[0.98] lg:text-[96px] lg:leading-[0.98]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 text-[20px] font-semibold leading-[34px] text-[color:var(--vow-muted)] sm:text-[22px] sm:leading-[36px]">
                {subtitle}
              </p>
            ) : null}

<div className="mt-6 w-full text-right">
  <HeroRotatingTags items={tags} />
</div>

            <button type="button" className="btn-primary mt-7 w-full sm:w-auto" onClick={onCtaClick}>
              {ctaLabel}
            </button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-end">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-lg" style={{ aspectRatio: '1/1', maxWidth: '80%' }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={false}
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

