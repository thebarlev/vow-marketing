import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { ContactForm } from "@/app/_components/contact/ContactForm"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]" dir="rtl">
      <SiteHeader />

      <main id="main" role="main">
        <div className="mx-auto max-w-[1440px] px-4 py-[var(--space-section)] sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[720px] text-right">
            <h1 className="text-[44px] font-semibold leading-[52px] text-black sm:text-[56px] sm:leading-[64px]">
              צור קשר
            </h1>
            <p className="mt-2 text-[20px] font-semibold leading-[32px] text-[color:var(--vow-muted)]">
              נשמח לשמוע ממך. מלא/י את הפרטים ונחזור אליך בהקדם.
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

