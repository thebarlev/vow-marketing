import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { ContactForm } from "@/app/_components/contact/ContactForm"
import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { JsonLd, faqPageSchema } from "@/components/JsonLd"

const CONTACT_FAQ = [
  { id: "contact-faq-1", question: "תוך כמה זמן תחזרו?", answer: "תוך שעות ספורות בימי עסקים." },
  { id: "contact-faq-2", question: "איך ליצור קשר מלבד הטופס?", answer: "וואטסאפ 054-5215193, מייל support@vow.co.il" },
  { id: "contact-faq-3", question: "האם השיחה הראשונה מחייבת?", answer: "לא. שיחת היכרות קצרה ללא התחייבות." },
  { id: "contact-faq-4", question: "אילו שירותים אתם מציעים?", answer: "פיתוח אתרים, שיווק דיגיטלי, עיצוב, חשבונית דיגיטלית, רו״ח AI." },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]" dir="rtl">
      <JsonLd data={faqPageSchema(CONTACT_FAQ.map((i) => ({ question: i.question, answer: i.answer })))} />
      <SiteHeader />

      <main id="main" role="main">
        <div className="mx-auto max-w-[1440px] px-4 py-[var(--space-section)] sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[720px] text-right">
            <h1 className="text-[44px] font-semibold leading-[52px] text-black sm:text-[56px] sm:leading-[64px]">
              צור קשר עם VOW
            </h1>
            <p className="mt-2 text-[20px] font-semibold leading-[32px] text-[color:var(--vow-muted)]">
              נשמח לשמוע ממך. מלאו את הפרטים ונחזור תוך שעות ספורות. אפשר גם בוואטסאפ: 054-5215193. ימי א׳–ה׳, 9:00–18:00.
            </p>

            <h2 className="mt-10 text-[28px] font-semibold text-black">השאירו פרטים</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>

        <ServiceFaqSection title="שאלות נפוצות לפני יצירת קשר" items={[...CONTACT_FAQ]} />
      </main>

      <SiteFooter />
    </div>
  )
}

