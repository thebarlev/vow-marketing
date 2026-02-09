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
    toppopup: "",
    buttonLabel: "להשארת פרטים",
    bullets: PACKAGE_CARDS[3].bullets,
  },
  {
    title: "שיווק דיגיטלי",
    toppopup: "השאירו פרטים ונחזור אליכם בשעות הקרובות",
    kicker: "יוצרים נוכחות דיגיטלית מנצחת",
    buttonLabel: "להשארת פרטים",
    bullets: PACKAGE_CARDS[2].bullets,
  },
  {
    title: "חשבונאות חכמה (AI)",
    toppopup: "מוגבל ל-100 בלבד | נותרו פחות מ־10 מקומות",
    kicker: "הרואה חשבון שלך עובד 24/7",
    buttonLabel: "להשארת פרטים",
    bullets: PACKAGE_CARDS[1].bullets,
  },
] as const

 export const ABOUT_US = [
  {
    title: "חוסכים אלפי שקלים בשנה",
    kicker: "במקום לשלם הון עתק בחודש לרו״ח מסורתי - עם VOW רואה חשבון AI ישאר לך ההרבה יותר כסף בכיס.", 
    icon: "/about/1.svg",
  },
  {
    title: "אפס טעויות, אפס פחדים", 
    kicker: "הAI למד את כל הרגולציה של מס הכנסה, ביטוח לאומי ומע״מ + את הידע של למעלה מ-1,000 רואי חשבון. אתה מקבל מקצועיות של רמה אחרת.", 
    icon: "/about/2.svg",
  },
  {
    title: "דוחות בזמן, בלי עיכובים", 
    kicker: "דוחות חודשיים ודוחות שנתיים מוכנים בזמן, בלי המתנה, בלי \"אני עסוק\", בלי משחקים.", 
    icon: "/about/3.svg",
  },
] as const;

 

export const OUR_PRICE = [
  {
    title: "חינם",
    toppopup: "מוגבל ל-100 בלבד | נותרו פחות מ־10 מקומות",
    kicker: "הרואה חשבון שלך עובד 24/7",
    buttonLabel: "ניסיון חינם",
    price: "0 ₪",
    badge: "נסו את Vow לשנה",
    bullets: [
      "פיתוח וליווי אתרים ומערכות",
      "פיתוח בהתאמה אישית",
      "אבטחה, מהירות ונגישות",
      "אינטגרציות חכמות",
    ],
  },
  {
    title: "מקצועי",
    toppopup: "השאירו פרטים ונחזור אליכם בשעות הקרובות",
    kicker: "יוצרים נוכחות דיגיטלית מנצחת",
    buttonLabel: "ניסיון חינם",
    price: "29 ₪ לחודש לפני מע״מ",
    badge: "המומלץ ביותר",
    bullets: [
      "פיתוח וליווי אתרים ומערכות",
      "פיתוח בהתאמה אישית",
      "אבטחה, מהירות ונגישות",
      "אינטגרציות חכמות",
    ],
  },
  {
    title: "אקסטרה",
    toppopup: "",
    kicker: "מעצבים חוויה. מפתחים עתיד.",
    buttonLabel: "ניסיון חינם",
    price: "69 ₪ לחודש לפני מע״מ",
    badge: "",
    bullets: [
      "פיתוח וליווי אתרים ומערכות",
      "פיתוח בהתאמה אישית",
      "אבטחה, מהירות ונגישות",
      "אינטגרציות חכמות",
    ],
  },
] as const;
