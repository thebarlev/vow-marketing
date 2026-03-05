type Step = {
  id: string
  number: string
  title: string
  description: string
  timing: string
}

const STEPS: readonly Step[] = [
  {
    id: "seo-ai-step-1",
    number: "1",
    title: "אבחון מעמיק, ביום הראשון",
    description:
      "סריקה עמוקה לאתר שלך: תוכן, מבנה, מהירות, נכונות AI, תחרות. תקבל דו״ח עם 5 דברים קריטיים לתיקון עכשיו.",
    timing: "יום 1–3",
  },
  {
    id: "seo-ai-step-2",
    number: "2",
    title: "תכנית עבודה חודשית, ברורה ומסודרת",
    description:
      "תכנית עבודה ברורה. ביצוע בפועל. תוצאות מדידות. לא דוחות.",
    timing: "שבוע 1",
  },
  {
    id: "seo-ai-step-3",
    number: "3",
    title: "ביצוע, לא עוד דוחות שמתאבקים",
    description:
      "משדרגים תוכן, מבנה, עמודי שירות, שאלות נפוצות, סכמות. מתאימים לגוגל ולמנועי AI. עושים, לא רק ממליצים.",
    timing: "שבוע 2–4",
  },
  {
    id: "seo-ai-step-4",
    number: "4",
    title: "מדידות ודיווחים, נתונים אמיתיים",
    description:
      "בכל סוף חודש: כמה תנועה הגיעה, מה השתפר, מה השלב הבא. שקיפות מלאה תמיד.",
    timing: "סוף כל חודש",
  },
] as const

export function SeoAiProcessSteps() {
  return (
    <section aria-label="התהליך" className="py-[var(--space-section)] bg-[#F4F1EC]" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        <div className="mx-auto w-full max-w-[620px] rounded-3xl bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <div className="text-right">
            <div className="text-[#5389BB] text-[14px] font-semibold">התהליך</div>
            <h2 className="mt-2 text-black text-[34px] font-semibold leading-[1.15] sm:text-[44px] text-right">
              מה קורה מהיום הראשון
            </h2>
            <p className="mt-3 text-[22px] font-semibold leading-[28px] text-[color:var(--vow-muted)] sm:text-[20px]">
              שקיפות מלאה. כל חודש אתה יודע בדיוק מה נעשה ומה מצפה לך.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute right-6 top-2 bottom-2 w-px bg-[#B8CFE4]" aria-hidden="true" />

            <div className="space-y-10">
              {STEPS.map((step) => (
                <div key={step.id} className="relative pr-20 text-right">
                  <div
                    className="absolute right-2 top-0 flex h-10 w-10 items-center justify-center rounded-md bg-[#5389BB] text-white text-[14px] font-semibold"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  <div className="text-[#5389BB] text-[20px] font-semibold leading-[28px] sm:text-[20px]">
                    {step.title}
                  </div>
                  <div className="mt-1 text-[20px] leading-[24px] text-black/80 sm:text-[20px]">
                    {step.description}
                  </div>
                  <div className="mt-2 text-[#5389BB] text-[16px] font-semibold">
                    {step.timing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

