export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function articleSchema(params: {
  headline: string;
  description?: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description ?? params.headline,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: { "@type": "Organization", name: "VOW" },
    publisher: {
      "@type": "Organization",
      name: "VOW",
      logo: { "@type": "ImageObject", url: "https://vow.co.il/logo.png" },
    },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\n/g, " ").replace(/\s+/g, " ").trim(),
      },
    })),
  };
}

export function webPageSchema(params: { name: string; description: string; url: string; dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: params.name,
    description: params.description,
    url: params.url,
    dateModified: params.dateModified,
  };
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VOW",
  url: "https://vow.co.il",
  logo: "https://vow.co.il/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/vow",
    "https://www.facebook.com/profile.php?id=61587713103366",
    "https://www.instagram.com/vow.for.success",
    "https://x.com/Vowsuccess",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@vow.co.il",
    contactType: "customer service",
    availableLanguage: ["Hebrew", "English"],
  },
} as const;
