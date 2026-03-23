"use client"
import Image from "next/image"
import { openLeadPopup } from "@/app/_components/home/leadPopupEvent"
import type { LeadSource } from "@/app/_components/home/Popup"
import { H2 } from "@/components/ui/Heading"

export type ServiceHeroProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  heroSubheading?: string
  ariaLabel?: string
  subtitleClassName?: string
  tags?: readonly string[]
  ctaLabel: string
  ctaSource: LeadSource
  ctaHref?: string
  imageSrc?: string
  imageAlt?: string
  dir?: "ltr" | "rtl"
}

export function ServiceHero({
  title,
  subtitle,
  heroSubheading,
  ariaLabel,
  subtitleClassName,
  tags,
  ctaLabel,
  ctaSource,
  ctaHref,
  imageSrc = "/D-hero.webp",
  imageAlt = "",
  dir = "rtl",
}: ServiceHeroProps) {
  const sectionAriaLabel = ariaLabel ?? (typeof title === "string" ? title : "Hero")

  const onHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ctaHref || !ctaHref.startsWith("#")) return
    const id = ctaHref.slice(1)
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const onCtaClick = () => {
    document
      .getElementById("lead-design-development")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    openLeadPopup({ source: ctaSource })
  }

  const isLtr = dir === "ltr"
  return (
    <section aria-label={sectionAriaLabel} className="w-full bg-[#F4F1EC]" dir={dir}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div
            className={
              isLtr
                ? "order-1 md:order-1 w-full text-left px-4 sm:px-6 lg:px-4 py-[var(--space-section)]"
                : "order-2 md:order-1 w-full text-right px-4 sm:px-6 lg:px-4 py-[var(--space-section)]"
            }
          >
            <h1
              className={
                isLtr
                  ? "text-black w-full text-left font-semibold leading-[1.05] text-balance text-[30px] sm:text-[55px] sm:leading-[0.98] lg:text-[55px] lg:leading-[1.0]"
                  : "text-black w-full text-right font-semibold leading-[1.05] text-balance text-[30px] sm:text-[55px] sm:leading-[0.98] lg:text-[55px] lg:leading-[1.0]"
              }
            >
              {title}
            </h1>
            {subtitle ? (
              <p
                className={
                  subtitleClassName ??
                  "mt-5 text-[20px] font-semibold leading-[34px] text-[color:var(--vow-muted)] sm:text-[22px] sm:leading-[36px]"
                }
              >
                {subtitle}
              </p>
            ) : null}
            {heroSubheading ? (
              <H2
                className={
                  isLtr
                    ? "mt-6 w-full text-left text-[26px] font-normal leading-[20px]"
                    : "mt-6 w-full text-right text-[26px] font-normal leading-[20px]"
                }
              >
                {heroSubheading}
              </H2>
            ) : null}
            {ctaHref ? (
              <a
                href={ctaHref}
                onClick={ctaHref.startsWith("#") ? onHashLinkClick : undefined}
  className="btn-primary mt-7 !w-[300px] sm:w-auto text-center flex items-center justify-center px-5"
              >
                {ctaLabel}
              </a>
            ) : (
              <button type="button" className="btn-primary mt-7 !w-[240px] sm:w-auto" onClick={onCtaClick}>
                {ctaLabel}
              </button>
            )}
          </div>

          {/* Image */}
          <div
            className={
              isLtr
                ? "order-2 md:order-2 md:flex md:justify-end md:px-4 md:py-[var(--space-section)]"
                : "order-1 md:order-2 md:flex md:justify-start md:px-4 md:py-[var(--space-section)]"
            }
          >
            <div className="relative h-[250px] w-full overflow-hidden rounded-none shadow-none md:h-auto md:max-w-[80%] md:rounded-3xl md:shadow-lg md:aspect-[1/1]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                fetchPriority="high"
                quality={60}
                className="object-cover object-center"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}