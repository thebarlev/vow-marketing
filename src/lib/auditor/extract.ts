export type AuditorHeading = {
  level: 1 | 2 | 3
  text: string
}

export type AuditorLink = {
  href: string
  text: string
  internal: boolean
}

export type AuditorFaqItem = {
  question: string
  answer: string
}

export type AuditorScanPage = {
  url: string
  headings: {
    h1: string[]
    h2: string[]
    h3: string[]
  }
  paragraphs: string[]
  faq: AuditorFaqItem[]
  links: AuditorLink[]
}

export type AuditorExtractResult = {
  auditor_scan_pages: AuditorScanPage[]
  analysis: string
}

const JSON_LD_PATTERN = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
const TAG_PATTERN = /<(h[1-3]|p|a)\b([^>]*)>([\s\S]*?)<\/\1>/gi
const HREF_PATTERN = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
}

function cleanText(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
}

function normalizeHref(href: string, pageUrl: string) {
  try {
    return new URL(href, pageUrl).toString()
  } catch {
    return null
  }
}

function collectFaqItems(node: unknown, items: AuditorFaqItem[]) {
  if (Array.isArray(node)) {
    node.forEach((value) => collectFaqItems(value, items))
    return
  }

  if (!node || typeof node !== "object") {
    return
  }

  const record = node as Record<string, unknown>
  const nodeType = record["@type"]
  const isFaqPage =
    nodeType === "FAQPage" ||
    (Array.isArray(nodeType) && nodeType.some((value) => value === "FAQPage"))

  if (isFaqPage && Array.isArray(record.mainEntity)) {
    record.mainEntity.forEach((entity) => {
      if (!entity || typeof entity !== "object") {
        return
      }

      const item = entity as Record<string, unknown>
      const question = typeof item.name === "string" ? cleanText(item.name) : ""
      const answerNode =
        item.acceptedAnswer && typeof item.acceptedAnswer === "object"
          ? (item.acceptedAnswer as Record<string, unknown>)
          : null
      const answer = typeof answerNode?.text === "string" ? cleanText(answerNode.text) : ""

      if (question && answer) {
        items.push({ question, answer })
      }
    })
  }

  Object.values(record).forEach((value) => collectFaqItems(value, items))
}

export function isGrowthGuidePath(pathname: string) {
  return /^\/(?:en\/)?growth-guides(?:\/[^/?#]+)?\/?$/.test(pathname)
}

export function extractAuditorPageContent({
  html,
  url,
}: {
  html: string
  url: string
}): AuditorExtractResult {
  const pageOrigin = new URL(url).origin
  const headings: AuditorHeading[] = []
  const paragraphs: string[] = []
  const links: AuditorLink[] = []

  TAG_PATTERN.lastIndex = 0

  for (const match of html.matchAll(TAG_PATTERN)) {
    const [, tagName, rawAttributes = "", rawContent = ""] = match
    const text = cleanText(rawContent)

    if (!text) {
      continue
    }

    if (tagName === "p") {
      paragraphs.push(text)
      continue
    }

    if (tagName === "a") {
      const hrefMatch = rawAttributes.match(HREF_PATTERN)
      const rawHref = hrefMatch?.[1] ?? hrefMatch?.[2] ?? hrefMatch?.[3]
      if (!rawHref) {
        continue
      }

      const normalizedHref = normalizeHref(rawHref, url)
      if (!normalizedHref) {
        continue
      }

      const internal = normalizedHref.startsWith(pageOrigin)
      links.push({
        href: normalizedHref,
        text,
        internal,
      })
      continue
    }

    const level = Number(tagName.slice(1)) as 1 | 2 | 3
    headings.push({ level, text })
  }

  const faq: AuditorFaqItem[] = []
  JSON_LD_PATTERN.lastIndex = 0

  for (const match of html.matchAll(JSON_LD_PATTERN)) {
    const [, rawJson = ""] = match

    try {
      collectFaqItems(JSON.parse(rawJson), faq)
    } catch {
      continue
    }
  }

  const scanPage: AuditorScanPage = {
    url,
    headings: {
      h1: headings.filter((item) => item.level === 1).map((item) => item.text),
      h2: headings.filter((item) => item.level === 2).map((item) => item.text),
      h3: headings.filter((item) => item.level === 3).map((item) => item.text),
    },
    paragraphs,
    faq,
    links,
  }

  const analysisParts = [
    `Scanned ${url}.`,
    `Found ${scanPage.headings.h1.length} H1, ${scanPage.headings.h2.length} H2, and ${scanPage.headings.h3.length} H3 headings.`,
    `Captured ${paragraphs.length} paragraphs and ${links.length} links.`,
    faq.length ? `Extracted ${faq.length} FAQ items.` : "No FAQ items detected.",
  ]

  return {
    auditor_scan_pages: [scanPage],
    analysis: analysisParts.join(" "),
  }
}
