import type { Metadata } from "next"
import fs from "node:fs"
import path from "node:path"

import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { PortfolioCtaSection } from "@/app/_components/portfolio/PortfolioCtaSection"
import { PortfolioGrid } from "@/app/_components/portfolio/PortfolioGrid"
import { PortfolioHero } from "@/app/_components/portfolio/PortfolioHero"

export const metadata: Metadata = {
  title: "דוגמאות עבודות – VOW | פיתוח אתרים, מערכות AI ושיווק חכם",
  description:
    "צפו בדוגמאות מהעבודות של VOW – אתרים, מערכות AI, חנויות דיגיטליות ופתרונות שמייצרים ROI אמיתי לעסקים.",
  keywords: "פיתוח אתרים, מערכות AI, עיצוב אתרים, שיווק דיגיטלי, בניית אתרים לעסקים",
}

type PortfolioImage = { src: string; alt: string }

function getPortfolioImages(): PortfolioImage[] {
  const dir = path.join(process.cwd(), "public", "portfolio")
  let filenames: string[] = []

  try {
    filenames = fs.readdirSync(dir)
  } catch {
    return []
  }

  const numericWebps = filenames
    .filter((name) => /^\d+\.webp$/.test(name))
    .map((name) => ({ name, n: Number.parseInt(name, 10) }))
    .filter((x) => Number.isFinite(x.n))
    .sort((a, b) => a.n - b.n)

  return numericWebps.map((x, idx) => ({
    src: `/portfolio/${x.name}`,
    alt: `VOW Project ${idx + 1}`,
  }))
}

const FAQ_ITEMS = [
  {
    id: "portfolio-faq-1",
    question: "כמה זמן לוקח פרויקט?",
    answer:
      "ברוב המקרים 2–6 שבועות, תלוי בהיקף ובמורכבות. אנחנו עובדים בספרינטים ברורים ומציגים התקדמות מדידה לאורך הדרך — כדי שתדעו בדיוק איפה עומדים ומתי עולה לאוויר.",
  },
  {
    id: "portfolio-faq-2",
    question: "האם אתם עובדים עם עסקים קטנים?",
    answer:
      "כן. אנחנו בונים תהליך שמותאם לתקציב וליעד: להתחיל חכם, למדוד מהר, ולהתרחב. גם לעסק קטן מגיע אתר/מערכת שמייצרים תוצאה אמיתית ולא רק “נראות”.",
  },
  {
    id: "portfolio-faq-3",
    question: "מה היתרון של פיתוח מבוסס AI?",
    answer:
      "AI מאפשר לנו לקצר זמנים, לחדד אפיון, ולשפר איכות — בלי להתפשר על יציבות ואבטחה. התוצאה: פחות סבבי תיקונים, יותר דיוק, והגעה מהירה יותר ל־ROI.",
  },
  {
    id: "portfolio-faq-4",
    question: "האם אתם מספקים גם שיווק?",
    answer:
      "כן. אנחנו משלבים חשיבה שיווקית כבר בשלב האפיון: מסרים, משפכים, מדידה, והטמעת אנליטיקס. אפשר לעלות עם פרויקט פיתוח בלבד, או לקבל מעטפת מלאה של ביצועים וצמיחה.",
  },
  {
    id: "portfolio-faq-5",
    question: "כמה זה עולה?",
    answer:
      "המחיר נקבע לפי היקף, טכנולוגיה, ותוצאות יעד. אחרי שיחה קצרה נוכל להציע טווח מסודר והצעת עבודה מדויקת — עם מה שנכנס, מה לא, ומה מודדים כדי להבטיח הצלחה.",
  },
  {
    id: "portfolio-faq-6",
    question: "האם אפשר להתחיל בפרויקט קטן?",
    answer:
      "בהחלט. הרבה מהפרויקטים מתחילים ב־MVP, דף נחיתה ממיר, או שיפור ביצועים לאתר קיים. עובדים מהר, מודדים, ואז מחליטים יחד על השלב הבא לפי נתונים.",
  },
] as const

export default function PortfolioPage() {
  const images = getPortfolioImages()

  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="rtl">
      <SiteHeader />

      <main id="main">
        <PortfolioHero />

        <section aria-label="פרויקטים" className=" bg-[#F4F1EC] py-[var(--space-section)]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
            <PortfolioGrid images={images} />
          </div>
        </section>

        <PortfolioCtaSection />

        <ServiceFaqSection title="FAQ" items={[...FAQ_ITEMS]} />
      </main>

      <SiteFooter />
    </div>
  )
}

