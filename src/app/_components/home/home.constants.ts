export const CLIENT_LOGOS = [
  { src: "/logos/Altshuler_logo-3.svg", alt: "Altshuler Shaham" },
  { src: "/logos/horizon_svg-3.svg", alt: "Horizon" },
  { src: "/logos/Isracarrd_logo-3.svg", alt: "Isracard" },
  { src: "/logos/Logo_Carrefour-5.svg", alt: "Carrefour" },
  { src: "/logos/max_svg1-3.svg", alt: "MAX" },
  { src: "/logos/Soundcore_svg-3.svg", alt: "Soundcore" },
] as const

export const HERO_TAGS = [
  "רואה חשבון AI",
  "פיתוח אתרים ומערכות",
  "חשבונית ירוקה מאובטחת",
  "שיווק דיגיטלי",
] as const

const DEFAULT_TESTIMONIAL_TEXT =
  "VOW היא פלטפורמה איכותית, שמשלבת חדשנות יוצאת דופן עם מומחיות עמוקה בשיווק ופיתוח. המערכת מספקת בעקביות ובזמן פתרונות מדויקים, שמעלים את רמת הניהול ומובילים לתוצאות מדידות."

export const TESTIMONIALS = [
  {
    name: "חולדה",
    title: "שנאי חולדה",
    kicker: "",
    text: DEFAULT_TESTIMONIAL_TEXT,
    imageSrc: "/testimonials/שנאי חולדה.webp",
    imageAlt: "תמונה מייצגת — שנאי חולדה",
  },
  {
    name: "סלדט",
    title: "סלדט",
    text: DEFAULT_TESTIMONIAL_TEXT,
    imageSrc: "/testimonials/סלדט.webp",
    imageAlt: "תמונה מייצגת — סלדט",
  },
  {
    name: "אלטשולר שחם",
    title: "אלטשולר שחם פיננסים",
    text: DEFAULT_TESTIMONIAL_TEXT,
    imageSrc: "/testimonials/אלטשולר שחם פיננסים סרביסס.webp",
    imageAlt: "תמונה מייצגת — אלטשולר שחם פיננסים",
  },
  {
    name: "Carrefour",
    title: "Carrefour",
    text: DEFAULT_TESTIMONIAL_TEXT,
    imageSrc: "/testimonials/Carrefoure.webp",
    imageAlt: "תמונה מייצגת — Carrefour",
  },
  {
    name: "Youa",
    title: "Youa",
    text: DEFAULT_TESTIMONIAL_TEXT,
    imageSrc: "/testimonials/youa.webp",
    imageAlt: "תמונה מייצגת — Youa",
  },
  {
    name: "סבונלה",
    title: "סבונלה",
    text: DEFAULT_TESTIMONIAL_TEXT,
    imageSrc: "/testimonials/סבונלה.webp",
    imageAlt: "תמונה מייצגת — סבונלה",
  },
] as const

export const PACKAGE_CARDS = [
  {
    kicker: "חינם לשנה",
    headline: "חשבונית ירוקה מאובטחת",
    buttonLabel: "להשארת פרטים",
    bullets: [
      "הפקת מסמכים רציפה",
      "חתימה דיגיטלית מאובטחת",
      "מספור תקין, בלי חורים",
      "שמירה וגיבוי מלאים",
      "מוכן לביקורת ולדוחות",
    ],
  },
  {
    kicker: "הרואה חשבון שלך עובד 24/7",
    headline: "חשבונאות חכמה (AI)",
    buttonLabel: "להשארת פרטים",
    bullets: [
      "תשובות מיידיות - לא עוד המתנות לרו״ח",
      "תכנון מס חכם שחוסך לך כסף אמיתי",
      "ניתוח יומי של העסק, לא דוח רבעוני",
      "ידע של 1,000+ רואי חשבון במקום אחד",
      "עדכון אוטומטי לכל שינוי בחוק והתקנות",
    ],
  },
  {
    kicker: "יוצרים נוכחות דיגיטלית מנצחת",
    headline: "שיווק דיגיטלי",
    buttonLabel: "להשארת פרטים",
    bullets: [
      "מיתוג שמספר סיפור",
      "קידום ממומן ואורגני",
      "בניית משפכי שיווק (Funnels)",
      "יצירת תוכן ממיר",
      "מיתוג ברשתות חברתיות",
    ],
  },
  {
    kicker: "מעצבים חוויה. מפתחים עתיד.",
    headline: "עיצוב ופיתוח",
    buttonLabel: "להשארת פרטים",
    bullets: [
      "פיתוח וליווי אתרים ומערכות",
      "פיתוח בהתאמה אישית",
      "אבטחה, מהירות ונגישות",
      "אינטגרציות חכמות",
    ],
  },
] as const

export const OUR_PACKAGES = [
  {
    title: "עיצוב ופיתוח",
    kicker: "מעצבים חוויה. מפתחים עתיד.",
    buttonLabel: "להשארת פרטים",
    bullets: PACKAGE_CARDS[3].bullets,
  },
  {
    title: "שיווק דיגיטלי",
    kicker: "יוצרים נוכחות דיגיטלית מנצחת",
    buttonLabel: "להשארת פרטים",
    bullets: PACKAGE_CARDS[2].bullets,
  },
  {
    title: "חשבונאות חכמה (AI)",
    kicker: "הרואה חשבון שלך עובד 24/7",
    buttonLabel: "להשארת פרטים",
    bullets: PACKAGE_CARDS[1].bullets,
  },
] as const

