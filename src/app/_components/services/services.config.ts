import type { Metadata } from "next"
import type { LeadSource } from "@/app/_components/home/Popup"

export type ServiceSectionType =
  | "SiteHeader"
  | "ServiceHero"
  | "LogoRow"
  | "VisionToExecutionSection"
  | "AboutSection"
  | "DoubleHeadingCtaSection"
  | "FaqSection"
  | "PackagesSection"
  | "SiteFooter"

export type ServicePageConfig = {
  slug: "design" | "develop" | "marketing"
  metadata: Metadata
  hero: {
    title: string
    subtitle?: string
    tags: readonly string[]
    ctaLabel: string
    ctaSource: LeadSource
    imageSrc?: string
    imageAlt?: string
  }
  vision?: {
    title?: string
    subtitle?: string
    ctaLabel?: string
    source?: LeadSource
    cards?: Array<{ id?: string; src: string; alt: string; caption: string }>
  }
  doubleHeading: {
    title: string
    subtitle: string
    buttonLabel: string
    buttonSource: LeadSource
  }
  sections: readonly ServiceSectionType[]
}

const SECTIONS_ORDER: readonly ServiceSectionType[] = [
  "SiteHeader",
  "ServiceHero",
  "LogoRow",
  "VisionToExecutionSection",
  "AboutSection",
  "DoubleHeadingCtaSection",
  "FaqSection",
  "PackagesSection",
  "SiteFooter",
] as const

const PLACEHOLDER_DOUBLE_SUBTITLE =
  "כותרת משנה קצרה שמסבירה מה מקבלים ומה הצעד הבא. אפשר להחליף אחר כך בטקסט מדויק."

export const designConfig: ServicePageConfig = {
  slug: "design",
  metadata: {
    title: "Design | VOW",
    description: "עמוד שירות — עיצוב",
  },
  hero: {
    title: "עיצוב ומיתוג לעסקים",
    tags: ["אתר", "אפליקציה", "SaaS ומערכות", "קריאייטיב", "לוגו"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
  },
  doubleHeading: {
    title: "חבילת מיתוג והשקה מלאה לעסק חדש",
    subtitle: "אם אתם בתחילת הדרך - אנחנו מציעים פתרון מלא הכולל מיתוג, אתר ונכסים דיגיטליים מוכנים להשקה.כך תוכלו לצאת לשוק מהר, נכון ועם נראות מקצועית.",
    buttonLabel: "בואו נבנה את המותג שלכם",
    buttonSource: "design_development",
  },
  sections: SECTIONS_ORDER,
}

export const developConfig: ServicePageConfig = {
  slug: "develop",
  metadata: {
    title: "Develop | VOW",
    description: "עמוד שירות — פיתוח",
  },
  hero: {
    title: "פיתוח אתרים ומערכות",
    tags: ["Next.js", "אינטגרציות", "ביצועים", "אבטחה", "סקייל"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
  },
  doubleHeading: {
    title: "בואו נבנה מוצר שמביא לקוחות",
    subtitle: PLACEHOLDER_DOUBLE_SUBTITLE,
    buttonLabel: "להשארת פרטים",
    buttonSource: "design_development",
  },
  sections: SECTIONS_ORDER,
}

export const marketingConfig: ServicePageConfig = {
  slug: "marketing",
  metadata: {
    title: "Marketing | VOW",
    description: "עמוד שירות — שיווק",
  },
  hero: {
    title: "שיווק דיגיטלי",
    tags: ["אסטרטגיה", "קמפיינים", "תוכן", "SEO", "אנליטיקס"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
  },
  doubleHeading: {
    title: "מוכנים להאיץ צמיחה?",
    subtitle: PLACEHOLDER_DOUBLE_SUBTITLE,
    buttonLabel: "להשארת פרטים",
    buttonSource: "digital_marketing",
  },
  sections: SECTIONS_ORDER,
}

