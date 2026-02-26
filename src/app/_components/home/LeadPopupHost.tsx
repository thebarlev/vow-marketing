"use client"

import { useCallback, useEffect, useState } from "react"

import { OUR_PACKAGES } from "@/app/_components/home/home.constants"
import { Popup, type LeadSource } from "@/app/_components/home/Popup"
import {
  LEAD_POPUP_EVENT,
  type LeadPopupEventDetail,
} from "@/app/_components/home/leadPopupEvent"
import {
  POPUP_OVERRIDES_BY_PATH,
  type PopupIconVariant,
} from "@/app/_components/products/productPopupOverrides"

type PopupData = {
  title: string
  description: string
  toptext: string
  source: LeadSource
  iconVariant?: PopupIconVariant
  pagePathOverride?: string
}

export function LeadPopupHost() {
  const [open, setOpen] = useState(false)
  const [popupData, setPopupData] = useState<PopupData>({
    title: "",
    description: "",
    toptext: "",
    source: "design_development",
    iconVariant: "default",
  })

  const openFromSource = useCallback((source: LeadSource) => {
    const pkg = OUR_PACKAGES.find((p) => p.source === source)
    if (!pkg) return

    const override = POPUP_OVERRIDES_BY_PATH[window.location.pathname]
    if (override) {
      setPopupData({
        title: override.title,
        description: override.description,
        toptext: override.toptext ?? "",
        source: override.source ?? source,
        iconVariant: override.iconVariant ?? "default",
        pagePathOverride: override.pagePathOverride,
      })
      setOpen(true)
      return
    }

    setPopupData({
      title: pkg.title,
      description: pkg.kicker,
      toptext: pkg.toppopup ?? "",
      source: pkg.source,
      iconVariant: "default",
    })
    setOpen(true)
  }, [])

  useEffect(() => {
    const onOpenLeadPopup = (event: Event) => {
      const detail = (event as CustomEvent<LeadPopupEventDetail>).detail
      if (!detail?.source) return
      openFromSource(detail.source)
    }

    window.addEventListener(LEAD_POPUP_EVENT, onOpenLeadPopup)
    return () => window.removeEventListener(LEAD_POPUP_EVENT, onOpenLeadPopup)
  }, [openFromSource])

  if (!open) return null

  return (
    <Popup
      title={popupData.title}
      description={popupData.description}
      toptext={popupData.toptext}
      source={popupData.source}
      iconVariant={popupData.iconVariant}
      pagePathOverride={popupData.pagePathOverride}
      onClose={() => setOpen(false)}
    />
  )
}

