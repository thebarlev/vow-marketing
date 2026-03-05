export type PageLanguage = "he" | "en"
export type PageDir = "rtl" | "ltr"

export type TrackingService =
  | "web_development"
  | "automation"
  | "marketing"
  | "ai_accountant"
  | "other"

export type PageCategory =
  | "home"
  | "service"
  | "portfolio"
  | "pricing"
  | "blog"
  | "other"

export type BaseDataLayerPayload = {
  timestamp: string
  page_path: string
  page_title: string
  page_language: PageLanguage
  page_dir: PageDir
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

function getLocaleFromPathname(pathname: string): { language: PageLanguage; dir: PageDir } {
  const isEn = pathname === "/en" || pathname.startsWith("/en/")
  return isEn
    ? { language: "en", dir: "ltr" }
    : { language: "he", dir: "rtl" }
}

function getBasePayload(): BaseDataLayerPayload {
  const now = new Date().toISOString()

  if (typeof window === "undefined") {
    return {
      timestamp: now,
      page_path: "",
      page_title: "",
      page_language: "he",
      page_dir: "rtl",
    }
  }

  const pathname = window.location.pathname
  const { language, dir } = getLocaleFromPathname(pathname)

  return {
    timestamp: now,
    page_path: pathname,
    page_title: typeof document !== "undefined" ? document.title : "",
    page_language: language,
    page_dir: dir,
  }
}

export type DataLayerEventName =
  | "vow_page_view"
  | "vow_lead_submit"
  | "vow_lead_submit_success"
  | "vow_lead_submit_error"

export type DataLayerEvent<TPayload extends Record<string, unknown> = Record<string, unknown>> =
  BaseDataLayerPayload & { event: DataLayerEventName } & TPayload

export function pushDataLayer(eventName: DataLayerEventName, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return

  if (!window.dataLayer) window.dataLayer = []

  const base = getBasePayload()
  const event: DataLayerEvent = {
    event: eventName,
    ...base,
    ...payload,
  }

  window.dataLayer.push(event)
}

