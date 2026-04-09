// src/app/page.tsx
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"

import { Hero } from "@/app/_components/home/Hero"
import { JsonLd, faqPageSchema } from "@/components/JsonLd"
import { FAQ_ITEMS } from "@/app/_components/home/home.constants"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"
import { PortfolioWorksSection } from "@/app/_components/portfolio/PortfolioWorksSection"
import { getPortfolioImages } from "@/app/_components/portfolio/portfolioImages"
import { heEnAlternateLanguages } from "@/lib/seo/hreflang"

const SuccessSection = dynamic(() => import("@/app/_components/home/SuccessSection").then((m) => m.SuccessSection))
const Testimonials = dynamic(() => import("@/app/_components/home/Testimonials").then((m) => m.Testimonials))
const AboutSection = dynamic(() => import("@/app/_components/home/AboutSection").then((m) => m.AboutSection))
const GreenInvoiceSection = dynamic(() => import("@/app/_components/home/GreenInvoiceSection").then((m) => m.GreenInvoiceSection))
const PackagesSection = dynamic(() => import("@/app/_components/home/PackagesSection").then((m) => m.PackagesSection))
const FaqSection = dynamic(() => import("@/app/_components/home/FaqSection").then((m) => m.FaqSection))
const GrowthGuidesCard = dynamic(() => import("@/components/marketing/GrowthGuidesCard").then((m) => m.GrowthGuidesCard))

export const metadata: Metadata = {
  // ✅ זה האתר השיווקי (לא app)
  metadataBase: new URL("https://uxellent.com"),
  alternates: {
    canonical: "/",
    languages: heEnAlternateLanguages("/", "/en"),
  },

  title: "Uxellent | קידום אתרים, פיתוח אתרים ושיווק דיגיטלי",
  description:
    "Uxellent בונה אתרים, מערכות AI ושירותי קידום אתרים ושיווק דיגיטלי לעסקים שרוצים יותר תנועה, לידים וצמיחה.",

  keywords: [
    "רו״ח AI",
    "חשבונית דיגיטלית",
    "חשבוניות אונליין",
    "מערכת חשבוניות",
    "חתימה דיגיטלית",
    "חיבור לשע״מ",
    "פיתוח אתרים",
    "ניהול מוצר",
    "שיווק מבוסס AI",
    "מערכת ניהול עסקי",
    "עיצוב ומיתוג לעסקים",
  ],

  openGraph: {
    title: "Uxellent | פיתוח אתרים ומערכות AI, SEO ושיווק דיגיטלי לעסקים",
    description:
      "חברת Uxellent מפתחת אתרים, מערכות SaaS וכלי AI מתקדמים לעסקים. שירותי SEO, פרסום PPC ושיווק דיגיטלי שמגדילים חשיפה, לידים וצמיחה.",
    url: "https://uxellent.com",
    siteName: "Uxellent",
    images: [
      {
        url: "https://uxellent.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Uxellent – AI Accountant & Digital Business Platform",
      },
    ],
    locale: "he_IL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Uxellent | פיתוח אתרים ומערכות AI, SEO ושיווק דיגיטלי לעסקים",
    description:
      "שנה חינם לחשבונית דיגיטלית מאובטחת + רו״ח AI, שיווק, מיתוג ופיתוח מערכות לעסקים.",
    images: ["https://uxellent.com/og-home.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  const portfolioImages = getPortfolioImages("he")

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <JsonLd data={faqPageSchema(FAQ_ITEMS.map((i) => ({ question: i.question, answer: i.answer })))} />
      <SiteHeader />

      <main id="main" role="main">
        <Hero />
        <LogoRow />
        <VisionToExecutionSection
          title="אפיון, פיתוח, עיצוב ושיווק מבוסס AI שמייצר צמיחה"
          subtitle={
            <>
              ב-Uxellent בונים אתרים ומוצרים דיגיטליים עם חשיבה שיווקית מהיום הראשון, כולל
              {" "}
              keyword search engine optimization
              {" "}
              ו-
              <a
                href="https://uxellent.com/en/seo-ai"
                className="text-[#5389BB] underline hover:no-underline"
              >
                AI SEO
              </a>
              , מהאפיון ועד המשפך שמביא לקוחות חדשים.
            </>
          }
          ctaLabel="להשארת פרטים"
          source="design_development"
          cards={[
            {
              id: "home-vto-1",
              src: "/1.webp",
              alt: "פיתוח MVP ליזמים וסטארטאפים",
              caption: "פיתוח MVP ליזמים וסטארטאפים",
            },
            {
              id: "home-vto-2",
              src: "/3.webp",
              alt: "תכנון ופיתוח אתרים ואפליקציות ",
              caption: "תכנון ופיתוח אתרים ואפליקציות ",
            },
            {
              id: "home-vto-3",
              src: "/2.webp",
              alt: "שיווק ממומן ו-SEO ",
              caption: "שיווק ממומן ו-SEO ",
            },
            {
              id: "home-vto-4",
              src: "/4.webp",
              alt: "שיפור ביצועים, חוויית משתמש - ROI",
              caption: "שיפור ביצועים, חוויית משתמש - ROI",
            },
          ]}
        />
        <SuccessSection />
        <Testimonials />
        <AboutSection />
        <GreenInvoiceSection />

        <PackagesSection />
        <GrowthGuidesCard
          title="מדריכי צמיחה"
          description="מדריכים פרקטיים על תנועה, SEO וצמיחה עסקית שיעזרו לך לצמוח מהר יותר."
          dir="rtl"
          links={[
            { href: "/growth-guides/how-to-get-traffic-to-my-website", label: "איך להביא תנועה לאתר" },
            { href: "/growth-guides/how-to-get-customers-online", label: "איך לקבל לקוחות אונליין" },
          ]}
          indexLink={{ href: "/growth-guides", label: "לכל המדריכים" }}
        />
        <FaqSection />
        <PortfolioWorksSection
          locale="he"
          images={portfolioImages}
          title="עבודות נבחרות שמראות איך צמיחה דיגיטלית נראית בפועל"
          subtitle="אתרים, דפי נחיתה ומערכות שפיתחנו כדי לחבר בין פיתוח, שיווק דיגיטלי, SEO ותוצאות עסקיות אמיתיות."
        />
        <p className="mx-auto max-w-[1440px] px-4 pb-8 text-center text-[18px] text-[color:var(--vow-muted)]">
          <Link href="/portfolio" className="text-[#5389BB] underline hover:no-underline">
            פרויקטים
          </Link>
          {" · "}
          <Link href="/blog" className="text-[#5389BB] underline hover:no-underline">
            תובנות ומדריכים
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
