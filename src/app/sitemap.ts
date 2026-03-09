import type { MetadataRoute } from "next"
import { allArticles } from "contentlayer/generated"

const BASE_URL = "https://vow.co.il"

const staticRoutes = [
  // Hebrew
  "",
  "/invoice",
  "/pricing",
  "/privacy",
  "/terms",
  "/contact",
  "/accessibility",
  "/account-deletion",
  "/about",
  "/blog",
  "/design",
  "/develop",
  "/develop-ai",
  "/portfolio",
  "/marketing",
  "/marketing/ppc",
  "/marketing/seo-ai",
  "/roi",
  "/seo-ai",
  "/checkout/success",
  "/checkout/failed",
  // English
  "/en",
  "/en/invoice",
  "/en/pricing",
  "/en/privacy",
  "/en/terms",
  "/en/contact",
  "/en/accessibility",
  "/en/account-deletion",
  "/en/about",
  "/en/blog",
  "/en/design",
  "/en/develop",
  "/en/develop-ai",
  "/en/account-ai",
  "/en/portfolio",
  "/en/marketing",
  "/en/marketing/ppc",
  "/en/marketing/seo-ai",
  "/en/seo-ai",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/en" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/en" ? 0.95 : 0.8,
  }))

  const blogEntries: MetadataRoute.Sitemap = allArticles.map((article) => {
    const slug = article.slug ?? ""
    const isEn = (article.locale as string | undefined) === "en"
    const path = isEn ? `/en/blog/${slug}` : `/blog/${slug}`
    return {
      url: `${BASE_URL}${path}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }
  })

  return [...staticEntries, ...blogEntries]
}
