/* eslint-disable react/no-unescaped-entities */
import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { LegalTemplate } from "@/app/_components/legal/LegalTemplate"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      <SiteHeader />

      <main id="main" role="main">
        <LegalTemplate
          title="נגישות"
          subtitle="עודכן לאחרונה: פברואר 2025"
        >
          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">1. מחויבות לנגישות</h2>
            <p>
              VOW בע״מ נוקטת את מירב המאמצים ומשקיעה משאבים רבים על מנת לספק לכל לקוחותיה את האתר והפלטפורמה באופן מכובד, נגיש ומקצועי. בהתאם לחוק שוויון זכויות לאנשים עם מוגבלויות תשנ"ח-1998 ולתקנות שהותקנו מכוחו, מושקעים מאמצים ומשאבים רבים בביצוע התאמות הנגישות הנדרשות שיביאו לכך שאדם בעל מוגבלות יוכל לבצע פעולות בפלטפורמה ובאתר, באופן עצמאי ושוויוני.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">2. שירות לקוחות נגיש</h2>

            <h3 className="text-[20px] font-semibold mb-3 mt-6">2.1 הדרכות עובדים לשירות נגיש</h3>
            <p>
              מתקיימות הדרכות להכרת תחום הנגישות, יצירת מודעות בקרב העובדים והקניית כלים מעשיים למתן שירות נגיש.
            </p>

            <h3 className="text-[20px] font-semibold mb-3 mt-6">2.2 תמיכה נגישה</h3>
            <p>
              ניתן לפנות אלינו בכתב באמצעות המייל או הודעה פרטית לעמוד הלינקדאין שלנו. לבעלי מוגבלויות אנו מציעים גם תמיכה טלפונית – יש לפנות אלינו בכתב עם מספר הטלפון ואנו מתקשרים חזרה.
            </p>

            <h3 className="text-[20px] font-semibold mb-3 mt-6">2.3 אמצעים נוספים ליצירת קשר</h3>
            <p>קיימים מספר אמצעים נוספים ליצירת קשר:</p>
            <ul className="list-disc mr-6 my-3 space-y-1">
              <li>
                דואר אלקטרוני:{" "}
                <a href="mailto:support@vow.co.il" className="text-blue-600 underline">
                  support@vow.co.il
                </a>
              </li>
              <li>
                פניה באמצעות ״צור קשר״ באתר:{" "}
                <a href="https://www.vow.co.il/contact" className="text-blue-600 underline">
                  https://www.vow.co.il/contact
                </a>
              </li>
              <li>פניה באמצעות עמוד הלינקדאין: [קישור לעמוד]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">3. נגישות אתר האינטרנט</h2>
            <p>
              אתר אינטרנט נגיש הוא אתר המאפשר לאנשים עם מוגבלות ולאנשים מבוגרים לגלוש באותה רמה של יעילות והנאה ככל הגולשים. כ-20 עד 25 אחוזים מהאוכלוסייה נתקלים בקשיי שימוש באינטרנט ועשויים להיטיב מתכני אינטרנט נגישים יותר, כך על פי מחקר שנערך בשנת 2003 ע"י חברת מייקרוסופט.
            </p>
            <p>
              VOW בע״מ מאמינה ופועלת למען שוויון הזדמנויות במרחב האינטרנטי לבעלי לקויות מגוונות ואנשים הנעזרים בטכנולוגיה מסייעת לשימוש במחשב.
            </p>

            <h3 className="text-[20px] font-semibold mb-3 mt-6">3.1 מידע על נגישות האתר</h3>
            <ul className="list-disc mr-6 my-3 space-y-1">
              <li>אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013</li>
              <li>התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG 2.1 הבינלאומי</li>
              <li>הבדיקות נבחנו לתאימות הגבוהה ביותר עבור דפדפנים מודרניים (Chrome, Firefox, Safari, Edge)</li>
              <li>האתר מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם מקלדת בעזרת מקשי החיצים, Enter ו-Esc ליציאה מתפריטים וחלונות</li>
              <li>מותאם לתצוגה בדפדפנים הנפוצים ולשימוש בטלפון הסלולרי</li>
              <li>לשם קבלת חווית גלישה מיטבית עם תוכנת הקראת מסך, אנו ממליצים לשימוש בתוכנת NVDA העדכנית ביותר או JAWS</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">4. הסדרי נגישות מבנים</h2>
            <p>
              VOW היא פלטפורמה דיגיטלית המספקת שירות מלא באופן מקוון 24/7. ניתן לפנות אלינו בערוצים הדיגיטליים המפורטים לעיל.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">5. דרכי פנייה לבקשות והצעות לשיפור בנושא נגישות</h2>
            <p>
              יש לציין כי אנו ממשיכים במאמצים לשפר את נגישות החברה כחלק ממחויבותנו לאפשר לכלל האוכלוסייה כולל אנשים עם מוגבלויות לקבל את השירות הנגיש ביותר.
            </p>
            <p>
              במידה ונתקלת בבעיה או בתקלה כלשהי בנושא הנגישות, נשמח שתעדכן אותנו בכך ואנו נעשה כל מאמץ למצוא עבורך פתרון מתאים ולטפל בתקלה בהקדם ככל שניתן.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 mt-8">6. פרטי רכז הנגישות ב-VOW</h2>
            <ul className="list-disc mr-6 my-3 space-y-1">
              <li>שם: יצחק ברלב</li>
              <li>
                דוא"ל:{" "}
                <a href="mailto:support@vow.co.il" className="text-blue-600 underline">
                  support@vow.co.il
                </a>
              </li>
              <li>טלפון: 054-5215193</li>
            </ul>
          </section>
        </LegalTemplate>
      </main>

      <SiteFooter />
    </div>
  )
}