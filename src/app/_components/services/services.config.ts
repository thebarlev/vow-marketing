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
  slug: "design" | "develop" | "marketing" | "roi" | "seo-ai"
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
      title: "עיצוב ומיתוג לעסקים ויזים",
      description: "מיתוג, UX/UI ואתרים שנראים מעולה וגם ממירים. שפה מותגית שמדברת לקהל הנכון.",
    },
    hero: {
      title: "עיצוב ומיתוג לעסקים וליזמים",
      tags: ["אתר", "אפליקציה", "SaaS ומערכות", "קריאייטיב", "לוגו"],
      ctaLabel: "להשארת פרטים",
      ctaSource: "design_development",
      imageSrc: "/services/d-design.webp",
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
      title: "עסק חדש?\nמתחילים נכון מהיום הראשון",
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
    title: "VOW – פיתוח אתרים, מערכות AI ושיווק שממיר",
    description: "אתרי תדמית, חנויות ומערכות – מהירים, נגישים ומוכנים לקידום. תהליך מדיד שמייצר המרות.",
  },
  hero: {
    title: "פיתוח אתרים מבוסס AI לעסקים",
    tags: ["אתרי תדמית / חנויות", "אפליקציות", "מערכות / SaaS", "אוטומציות"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
    imageSrc: "/services/d-develop.webp",
    imageAlt: "פיתוח מבוסס AI",

  },
  doubleHeading: {
    title: "פיתוח אתרי וורדפרס וחנויות אונליין מבוססי AI עם 20 שנות ניסיון",
    subtitle: "משלבים ניסיון עמוק בבניית אתרים, SEO וקידום עסקים במנועי AI, כדי לבנות לך נוכחות דיגיטלית שמייצרת תוצאות עסקיות אמיתיות.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "design_development",
  },
  vision: {
    title: "פיתוח אתרים מבוססי AI שמנצחים את המתחרים",
    subtitle:
      "אתר חכם שמתחיל לייצר מכירות / לידים ולהחזיר השקעה כבר מהחודש הראשון",
    ctaLabel: "להשארת פרטים",
    source: "design_development",
    cards: [
      {
        id: "develop-vision-1",
        src: "/services/develop/d1.webp",
        alt: "אתרים שמוכרים ומייצרים לידים",
        caption: "אתרים שמוכרים ומייצרים לידים",
      },
      {
        id: "develop-vision-2",
        src: "/services/develop/d2.webp",
        alt: "אוטומציות שחוסכות שעות עבודה",
        caption:  "אוטומציות שחוסכות שעות עבודה",
      },
      {
        id: "develop-vision-3",
        src: "/services/develop/d3.webp",
        alt: "טכנולוגיה שמביאה תנועה אורגנית SEO",
        caption: "טכנולוגיה שמביאה תנועה אורגנית SEO",
      },
      {
        id: "develop-vision-4",
        src: "/services/develop/d4.webp",
        alt: "פיתוח בהתאמה אישית ייחודית לעסק שלך",
        caption: "פיתוח בהתאמה אישית ייחודית לעסק שלך",
      },
    ],
  },
  about: {
    title: "פיתוח אתרי תדמית וחנויות אונליין מבוססי AI לעסקים, בלי לפגוע בכיס!",
    subtitle: "כל אתר מתוכנן מהיום הראשון להביא לקוחות, מכירות ולידים - לא רק להיראות טוב.",
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

export const marketingPpcConfig: ServicePageConfig = {
  slug: "marketing",
  metadata: {
    title: "שיווק PPC | VOW",
    description: "קמפיינים בגוגל ובמטא שמבוססים מדידה, אופטימיזציה ו‑ROI. מפסיקים לנחש — מתחילים למדוד.",
    openGraph: {
      title: "שיווק PPC | VOW",
      description: "קמפיינים בגוגל ובמטא שמבוססים מדידה, אופטימיזציה ו‑ROI. מפסיקים לנחש — מתחילים למדוד.",
      url: "/marketing/ppc",
      type: "website",
    },
  },
  hero: {
    title: "שיווק PPC",
    subtitle: "Google Ads + Meta Ads עם תהליך מדיד: משפך, אנליטיקס ואופטימיזציה שמכוונת להכנסות — לא לניחושים.",
    tags: ["Google Ads", "Meta Ads", "קריאייטיב", "אנליטיקס"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    imageSrc: "/services/d-marketing.webp",
    imageAlt: "שיווק PPC",
  },
  doubleHeading: {
    title: "גם אתם יכולים לשחק בליגה של הגדולים.",
    subtitle: "בונים קמפיינים שמתחברים למספרים: עלות ליד, איכות, יחס סגירה ו‑LTV — ומקבלים החלטות לפי דאטה.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "digital_marketing",
  },
  vision: {
    title: "פחות ניחושים. יותר נתונים.",
    subtitle:
      "אנחנו בונים מערכת שיווק שמבוססת מדידה: קמפיינים, קריאייטיב, אנליטיקס ואופטימיזציה — עם החלטות שמחוברות ל‑ROI.",
    ctaLabel: "להשארת פרטים",
    source: "digital_marketing",
    cards: [
      {
        id: "marketing-vision-1",
        src: "/services/marketing/1.webp",
        alt: "Google Ads",
        caption: "Google Ads",
      },
      {
        id: "marketing-vision-2",
        src: "/services/marketing/2.webp",
        alt: "Meta Ads",
        caption: "Meta Ads",
      },
      {
        id: "marketing-vision-3",
        src: "/services/marketing/3.webp",
        alt: "אנליטיקה ו‑CRO",
        caption: "אנליטיקה ו‑CRO",
      },
      {
        id: "marketing-vision-4",
        src: "/services/marketing/4.webp",
        alt: "קריאייטיב ו‑A/B Testing",
        caption: "קריאייטיב ו‑A/B Testing",
      },
    ],
  },
  about: {
    title: "שיווק PPC שמבוסס ניסיון אמיתי. תוצאות אמיתיות.",
    subtitle:
      "עם מעל 20 שנות ניסיון — אנחנו יודעים לחבר קריאייטיב, קמפיינים ודאטה כדי לבנות תהליך שמייצר צמיחה ולא רק קליקים.",
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
        title: "שותפות אמיתית לצמיחה",
        description: "אנחנו לא ספק, אנחנו שותף שמכוון לתוצאה העסקית שלכם.",
        icon: "/about/analytics.svg",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות על שיווק PPC",
    items: [
      {
        id: "marketing-faq-1",
        question: "באילו פלטפורמות אתם מנהלים PPC?",
        answer: "בעיקר Google Ads ו‑Meta Ads. בהתאם לקהל ולמוצר נשלב גם ערוצים נוספים כשזה משרת את ה‑ROI.",
      },
      {
        id: "marketing-faq-2",
        question: "איך מודדים הצלחה?",
        answer: "מגדירים KPI לפי יעד עסקי (לידים/מכירות), מודדים משפך מקצה לקצה, ומשפרים באופן שוטף לפי נתונים.",
      },
      {
        id: "marketing-faq-3",
        question: "האם אתם מטפלים גם בתוכן וקריאייטיב?",
        answer: "כן. קריאייטיב, קופי ונכסי נחיתה כחלק מהתהליך — כדי לשפר CTR, יחס המרה ועלות רכישה.",
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

export const seoAiConfig: ServicePageConfig = {
  slug: "seo-ai",
  metadata: {
    title: "קידום אורגני מבוסס AI לגוגל ול-AI",
    description:
      "אתר בלי SEO נשאר ללא מבקרים. אנחנו מחברים לכל אתר מערכת SEO + AI שעובדת באופן חודשי ומגדילה תנועה, תוכן ולידים.",
    openGraph: {
      title: "קידום אורגני מבוסס AI לגוגל ול-AI",
      description:
      "אתר בלי SEO נשאר ללא מבקרים. אנחנו מחברים לכל אתר מערכת SEO + AI שעובדת באופן חודשי ומגדילה תנועה, תוכן ולידים.",
      url: "/seo-ai",
      type: "website",
    },
  },
  hero: {
    title: "קידום אורגני מבוסס AI לגוגל ול-AI",
    subtitle:
      " ",
    tags: ["סריקת עומק", "יצירת פרופיל DNA", "ייצור ערך מיידי", "קידום אורגני מבוסס AI"],
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    imageSrc: "/services/seo-ai/hero.webp",
    imageAlt: "קידום אורגני מבוסס AI לגוגל ול-AI",
  },
  doubleHeading: {
    title: "SEO זה לא רק מיקומים. זה איכות ליד.",
    subtitle:
      "בעידן של תשובות AI חלק מהחיפושים מקבלים תשובה בלי קליק — לכן אנחנו בונים אסטרטגיה שמודדת איכות, משפך והכנסות, לא רק תנועה.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "digital_marketing",
  },
  vision: {
    title: "קידום שמביא תנועה וגם הופכת אותה ללידים",
    subtitle:
      "היום עסקים מבזבזים אלפי שקלים על ניסוי וטעייה, חוסר סדר, וחוסר יכולת לייצר תוכן וקמפיינים בקצב שהשוק דורש. הפתרון: AI שמבוסס על פרופיל עסק + RAG + מודולים חכמים.",
    ctaLabel: "להשארת פרטים",
    source: "digital_marketing",
    cards: [
      {
        id: "seo-ai-vision-1",
        src: "/services/seo-ai/1.webp",
        alt: "מודולים AI שמייצרים ערך מיידי",
        caption: "מודולים AI שמייצרים ערך מיידי",
      },
      {
        id: "seo-ai-vision-2",
        src: "/services/seo-ai/2.webp",
        alt: "החזר השקעה (ROI) גבוה",
        caption: "החזר השקעה (ROI) גבוה",
      },
      {
        id: "seo-ai-vision-3",
        src: "/services/seo-ai/3.webp",
        alt: "מאות סוכני AI מקדמים את עסק שלך",
        caption: "מאות סוכני AI מקדמים את עסק שלך",
      },
      {
        id: "seo-ai-vision-4",
        src: "/services/seo-ai/4.webp",
        alt: "ביצועי SEO משופרים",
        caption: "ביצועי SEO משופרים",
      },
    ],
  },
  about: {
    title: " קידום עסקים באמצעות כלים חדשניים ושילוב AI, חוסכת עלויות ומביאה תוצאות מהירות.",
    subtitle:
      "חיסכון משמעותי בעלויות, פחות שעות עבודה ידניות, פחות תלות בספקים חיצוניים.",
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    items: [
      {
        id: "seo-ai-about-1",
        title: "יעילות תפעולית וחיסכון בעלויות",
        description: "המערכת מחליפה שעות עבודה ידניות, מפחיתה תלות בספקים חיצוניים ומאפשרת להפיק תוצרים שיווקיים, ניתוחים וחשיפה במהירות.",
        icon: "/services/seo-ai/1.svg",
      },
      {
        id: "seo-ai-about-2",
        title: "דיוק מבוסס נתונים אמיתיים",
        description: "המערכת נשענת על פרופיל עסק מובנה ושכבת ידע (RAG), ולכן מפיקה תוצרים מדויקים, עקביים ומותאמים לעסק, ללא המצאות או טעויות אנוש.",
        icon: "/services/seo-ai/2.svg",
      },
      {
        id: "seo-ai-about-3",
        title: "עמידה ביעדים העסקיים",
        description: "המערכת מזהה נקודות חולשה באתר, בתוכן ובתהליך המכירה, ומציעה פתרונות פרקטיים שמעלים את אחוזי ההמרה.",
        icon: "/services/seo-ai/3.svg",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות על SEO / AI",
    items: [
      {
        id: "seo-ai-faq-1",
        question: "מתי רואים תוצאות?",
        answer:
          "בדרך כלל יש שיפור ראשוני בתוך 4–8 שבועות, ותוצאות משמעותיות יותר אחרי 3–6 חודשים — תלוי בתחרות ובמצב האתר היום.",
      },
      {
        id: "seo-ai-faq-2",
        question: "האם צריך בלוג?",
        answer:
          "לא תמיד. המטרה היא לכסות כוונת חיפוש. לפעמים דפי שירות חזקים + FAQ עושים עבודה מצוינת, ובמקרים אחרים בלוג הוא המנוע.",
      },
      {
        id: "seo-ai-faq-3",
        question: "איך AI משנה את המשחק?",
        answer:
          "יותר תשובות בלי קליק, יותר חשיבות לאמינות ומבנה. לכן אנחנו מתמקדים גם בנראות וגם באיכות ליד והתקדמות במשפך.",
      },
      {
        id: "seo-ai-faq-4",
        question: "אתם מטפלים גם בטכני וגם בתוכן?",
        answer:
          "כן. טכני, תוכן, וקישורים/סמכות — כחבילה אחת שמכוונת לתוצאה עסקית.",
      },
    ],
  },
  sections: SECTIONS_ORDER,
}

