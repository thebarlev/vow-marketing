import { CheckIcon } from "./CheckIcon"
import { OUR_PACKAGES } from "./home.constants"
import { useState } from "react";
import { Popup } from "./Popup"

export function PackagesSection() {

  const [open, setOpen] = useState(false);
const [popupData, setPopupData] = useState<{ title: string; description: string }>({
  title: '',
  description: '',
});

  const handleOpen = (title: string, description: string) => {
  setPopupData({ title, description });
  setOpen(true);
};

const handleClose = () => setOpen(false);

  return (
    <section aria-label="החבילות שלנו" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-8">
        <h2 className="text-center text-[44px] pb-8 font-semibold leading-[52px] text-black sm:text-[56px] sm:leading-[64px] lg:text-[70px] lg:leading-[80px]">
          החבילות שלנו
        </h2>

        <div className="mt-8 grid gap-14 all-package lg:grid-cols-3">
          {OUR_PACKAGES.map((p) => (
            <article
              key={p.title}
              className="rounded-[18px] border border-[color:var(--vow-border)] bg-white p-6 shadow-sm"
            >
              <p className="text-right text-[20px] font-semibold leading-[32px] text-[color:var(--vow-accent)]">
                 {p.kicker}
              </p>
              <h3 className="h3-title text-[40px] py-2">
                {p.title}
              </h3>

              <button
                type="button"
                className="vow-btn-primary mt-4 w-full max-w-[323px]"
                onClick={() => handleOpen(p.title, p.kicker)}
              >
                {p.buttonLabel}
              </button>

              <div className="mt-5 h-px w-full bg-[color:var(--vow-border)]" />

              <ul className="mt-4 space-y-2 text-left text-[18px] font-normal leading-[40px] text-black sm:text-[20px] sm:leading-[56px]">
  {p.bullets.map((b) => (
    <li key={b} className="flex items-center gap-3">
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
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  )
}

