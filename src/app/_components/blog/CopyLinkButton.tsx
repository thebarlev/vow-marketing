"use client"

import { useState } from "react"

export function CopyLinkButton({ href }: { href: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 px-3 py-2 text-[13px] font-semibold text-black transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10"
    >
      {copied ? "הועתק" : "העתק קישור"}
    </button>
  )
}

