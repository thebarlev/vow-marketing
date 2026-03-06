import type { Metadata } from "next"

import { EnServicePageTemplate } from "../_components/EnServicePageTemplate"
import { developConfigEn } from "../_config/developConfigEn"

export const metadata: Metadata = developConfigEn.metadata

export default function DevelopPageEn() {
  return <EnServicePageTemplate config={developConfigEn} dir="ltr" />
}
