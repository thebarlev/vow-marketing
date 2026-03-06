import type { Metadata } from "next"

import { EnProductPageTemplate } from "../_components/EnProductPageTemplate"
import { developAiConfigEn } from "../_config/developAiConfigEn"

export const metadata: Metadata = developAiConfigEn.metadata

export default function DevelopAiPageEn() {
  return <EnProductPageTemplate config={developAiConfigEn} dir="ltr" />
}
