import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "@/lib/twMerge"

type H2Props = ComponentPropsWithoutRef<"h2">
type H3Props = ComponentPropsWithoutRef<"h3">

export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2
      className={twMerge("text-h2 font-semibold leading-[46px] text-black", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className, ...props }: H3Props) {
  return (
    <h3
      className={twMerge("text-h3 font-semibold leading-[32px] text-heading-sub", className)}
      {...props}
    >
      {children}
    </h3>
  )
}
