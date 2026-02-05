import { NextResponse } from "next/server"
import { z } from "zod"

import { getSupabaseAdmin } from "@/lib/supabase/admin"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const BodySchema = z.object({
  email: z.string().email(),
  packageId: z.string().min(1),
  status: z.string().min(1),
  expires_at: z.string().min(1),
})

function getBearerToken(authHeader: string | null) {
  if (!authHeader) return null
  const match = authHeader.match(/^Bearer\s+(.+)$/i)
  return match?.[1]?.trim() ?? null
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

async function upsertSubscription(params: {
  email: string
  packageId: string
  status: "active" | "expired"
  expiresAt: string
}) {
  const supabase = getSupabaseAdmin()
  const table = process.env.VOW_SUBSCRIPTIONS_TABLE ?? "subscriptions"

  const now = new Date().toISOString()
  const isActive = params.status === "active"

  const base: Record<string, unknown> = {
    email: params.email,
    status: params.status,
    updated_at: now,
  }

  // Best-effort to support different column names.
  const variants: Array<Record<string, unknown>> = [
    { ...base, package_id: params.packageId, expires_at: params.expiresAt },
    { ...base, packageId: params.packageId, expires_at: params.expiresAt },
    { ...base, plan: params.packageId, expires_at: params.expiresAt },
    { ...base, package: params.packageId, expires_at: params.expiresAt },
    { ...base, package_id: params.packageId, expiresAt: params.expiresAt },
    { ...base, packageId: params.packageId, expiresAt: params.expiresAt },
  ]

  const payloads = isActive
    ? variants.flatMap((v) => [
        { ...v, started_at: now },
        { ...v, activated_at: now },
        { ...v, started_at: now, activated_at: now },
      ])
    : variants

  let lastError: unknown = null

  for (const payload of payloads) {
    // Prefer upsert when `email` is unique.
    const upsertRes = await supabase
      .from(table)
      .upsert(payload, { onConflict: "email" })
    if (!upsertRes.error) return
    lastError = upsertRes.error

    // Fallback: update then insert.
    const updateRes = await supabase
      .from(table)
      .update(payload)
      .eq("email", params.email)
    if (!updateRes.error) return
    lastError = updateRes.error

    const insertRes = await supabase.from(table).insert(payload)
    if (!insertRes.error) return
    lastError = insertRes.error
  }

  console.warn("MARKETING_WEBHOOK_SUBSCRIPTION_WRITE_FAILED", lastError)
}

export async function POST(req: Request) {
  const secret = process.env.VOW_BILLING_WEBHOOK_SECRET
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "server_misconfig" },
      { status: 500 },
    )
  }

  const token = getBearerToken(req.headers.get("authorization"))
  if (token !== secret) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 })
  }

  const body = await req.json().catch(() => null)
  const parsed = BodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "bad_request", details: parsed.error.flatten() },
      { status: 400 },
    )
  }

  const email = normalizeEmail(parsed.data.email)
  const packageId = parsed.data.packageId
  const expiresAt = parsed.data.expires_at
  const normalizedStatus = parsed.data.status === "active" ? "active" : "expired"

  await upsertSubscription({
    email,
    packageId,
    status: normalizedStatus,
    expiresAt,
  })

  return NextResponse.json({ ok: true })
}

