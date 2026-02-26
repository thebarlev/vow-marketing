import "server-only"
import { BrevoClient } from "@getbrevo/brevo"
import { getSupabaseAdmin } from "@/lib/supabase/admin"

import { verifyCaptcha } from "@/lib/captcha/verify"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const sourceEnum = z.enum([
  "design_development",
  "digital_marketing",
  "smart_accounting_ai",
])

const baseLeadSchema = z.object({
  email: z.string().email("כתובת אימייל לא תקינה"),
  phone: z.string().min(9, "מספר טלפון לא תקין"),
  source: sourceEnum,
  pagePath: z.string().optional(),
  userAgent: z.string().optional(),
  captchaToken: z.string().min(1, "CAPTCHA token required"),
})

const leadSchemaV1 = baseLeadSchema.extend({
  firstName: z.string().min(1, "שם פרטי חובה"),
  lastName: z.string().min(1, "שם משפחה חובה"),
})

const leadSchemaV2 = baseLeadSchema.extend({
  fullName: z.string().trim().min(2, "שם מלא חובה"),
})

const leadSchema = z.union([leadSchemaV2, leadSchemaV1])

function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const normalized = fullName.trim().replace(/\s+/g, " ")
  const parts = normalized.split(" ").filter(Boolean)
  const firstName = parts.shift() ?? normalized
  const lastName = parts.join(" ")
  return { firstName, lastName }
}

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

    const { email, phone, source, pagePath, userAgent, captchaToken } = parsed.data

    const { firstName, lastName } =
      "fullName" in parsed.data
        ? splitFullName(parsed.data.fullName)
        : { firstName: parsed.data.firstName, lastName: parsed.data.lastName }

    if (process.env.NODE_ENV !== "production" && captchaToken === "BYPASS") {
      // dev bypass
    } else {
      const captchaResult = await verifyCaptcha(captchaToken)
      if (!captchaResult.success) {
        return NextResponse.json(
          { error: "אימות נכשל. אנא נסה שוב." },
          { status: 403 }
        )
      }
    }

    const supabase = getSupabaseAdmin()

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
      return NextResponse.json(
        { error: "שגיאה בשמירת הנתונים" },
        { status: 500 }
      )
    }

    // --- Brevo email ---
    console.log("[leads] sending email via brevo to:", process.env.LEADS_NOTIFY_EMAIL)
    const brevo = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY!,
    })

    try {
      const displayName = lastName ? `${firstName} ${lastName}` : firstName
      const res = await brevo.transactionalEmails.sendTransacEmail({
        sender: { name: "VOW Leads", email: "support@vow.co.il" },
        to: [{ email: process.env.LEADS_NOTIFY_EMAIL!, name: "VOW Admin" }],
        subject: `ליד חדש ב-VOW • ${source}`,
        htmlContent: `
          <div dir="rtl" style="font-family: Arial; line-height:1.6">
            <h2>ליד חדש התקבל</h2>
            <p><b>שם:</b> ${displayName}</p>
            <p><b>אימייל:</b> ${email}</p>
            <p><b>טלפון:</b> ${phone}</p>
            <p><b>מקור:</b> ${source}</p>
            <p><b>עמוד:</b> ${pagePath ?? ""}</p>
          </div>
        `,
      })
    
      console.log("[leads] brevo sendTransacEmail response:", res)
    } catch (e) {
      console.error("[leads] brevo sendTransacEmail error:", e)
      throw e
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