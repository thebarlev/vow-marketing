import type { Metadata } from "next"

import { AboutSection } from "@/app/_components/home/AboutSection"
import { heEnAlternateLanguages } from "@/lib/seo/hreflang"
import { PriceSection } from "@/app/_components/home/PriceSection"

export const metadata: Metadata = {
  alternates: {
    canonical: "/en/pricing",
    languages: heEnAlternateLanguages("/pricing", "/en/pricing"),
  },
}

export default function PricingPageEn() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]" dir="ltr">
        <PriceSection />
        <AboutSection />
    </div>
  )
}
