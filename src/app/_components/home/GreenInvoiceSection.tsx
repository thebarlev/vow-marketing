import Image from "next/image"
import Link from "next/link"

import { CheckIcon } from "./CheckIcon"

const BENEFITS: readonly string[] = [
  "הפקת מסמכים רציפה",
  "חתימה דיגיטלית מאובטחת",
  "מספר תקני, בלי חורים",
  "שמירה וגיבוי מלאים",
  "מוכן לביקורת ולדוחות",
] as const

export function GreenInvoiceSection() {
  return (
    <section aria-label="חשבונית ירוקה מאובטחת" className="py-[var(--space-section)]">
      <div className="grid lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: edge-to-edge image (no padding/margins) */}
        <div className="relative w-full min-h-[320px] lg:min-h-[640px] overflow-hidden">
          <Image
            src="/manmobile.webp"
            alt="חשבונית ירוקה מאובטחת — תצוגה במובייל"
            fill
            priority
            sizes="100vw"
            className="object-cover lg:hidden"
          />
          <Image
            src="/manvow.webp"
            alt="חשבונית ירוקה מאובטחת — תצוגה בדסקטופ"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="hidden object-cover lg:block"
          />
        </div>

        {/* Right: content inside regular site container */}
        <div className="flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div dir="rtl" className="py-10 text-right lg:py-0 lg:max-w-[520px]">
              <p className="font-semibold text-[color:var(--vow-accent)]">חינם לשנה</p>

              <h2 className="mt-3 text-3xl font-bold text-black lg:text-5xl">
                חשבונית ירוקה מאובטחת
              </h2>

              <ul className="mt-7 space-y-3 text-base leading-8 text-black lg:text-lg">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://app.vow.co.il"
                className="vow-btn-primary mt-8 w-full max-w-[323px] !rounded-xl px-10 py-4"
              >
                להצטרפות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

