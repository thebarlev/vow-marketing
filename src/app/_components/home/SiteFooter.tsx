const FOOTER_COLUMNS = [
  {
    title: "מוצרים",
    items: ["חתימה ירוקה", "חשבונאות חכמה", "שיווק דיגיטלי", "עיצוב ופיתוח"],
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
        <div className="grid gap-10 md:grid-cols-3">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="text-right">
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
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-right text-sm text-white/70">
          © {new Date().getFullYear()} VOW
        </div>
      </div>
    </footer>
  )
}

