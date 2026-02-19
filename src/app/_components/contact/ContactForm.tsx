"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const CATEGORY_OPTIONS = [
  "התעניינות ברו״ח AI (אוטומציה פיננסית)",
  "בקשה לשיחת ייעוץ עם נציג (רו״ח לעסק)",
  "התעניינות בשיווק דיגיטלי לעסק",
  "התעניינות בעיצוב ומיתוג",
  "התעניינות בפיתוח אתרים / אפליקציות / מערכות",
  "התעניינות ב״חשבונית ירוקה״ מאובטחת (הפקה וחתימה)",
  "אחר",
] as const

const formSchema = z.object({
  fullName: z.string().trim().min(2, "שם מלא חובה"),
  phone: z.string().trim().min(9, "מספר טלפון לא תקין"),
  email: z.string().trim().email("כתובת אימייל לא תקינה"),
  subject: z.string().trim().min(1, "נושא חובה"),
  category: z.string().trim().min(1, "קטגוריה חובה"),
  message: z.string().trim().min(10, "ההודעה קצרה מדי"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    },
  })

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setIsSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          subject: values.subject,
          category: values.category,
          message: values.message,
        }),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.ok) {
        const code = String(result?.error || "")
        if (code === "missing_fields") {
          throw new Error("אנא מלא/י את כל השדות הנדרשים.")
        }
        throw new Error("שליחת הפנייה נכשלה. נסה/י שוב.")
      }

      setIsSuccess(true)
      reset()
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "שגיאה לא צפויה")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div dir="rtl" className="text-right">
      {isSuccess && (
        <div className="mb-4 rounded bg-green-50 p-4 text-center text-[16px] font-semibold text-green-800">
          הפנייה נשלחה בהצלחה
        </div>
      )}

      {submitError && (
        <div className="mb-4 rounded bg-red-50 p-3 text-center text-sm text-red-600">
          {submitError}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset disabled={isSubmitting} className="space-y-4 disabled:opacity-70">
          <div>
            <label htmlFor="fullName" className="mb-1 block text-[20px] font-semibold">
              שם מלא
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              className="w-full rounded border px-3 py-3"
              dir="rtl"
              autoComplete="name"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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
                autoComplete="tel"
                inputMode="tel"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
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
                autoComplete="email"
                inputMode="email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-[20px] font-semibold">
              נושא
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              className="w-full rounded border px-3 py-3"
              dir="rtl"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="category" className="mb-1 block text-[20px] font-semibold">
              קטגוריה
            </label>
            <select
              id="category"
              {...register("category")}
              className="w-full rounded border bg-white px-3 py-3"
              dir="rtl"
              defaultValue=""
            >
              <option value="" disabled>
                בחר/י קטגוריה
              </option>
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-[20px] font-semibold">
              הודעה
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="min-h-[140px] w-full resize-y rounded border px-3 py-3"
              dir="rtl"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "שולח..." : "שליחה"}
          </button>
        </fieldset>
      </form>
    </div>
  )
}

