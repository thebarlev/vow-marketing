"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const HEADER_PAGES_LINKS = [
  { href: "/design", label: "עיצוב ומיתוג " },
  { href: "/develop", label: "פיתוח אתרים בסביבת AI" },
  { href: "/develop-ai", label: "פיתוח תוכנה בסבית AI" },
] as const

const HEADER_DEV_DROPDOWN = [
  { href: "/develop", label: "פיתוח אתרים בסביבת AI" },
  { href: "/develop-ai", label: "פיתוח תוכנה בסביבת AI" },
] as const

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header role="banner" className="relative z-50 bg-[#F4F1EC]">
      <a href="#main" className="skip-link">
        דלג לתוכן
      </a>
      <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-4">
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
              width={150}
              height={46}
              priority
              className="h-auto w-[149px]"
            />
          </Link>

          {/* Navigation */}
          <ul className="flex flex-nowrap items-center gap-1">
            {/* המבורגר — רק במובייל, בצד ימין */}
            <li className="sm:hidden flex items-center">
              <button
                type="button"
                aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="flex h-8 w-10 items-center justify-center rounded-md transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vow-accent)]"
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
            <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-2 bg-white/90 backdrop-blur-sm shadow-[0_1px_6px_rgba(0,0,0,0.06)] border border-gray-100 rounded-2xl px-3 py-2">
            <li 
    className="flex items-center w-full sm:w-[125px] justify-center sm:justify-end sm:text-right whitespace-nowrap sm:whitespace-normal" 
    style={{ fontSize: '16px', lineHeight: '20px' }}
  >
    חשבונית דיגיטלית שנה חינם
  </li>
  <div className="flex items-center gap-2">
    <li className="flex items-center ">
    <a href="https://app.vow.co.il" className="vow-btn-primary !h-[44px] !sm:h-[50px]">
    הצטרפות
      </a>
    </li>
    <li className="flex items-center">
    <a href="https://app.vow.co.il/login" className="vow-btn-secondary !h-[44px] !sm:h-[50px]">
    התחברות
      </a>
    </li>
  </div>
</div>
            {/* קישורים — מוצגים בדסקטופ (כדי לא להעמיס על מובייל) */}
            {/* עיצוב — לינק רגיל */}
            <li className="hidden md:flex md:items-center">
              <Link
                href="/design"
                className="link-standard text-[18px] leading-normal px-3 py-2 hover:text-[#5389BB] transition-colors no-underline hover:underline"
              >
                עיצוב ומיתוג{" "}
              </Link>
            </li>

            {/* פיתוח AI — דרופדאון (דסקטופ בלבד) */}
            <li className="hidden md:flex md:items-center relative group">
              <button
                type="button"
                className="link-standard text-[18px] leading-normal px-3 py-2 hover:text-[#5389BB] transition-colors no-underline hover:underline inline-flex items-center gap-1"
                aria-haspopup="menu"
              >
                פיתוח AI
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-[2px]">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="pointer-events-none absolute right-0 top-full z-50 mt-0 w-[220px] rounded-xl border border-black/10 bg-white shadow-lg opacity-0 translate-y-1 transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0">
                <ul role="menu" className="py-2 text-right">
                  {HEADER_DEV_DROPDOWN.map((item) => (
                    <li key={item.href} role="none">
                      <Link
                        role="menuitem"
                        href={item.href}
                        className="block px-4 py-2 text-[16px] font-semibold text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vow-accent)] rounded-md mx-2"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="hidden md:flex md:items-center">
              <Link
                href="/contact"
                className="link-standard text-[18px] leading-normal px-3 py-2 hover:text-[#5389BB] transition-colors no-underline hover:underline"
              >
                יצירת קשר
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
            {HEADER_PAGES_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="link-standard text-[20px] leading-normal py-2 hover:text-[#5389BB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="link-standard text-[20px] leading-normal py-2 hover:text-[#5389BB] transition-colors"
            >
              יצירת קשר
            </Link>
            
          </div>
        )}
      </div>
    </header>
  )
}