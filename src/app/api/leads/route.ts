import "server-only"

import { getSupabaseAdmin } from "@/lib/supabase/admin"
import { verifyCaptcha } from "@/lib/captcha/verify"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const sourceEnum = z.enum([
  "design_development",
  "digital_marketing",
  "smart_accounting_ai",
])

const leadSchema = z.object({
  firstName: z.string().min(1, "שם פרטי חובה"),
  lastName: z.string().min(1, "שם משפחה חובה"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  phone: z.string().min(9, "מספר טלפון לא תקין"),
  source: sourceEnum,
  pagePath: z.string().optional(),
  userAgent: z.string().optional(),
  captchaToken: z.string().min(1, "CAPTCHA token required"),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "נתונים לא תקינים", details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, phone, source, pagePath, userAgent, captchaToken } =
      parsed.data

    // Verify reCAPTCHA
    const captchaResult = await verifyCaptcha(captchaToken)
    if (!captchaResult.success) {
      console.warn(`[leads] CAPTCHA failed: ${captchaResult.error}, score: ${captchaResult.score}`)
      return NextResponse.json(
        { error: "אימות נכשל. אנא נסה שוב." },
        { status: 403 }
      )
    }

    console.log(`[leads] CAPTCHA verified, score: ${captchaResult.score}`)

    const supabase = getSupabaseAdmin()

    // Map camelCase to snake_case for DB
    const { error } = await supabase.from("leads").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      source,
      page_path: pagePath,
      user_agent: userAgent,
    } as never)

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: "שגיאה בשמירת הנתונים" },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("API /leads error:", err)
    return NextResponse.json(
      { error: "שגיאה כללית" },
      { status: 500 }
    )
  }
}
