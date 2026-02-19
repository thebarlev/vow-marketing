"use client"
import * as React from "react"

function prefersReducedMotion() {
  if (typeof window === "undefined") return true
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
}

export function HeroRotatingTags(props: { items: readonly string[] }) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    if (prefersReducedMotion()) return
    if (props.items.length <= 1) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % props.items.length)
    }, 3000)
    return () => window.clearInterval(id)
  }, [props.items.length])

  return (
    <div
      className="inline-flex flex-col lg:flex-row flex-wrap sm:items-center lg:items-center justify-start lg:justify-end gap-[20px] sm:gap-[30px] lg:gap-[30px] text-right text-[28px] lg:text-[22px] font-normal leading-[32px] text-black"
      aria-label="תחומי פעילות"
    >
      {props.items.map((t, idx) => (
        <span
          key={t}
          className={
            idx === activeIndex
              ? "text-[color:var(--vow-accent)] font-semibold transition-all duration-300"
              : "text-black font-normal transition-all duration-300"
          }
        >
          {t}
        </span>
      ))}
    </div>
  )
}