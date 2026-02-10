import "server-only"

export async function verifyCaptcha(token: string): Promise<{
  success: boolean
  score?: number
  error?: string
}> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error("[captcha] Missing RECAPTCHA_SECRET_KEY")
    return { success: false, error: "Missing configuration" }
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
      }
    )

    const data = await response.json()

    if (!data.success) {
      console.warn("[captcha] Verification failed:", data["error-codes"])
      return { success: false, error: "Verification failed" }
    }

    // reCAPTCHA v3 returns score 0-1 (1 = human, 0 = bot)
    const score = data.score || 0

    console.log(`[captcha] Score: ${score}, Action: ${data.action}`)

    // Threshold: 0.5 (adjust based on your needs)
    if (score < 0.5) {
      return { success: false, score, error: "Low score" }
    }

    return { success: true, score }
  } catch (error) {
    console.error("[captcha] Error verifying:", error)
    return { success: false, error: "Network error" }
  }
}
