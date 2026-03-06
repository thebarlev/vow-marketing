import type { Metadata } from "next"

import { EnServicePageTemplate } from "../_components/EnServicePageTemplate"
import { designConfigEn } from "../_config/designConfigEn"

export const metadata: Metadata = designConfigEn.metadata

export default function DesignPageEn() {
  return <EnServicePageTemplate config={designConfigEn} dir="ltr" />
}
