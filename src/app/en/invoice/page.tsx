import type { Metadata } from "next"

import { EnProductPageTemplate } from "../_components/EnProductPageTemplate"
import { invoiceConfig } from "@/app/_components/products/products.config"

export const metadata: Metadata = invoiceConfig.metadata

export default function InvoicePageEn() {
  return <EnProductPageTemplate config={invoiceConfig} />
}
