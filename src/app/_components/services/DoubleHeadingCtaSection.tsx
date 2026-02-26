"use client"

import { openLeadPopup } from "@/app/_components/home/leadPopupEvent"
import type { LeadSource } from "@/app/_components/home/Popup"

export type DoubleHeadingCtaSectionProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonSource: LeadSource
}

export function DoubleHeadingCtaSection({
  title,
  subtitle,
  buttonLabel,
  buttonSource,
}: DoubleHeadingCtaSectionProps) {
  const onClick = () => {
    document
      .getElementById("lead-design-development")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    openLeadPopup({ source: buttonSource })
  }

  return (
    <section aria-label={title} className="py-[var(--space-section)] bg-[#F4F1EC]" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        <div className="mx-auto w-full max-w-[900px] text-right md:text-center">
          <h2 className="pb-2">{title}</h2>
          <p className="mx-auto max-w-[780px] text-[20px] font-semibold leading-[34px] text-[color:var(--vow-muted)]">
            {subtitle}
          </p>

          <button type="button" className="btn-primary mt-7 w-full sm:w-auto mx-auto" onClick={onClick}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  )
}

