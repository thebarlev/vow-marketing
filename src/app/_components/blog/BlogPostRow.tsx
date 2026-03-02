import Link from "next/link"

import { formatDateHe, getCategoryLabel } from "./blog.utils"

type Props = {
  href: string
  title: string
  date: string
  category: string
  readingTimeMinutes?: number
}

export function BlogPostRow({ href, title, date, category, readingTimeMinutes }: Props) {
  const metaParts = [
    formatDateHe(date),
    getCategoryLabel(category),
    typeof readingTimeMinutes === "number" ? `${readingTimeMinutes} דק׳ קריאה` : undefined,
  ].filter(Boolean)

  return (
    <Link
      href={href}
      className="group block w-full border-b border-black/10 py-6 transition-colors hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10"
    >
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-0">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="text-balance text-[22px] font-semibold leading-[1.25] text-black sm:text-[26px] lg:text-[30px]">
              <span className="underline-offset-4 group-hover:underline">{title}</span>
            </h3>
            <p className="mt-2 text-[14px] font-medium text-[#747474] sm:text-[15px]">
              {metaParts.join(" · ")}
            </p>
          </div>

          <div className="hidden shrink-0 sm:flex items-center gap-2 pt-1 text-[15px] font-semibold text-black/80">
            <span className="underline-offset-4 group-hover:underline">קרא עוד</span>
            <span aria-hidden="true">←</span>
          </div>
        </div>

        <div className="mt-3 sm:hidden text-[15px] font-semibold text-black/80">
          <span className="underline-offset-4 group-hover:underline">קרא עוד</span>{" "}
          <span aria-hidden="true">←</span>
        </div>
      </div>
    </Link>
  )
}

