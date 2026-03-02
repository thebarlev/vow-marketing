import type { Metadata } from "next"

import { ServicePageTemplate } from "@/app/_components/services/ServicePageTemplate"
import { marketingPpcConfig } from "@/app/_components/services/services.config"

export const metadata: Metadata = marketingPpcConfig.metadata

export default function MarketingPpcPage() {
  return <ServicePageTemplate config={marketingPpcConfig} />
}

