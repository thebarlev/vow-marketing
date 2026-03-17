import { growthGuides } from "@/lib/growth-guides/topics"

import { isGrowthGuidePath, type AuditorLink } from "../extract"

function normalizeInternalUrl(candidateUrl: string, siteUrl: string) {
  try {
    const resolved = new URL(candidateUrl, siteUrl)
    const siteOrigin = new URL(siteUrl).origin

    if (resolved.origin !== siteOrigin) {
      return null
    }

    resolved.hash = ""
    if (resolved.pathname !== "/" && resolved.pathname.endsWith("/")) {
      resolved.pathname = resolved.pathname.slice(0, -1)
    }

    return resolved.toString()
  } catch {
    return null
  }
}

export function shouldContinueAuditorCrawl(candidateUrl: string, siteUrl: string) {
  const normalized = normalizeInternalUrl(candidateUrl, siteUrl)
  if (!normalized) {
    return false
  }

  const pathname = new URL(normalized).pathname

  if (isGrowthGuidePath(pathname)) {
    return true
  }

  return pathname.startsWith("/en") || !pathname.startsWith("/api")
}

export function getGrowthGuideSeedUrls(siteUrl: string) {
  const siteOrigin = new URL(siteUrl).origin

  return [
    `${siteOrigin}/en/growth-guides`,
    `${siteOrigin}/growth-guides`,
    ...growthGuides.flatMap((guide) => [
      `${siteOrigin}/en/growth-guides/${guide.slug}`,
      `${siteOrigin}/growth-guides/${guide.slug}`,
    ]),
  ]
}

export function collectAuditorContinuationUrls({
  siteUrl,
  discoveredLinks,
  queuedUrls = [],
}: {
  siteUrl: string
  discoveredLinks: readonly AuditorLink[]
  queuedUrls?: readonly string[]
}) {
  const continuationUrls = new Set<string>([
    ...queuedUrls,
    ...getGrowthGuideSeedUrls(siteUrl),
  ])

  for (const link of discoveredLinks) {
    if (!shouldContinueAuditorCrawl(link.href, siteUrl)) {
      continue
    }

    const normalized = normalizeInternalUrl(link.href, siteUrl)
    if (normalized) {
      continuationUrls.add(normalized)
    }
  }

  return [...continuationUrls]
}
