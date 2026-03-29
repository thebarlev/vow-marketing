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
    heroSubheading?: string
    tags?: readonly string[]
    ctaLabel: string
    ctaSource: LeadSource
    imageSrc?: string
    imageAlt?: string
  }
  vision?: {
    title?: string
    subtitle?: string
    ctaLabel?: string
    ctaHref?: string
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
    ctaHref?: string
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
      title: "עיצוב ומיתוג לעסקים | Uxellent",
      description: "עיצוב ומיתוג לעסקים עם UX/UI, דפי נחיתה ואתרים שמחזקים מותג, משפרים חוויית משתמש ומגדילים המרות.",
    },
    hero: {
      title: "עיצוב ומיתוג לעסקים וליזמים",
      heroSubheading: "אתר, אפליקציה, SaaS ומערכות - קריאייטיב ולוגו שמדברים לקהל הנכון",
      ctaLabel: "להשארת פרטים",
      ctaSource: "design_development",
      imageSrc: "/services/d-design.webp",
      imageAlt: "Branding and UX design for business growth and digital presence",
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
    title: "פיתוח אתרים לעסקים | Uxellent",
    description: "פיתוח אתרים לעסקים עם SEO טכני, מהירות, נגישות וחוויית משתמש שמייצרים יותר פניות, מכירות וצמיחה.",
  },
  hero: {
    title: "פיתוח אתרים מבוסס AI לעסקים",
    heroSubheading: "אתרי תדמית, חנויות אונליין, אפליקציות ומערכות - מהירים, נגישים ומוכנים לקידום",
    ctaLabel: "להשארת פרטים",
    ctaSource: "design_development",
    imageSrc: "/services/d-develop.webp",
    imageAlt: "AI-powered website development for business growth and digital presence",

  },
  doubleHeading: {
    title: "פיתוח אתרי וורדפרס וחנויות אונליין מבוססי AI עם 20 שנות ניסיון",
    subtitle: "משלבים ניסיון עמוק בבניית אתרים, SEO וקידום עסקים בגוגל וב-AI, כדי לבנות לך נוכחות דיגיטלית שמייצרת תוצאות עסקיות אמיתיות.",
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
    title: "שיווק PPC לעסקים | Uxellent",
    description: "ניהול קמפיינים בגוגל ובמטא עם PPC מבוסס נתונים, CRO ושיווק דיגיטלי שמטרתו לידים איכותיים ו-ROI טוב יותר.",
    openGraph: {
      title: "שיווק PPC | Uxellent",
      description: "קמפיינים בגוגל ובמטא שמבוססים מדידה, אופטימיזציה ו‑ROI. מפסיקים לנחש - מתחילים למדוד.",
      url: "/marketing/ppc",
      type: "website",
    },
  },
  hero: {
    title: "קידום ממומן PPC שמייצר לקוחות",
    subtitle: "ניהול קמפיינים ב-Google Ads וב-Meta Ads עם תהליך מבוסס נתונים - מטרגוט ועד אופטימיזציה שמגדילה לידים ומכירות.",
    heroSubheading: "",
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    imageSrc: "/services/d-marketing.webp",
    imageAlt: "PPC digital marketing for business growth and lead generation",
  },
  doubleHeading: {
    title: "גם אתם יכולים לשחק בליגה של הגדולים.",
    subtitle: "בונים קמפיינים שמתחברים למספרים: עלות ליד, איכות, יחס סגירה ו‑LTV - ומקבלים החלטות לפי דאטה.",
    buttonLabel: "להשארת פרטים",
    buttonSource: "digital_marketing",
  },
  vision: {
    title: "פחות ניחושים. יותר נתונים.",
    subtitle:
      "אנחנו בונים מערכת שיווק שמבוססת מדידה: קמפיינים, קריאייטיב, אנליטיקס ואופטימיזציה - עם החלטות שמחוברות ל‑ROI.",
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
      "עם מעל 20 שנות ניסיון - אנחנו יודעים לחבר קריאייטיב, קמפיינים ודאטה כדי לבנות תהליך שמייצר צמיחה ולא רק קליקים.",
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
        answer: "כן. קריאייטיב, קופי ונכסי נחיתה כחלק מהתהליך - כדי לשפר CTR, יחס המרה ועלות רכישה.",
      },
    ],
  },
  sections: SECTIONS_ORDER,
}

export const roiConfig: ServicePageConfig = {
  slug: "roi",
  metadata: {
    title: "שיפור ROI ו-CRO לאתרים | Uxellent",
    description: "שיפור ROI ו-CRO לעסקים עם אופטימיזציית משפך, UX, קופי ומדידה שמגדילים המרות בלי להגדיל תקציב.",
  },
  hero: {
    title: "ROI: פחות תנועה - יותר מכירות",
    heroSubheading: "CRO, משפכים, A/B Testing ומהירות - ניתוח מדויק שמעלה המרות בלי להגדיל תקציב",
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    imageSrc: "/m-woman-vow.webp",
    imageAlt: "ROI marketing strategy - less traffic, more sales for business growth",
  },
  doubleHeading: {
    title: "ממקסמים המרות בלי להגדיל תקציב",
    subtitle:
      "אנחנו מנתחים את המשפך, מזהים צווארי בקבוק ומשפרים UX, קופי ומהירות - כדי להעלות הכנסות מהתנועה שכבר יש.",
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
        description: "מסרים, היררכיה, אמון והנעה לפעולה - במקום הנכון.",
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
    title: "קידום אתרים בגוגל וב-AI | Uxellent",
    description:
      "קידום אתרים לעסקים עם SEO, תוכן, סכמות ומדידה חודשית כדי להגדיל חשיפה, תנועה ולידים בגוגל וב-AI.",
    alternates: {
      canonical: "/seo-ai",
    },
    openGraph: {
      title: "קידום עסקים בגוגל וב-AI",
      description:
      "אתר בלי SEO נשאר ללא מבקרים. אנחנו מחברים לכל אתר מערכת SEO + AI שעובדת באופן חודשי ומגדילה תנועה, תוכן ולידים.",
      url: "/seo-ai",
      type: "website",
    },
  },
  hero: {
    title: "לקוחות כבר לא מחפשים בגוגל הם שואלים AI.",
    subtitle:
      "האם העסק שלך מופיע בתשובה?",
    heroSubheading: "אנחנו הופכים את האתר שלך לנכס שמביא לקוחות, גם מגוגל וגם ממנועי AI. בלי קמפיינים ממומנים. בלי תלות בתקציב פרסום.",
    ctaLabel: "קבל אבחון נוכחות - בחינם",
    ctaSource: "digital_marketing",
    imageSrc: "/new-hero.webp",
    imageAlt: "AI SEO strategy helping businesses appear in ChatGPT, Google and AI search results",
  },
  doubleHeading: {
    title: "SEO זה לא רק מיקומים. זה איכות ליד.",
    subtitle:
    " אנחנו בונים אסטרטגיה שמודדת איכות, משפך והכנסות, לא רק תנועה.",
    buttonLabel: "להצטרפות",
    buttonSource: "digital_marketing",
  },
  vision: {
    title: "קידום שמביא תנועה וגם הופכת אותה ללידים",
    subtitle:
      "רוב בעלי העסקים משלמים על פרסום כל חודש, ומקבלים לידים שנעצרים ברגע שהתקציב נגמר. זה לא אסטרטגיה. זה ברז שתמיד יכול להיסגר.",
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
    title: " האתר שלך קיים, אבל הוא לא מביא לקוחות. אנחנו מתקנים את זה.",
    subtitle:
    "SEO + נוכחות AI - ליווי חודשי שמביא תוצאות בלי לרדוף אחרי פרסום.",
    ctaLabel: "להשארת פרטים",
    ctaSource: "digital_marketing",
    items: [
      {
        id: "seo-ai-about-1",
        title: "פחות כסף על פרסום, יותר לקוחות",
        description: "המערכת מחליפה שעות עבודה ידניות, מפחיתה תלות בספקים חיצוניים ומאפשרת להפיק תוצרים שיווקיים, ניתוחים וחשיפה במהירות.",
        icon: "/services/seo-ai/1.svg",
      },
      {
        id: "seo-ai-about-2",
        title: "עוצרים קמפיין? הלידים לא נעצרים",
        description: "עוצרים קמפיין, נעלמים. כל שקל שמשלמים לגוגל/פייסבוק נשרף ולא בונה כלום לעתיד.",
        icon: "/services/seo-ai/2.svg",
      },
      {
        id: "seo-ai-about-3",
        title: "חודש אחרי חודש, האתר חזק יותר",
        description: "ב-Uxellent מזהים נקודות חולשה באתר, בתוכן ובתהליך המכירה, ומציעים פתרונות פרקטיים שמעלים את אחוזי ההמרה.",
        icon: "/services/seo-ai/3.svg",
      },
    ],
  },
  faq: {
    title: "שאלות נפוצות על SEO / AI",
    items: [
      {
        id: "seo-ai-faq-1",
        question: "כמה זמן עד שרואים תוצאות?",
        answer:
          "רוב הלקוחות רואים שינוי מדיד - יותר הופעות, יותר קליקים - תוך 4–8 שבועות. פניות אורגניות ראשונות מגיעות לרוב בחודש 2–3. SEO הוא נכס שצומח, לא ברז שנפתח מיד - אבל בניגוד לפרסום, הוא לא נעצר כשמפסיקים לשלם.",
      },
      {
        id: "seo-ai-faq-2",
        question: "מה בדיוק אתם עושים כל חודש?",
        answer:
          'בתחילת כל חודש תקבל תכנית עבודה מפורטת: אילו עמודים משדרגים, אילו תכנים כותבים, אילו שינויים טכניים מבוצעים. בסוף החודש, דו"ח עם נתוני אמת. לא "עשינו SEO" - עשינו X, Y, Z וזו התוצאה.',
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
          "כן. טכני, תוכן, וקישורים/סמכות, כחבילה אחת שמכוונת לתוצאה עסקית.",
      },
      {
        id: "seo-ai-faq-5",
        question: "האם זה במקום פרסום ממומן?",
        answer:
          "לא בהכרח - אבל בהחלט מוריד את התלות בו. עסקים שעובדים איתנו 3–6 חודשים מדווחים על ירידה של 30–60% בהוצאות פרסום תוך שמירה על אותו נפח לידים. הפרסום הממומן יכול להישאר כהאצה, לא כעמוד השדרה.",
      },
      {
        id: "seo-ai-faq-6",
        question: "מה קורה אם מפסיקים לשלם?",
        answer:
          "ההבדל הגדול מפרסום: מה שבנינו, נשאר. האתר המשודרג, התוכן, העמודים - הם שלך לתמיד. כמובן שיש שיפור מתמשך עם ליווי, אבל לא חוזרים לאפס ברגע שעוצרים.",
      },
      {
        id: "seo-ai-faq-7",
        question: "צריך לתת גישה לאתר?",
        answer:
          "כן, לשינויים בפועל נצטרך גישה. אנחנו עובדים עם WordPress, Wix, Webflow וכמעט כל פלטפורמה. אם האתר שלך על פלטפורמה ייחודית - נעשה בדיקה ראשונית חינם לפני שמחויבים לכלום.",
      },
    ],
  },
  sections: SECTIONS_ORDER,
}

