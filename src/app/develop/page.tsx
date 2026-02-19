import type { Metadata } from "next"

import { ServicePageTemplate } from "@/app/_components/services/ServicePageTemplate"
import { developConfig } from "@/app/_components/services/services.config"

export const metadata: Metadata = developConfig.metadata

export default function DevelopPage() {
  return <ServicePageTemplate config={developConfig} />
}

