import { GreenSignatureCard } from "@/app/_components/home/GreenSignatureCard"
import { Hero } from "@/app/_components/home/Hero"
import { LogoRow } from "@/app/_components/home/LogoRow"
import { PackagesSection } from "@/app/_components/home/PackagesSection"
import { SiteFooter } from "@/app/_components/home/SiteFooter"
import { SiteHeader } from "@/app/_components/home/SiteHeader"
import { SuccessSection } from "@/app/_components/home/SuccessSection"
import { Testimonials } from "@/app/_components/home/Testimonials"
import { VowAppAndPackages } from "@/app/_components/home/VowAppAndPackages"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main" role="main">
        <Hero />
        <LogoRow />
        <SuccessSection />
        <Testimonials />
        <GreenSignatureCard /> 
        <PackagesSection />
      </main>

      <SiteFooter />
    </div>
  )
}
