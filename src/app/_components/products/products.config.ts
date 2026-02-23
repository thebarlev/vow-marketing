import type { Metadata } from "next/types"

import type { LeadSource } from "@/app/_components/home/Popup"
import type { ServiceAboutItem } from "@/app/_components/services/ServiceAboutSection"
import type { ServiceFaqItem } from "@/app/_components/services/ServiceFaqSection"

export type ProductSectionType =
  | "SiteHeader"
  | "ServiceHero"
  | "LogoRow"
  | "VisionToExecutionSection"
  | "AboutSection"
  | "DoubleHeadingCtaSection"
  | "FaqSection"
  | "PackagesSection"
  | "SiteFooter"

export type ProductPageConfig = {
  slug: "develop-ai" | "invoice" | "account-ai"
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
    cards?: Array<{ id: string; src: string; alt: string; caption: string }>
  }
  doubleHeading: {
    title: string
    subtitle: string
    buttonLabel: string
    buttonSource: LeadSource
  }
  about?: {
    title: string
    subtitle: string
    ctaLabel: string
    ctaSource: LeadSource
    items: ServiceAboutItem[]
  }
  faq?: {
    title: string
    items: ServiceFaqItem[]
  }
  sections: readonly ProductSectionType[]
}

const SECTIONS_ORDER: readonly ProductSectionType[] = [
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

export const developAiConfig: ProductPageConfig = {
  slug: "develop-ai",
  metadata: {
    title: "פיתוח בהתאמה אישית בסביבת AI",
    description: "עמוד מוצר — פיתוח מבוסס AI",
  },
  hero: {
    title: "פיתוח בהתאמה אישית בסביבת AI",
    subtitle: "",
    tags: ["Python", "React / Next.js", "Node.js / TypeScript", "REST / Webhooks"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
    imageSrc: "/services/developai/vow.webp",
    imageAlt: "פיתוח מבוסס AI",
    
  },
  vision: {
    title: "בוטיק טכנולוגי. רמת Enterprise.",
    subtitle: "אנחנו מאפיינים, מעצבים ומפתחים מערכות פנימיות מורכבות בהתאמה מלאה, ברמת Enterprise, עם ארכיטקטורה חכמה ושילוב AI כחלק מהליבה.",
    ctaLabel: "להשארת פרטים",
    source: "design_development",
    cards: [
      { id: "develop-ai-1", src: "/services/developai/1.webp", alt: "מהירות פיתוח גבוהה משמעותית", caption: "מהירות פיתוח גבוהה משמעותית" },
      { id: "develop-ai-2", src: "/services/developai/2.webp", alt: "חיסכון בעלויות", caption: "חיסכון בעלויות" },
      { id: "develop-ai-3", src: "/services/developai/3.webp", alt: "ניתוח נתונים חכם בזמן אמת", caption: "ניתוח נתונים חכם בזמן אמת" },
      { id: "develop-ai-4", src: "/services/developai/4.webp", alt: "גמישות עסקית אמיתית", caption: "גמישות עסקית אמיתית" },
    ],
  },
  doubleHeading: {
    title: "למי זה מתאים?",
    subtitle: "חברות קיימות עם תהליכים מורכבים, ארגונים שרוצים שליטה מלאה, עסקים שצומחים מהר מדי למערכת מדף, חברות שרוצות יתרון תחרותי אמיתי",
    buttonLabel: "להשארת פרטים",
    buttonSource: "design_development",
  },
  about: {
    title: "ניסיון במערכות מורכבות אפיון, עיצוב ופיתוח",
    subtitle: "במשך 20 שנה הובלנו אפיון, עיצוב ופיתוח של מערכות מורכבות בארגונים גדולים.",
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
    items: [
      { id: "develop-ai-about-1", title: "מיפוי עומק עסקי", description: "אנחנו ממפים תהליכים קיימים, נקודות חיכוך, כפילויות עבודה, זרימת מידע, תלויות בין מחלקות, והחלטות קריטיות שמתבצעות ביום-יום.", icon: "/about/briefcase.svg" },
      { id: "develop-ai-about-2", title: "תכנון ארכיטקטורה מותאמת", description: "אנחנו מגדירים מבנה מערכת שמבוסס על תהליכים אמיתיים, עומסים צפויים, אינטגרציות קיימות וצמיחה עתידית.", icon: "/about/1.svg" },
      { id: "develop-ai-about-3", title: "פיתוח מלא, Front, Backend ו-AI", description: "בניית מערכת מלאה מקצה לקצה , חוויית משתמש, לוגיקה עסקית ותשתית AI כחלק מהליבה.", icon: "/about/code.svg" },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    items: [

      {
        id: "develop-ai-faq-2",
        question: "האם אתם עובדים גם עם AI?",
        answer: "כן. משלבים אוטומציות ויכולות AI לפי הצורך והערך העסקי.",
      },
      {
        id: "develop-ai-faq-3",
        question: "כמה זמן לוקח פרויקט?",
        answer: "מתחייבים לעמוד בזמנים ולמסור את המוצר כפי שהוגדר בבאפיון, אנחנו מתחילים באפיון עומק של הצורך העסקי, תהליכי העבודה והיעדים. רק לאחר מסמך אפיון ברור ומוסכם מתחיל הפיתוח, עם אבני דרך, שקיפות מלאה ואחריות לתוצאה שהוגדרה מראש.",
      },
      {
        id: "develop-ai-faq-4",
        question: "איך מתבצע תהליך האפיון והאם אתם מתחייבים לתוצאה?",
        answer: "תלוי בהיקף. לרוב מתחילים עם שלב הגדרה קצר ואז ריצות פיתוח שבועיות.",
      },
    {
      id: "develop-ai-faq-5",
      question: "האם ניתן להתממשק לכל API או מערכת קיימת?",
      answer: "כן. אנחנו מתממשקים לכל מערכת שמאפשרת API, Webhooks או חיבור ישיר לבסיס נתונים. כולל מערכות CRM, הנהלת חשבונות, סליקה, SaaS, BI ומערכות פנים ארגוניות.",
    },
    {
      id: "develop-ai-faq-6",
      question: "האם אתם מתחייבים לעמידה בזמנים?",
      answer: "הפיתוח מחולק לשלבים ברורים עם לוחות זמנים מוגדרים מראש כל שלב נמסר לבדיקה ואישור כדי להבטיח עמידה ביעדים וללא הפתעות.",
    },
    {
      id: "develop-ai-faq-7",
      question: "האם ניתן להטמיע AI במערכת קיימת?",
      answer: "כן. ניתן לשלב מודלי AI לניתוח נתונים, אוטומציה, תחזיות, עיבוד מסמכים וצ׳אטבוטים, גם על מערכת קיימת.",    },
    {
      id: "develop-ai-faq-8",
      question: "האם אתם מלווים גם לאחר העלייה לאוויר?",
      answer: "כן. אנחנו מספקים תחזוקה, שדרוגים, ניטור וביצועי מערכת לאורך זמן.",
    },
    ],
  },
  sections: SECTIONS_ORDER,
}

export const invoiceConfig: ProductPageConfig = {
  slug: "invoice",
  metadata: {
    title: "Invoice | VOW",
    description: "עמוד מוצר — חשבוניות",
  },
  hero: {
    title: "Invoice",
    subtitle: "חשבוניות, תשלומים ותהליכים — פשוט, ברור ומהיר.",
    tags: ["חשבוניות", "סליקה", "אוטומציה", "דוחות", "התאמה לעסק"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "smart_accounting_ai",
    imageSrc: "/D-hero.webp",
    imageAlt: "Invoice",
  },
  vision: {
    title: "יותר סדר. פחות התעסקות.",
    subtitle: "מייצרים תהליך שמצמצם טעויות וחוסך זמן — מהפקה ועד מעקב.",
    ctaLabel: "להשארת פרטים",
    source: "smart_accounting_ai",
    cards: [
      { id: "invoice-1", src: "/1.webp", alt: "הפקה מהירה", caption: "הפקה מהירה" },
      { id: "invoice-2", src: "/2.webp", alt: "תשלומים ומעקב", caption: "תשלומים ומעקב" },
      { id: "invoice-3", src: "/3.webp", alt: "דוחות ותובנות", caption: "דוחות ותובנות" },
      { id: "invoice-4", src: "/4.webp", alt: "אוטומציה לתהליכים", caption: "אוטומציה לתהליכים" },
    ],
  },
  doubleHeading: {
    title: "רוצים לייעל את תהליך החשבוניות?",
    subtitle: "נבנה תהליך מדויק שמותאם לעסק שלכם — בלי עומס ובלי בלגן.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "smart_accounting_ai",
  },
  about: {
    title: "חשבוניות שמתחברות לעסק",
    subtitle: "הפקה, סליקה ודוחות — עם אוטומציות שמורידות עבודה ידנית.",
    ctaLabel: "להשארת פרטים",
    ctaSource: "smart_accounting_ai",
    items: [
      { id: "invoice-about-1", title: "תהליכים אוטומטיים", description: "מקטינים פעולות ידניות ושגיאות.", icon: "/about/3.svg" },
      { id: "invoice-about-2", title: "תמונה פיננסית ברורה", description: "דוחות ותובנות במקום אחד.", icon: "/about/analytics.svg" },
      { id: "invoice-about-3", title: "התאמה לעסק", description: "זרימה שמתאימה בדיוק למה שאתם עושים.", icon: "/about/lightbulb.svg" },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      { id: "invoice-faq-1", question: "אפשר לחבר סליקה?", answer: "כן, בהתאם לצורך ולספק הסליקה." },
      { id: "invoice-faq-2", question: "אפשר להפיק דוחות?", answer: "כן. דוחות בסיסיים + התאמות לפי מה שצריך." },
      { id: "invoice-faq-3", question: "זה מתאים גם לפרילנסרים?", answer: "כן. יש התאמה לעסקים בכל גודל." },
    ],
  },
  sections: SECTIONS_ORDER,
}

export const accountAiConfig: ProductPageConfig = {
  slug: "account-ai",
  metadata: {
    title: "Account AI | VOW",
    description: "עמוד מוצר — Account AI",
  },
  hero: {
    title: "Account AI",
    subtitle: "הופכים את הנהלת החשבונות ליותר חכמה, אוטומטית ומדויקת.",
    tags: ["AI", "אוטומציה", "דוחות", "סדר פיננסי", "תובנות"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "smart_accounting_ai",
    imageSrc: "/manvow.webp",
    imageAlt: "Account AI",
  },
  vision: {
    title: "פחות עבודה ידנית. יותר שליטה.",
    subtitle: "מחברים נתונים, מייצרים תובנות, ומשפרים החלטות עסקיות.",
    ctaLabel: "להשארת פרטים",
    source: "smart_accounting_ai",
    cards: [
      { id: "account-ai-1", src: "/services/develop/d1.webp", alt: "חיבור נתונים", caption: "חיבור נתונים" },
      { id: "account-ai-2", src: "/services/develop/d2.webp", alt: "אוטומציות", caption: "אוטומציות" },
      { id: "account-ai-3", src: "/services/develop/d3.webp", alt: "תובנות", caption: "תובנות" },
      { id: "account-ai-4", src: "/services/develop/d4.webp", alt: "שיפור מתמיד", caption: "שיפור מתמיד" },
    ],
  },
  doubleHeading: {
    title: "מוכנים להפוך את הפיננסים לחכמים?",
    subtitle: "נבנה תהליך שמייצר סדר, תובנות ואוטומציה — בלי להכביד על הצוות.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "smart_accounting_ai",
  },
  about: {
    title: "הצטרף למהפכת ה-AI שחוסכת לך כסף ומקצועית כמו רואה חשבון אמיתי",
    subtitle: "למי זה מתאים: עוסקים פטורים בעלי עסקים עם מחזור עד 500,000 ₪ בשנה",
    ctaLabel: "להשארת פרטים",
    ctaSource: "smart_accounting_ai",
    items: [
      { id: "account-ai-about-1", title: "חוסכים אלפי שקלים בשנה", description: "במקום לשלם הון עתק בחודש לרו״ח מסורתי - עם VOW רואה חשבון AI ישאר לך ההרבה יותר כסף בכיס.", icon: "/about/1.svg" },
      { id: "account-ai-about-2", title: "אפס טעויות, אפס פחדים", description: "ה-AI למד את כל הרגולציה של מס הכנסה, ביטוח לאומי ומע״מ + את הידע של למעלה מ-1,000 רואי חשבון. אתה מקבל מקצועיות של רמה אחרת.", icon: "/about/2.svg" },
      { id: "account-ai-about-3", title: "דוחות בזמן, בלי עיכובים", description: "דוחות חודשיים ודוחות שנתיים מוכנים בזמן, בלי המתנה, בלי \"אני עסוק\", בלי משחקים.",  icon: "/about/3.svg" },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      { id: "account-ai-faq-1", question: "מה זה Account AI?", answer: "פתרון שמסייע באוטומציה ותובנות פיננסיות לפי נתונים." },
      { id: "account-ai-faq-2", question: "איך מתחילים?", answer: "מגדירים מטרות, מחברים נתונים, ואז בונים אוטומציות ותובנות." },
      { id: "account-ai-faq-3", question: "אפשר להתאים לעסק שלי?", answer: "כן. הקונפיג מאפשר התאמה מלאה של תהליך ותצוגה." },
    ],
  },
  sections: SECTIONS_ORDER,
}

