import type { Metadata } from "next"

import { EnProductPageTemplate } from "../_components/EnProductPageTemplate"
import { accountAiConfig } from "@/app/_components/products/products.config"

export const metadata: Metadata = accountAiConfig.metadata

export default function AccountAiPageEn() {
  return <EnProductPageTemplate config={accountAiConfig} />
}
