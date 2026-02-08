import Image from "next/image"

import { TESTIMONIALS } from "./home.constants"

export function Testimonials() {
  return (
    <section aria-label="המלצות" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-1">
        <div className="grid gap-22 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => {
            const src = encodeURI(t.imageSrc)
            return (
              <article
                key={t.imageSrc}
                className="rounded-[18px] border border-[color:var(--vow-border)] bg-transparent p-6 shadow-sm"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative size-[86px] overflow-hidden rounded-full border border-[color:var(--vow-border)] bg-[color:var(--vow-bg)]">
                    <Image
                      src={src}
                      alt={t.imageAlt}
                      fill
                      sizes="86px"
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-4 w-[301px] max-w-full text-center text-[20px] font-bold leading-[32px] text-[color:var(--vow-muted)]">
                    {t.title}
                  </p>

                  <p className="mt-2 w-[301px] max-w-full text-center text-[20px] font-semibold leading-[32px] text-[color:var(--vow-muted)]">
                    {t.text}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

