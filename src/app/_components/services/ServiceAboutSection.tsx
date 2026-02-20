"use client"

import Image from "next/image"

import { openLeadPopup } from "@/app/_components/home/leadPopupEvent"
import type { LeadSource } from "@/app/_components/home/Popup"

export type ServiceAboutItem = {
  id: string
  title: string
  description?: string
  icon?: string
}

export type ServiceAboutSectionProps = {
  title: string
  subtitle: string
  ctaLabel: string
  ctaSource: LeadSource
  items: ServiceAboutItem[]
}

export function ServiceAboutSection({
  title,
  subtitle,
  ctaLabel,
  ctaSource,
  items,
}: ServiceAboutSectionProps) {
  const onCtaClick = () => {
    document
      .getElementById("lead-design-development")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    openLeadPopup({ source: ctaSource })
  }

  return (
    <section aria-label={title} className="py-[var(--space-section)] mobile-margin-top bg-[#F4F1EC]" dir="rtl">
      <div className="mx-auto max-w-[1440px] w-full px-4 sm:px-4 lg:px-4 relative">
        <div className="relative rounded-[10px] grid bg-white p-4 px-4 main-row gap-4 lg:grid-cols-2">
          {/* Card - ימין */}
          <div className="relative z-10 flex justify-start items-center">
            <div className="w-full py-[35px]">
              <h2 className="mt-3 text-right">{title}</h2>

              <p className="font-semibold text-[30px] pt-7 leading-[38px] text-[#747474] sm:max-w-[90%] lg:max-w-[90%]">
                {subtitle}
              </p>

              <button
                type="button"
                className="vow-btn-primary mt-8 w-full max-w-[323px] cursor-pointer"
                onClick={onCtaClick}
              >
                {ctaLabel}
              </button>
            </div>
          </div>

          {/* Items - שמאל */}
          <div className="relative h-full sub-package">
            {items.map((item) => (
              <article key={item.id} className="py-4 sm:p-[3.25rem]">
                <div className="flex items-center gap-3 py-2">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="max-w-[39px] h-auto"
                    />
                  ) : null}
                  <h3 className="h3-title sm:text-[30px] font-semibold">{item.title}</h3>
                </div>

                {item.description ? (
                  <p className="text-right text-[20px] leading-[32px] text-[#000000] sm:max-w-[90%]">
                    {item.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

