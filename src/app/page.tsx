// src/app/page.tsx
import type { Metadata } from "next"

import { Hero } from "@/app/_components/home/Hero"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { SuccessSection } from "@/app/_components/home/SuccessSection"
import { Testimonials } from "@/app/_components/home/Testimonials"
import { CookieBanner } from "@/app/_components/home/CookieBanner"
import { AboutSection } from "@/app/_components/home/AboutSection"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"
import { FaqSection } from "@/app/_components/home/FaqSection"
import { GreenInvoiceSection } from "@/app/_components/home/GreenInvoiceSection"

export const metadata: Metadata = {
  // ✅ זה האתר השיווקי (לא app)
  metadataBase: new URL("https://vow.co.il"),

  title: "VOW – רו״ח AI, חשבונית דיגיטלית ופיתוח אתרים ומערכות",
  description:
    "VOW מספקת שירותים מתקדמים לעסקים קטנים ובינוניים: רו״ח AI חכם, חשבונית דיגיטלית מאובטחת לשנה חינם, פתרונות שיווק, עיצוב ופיתוח אתרים ומערכות.",

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
    title: "VOW – רו״ח AI, חשבונית דיגיטלית ופיתוח אתרים ומערכות",
    description:
      "VOW מספקת שירותים מתקדמים לעסקים קטנים ובינוניים: רו״ח AI חכם, חשבונית דיגיטלית מאובטחת לשנה חינם, פתרונות שיווק, עיצוב ופיתוח אתרים ומערכות.",
    url: "https://vow.co.il",
    siteName: "VOW",
    images: [
      {
        url: "https://vow.co.il/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "VOW – AI Accountant & Digital Business Platform",
      },
    ],
    locale: "he_IL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VOW – רו״ח AI, חשבונית דיגיטלית ופיתוח אתרים ומערכות",
    description:
      "שנה חינם לחשבונית דיגיטלית מאובטחת + רו״ח AI, שיווק, מיתוג ופיתוח מערכות לעסקים.",
    images: ["https://vow.co.il/og-home.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <SiteHeader />

      <main id="main" role="main">
        <Hero />
        <LogoRow />
        <VisionToExecutionSection
          title="אפיון, פיתוח, עיצוב ושיווק מבוסס AI שמייצר צמיחה"
          subtitle="ב-VOW בונים אתרים ומוצרים דיגיטליים עם חשיבה שיווקית מהיום הראשון - מהאפיון ועד המשפך שמביא לקוחות חדשים."
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
        <FaqSection />
      </main>

      <CookieBanner />
      <SiteFooter />
    </div>
  )
}
