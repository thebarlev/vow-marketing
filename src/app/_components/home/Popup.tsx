"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle, Sparkles } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(1, "שם פרטי חובה"),
  lastName: z.string().min(1, "שם משפחה חובה"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  phone: z.string().min(9, "מספר טלפון לא תקין"),
})

type FormData = z.infer<typeof formSchema>

export type LeadSource = "design_development" | "digital_marketing" | "smart_accounting_ai"

export type PopupProps = {
  title: string
  description: string
  toptext?: string
  source: LeadSource
  onClose: () => void
}

export function Popup({ title, description, toptext, source, onClose }: PopupProps) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Get reCAPTCHA token
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      if (!siteKey) {
        throw new Error("reCAPTCHA not configured")
      }

      // Execute reCAPTCHA invisibly
      const token = await window.grecaptcha.execute(siteKey, { 
        action: 'submit_lead' 
      })

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          source,
          pagePath: window.location.pathname,
          userAgent: navigator.userAgent,
          captchaToken: token, // Add captcha token
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "שגיאה בשמירת הנתונים")
      }

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "שגיאה לא צפויה")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Conditional success message based on source
  const successMessage =
    source === "smart_accounting_ai" ? (
      <>
        <p className="text-[22px] font-semibold text-[#5389BB]">
          המכסה לפיילוט (100 עסקים) התמלאה.
        </p>
        <p className="text-[22px] font-semibold leading-relaxed text-[#747474]">
          אנחנו נפתח בקרוב אפשרות הצטרפות נוספת,
          <br />
          וניצור איתך קשר בהקדם כדי לעדכן ולהזמין אותך.
        </p>
      </>
    ) : (
      <p className="text-[22px] font-semibold leading-relaxed text-[#747474]">
        תודה על ההרשמה! ניצור איתך קשר בהקדם.
      </p>
    )

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000D6] px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[637px] rounded-xl bg-white p-10 text-right max-h-[calc(100vh-80px)] overflow-y-auto hide-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {!isSuccess ? (
          <>
            <div className="mb-4 flex justify-center">
              <Sparkles className="h-12 w-12 text-[#5389BB]" aria-hidden="true" />
            </div>

            {toptext && (
              <div className="mb-3 text-center">
                <span className="inline-block rounded bg-[#F5F5F5] px-4 py-2 text-[20px] font-bold text-[#5389BB]">
                  {toptext}
                </span>
              </div>
            )}

            <h2 className="mb-1 text-center text-[50px] font-bold">
              {title}
            </h2>

            <h6 className="mb-4 px-2 py-1 text-center text-[26px] font-semibold text-[#747474]">
              {description}
            </h6>

            <form
              className="mx-auto max-w-[336px] space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label htmlFor="firstName" className="mb-1 block text-[20px] font-semibold">
                  שם פרטי
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName")}
                  className="w-full rounded border px-3 py-3"
                  dir="rtl"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="mb-1 block text-[20px] font-semibold">
                  שם משפחה
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName")}
                  className="w-full rounded border px-3 py-3"
                  dir="rtl"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-[20px] font-semibold">
                  דוא&quot;ל
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full rounded border px-3 py-3"
                  dir="ltr"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-[20px] font-semibold">
                  נייד
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full rounded border px-3 py-3"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {error && (
                <div className="rounded bg-red-50 p-3 text-center text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded bg-black py-3 text-[20px] text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "שולח..." : "הרשמה"}
              </button>
            </form>
          </>
        ) : (
          <div className="mx-auto max-w-[520px] space-y-6 text-center">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-600" aria-hidden="true" />
            </div>

            <h2 className="text-[40px] font-bold">
              ההרשמה התקבלה בהצלחה
            </h2>

            {successMessage}

            <button
              type="button"
              onClick={onClose}
              className="mx-auto w-full mt-6 block rounded bg-black px-10 py-3 text-[20px] text-white cursor-pointer"
            >
              סגירה
            </button>
          </div>
        )}
      </div>
    </div>
  )
}