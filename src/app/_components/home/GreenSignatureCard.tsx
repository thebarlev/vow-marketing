"use client";
import { CheckIcon } from "./CheckIcon"
import Image from "next/image"

import { useState } from "react"
import { Popup, LeadSource } from "./Popup"

export function GreenSignatureCard() {

  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState<{ 
    title: string; 
    description: string; 
    toptext: string; 
    source: LeadSource 
  }>({
    title: '',
    description: '',
    toptext: '',
    source: 'smart_accounting_ai',
  });
  
  const handleOpen = (title: string, description: string, toptext: string, source: LeadSource) => {
    setPopupData({ title, description, toptext, source });
    setOpen(true);
  };

  return (
    <section aria-label="חתימה ירוקה" className="py-[var(--space-section)] mobile-margin-top pb-20">
      <div
        data-gs-root
        className="mx-auto  max-w-[1440px] px-4 sm:px-6 lg:px-3 relative"
      >
        <div
  data-gs-grid
  className="relative grid  main-row gap-0 lg:grid-cols-[1fr_3fr]"
>
          {/* Card - ימין */}
          <div
  data-gs-card-col
  className="order-2 sm:order-1 lg:order-1 relative z-10 flex justify-start items-center"
>
            <div className="w-full  py-[25px] rounded-[10px] rounded-l-none bg-white px-[30px] border border-[#D2E3E7] border-l-0" style={{ boxShadow: '0 0 24px -5px rgba(0, 0, 0, 0.07)' }}>
              <p className="t-title ">
                חינם לשנה
              </p>
              <h3 className="mt-3  h3-title">
חתימה דיגיטלית מאובטחת              </h3>
            <button
  type="button"
  className="vow-btn-primary mt-4 w-full max-w-[323px] cursor-pointer"
  onClick={() =>
    handleOpen(
      "חתימה דיגיטלית מאובטחת", // title (from h3)
      "פתרון חתימה מאובטח, מהיר וחוקי", // description
      "מוגבל ל-100 בלבד | נותרו פחות מ־10 מקומות", // top text (from p)
      "smart_accounting_ai" // source
    )
  }
>
  להצטרפות
</button>
              <div className="py-[30px]">
                <div className="w-full max-w-[323px] h-px bg-[#CCCCCC]" />
              </div>
              <ul className="space-y-4 text-[20px] leading-9 py-2 text-black" dir="rtl">
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
    <span>שמירה וגיבוי מלאים </span>
  </li>
  <li className="flex items-start gap-3">
    <CheckIcon className="shrink-0" />
    <span>מוכן לביקורת ולדוחות</span>
  </li>
</ul>
            </div>
          </div>

          {/* Image column - שמאל */}
          <div data-gs-image-col className="order-1 sm:order-2 lg:order-2 relative h-[clamp(520px,55vw,768px)] overflow-visible">
            {/* Bleed container */}
            <div
              data-gs-bleed
              className="absolute left-0 top-0 h-[clamp(520px,55vw,768px)] w-screen overflow-hidden"
              style={{
                transform: 'translateX(clamp(-9999px, calc(720px - 50vw), 0px))'
              }}
            >
              {/* Image frame with border radius */}
              <div
                data-gs-image-frame
                className="absolute -left-[120px] top-0 h-full overflow-hidden rounded-[20px]"
                style={{
                  width: 'calc(clamp(520px, 55vw, 768px) * 1.32473 + 120px)'
                }}
              >
                {/* Image wrapper shifted right */}
                <div className="absolute left-[120px] top-0 h-full">
                  <Image
                    src="/vowapp.webp"
                    alt="Green signature"
                    width={975}
                    height={736}
                    sizes="(min-width: 1024px) 1020px, 90vw"
                    className="h-full w-auto max-w-none object-contain object-left"
                    priority
                  />
                </div>
              </div>
            </div>
                <Image
                  src="/iphone_vow.svg"
                  alt="ממשק VOW"
  width={220}
  height={440}
                  className="absolute z-[999] -top-20 -left-6 w-[220px] sm:w-[220px] h-auto
    pointer-events-none mobile-image  object-right sm:hidden"
                  priority
                />
          </div>
        </div>
      </div>

      {open && (
        <Popup
          title={popupData.title}
          description={popupData.description}
          toptext = {popupData.toptext}
          source={popupData.source}
          onClose={() => setOpen(false)}
        />
      )}

    </section>
  )
}
