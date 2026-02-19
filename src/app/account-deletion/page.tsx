/* eslint-disable react/no-unescaped-entities */
import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { LegalTemplate } from "@/app/_components/legal/LegalTemplate"

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      <SiteHeader />

      <main id="main" role="main">
        <LegalTemplate
          title="מחיקת חשבון"
          subtitle="מידע על תהליך מחיקת חשבון משתמש בשירות VOW"
          lastUpdated="8 בפברואר 2026"
        >
          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">מחיקת חשבון משתמש</h2>
            
            <p>
              במקרה שמשתמש מעוניין לבקש את מחיקת חשבונו משירות VOW, ניתן לפנות אלינו באחת מהדרכים הבאות:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h3 className="text-[18px] font-semibold mb-3">דרכי פנייה למחיקת חשבון:</h3>
              <ul className="list-disc mr-6 space-y-2">
                <li>פנייה דרך הצ'אט הזמין באתר ו/או באפליקציה (ככל שקיים)</li>
                <li>פנייה בדוא"ל לכתובת: <a href="mailto:support@vow.co.il" className="text-blue-600 underline font-semibold">support@vow.co.il</a></li>
              </ul>
            </div>

            <p>
              הטיפול בבקשה ייעשה בהתאם לדין החל ובהתאם למדיניות הפרטיות של השירות.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">שמירת נתונים</h2>
            
            <p>
              יובהר כי סוגי הנתונים הנשמרים על-ידי החברה ומשך הזמן בו הם נשמרים מפורטים במדיניות הפרטיות של VOW, הזמינה <a href="https://vow.co.il/privacy" className="text-blue-600 underline">באתר האינטרנט</a>.
            </p>

            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 my-6">
              <p className="font-semibold text-yellow-800 mb-2">חשוב לדעת:</p>
              <p className="text-yellow-800">
                באופן כללי, החברה עשויה להיות מחויבת לשמור סוגים מסוימים של מסמכים ונתונים, לרבות מסמכים חשבונאיים, מסמכים חתומים דיגיטלית ולוגים תפעוליים, לתקופות שונות – בהתאם להוראות הדין, לצרכים תפעוליים, לאבטחת מידע ולהגנה משפטית.
              </p>
            </div>

            <p>
              <strong>מחיקת החשבון אינה גוררת בהכרח מחיקה מיידית או מלאה של כלל המידע</strong>, מקום בו חלה על החברה חובה חוקית או לגיטימית להמשיך ולהחזיק במידע כאמור.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-[24px] font-bold mb-4">צור קשר</h2>
            <div className="bg-white p-6 rounded-lg">
              <p><strong>דוא"ל:</strong> <a href="mailto:support@vow.co.il" className="text-blue-600 underline">support@vow.co.il</a></p>
              <p><strong>WhatsApp:</strong> 0545215193</p>
              <p className="mt-4 text-sm text-gray-600">
                לשאלות נוספות או לקבלת מידע מפורט יותר, אנא פנה אלינו באחד מהערוצים לעיל.
              </p>
            </div>
          </section>
        </LegalTemplate>
      </main>

      <SiteFooter />
    </div>
  )
}