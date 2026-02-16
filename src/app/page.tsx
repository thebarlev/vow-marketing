import { GreenSignatureCard } from "@/app/_components/home/GreenSignatureCard"
import { Hero } from "@/app/_components/home/Hero"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { SuccessSection } from "@/app/_components/home/SuccessSection"
import { Testimonials } from "@/app/_components/home/Testimonials"
import { CookieBanner } from "@/app/_components/home/CookieBanner"
import { AboutSection } from "@/app/_components/home/AboutSection"
import { VisionToExecutionSection } from "@/app/_components/home/VisionToExecutionSection"
import { FaqSection } from "@/app/_components/home/FaqSection"
import { GreenInvoiceSection } from "@/app/_components/home/GreenInvoiceSection"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      <SiteHeader />

      <main id="main" role="main">
        <Hero />
        <GreenInvoiceSection />
        <LogoRow />
        <SuccessSection />
        <Testimonials />
        <VisionToExecutionSection />
        <GreenSignatureCard />
        <AboutSection />
        <PackagesSection />
        <FaqSection />
      </main>

      <CookieBanner />
      <SiteFooter />
    </div>
  )
}
