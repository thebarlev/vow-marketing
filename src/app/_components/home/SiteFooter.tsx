import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const FOOTER_COLUMNS = [
   {
    title: "VOW חשבונית ירוקה מאובטחת",
    items: ["תנאי שימוש", "מדיניות הפרטיות", "נספח שימוש בשירות הפקת מסמכים", "הסכם מידע שיווקי"],
  },
  {
    title: "החברה",
    items: ["VOW", "דרושים", "חדשות", "שקיפות"],
  },
  {
    title: "חברה",
    items: ["אודות", "קריירה", "שותפים", "מדיניות פרטיות"],
  },
  {
    title: "תמיכה",
    items: ["מרכז עזרה", "צור קשר", "שאלות נפוצות", "סטטוס מערכת"],
  },
 
] as const

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="bg-black">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">
          

          {FOOTER_COLUMNS.map((col, index) => (
            <div
      key={col.title}
      className={`
        ${index === 0 ? "md:col-span-2 max-w-[400px] text-right" : "text-right"}
      `}
    >
              <p className="text-[18px] font-semibold leading-[20px] text-[#A1A1A1]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <span className="cursor-default text-[18px] font-normal leading-[20px] text-white underline-offset-4 hover:underline hover:text-[#A1A1A1]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

         <div className="flex flex-col items-end py-1 text-right">
  <Image
    src="/logo.svg"
    alt="VOW Logo"
    width={80}
    height={46}
    className="w-auto h-auto"
  />
  <p className="mt-2 text-[16px] text-[#A1A1A1]">
    For success
  </p>
</div>

    
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
  <div className="flex justify-between items-center">
    {/* Right: social icons */}
    <div className="flex space-x-4">
      <a href="#" className="text-white/70 hover:text-white">
        <FaFacebookF />
      </a>
      <a href="#" className="text-white/70 hover:text-white">
        <FaTwitter />
      </a>
      <a href="#" className="text-white/70 hover:text-white">
        <FaInstagram />
      </a>
      {/* Add more icons as needed */}
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

