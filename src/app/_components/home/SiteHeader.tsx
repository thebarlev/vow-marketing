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
          <Link
            href="/"
            className="flex items-center lg:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vow-accent)] rounded-md"
            aria-label="VOW — חזרה לעמוד הבית"
          >
<Image
  src="/logo.svg"
  alt="VOW Logo"
  width={80}
  height={46}
  className="w-[119px] lg:max-w-full h-auto flex items-center gap-2 py-1"
/>
            <span className="text-2xl font-bold tracking-tight text-black">
              
            </span>
          </Link>

          <ul className="flex flex-wrap items-center gap-2 max-w-full">
          <li>
  <a
    className="vow-btn-secondary"
    href="https://app.vow.co.il/login"
  >
    התחברות
  </a>
</li>
<li>
  <a
    className="vow-btn-primary"
    href="https://app.vow.co.il/register"
  >
    הצטרפות
  </a>
</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}