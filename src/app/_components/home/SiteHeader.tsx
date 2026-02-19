"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header role="banner" className="relative z-50 bg-[#F4F1EC]">
      <a href="#main" className="skip-link">
        דלג לתוכן
      </a>
      <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-4ד">
        <nav
          role="navigation"
          aria-label="ניווט ראשי"
          className="flex flex-row-reverse items-center justify-between gap-3 py-4 lg:py-6"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center lg:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vow-accent)] rounded-md"
            aria-label="VOW — חזרה לעמוד הבית"
          >
            <Image
              src="/logo.svg"
              alt="VOW Logo"
              width={119}
              height={46}
              priority
              className="h-auto w-[119px]"
            />
          </Link>

          {/* Navigation */}
          <ul className="flex flex-nowrap items-center gap-2">
            {/* המבורגר — רק במובייל, בצד ימין */}
            <li className="sm:hidden flex items-center">
              <button
                type="button"
                aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vow-accent)]"
              >
                {menuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <line x1="2" y1="2" x2="20" y2="20" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="20" y1="2" x2="2" y2="20" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <line x1="2" y1="5" x2="20" y2="5" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="2" y1="11" x2="20" y2="11" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="2" y1="17" x2="20" y2="17" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </li>

            {/* כפתורים — תמיד מוצגים */}
            <li className="flex items-center">
              <a href="https://app.vow.co.il" className="vow-btn-primary ">
                הצטרפות
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://app.vow.co.il/login" className="mr-3 vow-btn-secondary">
                התחברות
              </a>
            </li>

            {/* מחירון — נסתר במובייל */}
            <li className="hidden sm:flex sm:items-center">
              <Link
                href="/pricing"
                className="link-standard text-[18px] leading-normal px-3 py-2 hover:text-[#5389BB] transition-colors no-underline hover:underline"
              >
                מחירון
              </Link>
            </li>
          </ul>
        </nav>

        {/* Dropdown overlay — מובייל בלבד */}
        {menuOpen && (
          <div
            dir="rtl"
            className="sm:hidden absolute right-0 left-0 top-full z-50 bg-white shadow-lg border-t border-[var(--vow-border)] px-6 py-6 flex flex-col gap-4"
          >
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="link-standard text-[20px] leading-normal py-2 hover:text-[#5389BB] transition-colors"
            >
              מחירון
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}