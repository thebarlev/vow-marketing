import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "VOW – AI Accountant, Digital Invoice & Web Development",
  description:
    "VOW provides smart solutions for small and medium businesses: AI accountant, secure digital invoice, marketing, design and web development.",
}

export default function EnHomePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <header className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/en" className="text-xl font-semibold text-black">
            VOW
          </Link>
          <nav className="flex gap-6">
            <Link href="/en" className="hover:underline">
              Home
            </Link>
            <Link href="/" className="hover:underline">
              עברית
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-black sm:text-5xl lg:text-6xl">
          VOW – AI Accountant, Digital Invoice & Web Development
        </h1>
        <p className="mt-6 text-lg text-[#747474] max-w-2xl">
          Smart solutions for small and medium businesses. AI accountant, secure
          digital invoice for one year free, marketing, design and web
          development.
        </p>
        <div className="mt-10">
          <a
            href="https://app.vow.co.il"
            className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-semibold text-white hover:bg-black/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </main>
    </div>
  )
}
