import type { Metadata } from "next"

import { ProductPageTemplate } from "@/app/_components/products/ProductPageTemplate"
import { developAiConfig } from "@/app/_components/products/products.config"

export const metadata: Metadata = developAiConfig.metadata

export default function DevelopAiPage() {
  return <ProductPageTemplate config={developAiConfig} />
}

