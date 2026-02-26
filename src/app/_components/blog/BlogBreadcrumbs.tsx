import Link from "next/link"

import { getCategoryLabel } from "./blog.utils"

export function BlogBreadcrumbs({
  category,
  title,
}: {
  category: string
  title: string
}) {
  return (
    <nav aria-label="פירורי לחם" className="text-[14px] font-semibold text-black/70">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:underline underline-offset-4">
            בית
          </Link>
        </li>
        <li aria-hidden="true" className="text-black/30">
          ›
        </li>
        <li>
          <Link href="/blog" className="hover:underline underline-offset-4">
            בלוג
          </Link>
        </li>
        <li aria-hidden="true" className="text-black/30">
          ›
        </li>
        <li>
          <Link
            href={`/blog?category=${encodeURIComponent(category)}`}
            className="hover:underline underline-offset-4"
          >
            {getCategoryLabel(category)}
          </Link>
        </li>
        <li aria-hidden="true" className="text-black/30">
          ›
        </li>
        <li className="max-w-[60ch] truncate text-black/80" title={title}>
          {title}
        </li>
      </ol>
    </nav>
  )
}

