import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "@/lib/twMerge"

type H2Props = ComponentPropsWithoutRef<"h2">
type H3Props = ComponentPropsWithoutRef<"h3">

/** Use explicit text-[40px] leading-[36px] instead of text-h2 to avoid hydration mismatch.
 *  text-h2 in tailwind.config includes lineHeight:46px which can differ server vs client. */
export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2
      className={twMerge("text-[40px] font-semibold leading-[40px] text-black", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

/** Use explicit values to avoid hydration mismatch with text-h3 token. */
export function H3({ children, className, ...props }: H3Props) {
  return (
    <h3
      className={twMerge("text-[26px] font-semibold leading-[32px] text-heading-sub", className)}
      {...props}
    >
      {children}
    </h3>
  )
}
