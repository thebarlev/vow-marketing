export function SeoAiStatsBar({ locale = "he" }: { locale?: "he" | "en" }) {
  const isEn = locale === "en"
  return (
    <section aria-label={isEn ? "SEO AI metrics" : "מדדים על SEO AI"} className="bg-[#F4F1EC]" dir={isEn ? "ltr" : "rtl"}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        <div className="rounded-[18px] bg-black px-6 py-10 shadow-lg sm:px-10 sm:py-12">
          <div className="flex flex-col items-center gap-16 text-center sm:flex-row sm:justify-center sm:gap-24">
            <div>
              <div className="text-white text-[56px] font-semibold leading-none sm:text-[64px] lg:text-[72px] [unicode-bidi:plaintext]">
                {isEn ? (
                  <><span className="text-[40px] sm:text-[40px] lg:text-[40px] mr-1">$</span>0</>
                ) : (
                  <><span className="text-[40px] sm:text-[40px] lg:text-[40px] ml-1">₪</span>0</>
                )}
              </div>
              <div className="mt-3 text-white/90 text-[16px] font-semibold leading-[1.5] sm:text-[16px] lg:text-[18px]">
                <div>{isEn ? "No ad budget needed" : "לא צריך תקציב פרסום"}</div>
                <div>{isEn ? "to be shown" : "כדי להיות מוצג"}</div>
              </div>
            </div>

            <div>
              <div className="text-white text-[56px] font-semibold leading-none sm:text-[64px] lg:text-[72px]">
                1
              </div>
              <div className="mt-3 text-white/90 text-[16px] font-semibold leading-[1.5] sm:text-[16px] lg:text-[18px]">
                <div>{isEn ? "One answer, not 10 links." : "תשובה אחת, לא 10 קישורים."}</div>
                <div>{isEn ? "If you're not there, your competitor is" : "אם לא מופיע, מתחרה שלך כן"}</div>
              </div>
            </div>

            <div>
              <div className="text-white text-[56px] font-semibold leading-none sm:text-[64px] lg:text-[72px]">
                73%
              </div>
              <div className="mt-3 text-white/90 text-[16px] font-semibold leading-[1.5] sm:text-[16px] lg:text-[18px]">
                <div>{isEn ? "Of searches go to" : "מהחיפושים עוברים"}</div>
                <div>{isEn ? "AI questions in 2025" : "לשאלות ב-AI ב-2025"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

