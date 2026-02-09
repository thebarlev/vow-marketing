"use client";
import Image from "next/image"
import { ABOUT_US } from "./home.constants"
import { useState } from "react"
import { Popup } from "./Popup"

export function AboutSection() {

  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState<{ title: string; description: string, toptext: string }>({
    title: '',
    description: '',
    toptext: '',
  });
  
    const handleOpen = (title: string, description: string, toptext: string) => {
    setPopupData({ title, description, toptext });
    setOpen(true);
  };

  return (
    <section aria-label="חתימה ירוקה" className="py-[var(--space-section)] mobile-margin-top">
      <div
        data-gs-root
        className="mx-auto max-w-[1440px] rounded-[10px] mx-auto w-full px-4 sm:px-4 lg:px-3 relative"
      >
        <div
  data-gs-grid
  className="relative rounded-[10px] grid bg-white p-4 px-8 main-row gap-5 lg:grid-cols-2"
>
          {/* Card - ימין */}
          <div
  data-gs-card-col
  className="  relative z-10 flex justify-start items-center mr-4"
>
            <div className="w-full  py-[35px]">
              
              <h3 className="mt-3 text-[30px] sm:text-[70px] sm:leading-[1.1] font-semibold sm:max-w-[90%]"> למה זה נכון בשבילך להצטרף למהפכה של רו״ח AI
              </h3>
              <p className="text-[20px] pt-2 leading-[32px] text-[#747474] sm:max-w-[70%] lg:max-w-[70%]">
               למי זה מתאים: עוסקים פטורים בעלי עסקים עם מחזור עד 500,000 ₪ בשנה
              </p>
            <button
  type="button"
  className="vow-btn-primary mt-4 w-full max-w-[323px] cursor-pointer"
  onClick={() =>
    handleOpen(
      "חתימה דיגיטלית מאובטחת", // title (from h3)
      "פתרון חתימה מאובטח, מהיר וחוקי", // description
      "מוגבל ל-100 בלבד | נותרו פחות מ־10 מקומות" // top text (from p)
    )
  }
>
  להשארת פרטים
</button>
<p className="text-[20px] pt-2  leading-[32px] text-[#747474] sm:max-w-[70%]">
            המכסה מלאה – 100 העסקים הראשונים כבר הצטרפו.<br />
  כרגע ניתן להירשם רק לרשימת המתנה.
              </p>
               
            </div>
          </div>
          <div className=" relative h-full">
  {ABOUT_US.map((p) => (
    <article key={p.title} className="py-4 sm:p-6">
      
      {/* Title with icon */}
      <div className="flex items-center gap-3 py-2">
        <Image
          src={p.icon}
          alt={p.title}
          width={50}
          height={50}
          className="max-w-[39px] h-auto"
          priority
        />
        <h3 className="h3-title sm:text-[30px] font-semibold">
          {p.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-right text-[20px]  leading-[32px] text-[#000000] sm:max-w-[70%]">
        {p.kicker}
      </p>
      
    </article>
  ))}
</div>

        </div>
      </div>

      {open && (
        <Popup
          title={popupData.title}
          description={popupData.description}
          toptext = {popupData.toptext}
          onClose={() => setOpen(false)}
        />
      )}

    </section>
  )
}