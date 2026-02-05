import "server-only"

import { createCardcomLowProfile } from "@/lib/payments/cardcom"
import { getSupabaseAdmin } from "@/lib/supabase/admin"

function parsePackagePricesFromEnv(): Record<string, number> | null {
  const raw = process.env.VOW_PACKAGE_PRICES_JSON
  if (!raw) return null

  let parsed: unknown
  try {
    parsed = JSON.parse(raw) as unknown
  } catch {
    return null
  }
  if (!parsed || typeof parsed !== "object") return null

  // Accept either: { [packageId]: amount } OR [{ id, amount }]
  if (Array.isArray(parsed)) {
    const out: Record<string, number> = {}
    for (const item of parsed) {
      if (!item || typeof item !== "object") continue
      const obj = item as Record<string, unknown>
      const id = obj["id"]
      const amount = obj["amount"]
      if (typeof id === "string" && typeof amount === "number") out[id] = amount
    }
    return Object.keys(out).length ? out : null
  }

  const out: Record<string, number> = {}
  for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
    if (typeof v === "number") out[k] = v
  }
  return Object.keys(out).length ? out : null
}

async function resolvePackageAmount(packageId: string) {
  // 1) Prefer env mapping (self-contained, no DB dependency).
  const envMap = parsePackagePricesFromEnv()
  const fromEnv = envMap?.[packageId]
  if (typeof fromEnv === "number" && Number.isFinite(fromEnv) && fromEnv > 0) {
    return { amount: fromEnv, productName: packageId }
  }

  // 2) Fallback to Supabase packages table (if exists).
  const supabase = getSupabaseAdmin()
  const packagesTable = process.env.SUPABASE_PACKAGES_TABLE ?? "packages"

  type PackageRow = Record<string, unknown>

  const trySelect = async (select: string) => {
    const { data, error } = await supabase
      .from(packagesTable)
      .select(select)
      .eq("id", packageId)
      .maybeSingle()
    if (error) return { data: null as PackageRow | null, error }
    return { data: (data as unknown as PackageRow | null) ?? null, error: null }
  }

  // Try common column names.
  const attempts = [
    { select: "amount,name" },
    { select: "price,name" },
    { select: "amount,title" },
    { select: "price,title" },
  ]

  let lastError: unknown = null
  for (const a of attempts) {
    const { data, error } = await trySelect(a.select)
    if (error) {
      lastError = error
      continue
    }

    const amountRaw = data?.["amount"] ?? data?.["price"]
    const nameRaw = data?.["name"] ?? data?.["title"]
    const amount = typeof amountRaw === "number" ? amountRaw : null
    const productName = typeof nameRaw === "string" ? nameRaw : packageId

    if (amount && Number.isFinite(amount) && amount > 0) {
      return { amount, productName }
    }
  }

  throw new Error(
    `Unable to resolve package amount for "${packageId}". ` +
      `Set VOW_PACKAGE_PRICES_JSON or create Supabase table "${packagesTable}" with columns (id, amount|price). ` +
      (lastError ? `Last error: ${JSON.stringify(lastError)}` : ""),
  )
}

async function insertPendingSubscription(params: {
  email: string
  packageId: string
}) {
  const supabase = getSupabaseAdmin()
  const table = process.env.SUPABASE_SUBSCRIPTIONS_TABLE ?? "subscriptions"

  const variants: Array<Record<string, unknown>> = [
    { email: params.email, package_id: params.packageId, status: "pending" },
    { email: params.email, packageId: params.packageId, status: "pending" },
    { email: params.email, package_id: params.packageId, state: "pending" },
    { email: params.email, packageId: params.packageId, state: "pending" },
  ]

  let lastError: unknown = null
  for (const v of variants) {
    const { error } = await supabase.from(table).insert(v)
    if (!error) return
    lastError = error
  }

  throw new Error(
    `Failed to insert pending subscription into "${table}": ${JSON.stringify(
      lastError,
    )}`,
  )
}

export async function createCheckoutRedirect(params: {
  email: string
  packageId: string
}) {
  await insertPendingSubscription(params)

  const { amount, productName } = await resolvePackageAmount(params.packageId)

  const { redirectUrl } = await createCardcomLowProfile({
    amount,
    productName,
    returnValue: params.packageId,
  })

  return { redirectUrl }
}

