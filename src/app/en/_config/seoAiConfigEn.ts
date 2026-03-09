import type { ServicePageConfig } from "@/app/_components/services/services.config"

export const seoAiConfigEn: ServicePageConfig = {
  slug: "seo-ai",
  metadata: {
    title: "Business Promotion in AI Search Engines | VOW",
    description:
      "A site without SEO gets no visitors. We connect every site to an SEO + AI system that runs monthly and grows traffic, content, and leads.",
    openGraph: {
      title: "Business Promotion in AI Search Engines | VOW",
      description:
        "A site without SEO gets no visitors. We connect every site to an SEO + AI system that runs monthly and grows traffic, content, and leads.",
      url: "/en/seo-ai",
      type: "website",
    },
  },
  hero: {
    title: "Customers don't search Google anymore - they ask AI.",
    subtitle: "Does your business show up in the answer?",
    tags: [
      "We turn your site into an asset that brings customers - from Google and AI engines. No paid campaigns. No ad budget dependency.",
    ],
    ctaLabel: "Get a free presence audit",
    ctaSource: "digital_marketing",
    imageSrc: "/services/seo-ai/hero1.webp",
    imageAlt: "AI SEO strategy helping businesses appear in ChatGPT, Google and AI search results",
  },
  doubleHeading: {
    title: "SEO isn't just rankings. It's lead quality.",
    subtitle:
      "We build a strategy that measures quality, funnel, and revenue - not just traffic.",
    buttonLabel: "Get started",
    buttonSource: "digital_marketing",
  },
  vision: {
    title: "Promotion that brings traffic and turns it into leads",
    subtitle:
      "Most business owners pay for ads every month and get leads that stop the moment the budget runs out. That's not strategy. That's a tap that can always be turned off.",
    ctaLabel: "Plans & pricing",
    ctaHref: "#price",
    source: "digital_marketing",
    cards: [
      {
        id: "seo-ai-vision-1",
        src: "/services/seo-ai/1.webp",
        alt: "AI SEO modules delivering immediate value for business visibility",
        caption: "AI modules that deliver immediate value",
      },
      {
        id: "seo-ai-vision-2",
        src: "/services/seo-ai/2.webp",
        alt: "High ROI from AI SEO and digital marketing strategy",
        caption: "High ROI",
      },
      {
        id: "seo-ai-vision-3",
        src: "/services/seo-ai/3.webp",
        alt: "Hundreds of AI agents promoting your business in search results",
        caption: "Hundreds of AI agents promote your business",
      },
      {
        id: "seo-ai-vision-4",
        src: "/services/seo-ai/4.webp",
        alt: "Improved SEO performance for business growth and lead generation",
        caption: "Improved SEO performance",
      },
    ],
  },
  about: {
    title: "Your site exists, but it doesn't bring customers. We fix that.",
    subtitle:
      "SEO + AI presence - monthly support that delivers results without chasing ads.",
    ctaLabel: "Free website audit",
    ctaHref: "#price",
    ctaSource: "digital_marketing",
    items: [
      {
        id: "seo-ai-about-1",
        title: "Less ad spend, more customers",
        description:
          "The system replaces manual work, reduces reliance on external vendors, and lets you produce marketing outputs, analytics, and exposure quickly.",
        icon: "/services/seo-ai/1.svg",
      },
      {
        id: "seo-ai-about-2",
        title: "Stop the campaign? Leads don't stop",
        description:
          "Stop the campaign, leads disappear. Every dollar spent on Google/Facebook burns and builds nothing for the future.",
        icon: "/services/seo-ai/2.svg",
      },
      {
        id: "seo-ai-about-3",
        title: "More traffic and visibility every month",
        description:
          "At VOW we identify weak points in the site, content, and sales process, and offer practical solutions that boost conversion rates.",
        icon: "/services/seo-ai/3.svg",
      },
    ],
  },
  faq: {
    title: "FAQ: SEO / AI",
    items: [
      {
        id: "seo-ai-faq-1",
        question: "How long until you see results?",
        answer:
          "Most clients see measurable change - more impressions, more clicks - within 4–8 weeks. First organic inquiries usually arrive in months 2–3. SEO is an asset that grows, not a tap that opens instantly - but unlike ads, it doesn't stop when you stop paying.",
      },
      {
        id: "seo-ai-faq-2",
        question: "What exactly do you do each month?",
        answer:
          "At the start of each month you get a detailed work plan: which pages to upgrade, which content to write, which technical changes to make. At month end, a report with real data. Not 'we did SEO' - we did X, Y, Z and here's the result.",
      },
      {
        id: "seo-ai-faq-3",
        question: "How does AI change the game?",
        answer:
          "More answers without clicks, more importance on credibility and structure. So we focus on both visibility and lead quality and funnel progression.",
      },
      {
        id: "seo-ai-faq-4",
        question: "Do you handle both technical and content?",
        answer:
          "Yes. Technical, content, and links/authority - as one package aimed at business results.",
      },
      {
        id: "seo-ai-faq-5",
        question: "Is this instead of paid ads?",
        answer:
          "Not necessarily - but it definitely reduces dependence. Clients working with us 3–6 months report 30–60% lower ad spend while keeping the same lead volume. Paid ads can stay as acceleration, not the backbone.",
      },
      {
        id: "seo-ai-faq-6",
        question: "What happens if you stop paying?",
        answer:
          "The big difference from ads: what we built stays. The upgraded site, content, pages - they're yours forever. Of course ongoing improvement comes with support, but you don't go back to zero the moment you stop.",
      },
      {
        id: "seo-ai-faq-7",
        question: "Do you need site access?",
        answer:
          "Yes, for actual changes we need access. We work with WordPress, Wix, Webflow, and almost any platform. If your site is on a unique platform - we'll do a free initial check before committing to anything.",
      },
    ],
  },
  sections: [
    "ServiceHero",
    "LogoRow",
    "VisionToExecutionSection",
    "AboutSection",
    "DoubleHeadingCtaSection",
    "FaqSection",
    "PackagesSection",
  ],
}
