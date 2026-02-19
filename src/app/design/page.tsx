import type { Metadata } from "next"

import { ServicePageTemplate } from "@/app/_components/services/ServicePageTemplate"
import { designConfig } from "@/app/_components/services/services.config"

export const metadata: Metadata = designConfig.metadata

export default function DesignPage() {
  return <ServicePageTemplate config={designConfig} />
}

