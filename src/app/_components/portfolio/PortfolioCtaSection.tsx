"use client"

import { openLeadPopup } from "@/app/_components/home/leadPopupEvent"

export function PortfolioCtaSection() {
  return (
    <section aria-label="קריאה לפעולה" className="py-[var(--space-section)] bg-[#F4F1EC]" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-balance text-[44px] font-semibold leading-[1.1] text-black sm:text-[56px] lg:text-[64px]">
            מוכנים להיות הפרויקט הבא שלנו?
          </h2>

          <p className="mt-4 text-pretty text-[18px] leading-[30px] text-black/80 sm:text-[20px] sm:leading-[34px]">
            בואו נבנה נכס דיגיטלי שמביא ROI מדיד: מהירות, דיוק מבוסס AI, וחיסכון בעלויות בלי פשרות על איכות.
            אנחנו עובדים עם מדידה ברורה, אופטימיזציה חכמה, ותהליך שמייצר צמיחה אמיתית.
          </p>

          <button
            type="button"
            className="vow-btn-primary mt-8 w-full sm:w-auto"
            onClick={() => openLeadPopup({ source: "design_development" })}
          >
            להשארת פרטים
          </button>

          <p className="mt-3 text-[16px] font-semibold text-[#747474]">חוזרים אליכם עד 24 שעות</p>
        </div>
      </div>
    </section>
  )
}

