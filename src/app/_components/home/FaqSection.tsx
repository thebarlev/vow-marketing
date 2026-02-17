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
    question: "האם ניתן להפיק חשבוניות ומסמכים חשבונאיים בחינם לשנה?",
    answer: "כן. ניתן להפיק מסמכים חשבונאיים למשך שנה מלאה ללא עלות. כל המסמכים נשמרים אצלנו על פי חוק, כוללים חתימה דיגיטלית מאובטחת ועומדים בכל הדרישות והתקנות של מס הכנסה.",
  },
  {
    question: "האם המסמכים עומדים בדרישות החוק והרגולציה?",
    answer: "בהחלט. כל המסמכים מופקים בהתאם לתקנות מס הכנסה ומע״מ, כולל שמירה, אבטחה וחתימה דיגיטלית מאובטחת תקנית.",
  },
  {
    question: "האם יש תמיכה ושירות לקוחות?",
    answer: (
      <>
        כן. יש תמיכה אנושית מלאה:
        <br />
        <br />
        • צ&apos;אט באתר
        <br />
        • מייל: <a href="mailto:support@vow.co.il" className="text-blue-600 underline hover:text-blue-700">support@vow.co.il</a>
        <br />
        • טלפון / וואטסאפ: <a href="tel:0545215193" className="text-blue-600 underline hover:text-blue-700">054-5215193</a>
        <br />
        <br />
        לכל שאלה – אנחנו זמינים.
      </>
    ),
  },
  {
    question: "למי מתאים שירות ראיית חשבון AI?",
    answer: (
      <>
        השירות מתאים לכל מי שמחפש שקט נפשי, מקצועיות ודיוק, בלי הפתעות.
        <br />
        <br />
        הסוכן החכם שלנו למד את חוקי מס הכנסה וביטוח לאומי ומלווה אתכם בכל שלב.{" "}
        <Link href="/signup" className="text-blue-600 underline hover:text-blue-700 font-semibold">
          להרשמה
        </Link>
      </>
    ),
  },
  {
    question: "האם ניתן לשלב גם רואה חשבון אנושי?",
    answer: "כן. בנוסף לרואה חשבון AI, קיים מסלול הכולל רואה חשבון או יועץ מס אנושי, שיכול ללוות ולתת מענה אישי בעת הצורך.",
  },
  {
    question: "האם שירות רואה חשבון AI חוקי?",
    answer: (
      <>
        החוק בישראל מאפשר לבעלי עסקים (עוסק פטור / עוסק מורשה) להגיש דוחות חודשיים ושנתיים בעצמם.
        <br />
        <br />
        לכן בנינו את רואה חשבון ה-AI של VOW: הוא מנחה אותך שלב-אחר-שלב, מכין עבורך את רוב העבודה בצורה מדויקת ובהתאם לתקנות — ואתה רק מאשר ולוחץ.
        <br />
        <br />
        המערכת נבנתה על בסיס ניסיון מצטבר של 1,000+ רואי חשבון ויועצי מס, כדי להפוך את התהליך לפשוט, ברור ובטוח.
      </>
    ),
  },
  {
    question: "האם רואה חשבון AI מחליף רואה חשבון?",
    answer: "לא בהכרח. בשביל זה יש לנו רואה חשבון שילוו אתכם. רואה חשבון AI נועד לפשט, לייעל ולמנוע טעויות, והוא יכול לעבוד לבד או בשילוב עם רואה חשבון / יועץ מס אנושי – לפי הצורך שלך.",
  },
  {
    question: "איך רואה חשבון AI מכיר את העסק שלי?",
    answer: (
      <>
        רואה חשבון ה-AI של VOW פועל לפי התקנות והספרים של מס הכנסה, ביטוח לאומי ומע״מ.
        <br />
        <br />
        הוא לומד את העסק שלך לאורך זמן: את סוג הפעילות, המסמכים החשבונאיים, ההכנסות וההוצאות, ודפוסי ההתנהלות.
        <br />
        <br />
        על בסיס הידע הזה, המערכת מתאימה את ההתנהלות החשבונאית למצב בפועל — בצורה מסודרת, מבוקרת ובהתאם לכללים.
      </>
    ),
  },
  {
    question: "מה היתרון המרכזי לעומת ראיית חשבון רגילה?",
    answer: (
      <>
        הרואה חשבון עובד בשבילך 24/7, זמין לכל שאלה ונותן לך תשובה רק מתוך המידע של מס הכנסה, ביטוח לאומי ומע״מ.
        <br />
        <br />
        בלי טעויות, אין בלאגן, אין המתנות, ואין הפתעות.
        <br />
        <br />
        יש שליטה מלאה במסמכים, דיוק, עבודה לפי החוק, וליווי זמין – בכל רגע.
      </>
    ),
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
    <section aria-label="שאלות נפוצות" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
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
                          "pt-1 pb-6 text-[20px] leading-[34px] text-black transition-opacity duration-200",
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