import { EnLink } from "./EnLink"

export function EnBlogEndCta() {
  return (
    <section aria-label="Call to action" className="mt-14" dir="ltr">
      <div className="rounded-3xl border border-black/10 bg-white/60 px-6 py-8 sm:px-10 sm:py-10">
        <h2 className="text-left w-full pb-0 text-[32px] leading-[1.15] sm:text-[40px] lg:text-[46px]">
          Want us to review your business process?
        </h2>
        <p className="mt-4 text-pretty text-[18px] leading-[34px] text-[#747474] sm:text-[20px]">
          Leave your details and we&apos;ll return with a clear direction and practical steps — no commitment.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
          <EnLink href="/contact" className="vow-btn-primary w-full justify-center sm:w-auto">
            Get in touch
          </EnLink>
          <EnLink href="/contact" className="vow-btn-secondary w-full justify-center sm:w-auto">
            Contact us
          </EnLink>
        </div>
      </div>
    </section>
  )
}
