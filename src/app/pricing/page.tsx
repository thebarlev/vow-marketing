import { SiteHeader } from "@/app/_components/home/SiteHeader";
import { SiteFooter } from "@/app/_components/home/SiteFooter";
import { AboutSection } from "@/app/_components/home/AboutSection";
import { PriceSection } from "@/app/_components/home/PriceSection";

export default function PricePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      <SiteHeader />

      <main id="main" role="main">
        <PriceSection />
        <AboutSection />
      </main>

      <SiteFooter />
    </div>
  );
}
