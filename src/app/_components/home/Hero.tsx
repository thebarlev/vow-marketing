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
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4 pt-0 pb-[var(--space-section)] md:py-[var(--space-section)]">

      {/* ===== Mobile: טקסט + תמונה זה לצד זה ===== */}
<div className="grid grid-cols-2 gap-2 md:hidden items-stretch">

{/* טקסט ימין — ממורכז לגובה התמונה */}
<div className="flex flex-col items-end text-right justify-center h-full">
  <h1 className="text-black w-full text-right font-semibold leading-[1.05]">
    <span className="block w-full tracking-[-0.8px] text-[40px] leading-[0.95]">
      חותמים
    </span>
    <span className="block w-full tracking-[-0.8px] text-[40px] leading-[0.95] mb-1">
      על הצלחה
    </span>
  </h1>

  <div className="mt-4 w-full flex flex-col items-end">
    <HeroRotatingTags items={HERO_TAGS} />
  </div>
</div>

{/* תמונה שמאל */}
<div className="relative w-full overflow-hidden rounded-2xl aspect-[4/5]">
  <Image
    src="/m-woman-vow.webp"
    alt=""
    fill
    priority
    className="object-cover"
    sizes="50vw"
  />
</div>

</div>

        {/* ===== Desktop: layout מקורי ===== */}
        <div className="hidden md:grid gap-5 md:grid-cols-2 md:items-center">

          {/* TEXT (ימין) */}
          <div className="min-w-0 w-full flex flex-col items-end text-right order-1 px-0">
            <h1 className="text-black w-full text-right font-semibold leading-[1.05]">
              <span
                className="block w-full text-right tracking-[-0.8px]
                           md:text-[96px]
                           lg:text-[120px]
                           xl:text-[156px] xl:leading-[144px] xl:tracking-[-1.56px]"
              >
                חותמים
              </span>
              <span
                className="block w-full text-right tracking-[-0.8px]
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

          {/* IMAGE (שמאל) */}
          <div className="w-full order-2">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-lg aspect-[4/5]">
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