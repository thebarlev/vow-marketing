type Step = {
  id: string
  number: string
  title: string
  description: string
  timing: string
}

const STEPS_HE: readonly Step[] = [
  {
    id: "seo-ai-step-1",
    number: "1",
    title: "אבחון מעמיק, ביום הראשון",
    description:
      "סריקה עמוקה לאתר שלך: תוכן, מבנה, מהירות, נכונות AI, תחרות. ",
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

const STEPS_EN: readonly Step[] = [
  {
    id: "seo-ai-step-1",
    number: "1",
    title: "Deep audit, day one",
    description:
      "Deep scan of your site: content, structure, speed, AI readiness, competition. ",
    timing: "Days 1–3",
  },
  {
    id: "seo-ai-step-2",
    number: "2",
    title: "Clear monthly work plan",
    description:
      "Clear plan. Actual execution. Measurable results. No reports.",
    timing: "Week 1",
  },
  {
    id: "seo-ai-step-3",
    number: "3",
    title: "Execution, not more reports",
    description:
      "Upgrade content, structure, service pages, FAQs, schemas. Optimize for Google and AI engines. We do it, not just recommend.",
    timing: "Weeks 2–4",
  },
  {
    id: "seo-ai-step-4",
    number: "4",
    title: "Measurement and reporting, real data",
    description:
      "Every month end: how much traffic came, what improved, what's next. Full transparency always.",
    timing: "End of each month",
  },
] as const

export function SeoAiProcessSteps({ locale = "he" }: { locale?: "he" | "en" }) {
  const isLtr = locale === "en"
  const steps = isLtr ? STEPS_EN : STEPS_HE
  return (
    <section aria-label={isLtr ? "Process" : "התהליך"} className="py-[var(--space-section)] bg-[#F4F1EC]" dir={isLtr ? "ltr" : "rtl"}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        <div className="mx-auto w-full max-w-[620px] rounded-3xl bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <div className={isLtr ? "text-left" : "text-right"}>
            <div className="text-[#5389BB] text-[14px] font-semibold">{isLtr ? "Process" : "התהליך"}</div>
            <h2 className={`mt-2 text-black text-[34px] font-semibold leading-[1.15] sm:text-[44px] ${isLtr ? "text-left" : "text-right"}`}>
              {isLtr ? "What happens from day one" : "מה קורה מהיום הראשון"}
            </h2>
            <p className="mt-3 text-[22px] font-semibold leading-[28px] text-[color:var(--vow-muted)] sm:text-[20px]">
              {isLtr ? "Full transparency. Every month you know exactly what was done and what's next." : "שקיפות מלאה. כל חודש אתה יודע בדיוק מה נעשה ומה מצפה לך."}
            </p>
          </div>

          <div className="relative mt-10">
            <div className={`absolute top-2 bottom-2 w-px bg-[#B8CFE4] ${isLtr ? "left-6" : "right-6"}`} aria-hidden="true" />

            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.id} className={`relative ${isLtr ? "pl-20 text-left" : "pr-20 text-right"}`}>
                  <div
                    className={`absolute top-0 flex h-10 w-10 items-center justify-center rounded-md bg-[#5389BB] text-white text-[14px] font-semibold ${isLtr ? "left-2" : "right-2"}`}
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

