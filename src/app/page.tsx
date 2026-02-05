import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Vow
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/pricing">תמחור</Link>
            </Button>
            <Button asChild>
              <Link href="/pricing">התחל</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                אתר שיווק בעברית, RTL, נקי ומהיר
              </h1>
              <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                בונים מסלול תשלום ועמודי תמחור/צ׳קאאוט מוכנים לעבודה — עם עיצוב
                מודרני ורספונסיבי ב‑Tailwind.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/pricing">התחל עכשיו</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/pricing">לצפייה בתמחור</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ללא התקנות נוספות — App Router, Tailwind ורכיבי UI קיימים.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">מה מקבלים</p>
                    <p className="text-lg font-semibold">עמודי Checkout מוכנים</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      טופס אימייל, כפתור לתשלום והפניה אוטומטית ל‑Cardcom.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">למפתחים</p>
                    <p className="text-lg font-semibold">API נקי וברור</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Route שמקבל <span className="font-mono">email</span>+
                      <span className="font-mono">packageId</span> ומחזיר{" "}
                      <span className="font-mono">redirectUrl</span>.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2">
                <CardContent className="pt-6">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="font-semibold">RTL אמיתי</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-mono">dir=&quot;rtl&quot;</span>{" "}
                        ברמת האפליקציה.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">רספונסיבי</p>
                      <p className="text-sm text-muted-foreground">
                        חווית שימוש טובה בכל מסך.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">עיצוב נקי</p>
                      <p className="text-sm text-muted-foreground">
                        רכיבי Card/Button תואמי shadcn.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vow
        </div>
      </footer>
    </div>
  )
}
