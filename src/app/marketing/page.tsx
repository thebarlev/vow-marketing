import type { Metadata } from "next"

import { ServicePageTemplate } from "@/app/_components/services/ServicePageTemplate"
import { marketingConfig } from "@/app/_components/services/services.config"

export const metadata: Metadata = marketingConfig.metadata

export default function MarketingPage() {
  return <ServicePageTemplate config={marketingConfig} />
}

