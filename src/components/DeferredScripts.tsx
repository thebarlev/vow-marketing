"use client"

import { useEffect } from "react"

const GTM_ID = "GTM-WNGC226Q"
const FB_PIXEL_ID = "4291258411191239"
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

function injectScript(src: string, id?: string, onload?: () => void) {
  if (id && document.getElementById(id)) return
  const s = document.createElement("script")
  s.src = src
  s.async = true
  if (id) s.id = id
  if (onload) s.onload = onload
  document.head.appendChild(s)
}

function injectInline(code: string, id: string) {
  if (document.getElementById(id)) return
  const s = document.createElement("script")
  s.id = id
  s.textContent = code
  document.head.appendChild(s)
}

function loadGTM() {
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`, "gtm-script")
}

function loadGA() {
  if (!GA_MEASUREMENT_ID) return
  const id = JSON.stringify(GA_MEASUREMENT_ID)
  injectScript(
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    "ga-script",
  )
  injectInline(
    `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${id});`,
    "ga-inline",
  )
}

function loadFBPixel() {
  const id = JSON.stringify(FB_PIXEL_ID)
  injectInline(
    `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${id});fbq('track','PageView');`,
    "fb-pixel",
  )
}

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com"

function loadPostHog() {
  if (!POSTHOG_KEY) return
  const assetsHost = POSTHOG_HOST.replace(".i.posthog.com", "-assets.i.posthog.com")
  const key = JSON.stringify(POSTHOG_KEY)
  const host = JSON.stringify(POSTHOG_HOST)
  injectScript(`${assetsHost}/static/array.js`, "posthog-script", () => {
    if (typeof window !== "undefined" && (window as unknown as { posthog?: { init: (k: string, o: object) => void } }).posthog?.init) {
      ;(window as unknown as { posthog: { init: (k: string, o: object) => void } }).posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        disable_session_recording: true,
      })
    }
  })
}

export function DeferredScripts() {
  useEffect(() => {
    const load = () => {
      loadGTM()
      loadGA()
      loadFBPixel()
      loadPostHog()
    }

    if (document.readyState === "complete") {
      load()
    } else {
      window.addEventListener("load", load, { once: true })
      return () => window.removeEventListener("load", load)
    }
  }, [])

  return null
}
