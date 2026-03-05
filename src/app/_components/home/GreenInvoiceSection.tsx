import Image from "next/image"
import Link from "next/link"
import { CheckIcon } from "./CheckIcon"

const BENEFITS: readonly string[] = [
"מופיעים בתשובות של ChatGPT ו-Gemini",
  "דירוג גבוה יותר בגוגל, בלי קמפיינים",
  "כלים מתקדמים + מומחה צמוד לעסק שלך",
  "יותר חשיפה, יותר לקוחות",
  "ליווי מומחה אישי, לא בוט",
] as const

export function GreenInvoiceSection() {
  return (
    <section aria-label="חשבונית ירוקה מאובטחת" className="py-[var(--space-section)] bg-[#F4F1EC]">
      <div className="grid lg:grid-cols-2 lg:items-center lg:gap-16 bg-white">

        {/* Left: content — shown first on mobile via order, second on desktop */}
        <div className="flex items-center justify-center order-2 lg:order-1  mx-auto">
          <div dir="rtl" className="py-10 text-right lg:py-0 w-full  mx-auto px-4 sm:px-6 lg:px-8">
            <p className="free-year-heading !text-[20px]">תוצאות כבר מהחודש הראשון</p>
            <h2 dir="rtl"className="mt-0 !text-right !font-semibold text-black !text-[40px] leading-[1.2] ">
            סריקת אתר שמזהה חסמים בגוגל וב-AI ומייצרת תכנית פעולה מיידית.
          </h2>
            <Link
              href="https://vow.co.il/seo-ai"
              className="vow-btn-primary mt-8 w-full max-w-[323px] !rounded-xl px-10 py-4 mb-4"
            >
              פרטים נוספים
            </Link>
            <ul className="mt-1 space-y-1 text-base leading-8 text-black lg:text-lg">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex  items-center gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Right: edge-to-edge image — shown second on mobile, first on desktop */}
        <div className="relative w-full min-h-[320px] lg:min-h-[640px] overflow-hidden order-1 lg:order-2">
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

      </div>
    </section>
  )
}