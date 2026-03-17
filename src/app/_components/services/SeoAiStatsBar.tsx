import type { ReactNode } from "react"

export type SeoAiStatsBarItem = {
  value: ReactNode
  line1: ReactNode
  line2: ReactNode
}

const DEFAULT_ITEMS = {
  en: [
    { value: <><span className="text-[40px] sm:text-[40px] lg:text-[40px] mr-1">$</span>0</>, line1: "No ad budget needed", line2: "to be shown" },
    { value: "1", line1: "One answer, not 10 links.", line2: "If you're not there, your competitor is" },
    { value: "73%", line1: "Of searches go to", line2: "AI questions in 2025" },
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
}: {
  locale?: "he" | "en"
  ariaLabel?: string
  items?: readonly SeoAiStatsBarItem[]
}) {
  const isEn = locale === "en"
  const resolvedItems = items ?? DEFAULT_ITEMS[isEn ? "en" : "he"]
  return (
    <section aria-label={ariaLabel ?? (isEn ? "SEO AI metrics" : "מדדים על SEO AI")} className="bg-[#F4F1EC]" dir={isEn ? "ltr" : "rtl"}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        <div className="rounded-[18px] bg-black px-6 py-10 shadow-lg sm:px-10 sm:py-12">
          <div className="flex flex-col items-center gap-16 text-center sm:flex-row sm:justify-center sm:gap-24">
            {resolvedItems.map((item, index) => (
              <div key={`${index}-${typeof item.line1 === "string" ? item.line1 : "stat"}`}>
                <div className="text-white text-[56px] font-semibold leading-none sm:text-[64px] lg:text-[72px] [unicode-bidi:plaintext]">
                  {item.value}
                </div>
                <div className="mt-3 text-white/90 text-[16px] font-semibold leading-[1.5] sm:text-[16px] lg:text-[18px]">
                  <div>{item.line1}</div>
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

