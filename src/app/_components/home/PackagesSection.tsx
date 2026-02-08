import { CheckIcon } from "./CheckIcon"
import { OUR_PACKAGES } from "./home.constants"

export function PackagesSection() {
  return (
    <section aria-label="החבילות שלנו" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-right text-[44px] font-semibold leading-[52px] text-black sm:text-[56px] sm:leading-[64px] lg:text-[70px] lg:leading-[80px]">
          החבילות שלנו
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {OUR_PACKAGES.map((p) => (
            <article
              key={p.title}
              className="rounded-[18px] border border-[color:var(--vow-border)] bg-white p-6 shadow-sm"
            >
              <h3 className="h3-title">
                {p.title}
              </h3>

              <button
                type="button"
                className="vow-btn-primary mt-4 w-full max-w-[323px]"
              >
                {p.buttonLabel}
              </button>

              <div className="mt-5 h-px w-full bg-[color:var(--vow-border)]" />

              <ul className="mt-4 space-y-2 text-right text-[18px] font-normal leading-[40px] text-black sm:text-[20px] sm:leading-[56px]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start justify-end gap-3">
                    <span>{b}</span>
                    <CheckIcon />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

