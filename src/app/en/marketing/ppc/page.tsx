import type { Metadata } from "next"

import { EnServicePageTemplate } from "../../_components/EnServicePageTemplate"
import { marketingPpcConfigEn } from "../../_config/marketingPpcConfigEn"

export const metadata: Metadata = marketingPpcConfigEn.metadata

export default function MarketingPpcPageEn() {
  return <EnServicePageTemplate config={marketingPpcConfigEn} dir="ltr" />
}
