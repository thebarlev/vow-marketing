import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"
import { EnLink } from "./EnLink"

const LEGAL_LINKS = [
  { href: "/en/terms", label: "Terms" },
  { href: "/en/privacy", label: "Privacy" },
  { href: "/en/account-deletion", label: "Account deletion" },
  { href: "/en/accessibility", label: "Accessibility" },
] as const

const PRODUCTS_LINKS = [
  { href: "/en/seo-ai", label: "Search Performance Optimization" },
  { href: "/en/account-ai", label: "AI Accountant" },
  { href: "/en/invoice", label: "Digital Invoice" },
] as const

const SERVICES_LINKS = [
  { href: "/en/design", label: "Design & Branding" },
  { href: "/en/develop", label: "Web Development" },
  { href: "/en/develop-ai", label: "Software Development" },
  { href: "/en/marketing/ppc", label: "PPC Marketing" },
  { href: "/en/portfolio", label: "Portfolio" },
] as const

const VOW_LINKS = [
  { href: "/en/blog", label: "Blog" },
  { href: "/en/about", label: "About" },
  { href: "/en/contact", label: "Contact" },
] as const

type FooterColumn = {
  title: string
  items: readonly { href: string; label: string }[]
}

const FOOTER_COLUMNS: FooterColumn[] = [
  { title: "Legal", items: LEGAL_LINKS },
  { title: "Services", items: SERVICES_LINKS },
  { title: "Products", items: PRODUCTS_LINKS },
  { title: "VOW", items: VOW_LINKS },
]

export function FooterEN() {
  return (
    <footer role="contentinfo" className="bg-black" dir="ltr">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Left: Navigation columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 md:flex-1 md:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="text-left" dir="ltr">
                <p className="text-left text-[18px] font-semibold text-[#A1A1A1] mb-4 leading-[20px]">
                  {col.title}
                </p>
                <ul className="flex flex-col items-start space-y-3" dir="ltr">
  {col.items.map((item) => (
    <li key={item.href} className="w-full">
      <EnLink
        href={item.href}
        className="block text-left leading-[1.1] text-[18px] font-normal text-white hover:text-white underline-offset-4 hover:underline transition-colors"
      >
        {item.label}
      </EnLink>
    </li>
  ))}
</ul>
              </div>
            ))}
          </div>

          {/* Right: Logo / Brand */}
          <div className="flex flex-col items-start gap-2 md:items-end md:shrink-0">
            <Image
              src="/footer-logo.svg"
              alt="VOW logo — digital marketing, SEO AI and website development"
              width={80}
              height={46}
              className="w-auto h-auto"
            />
            <p className="text-[14px] text-white">For success</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div dir="ltr" className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:justify-start sm:items-center sm:gap-8">
          <div className="flex items-center gap-5 justify-start">
            <EnLink
              href="/en/contact"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Contact"
            >
              <FaEnvelope size={16} />
            </EnLink>
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
              className="text-white/60 hover:text-white transition-colors "
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
          </div>

          <p className="text-[13px] text-white/50 text-left">
            © {new Date().getFullYear()} VOW
          </p>
        </div>
      </div>
    </footer>
  )
}
