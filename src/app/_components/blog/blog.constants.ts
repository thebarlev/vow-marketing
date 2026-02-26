export type BlogCategory =
  | "all"
  | "web_development"
  | "automation"
  | "marketing"
  | "ai_accountant"
  | "other"

export const BLOG_CATEGORIES: ReadonlyArray<{ value: BlogCategory; label: string }> = [
  { value: "all", label: "הכל" },
  { value: "web_development", label: "פיתוח אתרים" },
  { value: "automation", label: "אוטומציות" },
  { value: "marketing", label: "שיווק" },
  { value: "ai_accountant", label: 'רו״ח AI' },
  { value: "other", label: "אחר" },
]

export type BlogSort = "newest" | "oldest"

export const BLOG_SORTS: ReadonlyArray<{ value: BlogSort; label: string }> = [
  { value: "newest", label: "הכי חדש" },
  { value: "oldest", label: "הכי ישן" },
]

