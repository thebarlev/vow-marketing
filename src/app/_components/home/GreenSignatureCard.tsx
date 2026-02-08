import { CheckIcon } from "./CheckIcon"
import Image from "next/image"

export function GreenSignatureCard() {
  return (
    <section aria-label="חתימה ירוקה" className="py-[var(--space-section)]">
      <div
        data-gs-root
        className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-0 relative"
      >
        <div
          data-gs-grid
          className="relative grid items-center gap-10 lg:grid-cols-2"
        >
          {/* Card - ימין */}
          <div
            data-gs-card-col
            className="order-1 flex justify-center lg:order-1 lg:justify-end relative z-10 lg:translate-x-[calc(clamp(0px,calc((100vw-1440px)/2),320px)+200px)]"
          >
            <div className="w-full max-w-[386px] py-[35px] rounded-[10px] bg-white px-[30px] border border-[#D2E3E7]" style={{ boxShadow: '0 0 24px 10px rgba(0, 0, 0, 0.07)' }}>
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

          {/* Image - שמאל */}
          <div data-gs-image-col className="order-2 lg:order-2 relative z-20">
            {/* Placeholder keeps the left grid column height */}
            <div className="h-[clamp(520px,45vw,768px)]" aria-hidden />
          </div>

          {/* Full-bleed image window (anchored to viewport left, clipped) */}
          <div
            data-gs-bleed
            className="pointer-events-none absolute left-0 top-0 h-[clamp(520px,55vw,768px)] w-screen overflow-hidden translate-x-[clamp(-9999px,calc(720px-50vw),0px)]"
          >
            <div
              data-gs-image-frame
              className="absolute -left-[120px] top-0 h-full w-[calc(clamp(520px,55vw,768px)*1.32473+120px)] overflow-hidden rounded-[20px]"
            >
              {/* The image keeps full height (no vertical crop). Frame width controls reveal/clipping. */}
              <div className="absolute left-[120px] top-0 h-full">
                <Image
                  src="/vowapp.webp"
                  alt="ממשק VOW"
                  width={975}
                  height={736}
                  sizes="(min-width: 1024px) 1020px, 90vw"
                  className="h-full w-auto max-w-none object-contain object-left"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}