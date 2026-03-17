import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"
import { growthGuideFooterLinksHe } from "@/lib/growth-guides/topics"

const LEGAL_LINKS = [
  { href: "/terms", label: "תנאים משפטיים" },
  { href: "/privacy", label: "פרטיות" },
  { href: "/account-deletion", label: "מחיקת חשבון" },
  { href: "/accessibility", label: "נגישות" },
] as const

const PRODUCTS_LINKS = [
  { href: "/seo-ai", label: "קידום עסקים במנועי AI" },
  { href: "/account-ai", label: "רואה חשבון AI" },
  { href: "/invoice", label: "חשבונית דיגיטלית מאובטחת" },
] as const

const PAGES_LINKS = [
  { href: "/design", label: "עיצוב ומיתוג" },
  { href: "/develop", label: "פיתוח אתרים מבוסס AI" },
  { href: "/develop-ai", label: "פיתוח תוכנה מבוסס AI" },
  { href: "/marketing/ppc", label: "שיווק PPC" },
  { href: "/portfolio", label: "פרויקטים נבחרים" },
] as const

const VOW_LINKS = [
  { href: "/blog", label: "בלוג" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "יצירת קשר" },
] as const

const GROWTH_GUIDE_LINKS = growthGuideFooterLinksHe

type FooterColumn = {
  title: string
  items: readonly { href: string; label: string }[]
}

const FOOTER_COLUMNS: readonly FooterColumn[] = [
  { title: "חשוב לדעת", items: LEGAL_LINKS },
  { title: "שירותים של VOW", items: PAGES_LINKS },
  { title: "מוצרים של VOW", items: PRODUCTS_LINKS },
  { title: "מדריכי צמיחה", items: GROWTH_GUIDE_LINKS },
  { title: "VOW", items: VOW_LINKS },
] as const

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="bg-black" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-x-9 gap-y-10 md:grid-cols-6 md:gap-x-10">

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="text-right">
              <p className="text-[18px] font-semibold text-[#A1A1A1] mb-4 leading-[1.1] sm:leading-[1.3]">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="leading-[1.2] text-[18px] font-normal text-white hover:text-white underline-offset-4 hover:underline transition-colors "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logo */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-2 md:items-end">
            <Image
              src="/footer-logo.svg"
              alt="VOW logo — digital marketing, SEO AI and website development"
              width={80}
              height={46}
              className="w-auto h-auto"
            />
            <p className="text-[14px] text-white pl-6">For success</p>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">

          <div className="flex items-center gap-5 justify-end sm:justify-start">
            <Link
              href="/contact"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="יצירת קשר"
            >
              <FaEnvelope size={16} />
            </Link>
            <a
              href="https://www.instagram.com/vow.for.success?igsh=MTRiMmRieTNlejlsNQ%3D%3D&utm_source=qr"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://x.com/Vowsuccess"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61587713103366"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
          </div>

          <p className="text-[13px] text-white/50 text-right sm:text-left">
            © {new Date().getFullYear()} VOW
          </p>

        </div>
      </div>
    </footer>
  )
}