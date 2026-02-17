import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header role="banner" className="relative">
      <a href="#main" className="skip-link">
        דלג לתוכן
      </a>

      <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-3">
        <nav
          role="navigation"
          aria-label="ניווט ראשי"
          className="flex flex-row-reverse flex-wrap items-center justify-between gap-3 py-2 lg:py-6"
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
          <ul className="flex flex-nowrap items-center gap-2 max-w-full">
          <li>
              <a
                href="https://app.vow.co.il"
                className="vow-btn-primary"
              >
                הצטרפות
              </a>
            </li>

            <li>
              <a
                href="https://app.vow.co.il/login"
                className="vow-btn-secondary"
              >
                התחברות
              </a>
            </li>


            <li>
              <Link
                href="/pricing"
                className="link-standard text-[18px] leading-normal px-3 py-2 hover:text-[#5389BB] transition-colors"
              >
                מחירון
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
