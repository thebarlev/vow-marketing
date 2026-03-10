import type { Metadata } from "next"

import { DoubleHeadingCtaSection } from "@/app/_components/services/DoubleHeadingCtaSection"
import { ServiceFaqSection } from "@/app/_components/services/ServiceFaqSection"
import { ServiceHero } from "@/app/_components/services/ServiceHero"

export const metadata: Metadata = {
  title: "Organic Marketing SEO / AI | VOW",
  description:
    "Build organic presence that drives leads over time: technical SEO, content, measurement, and AI search alignment.",
  openGraph: {
    title: "Organic Marketing SEO / AI | VOW",
    description:
      "Build organic presence that drives leads over time: technical SEO, content, measurement, and AI search alignment.",
    url: "/en/seo-ai",
    type: "website",
  },
}

const QA_SECTIONS = [
  {
    id: "seo-ai-what",
    question: "What is SEO in the AI era?",
    answer: [
      "Organic SEO used to be mainly keywords and links. Today, much of search happens inside answers (Google AI Overviews, AI engines, chats), so we build sites engines can easily understand, cite, and recommend.",
      "SEO in the AI era combines 3 layers: clean technical foundation, content that answers real intent, and authority backed by data and UX.",
    ],
    bullets: [
      "Site structure and content that help AI engines understand context (Entities + Intent).",
      "Pages that build trust: proof, expertise, and clear language for clients.",
      "Measurement: not just traffic — lead quality, conversion rate, and revenue.",
    ],
  },
  {
    id: "seo-ai-90-days",
    question: "What does a 90-day plan look like?",
    answer: [
      "We work in short sprints with clear goals per phase. No 'waiting for Google' — we build a process that delivers measurable, cumulative improvement.",
    ],
    bullets: [
      "Days 1–15: Goal mapping, search intent research, technical + index audit, and prioritization.",
      "Days 16–45: Technical fixes, template upgrades (headings/schema), and core content covering intent.",
      "Days 46–75: Expand content by customer questions, improve CTR, and strengthen authority (quality links/mentions).",
      "Days 76–90: Data-driven optimization, refine lead-generation pages, and a 6-month follow-up plan.",
    ],
  },
  {
    id: "seo-ai-measure",
    question: "What do we measure?",
    answer: [
      "To make SEO a growth engine, not a hobby — we measure it like a product. Metrics must connect to leads, sales, and profitability.",
    ],
    bullets: [
      "Visibility: impressions, rankings, CTR, and pages in AI answers.",
      "Quality: time on page, engagement, and funnel progression.",
      "Business results: leads, lead quality, conversion rate, CAC and LTV (when available).",
      "Performance: speed, Core Web Vitals, index errors, and technical issues.",
    ],
  },
] as const

const FAQ_ITEMS = [
  {
    id: "seo-ai-faq-1",
    question: "When do you see SEO results?",
    answer:
      "Usually first improvement within 4–8 weeks, and more meaningful results after 3–6 months. Depends on competition, current site state, and scope of work.",
  },
  {
    id: "seo-ai-faq-2",
    question: "Do you need a blog to succeed?",
    answer:
      "Not always. The goal is search intent coverage. Sometimes strong service/product pages plus Q&A do the job well. A blog is a tool — not a requirement.",
  },
  {
    id: "seo-ai-faq-3",
    question: "How does AI affect site traffic?",
    answer:
      "Some searches get direct answers, so fewer clicks. On the other hand, visitors tend to have stronger intent. We focus on both visibility and lead quality.",
  },
  {
    id: "seo-ai-faq-4",
    question: "Do you handle both technical SEO and content?",
    answer:
      "Yes. Technical (index, structure, schema, performance), content (messaging, hierarchy, questions), and measurement — as one package tied to results.",
  },
] as const

export default function MarketingSeoAiPageEn() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="ltr">
      <div id="main" role="main">
        <ServiceHero
          title="Organic Marketing SEO / AI"
          subtitle="Build organic presence that drives leads over time — with technical foundation, converting content, and measurement tied to your business."
          tags={["Technical SEO", "Content & answers", "AI Search", "Analytics"]}
          ctaLabel="Get in touch"
          ctaSource="digital_marketing"
          imageSrc="/services/marketing/3.webp"
          imageAlt="Organic Marketing SEO / AI"
          dir="ltr"
        />

        {QA_SECTIONS.map((section) => (
          <section
            key={section.id}
            aria-label={section.question}
            className="py-[var(--space-section)] bg-[#F4F1EC]"
            dir="ltr"
          >
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
              <div className="mx-auto w-full max-w-[900px] text-left">
                <h2 className="text-balance text-[34px] font-semibold leading-[1.15] tracking-[-0.2px] text-black sm:text-[44px] lg:text-[52px]">
                  {section.question}
                </h2>

                <div className="mt-6 space-y-4 text-[18px] leading-[30px] text-black">
                  {section.answer.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 rounded-2xl bg-white border border-black/[0.07] px-6 py-6 text-[18px] leading-[28px] text-black">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#5389BB]" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <ServiceFaqSection title="FAQ: SEO / AI" items={[...FAQ_ITEMS]} dir="ltr" />

        <DoubleHeadingCtaSection
          title="Ready to build an organic growth engine?"
          subtitle="If you want a structured process that connects technical, content, and measurement to ROI — we'll help you find what fits your business."
          buttonLabel="Get in touch"
          buttonSource="digital_marketing"
          dir="ltr"
        />
      </div>
    </div>
  )
}
