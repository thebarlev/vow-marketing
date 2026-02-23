import type { Metadata } from "next"
import type { LeadSource } from "@/app/_components/home/Popup"
import type { ServiceAboutItem } from "@/app/_components/services/ServiceAboutSection"
import type { ServiceFaqItem } from "@/app/_components/services/ServiceFaqSection"

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
  slug: "design" | "develop" | "marketing" | "roi"
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

export const designConfig: ServicePageConfig = {
    slug: "design",
    metadata: {
      title: "עיצוב ומיתוג",
      description: "עמוד שירות — עיצוב",
    },
    hero: {
      title: "עיצוב ומיתוג לעסקים וליזמים",
      tags: ["אתר", "אפליקציה", "SaaS ומערכות", "קריאייטיב", "לוגו"],
      ctaLabel: "להשארת פרטים",
      ctaSource: "design_development",
      imageSrc: "/services/design/Dhero.webp",
      imageAlt: "עיצוב ומיתוג לעסקים",
    },
    doubleHeading: {
      title: "חבילת מיתוג והשקה מלאה לעסק",
      subtitle:
        "אם אתם בתחילת הדרך - אנחנו מציעים פתרון מלא הכולל מיתוג, אתר ונכסים דיגיטליים מוכנים להשקה.כך תוכלו לצאת לשוק מהר, נכון ועם נראות מקצועית.",
      buttonLabel: "בואו נבנה את המותג שלכם",
      buttonSource: "design_development",
    },
  
    vision: {
      title: "סטנדרט של מותגים גדולים גם לעסקים קטנים.",
      subtitle:
        "מיתוג אמיתי מתחיל בהבנה עמוקה של העסק, הקהל והבידול בשוק.אנחנו מגדירים יחד את המיקום שלך בשוק ובונים שפה מותגית שמדברת לקהל הנכון.",
      ctaLabel: "להשארת פרטים",
      source: "design_development",
      cards: [
        { id: "design-1", src: "/services/design/1.webp", alt: "חידוד קהל יעד", caption: "חידוד קהל יעד" },
        { id: "design-2", src: "/services/design/2.webp", alt: "מיצוב ובידול", caption: "מיצוב ובידול" },
        { id: "design-3", src: "/services/design/3.webp", alt: "התאמה אישית ומדויקת לנישה ואופי העסק", caption: "התאמה אישית ומדויקת לנישה ואופי העסק" },
        { id: "design-4", src: "/services/design/4.webp", alt: "אתרים ודפי נחיתה", caption: "אתרים ודפי נחיתה" },
      ],
    },
    about: {
      title: "עסק חדש? מתחילים נכון מהיום הראשון",
      subtitle: "כל פרויקט נבנה כדי להניע לפעולה, בין אם להשארת פרטים, רכישה או יצירת קשר, שהופכת את הגולשים ללקוחות.",
      ctaLabel: "להשארת פרטים",
      ctaSource: "design_development",
      items: [
        { id: "design-about-1", title: "אתרים, אפליקציות ומערכות", description: "אתרי תדמית, מכירות, אפליקציות ומערכות ברמה ללא פשרות", icon: "/about/laptop.svg" },
        { id: "design-about-2", title: "צבעים וטיפוגרפיה", description: "שפה ויזואלית חדה, עקבית ובלתי נשכחת", icon: "/about/2.svg" },
        { id: "design-about-3", title: "קריאטיב שיווקי", description: "קריאייטיב שיווקי שמחבר רגש, אסטרטגיה ומכירות", icon: "/about/3.svg" },
      ],
    },

    faq: {
      title: "שאלות נפוצות על עיצוב ומיתוג",
      items: [
        {
          id: "design-faq-1",
          question: "מה כולל תהליך מיתוג?",
          answer: "אפיון מסרים, שפה ויזואלית (צבעים, טיפוגרפיה) ונכסים ראשונים להשקה.",
        },
        {
          id: "design-faq-2",
          question: "כמה זמן לוקח פרויקט מיתוג?",
          answer: "תלוי בהיקף. לרוב בין שבועיים למספר שבועות, עם לו״ז ברור מהיום הראשון.",
        },
        {
          id: "design-faq-3",
          question: "האם אתם עושים גם אתר/דפי נחיתה?",
          answer: "כן. אפשר לשלב אתר ודפי נחיתה כחלק מהחבילה, בהתאם ליעד העסקי.",
        },
      ],
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
    title: "פיתוח אתרים מבוסס AI",
    tags: ["אתרי תדמית / חנויות", "אפליקציות", "מערכות / SaaS", "אוטומציות"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
    imageSrc: "/services/develop/Dhero.webp",
    imageAlt: "פיתוח מבוסס AI",

  },
  doubleHeading: {
    title: "יותר תוצאות. יותר מדוייק.",
    subtitle: "אם כבר יש לכם אתר או מערכת פעילה - אנחנו יכולים להפוך אותה ליעילה יותר, מדויקת יותר ורווחית יותר.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "design_development",
  },
  about: {
    title: "פיתוח דיגיטלי בלי בזבוז זמן וכסף בעזרת AI.",
    subtitle: "כל מוצר נבנה מתוך חשיבה תוצאתית: בין אם מדובר באתר, אפליקציה או מערכת פנימית - אנחנו מפתחים כדי לייצר ערך עסקי ברור.",
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
    items: [
      { id: "develop-about-1", title: "אפיון UX/UI Design", description: "מחקר משתמשים, הגדרת זרימות ותכנון חוויית משתמש מדויקת.", icon: "/about/2.svg" },
      { id: "develop-about-2", title: "פיתוח עם טכנולוגיה מתקדמת", description: "קוד נקי, ארכיטקטורה נכונה והטמעה מלאה.", icon: "/about/code.svg" },
      { id: "develop-about-3", title: "השקה ושיפור", description: "מדידה, אופטימיזציה ושדרוגים בהתאם לנתונים.", icon: "/about/rocket.svg" },
    ],
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        id: "develop-faq-1",
        question: "באילו טכנולוגיות אתם עובדים?",
        answer: "בעיקר אתרי תדמית וחנויות אונליין בטכנולוגיות כמו React, WordPress, PHP, Java ו-Next.js, כולל פתרונות AI והתאמה מלאה לצרכי המוצר והאינטגרציות."
      },
      {
        id: "develop-faq-2",
        question: "האם אתם דואגים לביצועים ו-SEO?",
        answer: "כן. מהירות טעינה, מבנה נכון ו-SEO בסיסי כחלק מהפיתוח.",
      },
      {
        id: "develop-faq-3",
        question: "אפשר לחבר סליקה/CRM/מערכות צד ג׳?",
        answer: "כן. אנחנו עובדים עם APIs ואינטגרציות לפי הצורך.",
      },
    ],
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
    title: "שיווק שמייצר תוצאות",
    tags: ["ניהול קמפיינים", "SEO", "קריאטיב"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    imageSrc: "/services/marketing/itzik-vow.webp",
    imageAlt: "שיווק דיגיטלי",
  },
  doubleHeading: {
    title: "החברות הגדולות כבר כאן!",
    subtitle: "הגיע הזמן שגם העסק שלכם יקבל שיווק ברמה אחרת.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "digital_marketing",
  },
  about: {
    title: "שיווק שמביא תוצאות מדידות",
    subtitle: "אסטרטגיה, קריאייטיב ואופטימיזציה, עם החלטות שמבוססות נתונים.",
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    items: [
      {
        id: "marketing-about-1",
        title: "ניסיון שמבין עסקים לעומק",
        description: "לא רק קמפיינים, הבנה פיננסית, מוצרית ושיווקית שמחוברת למספרים.",
        icon: "/about/briefcase.svg",
      },
      {
        id: "marketing-about-2",
        title: "חשיבה אסטרטגית לפני ביצוע",
        description: "בדיקות, שיפור מתמיד ומיקוד ב‑ROI.",
        icon: "/about/lightbulb.svg",
      },
      {
        id: "marketing-about-3",
        title: "מדידה ואופטימיזציה",
        description: "משפכים, אנליטיקס ודשבורדים.",
        icon: "/about/analytics.svg",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות על שיווק דיגיטלי",
    items: [
      {
        id: "marketing-faq-1",
        question: "באילו פלטפורמות אתם מפרסמים?",
        answer: "לרוב Google/Meta, ובמידת הצורך גם ערוצים נוספים.",
      },
      {
        id: "marketing-faq-2",
        question: "איך מודדים הצלחה?",
        answer: "מגדירים KPI, מודדים משפך, ומשפרים באופן שוטף לפי נתונים.",
      },
      {
        id: "marketing-faq-3",
        question: "האם אתם מטפלים גם בתוכן וקריאייטיב?",
        answer: "כן. קריאייטיב, קופי ותוכן כחלק מהתהליך.",
      },
    ],
  },
  sections: SECTIONS_ORDER,
}

export const roiConfig: ServicePageConfig = {
  slug: "roi",
  metadata: {
    title: "ROI פחות תנועה - יותר מכירות | VOW",
    description: "עמוד שירות — ROI / CRO",
  },
  hero: {
    title: "ROI: פחות תנועה — יותר מכירות",
    tags: ["CRO", "משפכים", "A/B Testing", "מהירות", "אנליטיקס"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    imageSrc: "/m-woman-vow.webp",
    imageAlt: "ROI פחות תנועה - יותר מכירות",
  },
  doubleHeading: {
    title: "ממקסמים המרות בלי להגדיל תקציב",
    subtitle:
      "אנחנו מנתחים את המשפך, מזהים צווארי בקבוק ומשפרים UX, קופי ומהירות — כדי להעלות הכנסות מהתנועה שכבר יש.",
    buttonLabel: "בואו נשפר את ה‑ROI",
    buttonSource: "digital_marketing",
  },
  about: {
    title: "שדרוג ביצועים שמייצר יותר מכירות",
    subtitle:
      "פחות ניחושים, יותר נתונים. שינויים מדויקים שמעלים יחס המרה ומורידים עלות רכישה.",
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    items: [
      {
        id: "roi-about-1",
        title: "מדידה ואבחון משפך",
        description: "אנליטיקס, אירועים, דשבורדים וזיהוי נקודות נטישה.",
        icon: "/about/3.svg",
      },
      {
        id: "roi-about-2",
        title: "שיפור UX וקופי שמוכר",
        description: "מסרים, היררכיה, אמון והנעה לפעולה — במקום הנכון.",
        icon: "/about/2.svg",
      },
      {
        id: "roi-about-3",
        title: "ניסויים ואופטימיזציה רציפה",
        description: "בדיקות A/B, השערות, שיפור מתמיד והטמעה בפיתוח.",
        icon: "/about/1.svg",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות על ROI",
    items: [
      {
        id: "roi-faq-1",
        question: "זה מתאים גם אם אין הרבה תנועה?",
        answer:
          "כן. המטרה היא להוציא יותר מהתנועה הקיימת. גם שיפור קטן ביחס המרה יכול לייצר קפיצה בהכנסות.",
      },
      {
        id: "roi-faq-2",
        question: "איך יודעים מה לשפר קודם?",
        answer:
          "מתחילים בדאטה: משפך, נקודות נטישה, חום/הקלקות ומשוב. משם בונים רשימת ניסויים לפי אימפקט ומאמץ.",
      },
      {
        id: "roi-faq-3",
        question: "אתם גם מבצעים את השינויים בפועל?",
        answer:
          "כן. אנחנו יכולים להוביל גם את התכנון וגם את היישום (עיצוב/פיתוח) כדי שהשיפורים ייצאו מהר וימדדו נכון.",
      },
    ],
  },
  sections: SECTIONS_ORDER,
}

