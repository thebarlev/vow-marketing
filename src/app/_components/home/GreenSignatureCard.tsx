import { CheckIcon } from "./CheckIcon"
import Image from "next/image"

export function GreenSignatureCard() {
  return (
    <section aria-label="חתימה ירוקה" className="py-[var(--space-section)] hidden sm:block">
      <div
        data-gs-root
        className="mx-auto w-full px-4 sm:px-6 lg:px-3 relative"
      >
        <div
  data-gs-grid
  className="relative grid  main-row gap-0 lg:grid-cols-[1fr_3fr]"
>
          {/* Card - ימין */}
          <div
  data-gs-card-col
  className="relative z-10 flex justify-start items-center mr-4"
>
            <div className="w-full  py-[35px] rounded-[10px] rounded-l-none bg-white px-[30px] border border-[#D2E3E7] border-l-0" style={{ boxShadow: '0 0 24px -5px rgba(0, 0, 0, 0.07)' }}>
              <p className="t-title">
                חינם לשנה
              </p>
              <h3 className="mt-3 h3-title">
חתימה דיגיטלית מאובטחת              </h3>
              <button
  type="button"
  className="vow-btn-primary mt-4 w-full max-w-[323px]"
>
  להצטרפות
</button>
              <div className="py-[30px]">
                <div className="w-full max-w-[323px] h-px bg-[#CCCCCC]" />
              </div>
              <ul className="space-y-4 text-[18px] leading-7 text-black" dir="rtl">
  <li className="flex items-start gap-3">
    <CheckIcon className="shrink-0" />
    <span>הפקת מסמכים רציפה </span>
  </li>
  <li className="flex items-start gap-3">
    <CheckIcon className="shrink-0" />
    <span>חתימה דיגיטלית מאובטחת</span>
  </li>
  <li className="flex items-start gap-3">
    <CheckIcon className="shrink-0" />
    <span>מספור תקין, בלי חורים</span>
  </li>
  <li className="flex items-start gap-3">
    <CheckIcon className="shrink-0" />
    <span>שמירה וגיבוי מלאים</span>
  </li>
  <li className="flex items-start gap-3">
    <CheckIcon className="shrink-0" />
    <span>מוכן לביקורת ולדוחות</span>
  </li>
</ul>
            </div>
          </div>
          <div className="relative h-full">
           <Image
                  src="/vowapp.webp"
                  alt="ממשק VOW"
                  width={975}
                  height={736}
                  sizes="(min-width: 1024px) 1020px, 90vw"
                  className="h-full w-full  object-right"
                  priority
                />
          </div>
        </div>
      </div>
    </section>
  )
}