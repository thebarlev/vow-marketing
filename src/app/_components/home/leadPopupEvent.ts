"use client"

import type { LeadSource } from "./Popup"

export const LEAD_POPUP_EVENT = "vow:open-lead-popup" as const

export type LeadPopupEventDetail = {
  source: LeadSource
}

export function openLeadPopup(detail: LeadPopupEventDetail) {
  window.dispatchEvent(new CustomEvent<LeadPopupEventDetail>(LEAD_POPUP_EVENT, { detail }))
}

