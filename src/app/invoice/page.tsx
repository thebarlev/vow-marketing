import type { Metadata } from "next"

import { ProductPageTemplate } from "@/app/_components/products/ProductPageTemplate"
import { invoiceConfig } from "@/app/_components/products/products.config"

export const metadata: Metadata = invoiceConfig.metadata

export default function InvoicePage() {
  return <ProductPageTemplate config={invoiceConfig} />
}

