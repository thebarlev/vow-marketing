"use client"

/* eslint-disable react-hooks/static-components */

import * as React from "react"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer2/hooks"

const mdxComponents = {
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a {...props} className="underline underline-offset-4 hover:text-[#5389BB]" />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 {...props} className="mt-12 text-right md:text-right" />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 {...props} className="mt-8 text-right md:text-right" />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="mt-5 text-[18px] leading-[34px] text-black/80" />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul {...props} className="mt-5 list-disc pr-6 text-[18px] leading-[34px] text-black/80" />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol {...props} className="mt-5 list-decimal pr-6 text-[18px] leading-[34px] text-black/80" />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li {...props} className="mt-2 text-[18px] leading-[34px] text-black/80" />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto rounded-2xl border border-black/10 bg-black/[0.03] p-4 text-left text-[13px] leading-[20px]"
      dir="ltr"
    />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      {...props}
      className="rounded-md bg-black/[0.06] px-1.5 py-0.5 text-[0.92em] text-black"
      dir="ltr"
    />
  ),
  Link,
}

export function MdxContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <div className="mt-10">
      <Component components={mdxComponents} />
    </div>
  )
}

