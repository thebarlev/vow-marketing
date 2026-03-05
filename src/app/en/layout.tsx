import { NextIntlClientProvider } from "next-intl"
import enMessages from "../../../messages/en.json"

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {children}
    </NextIntlClientProvider>
  )
}
