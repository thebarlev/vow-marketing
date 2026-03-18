export type Campaign = {
  slug: string
  heroTitle: string
  heroSubtitle: string
  metaTitle: string
  metaDescription: string
}

export const campaigns: readonly Campaign[] = [
  {
    slug: "seo-services",
    heroTitle: "Professional SEO Services for Growing Businesses",
    heroSubtitle:
      "We handle your SEO from strategy to execution - so you can focus on running your business. Monthly reporting, no fluff.",
    metaTitle: "Professional SEO Services | VOW",
    metaDescription:
      "We handle your SEO from strategy to execution - so you can focus on running your business. Monthly reporting, no fluff.",
  },
  {
    slug: "digital-marketing",
    heroTitle: "Full-Service Digital Marketing Agency",
    heroSubtitle:
      "From SEO to paid ads and AI-powered visibility - we build strategies that turn clicks into customers. Transparent pricing, proven results.",
    metaTitle: "Full-Service Digital Marketing Agency | VOW",
    metaDescription:
      "From SEO to paid ads and AI-powered visibility - we build strategies that turn clicks into customers. Transparent pricing, proven results.",
  },
  {
    slug: "ai-seo",
    heroTitle: "Show Up in ChatGPT, Google AI & More",
    heroSubtitle:
      "73% of AI answers don't include your competitors yet. We help your business appear where your customers are searching - in Google, ChatGPT, and beyond.",
    metaTitle: "AI SEO Appear in ChatGPT & Google AI | VOW",
    metaDescription:
      "73% of AI answers don't include your competitors yet. We help your business appear where your customers are searching - in Google, ChatGPT, and beyond.",
  },
] as const

export const campaignSlugs = campaigns.map((c) => c.slug)

export function getCampaign(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug)
}
