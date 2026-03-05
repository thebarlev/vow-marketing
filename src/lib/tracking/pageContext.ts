import type { PageCategory, TrackingService } from "./dataLayer"

export type PageContext = {
  page_category: PageCategory
  page_slug: string
  service: TrackingService
}

/** Strip /en prefix so page_category/page_slug stay consistent across locales (no split dashboards) */
function normalizePathname(pathname: string): string {
  if (pathname === "/en" || pathname === "/en/") return "/"
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/"
  return pathname
}

function slugFromPathname(pathname: string): string {
  const normalized = normalizePathname(pathname)
  if (normalized === "/") return "home"
  const trimmed = normalized.replace(/^\/+|\/+$/g, "")
  return trimmed || "home"
}

export function inferPageContext(pathname: string): PageContext {
  const normalized = normalizePathname(pathname)
  const page_slug = slugFromPathname(pathname)

  if (normalized === "/") {
    return { page_category: "home", page_slug, service: "other" }
  }

  if (normalized === "/portfolio") {
    return { page_category: "portfolio", page_slug, service: "other" }
  }

  if (normalized === "/pricing") {
    return { page_category: "pricing", page_slug, service: "other" }
  }

  // Service pages in this repo (not nested under /services/*)
  if (normalized === "/design" || normalized === "/develop" || normalized === "/roi") {
    return { page_category: "service", page_slug, service: "web_development" }
  }

  if (normalized === "/seo-ai") {
    return { page_category: "service", page_slug, service: "marketing" }
  }

  if (normalized === "/marketing" || normalized.startsWith("/marketing/")) {
    return { page_category: "service", page_slug, service: "marketing" }
  }

  // Product pages (not service, but still can map service for segmentation if desired)
  if (normalized === "/account-ai") {
    return { page_category: "other", page_slug, service: "ai_accountant" }
  }

  return { page_category: "other", page_slug, service: "other" }
}

export function mapLeadSourceToService(leadSource: string | undefined): TrackingService {
  switch (leadSource) {
    case "design_development":
      return "web_development"
    case "digital_marketing":
      return "marketing"
    case "smart_accounting_ai":
      return "ai_accountant"
    case "automation":
      return "automation"
    default:
      return "other"
  }
}

