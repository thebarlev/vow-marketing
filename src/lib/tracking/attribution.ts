export type Attribution = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  fbclid?: string
}

const STORAGE_KEY = "vow_attribution_v1"

function normalize(value: string | null): string | undefined {
  if (!value) return undefined
  const trimmed = value.trim()
  return trimmed.length ? trimmed : undefined
}

export function getAttributionFromUrl(search: string): Attribution {
  const sp = new URLSearchParams(search)

  return {
    utm_source: normalize(sp.get("utm_source")),
    utm_medium: normalize(sp.get("utm_medium")),
    utm_campaign: normalize(sp.get("utm_campaign")),
    utm_term: normalize(sp.get("utm_term")),
    utm_content: normalize(sp.get("utm_content")),
    gclid: normalize(sp.get("gclid")),
    fbclid: normalize(sp.get("fbclid")),
  }
}

function hasAnyAttribution(a: Attribution): boolean {
  return Boolean(
    a.utm_source ||
      a.utm_medium ||
      a.utm_campaign ||
      a.utm_term ||
      a.utm_content ||
      a.gclid ||
      a.fbclid,
  )
}

function readFromSessionStorage(): Attribution {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== "object") return {}
    return parsed as Attribution
  } catch {
    return {}
  }
}

function writeToSessionStorage(a: Attribution) {
  if (typeof window === "undefined") return
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(a))
  } catch {
    // ignore storage errors
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {}

  const fromUrl = getAttributionFromUrl(window.location.search)
  const stored = readFromSessionStorage()

  // If URL has any attribution params, update stored values (merge).
  if (hasAnyAttribution(fromUrl)) {
    const merged: Attribution = { ...stored, ...fromUrl }
    writeToSessionStorage(merged)
    return merged
  }

  return stored
}

