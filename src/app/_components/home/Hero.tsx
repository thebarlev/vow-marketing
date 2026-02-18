import Image from "next/image"
import { HeroRotatingTags } from "@/app/_components/home/HeroRotatingTags"

const HERO_TAGS = [
  "רואה חשבון AI",
  "פיתוח אתרים ומערכות",
  "חשבונית ירוקה מאובטחת",
  "שיווק דיגיטלי",
]

export function Hero() {
  return (
    <section className="w-full bg-[#F4F1EC]" dir="rtl">
<div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4 pt-0 pb-[var(--space-section)] md:py-[var(--space-section)]">        <div className="grid gap-5 md:grid-cols-2 md:items-center">
          
          {/* ===== TEXT (ימין) ===== */}
          <div className="min-w-0 w-full flex flex-col items-end text-right order-2 md:order-1 px-4 sm:px-6 md:px-0">
            <h1 className="text-black w-full text-right font-semibold leading-[1.05]">
              <span
                className="block w-full text-right tracking-[-0.8px]
                           text-[65px] leading-[0.95]
                           md:text-[96px]
                           lg:text-[120px]
                           xl:text-[156px] xl:leading-[144px] xl:tracking-[-1.56px]"
              >
                חותמים
              </span>
              <span
                className="block w-full text-right tracking-[-0.8px]
                           text-[65px] leading-[0.95]
                           md:text-[96px]
                           lg:text-[120px]
                           xl:text-[156px] xl:leading-[144px] xl:tracking-[-1.56px] mb-1"
              >
                על הצלחה
              </span>
            </h1>
            <div
              className="
                mt-8 w-full
                flex flex-col items-end justify-end
                text-right
                [&_*]:text-right
                [&_*]:items-end
                [&_*]:justify-end
                [&_*]:w-full
              "
            >
              <HeroRotatingTags items={HERO_TAGS} />
            </div>
          </div>

          {/* ===== IMAGE (שמאל) ===== */}
          <div className="w-full order-1 md:order-2">
            {/* Mobile: רוחב מלא, גובה 50% מרוחב המסך */}
            <div className="relative w-screen -mx-4 sm:-mx-6 overflow-hidden md:hidden" style={{ height: '50vw' }}>
              <Image
                src="/m-woman-vow.webp"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Desktop: aspect ratio רגיל */}
            <div className="relative w-full overflow-hidden rounded-3xl shadow-lg aspect-[4/5] hidden md:block">
              <Image
                src="/D-hero.webp"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="45vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}