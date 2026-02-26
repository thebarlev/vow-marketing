import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { allArticles } from "contentlayer/generated"

import { BlogShell } from "@/app/_components/blog/BlogShell"
import { BlogIndexControls } from "@/app/_components/blog/BlogIndexControls"
import { BlogPostRow } from "@/app/_components/blog/BlogPostRow"
import { coerceBlogCategory, coerceBlogSort, parseTagsParam } from "@/app/_components/blog/blog.utils"

export const metadata: Metadata = {
  title: "בלוג | VOW",
  description: "תובנות ומדריכים על פיתוח אתרים, אוטומציות, שיווק ו‑AI לעסקים.",
}

type SearchParams = Record<string, string | string[] | undefined>

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>
}) {
  const sp = (await searchParams) ?? {}
  const category = coerceBlogCategory(sp.category)
  const sort = coerceBlogSort(sp.sort)
  const tags = parseTagsParam(sp.tags)

  const availableTags = Array.from(
    new Set(
      allArticles
        .flatMap((a) => (Array.isArray(a.tags) ? (a.tags as unknown[]) : []))
        .map((t) => (typeof t === "string" ? t : ""))
        .filter(Boolean)
    )
  ).sort((a, b) => a.localeCompare(b, "he"))

  const filtered = allArticles
    .filter((a) => (category === "all" ? true : a.category === category))
    .filter((a) => {
      if (!tags.length) return true
      const articleTags = Array.isArray(a.tags) ? (a.tags as unknown[]) : []
      const set = new Set(articleTags.filter((t): t is string => typeof t === "string"))
      return tags.every((t) => set.has(t))
    })
    .slice()
    .sort((a, b) => {
      const ta = new Date(a.date).getTime()
      const tb = new Date(b.date).getTime()
      return sort === "oldest" ? ta - tb : tb - ta
    })

  return (
    <BlogShell>
      <section aria-label="כותרת בלוג" className="pt-10 pb-8 sm:pt-14">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
          <div className="mx-auto max-w-[980px]">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h1 className="text-balance text-[44px] font-semibold leading-[1.05] text-black sm:text-[56px] lg:text-[70px]">
                  בלוג
                </h1>
                <p className="mt-4 text-pretty text-[18px] leading-[30px] text-[#747474] sm:text-[20px] sm:leading-[34px]">
                  תובנות קצרות ומעשיות על פיתוח אתרים, אוטומציות, שיווק ו‑AI — כדי לבנות תהליך דיגיטלי שמייצר תוצאה.
                </p>
              </div>

              <div className="hidden sm:flex shrink-0 pt-2">
                <Link href="/contact" className="vow-btn-secondary">
                  דברו איתנו
                </Link>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/contact" className="vow-btn-secondary w-full justify-center">
                דברו איתנו
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <BlogIndexControls availableTags={availableTags} />
      </Suspense>

      <section aria-label="רשימת מאמרים" className="pb-[var(--space-section)]">
        <div className="mx-auto max-w-[1440px] px-0 sm:px-0 lg:px-0">
          {filtered.length ? (
            filtered.map((a) => (
              <BlogPostRow
                key={a.slug}
                href={`/blog/${a.slug}`}
                title={a.title}
                date={a.date}
                category={a.category}
                readingTimeMinutes={a.readingTimeMinutes}
              />
            ))
          ) : (
            <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-0 py-10">
              <p className="text-[18px] font-semibold text-black">לא נמצאו מאמרים.</p>
              <p className="mt-2 text-[16px] text-[#747474]">נסו לשנות את הסינון או לאפס.</p>
            </div>
          )}
        </div>
      </section>
    </BlogShell>
  )
}

