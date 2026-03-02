import Link from "next/link"

export function BlogEndCta() {
  return (
    <section aria-label="קריאה לפעולה" className="mt-14">
      <div className="rounded-3xl border border-black/10 bg-white/60 px-6 py-8 sm:px-10 sm:py-10">
        <h2 className="text-right md:text-right w-full pb-0 text-[32px] leading-[1.15] sm:text-[40px] lg:text-[46px]">
          רוצים שנבדוק את התהליך בעסק?
        </h2>
        <p className="mt-4 text-pretty text-[18px] leading-[34px] text-[#747474] sm:text-[20px]">
          השאירו פרטים ונחזור עם כיוון ברור ומהלך פרקטי — בלי התחייבות.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
          <Link href="/contact" className="vow-btn-primary w-full justify-center sm:w-auto">
            דברו איתנו
          </Link>
          <Link href="/contact" className="vow-btn-secondary w-full justify-center sm:w-auto">
            יצירת קשר
          </Link>
        </div>
      </div>
    </section>
  )
}

