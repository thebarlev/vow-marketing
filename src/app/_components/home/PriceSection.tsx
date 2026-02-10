"use client";

import { CheckIcon } from "./CheckIcon";
import { OUR_PRICE } from "./home.constants";
import { useState } from "react";
import { Popup, LeadSource } from "./Popup";

export function PriceSection() {
  // URL לאפליקציה – עובד בלוקאל ובפרודקשן
  const APP_BASE_URL =
    process.env.NEXT_PUBLIC_APP_BASE_URL ?? "https://app.vow.co.il";

  // נשאר בקובץ אבל לא בשימוש כרגע (אפשר למחוק לגמרי אם לא צריך)
  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState<{
    title: string;
    description: string;
    toptext: string;
    source: LeadSource;
  }>({
    title: "",
    description: "",
    toptext: "",
    source: "smart_accounting_ai",
  });

  return (
    <section aria-label="החבילות שלנו" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-8">
        <h2 className="text-center text-[44px] font-semibold leading-[52px] text-black sm:text-[56px] sm:leading-[64px] lg:text-[70px] lg:leading-[80px]">
          חשבונית ירוקה מאובטחת
        </h2>

        <p className="text-center text-[26px] py-3 text-[#747474] font-semibold leading-[32px]">
          תמיכה במודל חשבונית ישראל
        </p>

        <div className="mt-8 grid gap-14 all-package lg:grid-cols-3">
          {OUR_PRICE.map((p) => (
            <article
              key={p.title}
              className="rounded-[18px] relative inline-block border border-[color:var(--vow-border)] bg-white p-6 shadow-sm"
            >
              {p.badge && (
                <span className="absolute top-2 left-2 bg-[#5389BB] text-white text-[20px] font-semibold px-4 py-2 rounded-[15px]">
                  {p.badge}
                </span>
              )}

              <h3 className="h3-title text-[40px] py-2">{p.title}</h3>

              <h4 className="text-[30px] pt-2 font-semibold">
                {p.price}{" "}
                <span className="text-[20px] font-normal">
                  {p.priceextra}
                </span>
              </h4>

              <p className="text-right -mt-1 text-[20px] font-regular leading-[32px] text-[#000000]">
                {p.kicker}
              </p>

              {/* כפתור – מעבר ישיר ל־app.vow.co.il */}
              <button
                type="button"
                className="vow-btn-primary text-[20px] mt-5 mb-8 w-full cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.assign(APP_BASE_URL);
                }}
              >
                {p.buttonLabel}
              </button>

              <div className="mb-5 h-px w-full bg-[color:var(--vow-border)]" />

              <ul className="mt-4 space-y-0 text-left text-[18px] font-normal leading-[30px] text-black sm:text-[20px] sm:leading-[56px]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-1">
                    <CheckIcon className="shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* השארנו את ה-Popup כבוי לחלוטין */}
      {false && open && (
        <Popup
          title={popupData.title}
          description={popupData.description}
          toptext={popupData.toptext}
          source={popupData.source}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
