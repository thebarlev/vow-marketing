import type { ReactNode } from "react"
import { H2 } from "@/components/ui/Heading"

export type SeoAiStatsBarItem = {
  value: ReactNode
  line1: ReactNode
  line2: ReactNode
}

const DEFAULT_ITEMS = {
  en: [
    { value: <><span className="text-[40px] sm:text-[40px] lg:text-[40px] mr-1"></span>10X</>, line1: "more customers", line2: "" },
    { value: "10X", line1: "More leads", line2: "" },
    { value: "10X", line1: "More sales", line2: "" },
  ],
  he: [
    { value: <><span className="text-[40px] sm:text-[40px] lg:text-[40px] ml-1">₪</span>0</>, line1: "לא צריך תקציב פרסום", line2: "כדי להיות מוצג" },
    { value: "1", line1: "תשובה אחת, לא 10 קישורים.", line2: "אם לא מופיע, מתחרה שלך כן" },
    { value: "73%", line1: "מהחיפושים עוברים", line2: "לשאלות ב-AI ב-2025" },
  ],
} as const

export function SeoAiStatsBar({
  locale = "he",
  ariaLabel,
  items,
  title,
}: {
  locale?: "he" | "en"
  ariaLabel?: string
  items?: readonly SeoAiStatsBarItem[]
  title?: ReactNode
}) {
  const isEn = locale === "en"
  const resolvedItems = items ?? DEFAULT_ITEMS[isEn ? "en" : "he"]
  return (
    <section aria-label={ariaLabel ?? (isEn ? "SEO AI metrics" : "מדדים על SEO AI")} className="bg-[#F4F1EC]" dir={isEn ? "ltr" : "rtl"}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        <div className="rounded-[18px] bg-black px-6 py-10 shadow-lg sm:px-10 sm:py-12">
          {title ? (
            <H2 className="mb-10 text-center text-white">{title}</H2>
          ) : null}
          <div className="flex flex-col items-center gap-16 text-center sm:flex-row sm:justify-center sm:gap-12 sm:px-2 lg:gap-20">
            {resolvedItems.map((item, index) => (
              <div
                key={`${index}-${typeof item.line1 === "string" ? item.line1 : "stat"}`}
                className="w-full max-w-[280px] shrink-0 sm:w-auto sm:min-w-[11rem] lg:min-w-[12rem]"
              >
                <div className="text-white text-[56px] font-semibold leading-none sm:text-[64px] lg:text-[72px] [unicode-bidi:plaintext]">
                  {item.value}
                </div>
                <div className="mt-3 text-white/90 text-[16px] font-semibold leading-[1.5] sm:text-[16px] lg:text-[18px]">
                  <div className={isEn ? "whitespace-nowrap" : undefined}>{item.line1}</div>
                  <div>{item.line2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

