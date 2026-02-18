import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const LEGAL_LINKS = [
  { href: "/terms", label: "תנאים משפטיים" },
  { href: "/privacy", label: "פרטיות" },
  { href: "/account-deletion", label: "מחיקת חשבון" },
  { href: "/accessibility", label: "נגישות" },
] as const

type FooterColumn =
  | {
      title: string
      type: "links"
      items: readonly { href: string; label: string }[]
    }
  | {
      title: string
      type: "text"
      items: readonly string[]
    }

const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "חשוב לדעת",
    type: "links",
    items: LEGAL_LINKS,
  },
] as const

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="bg-black">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-4">
        <div className="grid gap-10 md:grid-cols-6">
          {FOOTER_COLUMNS.map((col) => (
            <div
              key={col.title}
              className={`
                ${col.type === "links" ? "md:col-span-2 max-w-[400px] text-right order-2 sm:order-1 lg:order-1" : "text-right order-2 sm:order-1 lg:order-1"}
              `}
            >
              <p className="text-[18px] font-semibold leading-[20px] text-[#A1A1A1]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.type === "links"
                  ? col.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-[18px] font-normal leading-[20px] text-white underline-offset-4 hover:underline hover:text-[#A1A1A1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))
                  : col.items.map((item) => (
                      <li key={item}>
                        <span className="cursor-default text-[18px] font-normal leading-[20px] text-white underline-offset-4 hover:underline hover:text-[#A1A1A1]">
                          {item}
                        </span>
                      </li>
                    ))}
              </ul>
            </div>
          ))}

          {/* Logo — pushed to far left of grid */}
{/* Logo — pushed to far left of grid */}
<div className="flex flex-col items-center text-center py-1
                order-1 sm:order-2 lg:order-2
                md:col-start-6 md:items-end md:justify-start">
  <Image
    src="/footer-logo.svg"
    alt="VOW Logo"
    width={80}
    height={46}
    className="w-auto h-auto"
  />
  <p className="mt-1 text-[20px] text-[#FFFFFF] text-center">
    For success
  </p>
</div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4
                          sm:flex-row sm:justify-between sm:items-center">
            {/* Right: social icons */}
            <div className="flex space-x-4 gap-4 lg:gap-2">
              <a href="#" className="text-white/70 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <FaInstagram />
              </a>
            </div>
            {/* Left: copyright */}
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} VOW
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}