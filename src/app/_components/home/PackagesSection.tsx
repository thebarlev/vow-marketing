"use client";
import { CheckIcon } from "./CheckIcon"
import { OUR_PACKAGES } from "./home.constants"
import { useCallback, useState } from "react"
import { Popup, LeadSource } from "./Popup"
import { POPUP_OVERRIDES_BY_PATH, type PopupIconVariant } from "@/app/_components/products/productPopupOverrides"

export function PackagesSection() {

  const [open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState<{ 
    title: string; 
    description: string; 
    toptext: string; 
    source: LeadSource;
    iconVariant?: PopupIconVariant;
  }>({
    title: '',
    description: '',
    toptext: '',
    source: 'design_development',
    iconVariant: "default",
  });

  const handleOpen = useCallback(
    (title: string, description: string, toptext: string, source: LeadSource, iconVariant: PopupIconVariant = "default") => {
      setPopupData({ title, description, toptext, source, iconVariant })
    setOpen(true);
    },
    []
  );

  const openPopupWithPossibleOverride = useCallback(
    (fallback: { title: string; description: string; toptext?: string; source: LeadSource }) => {
      const override = POPUP_OVERRIDES_BY_PATH[window.location.pathname]
      if (override) {
        handleOpen(
          override.title,
          override.description,
          override.toptext ?? "",
          override.source ?? fallback.source,
          override.iconVariant ?? "default"
        )
        return
      }

      handleOpen(fallback.title, fallback.description, fallback.toptext ?? "", fallback.source, "default")
    },
    [handleOpen]
  )

  return (
    <section aria-label="החבילות שלנו" className="py-[var(--space-section)]  bg-[#F4F1EC]">
      <div id="lead-design-development" className="scroll-mt-24" />
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-8">
        <h2 className="text-center text-[44px] pb-0 font-semibold leading-[52px] text-black sm:text-[56px] sm:leading-[64px] lg:text-[70px] lg:leading-[80px]">
          השירותים שלנו
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-1 lg:place-items-stretch lg:justify-center">
           {OUR_PACKAGES.map((p) => (
    <article
  key={p.title}
  className="rounded-[10px] bg-white w-[98%] max-w-[386px] mx-auto lg:w-full lg:max-w-[350px] lg:mx-auto p-6 shadow-[0_0_24px_10px_rgba(0,0,0,0.07)] flex flex-col items-stretch"
>
              <p className="text-right text-[20px] font-semibold leading-[32px] text-[color:var(--vow-accent)]">
                 {p.kicker}
              </p>
              <h3 className="h3-title text-[40px] py-2">
                {p.title}
              </h3>

              <button
  type="button"
  className="vow-btn-primary mt-4 w-full cursor-pointer"
  onClick={() =>
    openPopupWithPossibleOverride({
      title: p.title,
      description: p.kicker,
      toptext: p.toppopup ?? "",
      source: p.source,
    })
  }
>
  {p.buttonLabel}
</button>
<div className="mt-7 h-px w-full bg-[color:var(--vow-border)]" />

              <ul className="mt-4 space-y-1 text-left text-[18px] font-normal leading-[40px] text-black sm:text-[20px] sm:leading-[56px]">
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
       {/* Popup */}
      {open && (
        <Popup
          title={popupData.title}
          description={popupData.description}
          toptext = {popupData.toptext}
          source={popupData.source}
          iconVariant={popupData.iconVariant}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  )
}

