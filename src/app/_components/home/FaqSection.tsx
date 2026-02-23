"use client"

import { useId, useMemo, useState } from "react"
import Link from "next/link"

import type { ReactNode } from "react"

type FaqItem = {
  question: string
  answer: ReactNode
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "home-faq-1",
    question: "מה זה VOW ומה אתם עושים?",
    answer: "VOW היא סוכנות דיגיטלית מלאה. אנחנו מעצבים, מפתחים, משווקים ומנהלים את הנוכחות הדיגיטלית של עסקים - מאתרים ומערכות מורכבות ועד חשבוניות דיגיטליות ורואה חשבון AI.",
  },
  {
    id: "home-faq-2",
    question: "אילו שירותים VOW מציעה?",
    answer: "אנחנו מציעים:\n• עיצוב ומיתוג, זהות ויזואלית, לוגו, UI/UX\n• פיתוח אתרים בסביבת AI - מהיר, מדויק ומותאם אישית\n• פיתוח מערכות מורכבות - פלטפורמות, CRM, אוטומציות\n• שיווק דיגיטלי - גוגל, מטא, תוכן ו-SEO\n• חשבונית דיגיטלית - הפקה מאובטחת עם חיבור לרשות המיסים\n• רואה חשבון AI - ניהול כספי חכם לעסקים קטנים",
  },
  {
    id: "home-faq-3",
    question: "כמה זמן לוקח לבנות אתר?",
    answer: "אתר תדמית מוכן תוך 7–14 ימי עבודה. מערכות מורכבות יותר, בהתאם להיקף. אנחנו עובדים בסביבת AI שמאיצה משמעותית את תהליך הפיתוח מבלי לפגוע באיכות.",
  },
  {
    id: "home-faq-4",
    question: "האם אתם עובדים עם עסקים קטנים?",
    answer: "כן - זה הלב של VOW. אנחנו מתמחים בעסקים קטנים ובינוניים שרוצים לקבל שירות ברמת סוכנות גדולה, במחיר שמתאים לגודל שלהם.",
  },
  {
    id: "home-faq-5",
    question: "מה זה חשבונית דיגיטלית של VOW?",
    answer: "מערכת להפקת חשבוניות ו-12 סוגי מסמכים עסקיים, עם חתימה דיגיטלית מאובטחת וחיבור ישיר לרשות המיסים. ניתן להתחיל בחינם לשנה שלמה.",
  },
  {
    id: "home-faq-6",
    question: "מה זה רואה חשבון AI?",
    answer: "שירות AI שמלווה את העסק שלך 24/7 - מסייע בניהול הוצאות, הכנסות, דוחות ושאלות חשבונאיות. עולה פחות מ-200₪ לחודש במקום אלפי שקלים לרואה חשבון רגיל.",
  },
  {
    id: "home-faq-7",
    question: "איך מתחילים לעבוד עם VOW?",
    answer: "פשוט - משאירים פרטים באתר או כותבים לנו בוואטסאפ: 054-5215193. נחזור אליכם תוך שעות ספורות לשיחת היכרות קצרה ללא התחייבות.",
  },
  {
    id: "home-faq-8",
    question: "האם יש תמיכה לאחר השקת הפרויקט?",
    answer: "כן. אנחנו לא נעלמים אחרי ההשקה. מציעים ליווי שוטף, תחזוקה, עדכונים ותמיכה טכנית, בטלפון, מייל וצ'אט.",
  },
] as const

export function FaqSection() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const itemIds = useMemo(
    () =>
      FAQ_ITEMS.map((_, idx) => ({
        buttonId: `${baseId}-faq-btn-${idx}`,
        regionId: `${baseId}-faq-region-${idx}`,
      })),
    [baseId],
  )

  const onToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section aria-label="שאלות נפוצות" className="py-[var(--space-section)]  bg-[#F4F1EC]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 ">
        <div dir="rtl" className="mx-auto max-w-[777px] w-full px-4 sm:px-0 text-right">
          <h2 className="text-balance text-[44px] font-semibold leading-[1.1] tracking-[-0.2px] text-black sm:text-[56px] lg:text-[64px]">
            שאלות נפוצות
          </h2>

          <div className="mt-10 border-t border-[color:var(--vow-border)]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx
              const ids = itemIds[idx]

              return (
                <div key={item.question} className="border-b border-[color:var(--vow-border)]">
                  <button
                    id={ids.buttonId}
                    type="button"
                    className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-right focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/15 rounded-sm"
                    aria-expanded={isOpen}
                    aria-controls={ids.regionId}
                    onClick={() => onToggle(idx)}
                  >
                    <span className="text-[20px] font-semibold leading-[30px] text-black sm:text-[22px] sm:leading-[32px]">
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 select-none text-[34px] leading-none text-black sm:text-[38px]"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={ids.regionId}
                    role="region"
                    aria-labelledby={ids.buttonId}
                    aria-hidden={!isOpen}
                    className={[
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={[
                          "pt-1 pb-6 text-[20px] leading-[34px] text-black transition-opacity duration-200 whitespace-pre-line",
                          isOpen ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}