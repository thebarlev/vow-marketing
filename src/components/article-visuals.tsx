"use client"

import React, { useState } from "react"

// ─────────────────────────────────────────────
// article-visuals.tsx
// קומפוננטות ויזואליות למאמרים בבלוג (MDX)
// שימוש: import מתוך ה-MDX של המאמר
// ─────────────────────────────────────────────

// ── טיפוסים פנימיים ──────────────────────────

type TagVariant = "good" | "warn" | "bad";

interface BarItem {
  label: string;
  value: number; // 0–100 (אחוז ויזואלי)
  display: string;
  color: string;
}

interface FunnelStage {
  label: string;
  pct: number; // 0–100
  note?: string;
  color: string;
}

interface MetricRow {
  name: string;
  shortName: string;
  description: string;
  good: string;
  bad: string;
}

interface ActionRow {
  action: string;
  difficulty: TagVariant;
  difficultyLabel: string;
  impact: TagVariant;
  impactLabel: string;
}

// ── עזרים ────────────────────────────────────

const TAG_CLASSES: Record<TagVariant, string> = {
  good: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  warn: "bg-amber-50 text-amber-700 border border-amber-200",
  bad: "bg-red-50 text-red-600 border border-red-200",
};

function Tag({ variant, children }: { variant: TagVariant; children: React.ReactNode }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${TAG_CLASSES[variant]}`}
    >
      {children}
    </span>
  );
}

// ── 1. SpeedBarChart ──────────────────────────

const BAR_DATA: BarItem[] = [
  { label: "1–2 שניות", value: 100, display: "100% המרות", color: "#2a7a4b" },
  { label: "3 שניות",   value: 84,  display: "~84%",        color: "#4a9a6a" },
  { label: "4 שניות",   value: 70,  display: "~70%",        color: "#c07a00" },
  { label: "5 שניות",   value: 57,  display: "~57%",        color: "#d4401a" },
  { label: "6 שניות",   value: 50,  display: "~50%",        color: "#8b1a00" },
];

export function SpeedBarChart() {
  return (
    <figure className="my-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm not-prose">
      <figcaption className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        השפעת זמן טעינה על שיעור ההמרה — ביחס לאתר מהיר
      </figcaption>

      <div className="space-y-3">
        {BAR_DATA.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="w-24 flex-shrink-0 text-right text-sm text-neutral-500">
              {item.label}
            </span>
            <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-neutral-100">
              <div
                className="flex h-full items-center justify-end rounded-md px-3 text-xs font-bold text-white transition-all duration-700"
                style={{ width: `${item.value}%`, backgroundColor: item.color }}
              >
                {item.display}
              </div>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ── 2. ConversionFunnel ───────────────────────

const FUNNEL_DATA: FunnelStage[] = [
  { label: "נכנסו לאתר",            pct: 100, color: "#2a7a4b" },
  { label: "ראו תוכן ראשוני",       pct: 80,  color: "#4a9a6a", note: "20% עזבו בטעינה" },
  { label: "גללו לתוכן",            pct: 60,  color: "#e6a817", note: "פחות גלילה = פחות חשיפה לטפסים" },
  { label: "הגיעו לטופס / CTA",     pct: 40,  color: "#c07a00" },
  { label: "מילאו טופס",            pct: 25,  color: "#d4401a", note: "רק רבע מהמבקרים הגיעו לכאן" },
];

export function ConversionFunnel() {
  return (
    <figure className="my-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm not-prose">
      <figcaption className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        מה קורה לביקור ככל שהטעינה מתארכת
      </figcaption>

      <div className="space-y-2.5">
        {FUNNEL_DATA.map((stage) => (
          <div key={stage.label} className="flex items-center gap-3">
            <div
              className="flex h-10 flex-shrink-0 items-center rounded-md px-4 text-sm font-semibold text-white"
              style={{ width: `${stage.pct}%`, backgroundColor: stage.color, minWidth: "8rem" }}
            >
              {stage.label}
            </div>
            {stage.note && (
              <span className="text-xs text-neutral-400">{stage.note}</span>
            )}
          </div>
        ))}
      </div>
    </figure>
  );
}

// ── 3. MetricsTable ───────────────────────────

const METRICS: MetricRow[] = [
  {
    name: "TTFB",
    shortName: "תגובת השרת",
    description: "כמה מהר השרת מתחיל לשלוח תוכן",
    good: "מתחת ל־0.8 שנ'",
    bad: "מעל 1.8 שנ'",
  },
  {
    name: "LCP",
    shortName: "טעינת התוכן המרכזי",
    description: "מתי מופיע האלמנט הגדול בדף",
    good: "מתחת ל־2.5 שנ'",
    bad: "מעל 4 שנ'",
  },
  {
    name: "Time to Interactive",
    shortName: "זמן אינטראקציה",
    description: "מתי אפשר באמת ללחוץ ולהשתמש בדף",
    good: "מתחת ל־3.8 שנ'",
    bad: "מעל 7.3 שנ'",
  },
];

export function MetricsTable() {
  return (
    <div className="my-8 overflow-x-auto not-prose">
      <table className="w-full border-collapse rounded-xl overflow-hidden border border-neutral-200 bg-white text-sm shadow-sm">
        <thead>
          <tr className="bg-neutral-900 text-white">
            <th className="p-3 text-right font-semibold">מדד</th>
            <th className="p-3 text-right font-semibold">מה הוא מודד</th>
            <th className="p-3 text-right font-semibold">טוב</th>
            <th className="p-3 text-right font-semibold">בעייתי</th>
          </tr>
        </thead>
        <tbody>
          {METRICS.map((row, i) => (
            <tr key={row.name} className={i % 2 === 1 ? "bg-neutral-50" : "bg-white"}>
              <td className="p-3 font-semibold">
                {row.name}
                <span className="block text-xs font-normal text-neutral-400">{row.shortName}</span>
              </td>
              <td className="p-3 text-neutral-600">{row.description}</td>
              <td className="p-3">
                <Tag variant="good">{row.good}</Tag>
              </td>
              <td className="p-3">
                <Tag variant="bad">{row.bad}</Tag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 4. ActionsTable ───────────────────────────

const ACTIONS: ActionRow[] = [
  {
    action: "כיווץ תמונות לפורמט WebP",
    difficulty: "good", difficultyLabel: "נמוך",
    impact: "good",     impactLabel: "גבוהה",
  },
  {
    action: "הסרת סקריפטים שאינם קריטיים",
    difficulty: "good", difficultyLabel: "נמוך–בינוני",
    impact: "good",     impactLabel: "גבוהה",
  },
  {
    action: "הפעלת CDN",
    difficulty: "warn", difficultyLabel: "בינוני",
    impact: "good",     impactLabel: "גבוהה",
  },
  {
    action: "טעינה ראשונה של הטופס וה-CTA",
    difficulty: "warn", difficultyLabel: "בינוני",
    impact: "good",     impactLabel: "גבוהה לדפי לידים",
  },
  {
    action: "מעבר לתשתית מהירה יותר",
    difficulty: "bad",  difficultyLabel: "גבוה",
    impact: "good",     impactLabel: "גבוהה מאוד",
  },
];

export function ActionsTable() {
  return (
    <div className="my-8 overflow-x-auto not-prose">
      <table className="w-full border-collapse rounded-xl overflow-hidden border border-neutral-200 bg-white text-sm shadow-sm">
        <thead>
          <tr className="bg-neutral-900 text-white">
            <th className="p-3 text-right font-semibold">פעולה</th>
            <th className="p-3 text-right font-semibold">קושי</th>
            <th className="p-3 text-right font-semibold">השפעה על מהירות</th>
          </tr>
        </thead>
        <tbody>
          {ACTIONS.map((row, i) => (
            <tr key={row.action} className={i % 2 === 1 ? "bg-neutral-50" : "bg-white"}>
              <td className="p-3 text-neutral-700">{row.action}</td>
              <td className="p-3">
                <Tag variant={row.difficulty}>{row.difficultyLabel}</Tag>
              </td>
              <td className="p-3">
                <Tag variant={row.impact}>{row.impactLabel}</Tag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 5. Callout ────────────────────────────────

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-8 rounded-xl border-r-4 border-orange-500 bg-orange-50 px-5 py-4 text-base text-orange-900 not-prose">
      {children}
    </aside>
  );
}

// ── 6. PlatformComparisonTable ────────────────

interface PlatformRow {
  need: string;
  platform: string;
  reason: string;
}

const PLATFORM_ROWS: PlatformRow[] = [
  { need: "ניהול תוכן עצמאי",       platform: "וורדפרס",                  reason: "CMS בשל, עריכה נוחה בלי מפתח" },
  { need: "ביצועים ושליטה מלאה",    platform: "Next.js / תשתית מודרנית",  reason: "טעינה מהירה, אינטגרציות גמישות" },
  { need: "פשטות ומהירות הקמה",     platform: "Wix / פלטפורמה סגורה",    reason: "הכול כלול, בלי תשתית לניהול" },
  { need: "אתר קטן ומהיר במיוחד",   platform: "אתר סטטי",                 reason: "מינימום משאבים, מקסימום מהירות" },
];

export function PlatformComparisonTable() {
  return (
    <div className="my-8 overflow-x-auto not-prose">
      <table className="w-full border-collapse rounded-xl overflow-hidden border border-neutral-200 bg-white text-sm shadow-sm">
        <thead>
          <tr className="bg-neutral-900 text-white">
            <th className="p-3 text-right font-semibold">אם חשוב לך בעיקר</th>
            <th className="p-3 text-right font-semibold">כנראה שתעדיף</th>
            <th className="p-3 text-right font-semibold">למה</th>
          </tr>
        </thead>
        <tbody>
          {PLATFORM_ROWS.map((row, i) => (
            <tr key={row.need} className={i % 2 === 1 ? "bg-neutral-50" : "bg-white"}>
              <td className="p-3 font-semibold text-neutral-800">{row.need}</td>
              <td className="p-3">
                <span className="inline-block rounded-full bg-neutral-100 px-3 py-0.5 text-xs font-semibold text-neutral-700">
                  {row.platform}
                </span>
              </td>
              <td className="p-3 text-neutral-500 text-xs">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 7. PlatformSelector ───────────────────────

const PLATFORM_MISTAKES = [
  { num: "01", title: "לבחור לפי טרנד, לא לפי צורך",            desc: "טכנולוגיה פופולרית לא בהכרח מתאימה לפרויקט שלך." },
  { num: "02", title: "לבנות SaaS על תשתית שמתאימה לבלוג",      desc: "הצרכים שונים לחלוטין — תכנן את התשתית לפי הלוגיקה העסקית." },
  { num: "03", title: "לבנות אתר תדמית קטן על תשתית מורכבת מדי", desc: "מורכבות מיותרת מאטה פיתוח ומגדילה עלויות תחזוקה." },
  { num: "04", title: "לא לחשוב על תחזוקה לטווח ארוך",           desc: "בחירת פלטפורמה היא גם בחירה של מי יתחזק אותה ואיך." },
];

export function PlatformSelector() {
  return (
    <div className="my-8 not-prose grid gap-3 sm:grid-cols-2">
      {PLATFORM_MISTAKES.map((m) => (
        <div
          key={m.num}
          className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
        >
          <span className="flex-shrink-0 text-2xl font-black text-neutral-200 leading-none">
            {m.num}
          </span>
          <div>
            <p className="font-semibold text-neutral-800 text-sm mb-1">{m.title}</p>
            <p className="text-xs text-neutral-500 leading-relaxed">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── 8. AiReadabilityPillars ───────────────────

const PILLARS = [
  {
    icon: "💬",
    title: "תשובה ברורה לשאלה ברורה",
    desc: 'כותרות שמנוסחות כמו שאילתות אמיתיות: "מה זה…", "איך עושים…", "כמה עולה…"',
    color: "border-blue-200 bg-blue-50",
    titleColor: "text-blue-800",
  },
  {
    icon: "🗂️",
    title: "מבנה נקי ומסודר",
    desc: "פסקאות קצרות, כותרות H2/H3 ברורות, רשימות וסעיפי FAQ. תוכן מבולגן מקשה על חילוץ תשובה.",
    color: "border-violet-200 bg-violet-50",
    titleColor: "text-violet-800",
  },
  {
    icon: "🏅",
    title: "אמינות וזיהוי מומחיות",
    desc: "מי כתב? מה הניסיון שלו? האם האתר מתמקד בתחום אחד? AI מחפשת מקור — לא כותב אנונימי.",
    color: "border-emerald-200 bg-emerald-50",
    titleColor: "text-emerald-800",
  },
];

export function AiReadabilityPillars() {
  return (
    <div className="my-8 not-prose grid gap-4 sm:grid-cols-3">
      {PILLARS.map((p) => (
        <div key={p.title} className={`rounded-xl border p-5 ${p.color}`}>
          <div className="text-2xl mb-3">{p.icon}</div>
          <h3 className={`font-bold text-sm mb-2 ${p.titleColor}`}>{p.title}</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

// ── 9. ContentStructureTable ──────────────────

interface ContentRow {
  type: string;
  structure: string;
  words: string;
  goal: string;
}

const CONTENT_ROWS: ContentRow[] = [
  { type: "עמוד עוגן",      structure: "H1 + תשובה ישירה + H2 × 5–10 + FAQ", words: "1,500–3,000", goal: "כיסוי נושא לעומק" },
  { type: "מאמר תמיכה",    structure: "H1 + תשובה ממוקדת + H2 × 3–5",        words: "600–1,200",  goal: "העמקה בנקודה ספציפית" },
  { type: "עמוד FAQ",      structure: "שאלה + תשובה × 8–15",                  words: "800–1,500",  goal: "לכידת שאילתות ישירות" },
  { type: "דף נחיתה",      structure: "H1 + CTA + 3–5 בלוקים ממוקדים",        words: "300–600",    goal: "המרה, לא מידע" },
];

export function ContentStructureTable() {
  return (
    <div className="my-8 overflow-x-auto not-prose">
      <table className="w-full border-collapse rounded-xl overflow-hidden border border-neutral-200 bg-white text-sm shadow-sm">
        <thead>
          <tr className="bg-neutral-900 text-white">
            <th className="p-3 text-right font-semibold">סוג תוכן</th>
            <th className="p-3 text-right font-semibold">מבנה מומלץ</th>
            <th className="p-3 text-right font-semibold">טווח מילים</th>
            <th className="p-3 text-right font-semibold">מטרה</th>
          </tr>
        </thead>
        <tbody>
          {CONTENT_ROWS.map((row, i) => (
            <tr key={row.type} className={i % 2 === 1 ? "bg-neutral-50" : "bg-white"}>
              <td className="p-3 font-semibold text-neutral-800">{row.type}</td>
              <td className="p-3 text-neutral-500 text-xs leading-relaxed">{row.structure}</td>
              <td className="p-3">
                <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-600">
                  {row.words}
                </span>
              </td>
              <td className="p-3 text-neutral-600 text-xs">{row.goal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 10. ChecklistTimeline ─────────────────────

interface TimelinePhase {
  weeks: string;
  title: string;
  tasks: string[];
  color: string;
  dot: string;
}

const TIMELINE: TimelinePhase[] = [
  {
    weeks: "שבוע 1–2",
    title: "הגדרת נושאי ליבה",
    tasks: [
      "בחירת 3–5 שירותים שאתה רוצה להיות מזוהה איתם",
      "רישום 10–20 שאלות אמיתיות שלקוחות שואלים סביב כל אחד",
    ],
    color: "border-blue-200 bg-blue-50",
    dot: "bg-blue-400",
  },
  {
    weeks: "שבוע 3–6",
    title: "בניית עמודי עוגן",
    tasks: [
      "כותרת ברורה + פסקת תשובה ישירה בתחילת כל עמוד",
      "סעיפים במבנה שאלה–תשובה",
      "FAQ מסודר בסוף כל עמוד",
    ],
    color: "border-violet-200 bg-violet-50",
    dot: "bg-violet-400",
  },
  {
    weeks: "שבוע 7–10",
    title: "פרסום מאמרי תמיכה",
    tasks: [
      "מאמרים שמעמיקים בנקודות ספציפיות",
      "קישורים פנימיים ברורים לעמוד העוגן",
      "פרסום עקבי — לפחות מאמר אחד בשבוע",
    ],
    color: "border-emerald-200 bg-emerald-50",
    dot: "bg-emerald-400",
  },
  {
    weeks: "שבוע 11–12",
    title: "בדיקה וחיזוק",
    tasks: [
      "חיפוש שאלות בתחום שלך ב-Perplexity / ChatGPT / Gemini",
      "בדיקה מי מצוטט — ומה חסר בתוכן שלך",
      "עדכון והעמקת עמודים שלא מספיק חזקים",
    ],
    color: "border-orange-200 bg-orange-50",
    dot: "bg-orange-400",
  },
];

export function ChecklistTimeline() {
  return (
    <div className="my-8 not-prose space-y-4">
      {TIMELINE.map((phase) => (
        <div key={phase.weeks} className={`rounded-xl border p-5 ${phase.color}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${phase.dot}`} />
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
              {phase.weeks}
            </span>
            <span className="font-bold text-neutral-800 text-sm">{phase.title}</span>
          </div>
          <ul className="space-y-1.5 pr-5">
            {phase.tasks.map((task) => (
              <li key={task} className="text-xs text-neutral-600 leading-relaxed flex gap-2">
                <span className="mt-1 flex-shrink-0 text-neutral-300">◦</span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ─── DESIGN TOKENS ─────────────────────────── */
const c = {
  text:    "#18181b",
  muted:   "#71717a",
  border:  "#e4e4e7",
  bg:      "#fafafa",
  white:   "#ffffff",
  blue:    "#2563eb",
  blueSoft:"#eff6ff",
  red:     "#dc2626",
  redSoft: "#fef2f2",
  green:   "#16a34a",
  greenSoft:"#f0fdf4",
  amber:   "#d97706",
  amberSoft:"#fffbeb",
};

const radius = "8px";
const font = "'Segoe UI','Arial Hebrew',Arial,sans-serif";

/* ─── SHARED ─────────────────────────────────── */
const Box = ({
  children,
  style = {},
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) => (
  <div style={{ fontFamily: font, direction: "rtl", margin: "28px 0 36px", ...style }}>
    {children}
  </div>
);

/* ══════════════════════════════════════════════
   1. CommonMistakesAccordion
   ══════════════════════════════════════════════ */
const INVOICING_MISTAKES = [
  {
    icon: "⚖️",
    title: "רגולציה שלא סגורה עד הסוף",
    points: [
      "מספרי הקצאה שלא נשלחים אוטומטית לרשות המסים",
      "חתימה דיגיטלית שאינה אישית או אינה תואמת דרישות",
      "תהליכי דיווח מסורבלים מול רשות המסים",
    ],
    note: "זו לא פונקציה נחמדה – זו חובה חוקית.",
  },
  {
    icon: "🐌",
    title: "מערכת שמאטה אותך",
    points: [
      "זמן הפקה ארוך לכל מסמך בנפח גבוה",
      "אין API או אינטגרציות לכלים קיימים",
      "מגבלות על מספר מסמכים בתוכנית החינמית",
    ],
    note: "כל עיכוב קטן מצטבר לשעות עבודה בסוף החודש.",
  },
  {
    icon: "💸",
    title: "מחיר שנראה זול – עד שמתחילים להשתמש",
    points: [
      "עמלות סליקה גבוהות שאינן מוצגות בעמוד התמחור",
      "תוספות בתשלום על פיצ'רים שנראים בסיסיים",
      "עלות למסמך נוסף שקופצת מהר ממגבלת החבילה",
    ],
    note: "בדוק את התמונה הכוללת, לא רק את המחיר הראשוני.",
  },
  {
    icon: "🙉",
    title: "תמיכה שלא באמת עוזרת",
    points: [
      "צ'אטבוט אוטומטי במקום אדם אמיתי",
      "זמני תגובה ארוכים בדיוק כשצריך עזרה דחופה",
      "אין ליווי בהגדרה ראשונית של החשבון",
    ],
    note: "כשיש תקלה ברגע קריטי – אתה צריך מענה אנושי מהיר.",
  },
  {
    icon: "🔓",
    title: "אבטחת מידע חלשה",
    points: [
      "אין גיבוי אוטומטי לטווח ארוך",
      "אין שקיפות לגבי מדיניות שמירת נתונים",
      "אין עמידה בתקני אבטחה רלוונטיים לנתונים פיננסיים",
    ],
    note: "אתה עובד עם נתונים פיננסיים של לקוחות – זה קריטי.",
  },
];

export function CommonMistakesAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Box>
      <div style={{ border: `1px solid ${c.border}`, borderRadius: radius, overflow: "hidden" }}>
        {INVOICING_MISTAKES.map((m, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: i < INVOICING_MISTAKES.length - 1 ? `1px solid ${c.border}` : "none" }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  gap: "12px", padding: "14px 18px",
                  background: isOpen ? c.bg : c.white,
                  border: "none", cursor: "pointer", textAlign: "right",
                  transition: "background 0.15s",
                }}
              >
                <span style={{
                  width: "26px", height: "26px", borderRadius: "50%",
                  background: c.red, color: "#fff",
                  fontSize: "12px", fontWeight: "700",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>{i + 1}</span>
                <span style={{ fontSize: "18px" }}>{m.icon}</span>
                <span style={{ flex: 1, fontSize: "14px", fontWeight: "600", color: c.text, textAlign: "right" }}>
                  {m.title}
                </span>
                <span style={{
                  fontSize: "16px", color: c.muted,
                  transform: isOpen ? "rotate(90deg)" : "none",
                  transition: "transform 0.2s", display: "inline-block",
                }}>›</span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 18px 16px 18px", paddingRight: "58px", background: c.bg }}>
                  {m.points.map((p, j) => (
                    <div key={j} style={{
                      display: "flex", gap: "8px",
                      padding: "8px 0",
                      borderBottom: j < m.points.length - 1 ? `1px dashed ${c.border}` : "none",
                      fontSize: "13.5px", color: "#52525b", lineHeight: "1.6",
                    }}>
                      <span style={{ color: c.red, fontWeight: "700", flexShrink: 0 }}>×</span>
                      {p}
                    </div>
                  ))}
                  <div style={{
                    marginTop: "12px", padding: "10px 12px",
                    background: c.amberSoft, borderRadius: "6px",
                    fontSize: "13px", color: "#92400e", fontStyle: "italic",
                  }}>
                    {m.note}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Box>
  );
}

/* ══════════════════════════════════════════════
   2. BeforeSigningChecklist
   ══════════════════════════════════════════════ */
const CHECKLIST = [
  "האם המערכת תומכת במלואה בחשבוניות ישראל ומספרי הקצאה אוטומטיים?",
  "האם החתימה הדיגיטלית אישית ומגובה בארכיון כנדרש?",
  "האם יש ניסיון חינם אמיתי בלי להזין כרטיס אשראי?",
  "האם קיימות אינטגרציות או API אם תצטרך בעתיד?",
  "אילו אמצעי סליקה זמינים ומה העמלה בפועל?",
  "האם הממשק מלא בעברית וידידותי למובייל?",
  "איך נראית התמיכה: טלפון? צ'אט? מה זמן התגובה?",
  "אילו דוחות קיימים והאם הם מספיקים לצרכים שלך?",
  "מה קורה כשאתה גדל – האם המחיר קופץ משמעותית?",
  "מה אומרים משתמשים אמיתיים בביקורות חיצוניות?",
];

export function BeforeSigningChecklist() {
  const [checked, setChecked] = useState<number[]>([]);
  const toggle = (i: number) =>
    setChecked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  const done = checked.length;
  const pct = Math.round((done / CHECKLIST.length) * 100);

  return (
    <Box>
      {/* Progress bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <div style={{ flex: 1, height: "6px", background: c.border, borderRadius: "99px", overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: "99px",
            width: `${pct}%`,
            background: pct === 100 ? c.green : c.blue,
            transition: "width 0.3s ease",
          }} />
        </div>
        <span style={{ fontSize: "13px", color: c.muted, whiteSpace: "nowrap" }}>
          {done} / {CHECKLIST.length}
        </span>
      </div>

      <div style={{ border: `1px solid ${c.border}`, borderRadius: radius, overflow: "hidden" }}>
        {CHECKLIST.map((item, i) => {
          const isDone = checked.includes(i);
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                padding: "12px 16px", cursor: "pointer",
                background: isDone ? c.greenSoft : c.white,
                borderBottom: i < CHECKLIST.length - 1 ? `1px solid ${c.border}` : "none",
                transition: "background 0.15s",
              }}
            >
              <div style={{
                width: "18px", height: "18px", borderRadius: "4px", flexShrink: 0, marginTop: "2px",
                border: `2px solid ${isDone ? c.green : c.border}`,
                background: isDone ? c.green : c.white,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}>
                {isDone && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5l2.5 2.5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span style={{
                fontSize: "13.5px", lineHeight: "1.6",
                color: isDone ? "#6b7280" : c.text,
                textDecoration: isDone ? "line-through" : "none",
              }}>
                <span style={{ color: c.muted, fontSize: "11px", marginLeft: "6px" }}>{i + 1}.</span>
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </Box>
  );
}

/* ══════════════════════════════════════════════
   3. BusinessTypeTable
   ══════════════════════════════════════════════ */
const BIZ_TYPES = [
  {
    emoji: "👤", type: "פרילנסר / עוסק פטור",
    p1: { label: "מחיר חודשי נמוך", bg: "#dbeafe", color: "#1e40af" },
    p2: { label: "פשטות ממשק",        bg: "#e0e7ff", color: "#3730a3" },
    p3: { label: "סליקה בסיסית",     bg: "#dcfce7", color: "#15803d" },
  },
  {
    emoji: "📦", type: "עוסק מורשה בנפח גבוה",
    p1: { label: "מהירות הפקה",      bg: "#dcfce7", color: "#15803d" },
    p2: { label: "אוטומציה",          bg: "#fef9c3", color: "#854d0e" },
    p3: { label: "דוחות מתקדמים",    bg: "#e0e7ff", color: "#3730a3" },
  },
  {
    emoji: "🔌", type: "SaaS / עסק עם אינטגרציות",
    p1: { label: "API מלא",           bg: "#fce7f3", color: "#9d174d" },
    p2: { label: "Webhooks",          bg: "#ede9fe", color: "#5b21b6" },
    p3: { label: "חיבור CRM / ERP",  bg: "#dbeafe", color: "#1e40af" },
  },
  {
    emoji: "🚀", type: "עסק בצמיחה",
    p1: { label: "סקייל במחיר",      bg: "#fef9c3", color: "#854d0e" },
    p2: { label: "ניהול משתמשים",    bg: "#dcfce7", color: "#15803d" },
    p3: { label: "הרשאות מתקדמות",  bg: "#fff1f2", color: "#9f1239" },
  },
];

const PriorityTag = ({ label, bg, color }: { label: string; bg: string; color: string }) => (
  <span style={{ background: bg, color, fontSize: "12px", fontWeight: "600", padding: "3px 9px", borderRadius: "20px", whiteSpace: "nowrap" }}>
    {label}
  </span>
);

export function BusinessTypeTable() {
  return (
    <Box>
      <div style={{ border: `1px solid ${c.border}`, borderRadius: radius, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
          <thead>
            <tr style={{ background: "#18181b", color: "#fff" }}>
              <th style={{ padding: "11px 16px", textAlign: "right", fontWeight: "600", fontSize: "12px", letterSpacing: "0.04em" }}>סוג עסק</th>
              <th style={{ padding: "11px 16px", textAlign: "right", fontWeight: "600", fontSize: "12px", letterSpacing: "0.04em" }}>עדיפות 1</th>
              <th style={{ padding: "11px 16px", textAlign: "right", fontWeight: "600", fontSize: "12px", letterSpacing: "0.04em" }}>עדיפות 2</th>
              <th style={{ padding: "11px 16px", textAlign: "right", fontWeight: "600", fontSize: "12px", letterSpacing: "0.04em" }}>עדיפות 3</th>
            </tr>
          </thead>
          <tbody>
            {BIZ_TYPES.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? c.white : c.bg, borderBottom: `1px solid ${c.border}` }}>
                <td style={{ padding: "12px 16px", fontWeight: "600", color: c.text }}>
                  <span style={{ marginLeft: "6px" }}>{row.emoji}</span>{row.type}
                </td>
                <td style={{ padding: "12px 16px" }}><PriorityTag {...row.p1} /></td>
                <td style={{ padding: "12px 16px" }}><PriorityTag {...row.p2} /></td>
                <td style={{ padding: "12px 16px" }}><PriorityTag {...row.p3} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

/* ══════════════════════════════════════════════
   4. SupportChecks
   ══════════════════════════════════════════════ */
const SUPPORT_QS = [
  { icon: "👋", q: "האם יש תמיכה אנושית בעברית?" },
  { icon: "⏱️", q: "כמה זמן לוקח לקבל תשובה?" },
  { icon: "📚", q: "האם יש הדרכה מסודרת להתחלה?" },
  { icon: "🔓", q: "האם ניתן לצאת בקלות ללא נעילה חוזית?" },
];

export function SupportChecks() {
  return (
    <Box>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
        {SUPPORT_QS.map((item, i) => (
          <div key={i} style={{
            background: c.white, border: `1px solid ${c.border}`,
            borderRadius: radius, padding: "20px 16px", textAlign: "center",
          }}>
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
            <p style={{ margin: 0, fontSize: "13.5px", color: c.text, lineHeight: "1.55" }}>{item.q}</p>
          </div>
        ))}
      </div>
    </Box>
  );
}

/* ══════════════════════════════════════════════
   5. HowToChooseSteps
   ══════════════════════════════════════════════ */
const STEPS = [
  "פתח 2–3 חשבונות ניסיון במקביל",
  "הפק לפחות 50–100 מסמכים אמיתיים בכל מערכת",
  "בדוק סליקה, דוחות וייצוא לרואה חשבון",
  "פנה לתמיכה עם שאלה אמיתית וראה כיצד מגיבים",
  "חשב עלות כוללת לפי כמות מסמכים שנתית – לא חודשית",
];

export function HowToChooseSteps() {
  const [done, setDone] = useState<number[]>([]);
  const toggle = (i: number) =>
    setDone((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <Box>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {STEPS.map((step, i) => {
          const isDone = done.includes(i);
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 16px", cursor: "pointer",
                background: isDone ? c.greenSoft : c.white,
                border: `1px solid ${isDone ? "#bbf7d0" : c.border}`,
                borderRadius: radius, transition: "all 0.15s",
              }}
            >
              <div style={{
                width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
                background: isDone ? c.green : "#18181b",
                color: "#fff", fontSize: "13px", fontWeight: "700",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.15s",
              }}>
                {isDone ? "✓" : `0${i + 1}`}
              </div>
              <span style={{
                fontSize: "14px", lineHeight: "1.55",
                color: isDone ? "#6b7280" : c.text,
                textDecoration: isDone ? "line-through" : "none",
              }}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </Box>
  );
}

/* ══════════════════════════════════════════════
   6. FinalSummaryGrid
   ══════════════════════════════════════════════ */
const SUMMARY = [
  { icon: "✅", label: "תאימות רגולציה",    desc: "חשבוניות ישראל, מספרי הקצאה, חתימה דיגיטלית תקנית" },
  { icon: "⚡", label: "ביצועים ומהירות",   desc: "הפקה מהירה גם בנפח גבוה, ממשק תגובתי" },
  { icon: "🔒", label: "אבטחת מידע",        desc: "גיבוי אוטומטי, שקיפות נתונים, תקני אבטחה" },
  { icon: "💰", label: "שקיפות עלויות",     desc: "ללא הפתעות, עמלות ברורות, תמחור גלוי" },
  { icon: "📈", label: "התאמה לצמיחה",      desc: "סקייל חלק, ניהול משתמשים, גמישות תוכנית" },
];

export function FinalSummaryGrid() {
  return (
    <Box>
      <div style={{
        background: c.bg, border: `1px solid ${c.border}`,
        borderRadius: radius, padding: "24px",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "12px" }}>
          {SUMMARY.map((item, i) => (
            <div key={i} style={{
              background: c.white, border: `1px solid ${c.border}`,
              borderRadius: radius, padding: "16px 14px",
              display: "flex", alignItems: "flex-start", gap: "12px",
            }}>
              <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: c.text, marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "12.5px", color: c.muted, lineHeight: "1.5" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{
          margin: "20px 0 0", padding: "16px 0 0",
          borderTop: `1px solid ${c.border}`,
          fontSize: "13.5px", color: "#3d3a35", lineHeight: "1.7",
        }}>
          אל תבחר לפי פרסומת או מחיר בלבד. בחר לפי התאמה אמיתית לצרכים של העסק שלך היום – ובעוד שנה.
        </p>
      </div>
    </Box>
  );
}

/* ══════════════════════════════════════════════
   1. WhenToUseCards
   ══════════════════════════════════════════════ */
   const WHEN_YES = [
    { icon: "🧾", title: "קבלה הופקה בטעות", desc: "הוצאת קבלה לפני שבוצע תשלום אמיתי." },
    { icon: "↩️", title: "החזר כסף ללקוח", desc: "ביטול עסקה, החזר חלקי או מלא." },
    { icon: "📊", title: "תיקון רישום בספרים", desc: "כדי שהדוחות יהיו מדויקים ומאוזנים." },
  ];
  
  export function WhenToUseCards() {
    return (
      <Box>
        {/* Yes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginBottom: "14px" }}>
          {WHEN_YES.map((item, i) => (
            <div key={i} style={{
              background: c.white, border: `1px solid ${c.border}`,
              borderTop: `3px solid ${c.green}`,
              borderRadius: radius, padding: "16px 14px",
            }}>
              <div style={{ fontSize: "22px", marginBottom: "8px" }}>{item.icon}</div>
              <div style={{ fontSize: "13.5px", fontWeight: "700", color: c.text, marginBottom: "4px" }}>{item.title}</div>
              <div style={{ fontSize: "13px", color: c.muted, lineHeight: "1.55" }}>{item.desc}</div>
            </div>
          ))}
        </div>
  
        {/* Warning */}
        <div style={{
          display: "flex", gap: "12px", alignItems: "flex-start",
          background: c.amberSoft, border: `1px solid #fde68a`,
          borderRadius: radius, padding: "14px 16px",
        }}>
          <span style={{ fontSize: "18px", flexShrink: 0 }}>⚠️</span>
          <p style={{ margin: 0, fontSize: "13.5px", color: "#92400e", lineHeight: "1.65" }}>
            <strong>לא</strong> משתמשים בקבלה שלילית לביטול חשבונית מס. במקרה כזה מפיקים <strong>מסמך זיכוי</strong>. קבלה שלילית רלוונטית לקבלות בלבד.
          </p>
        </div>
      </Box>
    );
  }
  
  /* ══════════════════════════════════════════════
     2. HowItWorksFlow
     ══════════════════════════════════════════════ */
  const FLOW_STEPS = [
    { n: "01", text: "נכנסים למסמך המקורי" },
    { n: "02", text: 'בוחרים באפשרות "ביטול" או "הפק קבלה שלילית"' },
    { n: "03", text: "המערכת מעתיקה פרטי לקוח ועסקה והופכת הסכום למינוס" },
    { n: "04", text: "נשמרים שני מסמכים בספרים – המקורי והשלילי" },
  ];
  
  export function HowItWorksFlow() {
    return (
      <Box>
        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
          {FLOW_STEPS.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{
                width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
                background: c.text, color: "#fff",
                fontSize: "11px", fontWeight: "700",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {step.n}
              </div>
              <div style={{
                flex: 1, padding: "11px 14px",
                background: c.white, border: `1px solid ${c.border}`,
                borderRadius: radius, fontSize: "13.5px", color: c.text,
              }}>
                {step.text}
              </div>
            </div>
          ))}
        </div>
  
        {/* Example */}
        <div style={{
          background: c.bg, border: `1px solid ${c.border}`,
          borderRadius: radius, padding: "16px 20px",
        }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: c.muted, letterSpacing: "0.06em", marginBottom: "12px" }}>
            דוגמה
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {/* Doc 1 */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: c.white, border: `1px solid ${c.border}`,
              borderRight: `3px solid ${c.green}`,
              borderRadius: radius, padding: "10px 14px",
            }}>
              <span style={{ fontSize: "13.5px", fontWeight: "600", color: c.text }}>קבלה #001</span>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ background: c.greenSoft, color: c.green, fontSize: "11.5px", fontWeight: "600", padding: "2px 8px", borderRadius: "20px" }}>אשראי</span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: c.green }}>+500 ₪</span>
              </div>
            </div>
  
            {/* Arrow */}
            <div style={{ textAlign: "center", color: c.muted, fontSize: "18px", lineHeight: 1 }}>↓</div>
  
            {/* Doc 2 */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: c.white, border: `1px solid ${c.border}`,
              borderRight: `3px solid ${c.red}`,
              borderRadius: radius, padding: "10px 14px",
            }}>
              <span style={{ fontSize: "13.5px", fontWeight: "600", color: c.text }}>קבלה שלילית #002</span>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ background: c.redSoft, color: c.red, fontSize: "11.5px", fontWeight: "600", padding: "2px 8px", borderRadius: "20px" }}>ביטול</span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: c.red }}>−500 ₪</span>
              </div>
            </div>
  
            {/* Result */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: c.blueSoft, border: `1px solid #bfdbfe`,
              borderRadius: radius, padding: "10px 14px", marginTop: "4px",
            }}>
              <span style={{ fontSize: "13px", color: c.blue, fontWeight: "600" }}>תוצאה: הספרים מאוזנים</span>
              <span style={{ fontSize: "15px", fontWeight: "700", color: c.blue }}>0 ₪</span>
            </div>
          </div>
        </div>
      </Box>
    );
  }
  
  /* ══════════════════════════════════════════════
     3. SaasRequirementsTable
     ══════════════════════════════════════════════ */
  const REQS = [
    {
      req: "יצירת קבלה שלילית אוטומטית",
      why: "במקרה של Refund מסליקה – בלי התערבות ידנית",
      status: { label: "קריטי", bg: c.redSoft, color: c.red },
    },
    {
      req: "קשר ברור בין מסמכים",
      why: "לדעת איזו קבלה שלילית שייכת לאיזו מקורית",
      status: { label: "קריטי", bg: c.redSoft, color: c.red },
    },
    {
      req: "סטטוס ברור לכל מסמך",
      why: "פעיל / מבוטל / זוכה – נראה בבירור בממשק",
      status: { label: "חשוב", bg: c.amberSoft, color: c.amber },
    },
    {
      req: "הכללה בדוחות",
      why: "שני המסמכים מופיעים בדוחות בצורה עקבית",
      status: { label: "חשוב", bg: c.amberSoft, color: c.amber },
    },
  ];
  
  const RequirementTag = ({ label, bg, color }: { label: string; bg: string; color: string }) => (
    <span style={{ background: bg, color, fontSize: "11.5px", fontWeight: "600", padding: "3px 9px", borderRadius: "20px", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
  
  export function SaasRequirementsTable() {
    return (
      <Box>
        <div style={{ border: `1px solid ${c.border}`, borderRadius: radius, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
            <thead>
              <tr style={{ background: "#18181b", color: "#fff" }}>
                {["דרישה", "למה זה חשוב", "רמת חשיבות"].map((h) => (
                  <th key={h} style={{ padding: "11px 16px", textAlign: "right", fontWeight: "600", fontSize: "12px", letterSpacing: "0.04em" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REQS.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? c.white : c.bg, borderBottom: `1px solid ${c.border}` }}>
                  <td style={{ padding: "12px 16px", fontWeight: "600", color: c.text }}>{row.req}</td>
                  <td style={{ padding: "12px 16px", color: "#52525b" }}>{row.why}</td>
                  <td style={{ padding: "12px 16px" }}><RequirementTag {...row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    );
  }