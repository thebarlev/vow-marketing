import Image from "next/image"
import { HeroRotatingTags } from "@/app/_components/home/HeroRotatingTags"

const HERO_TAGS = [

  "פיתוח ועיצוב אתרים מבוססי AI",
  "מערכות ואוטומציות AI לעסק",
  "שיווק דיגיטלי שמייצר ROI אמיתי",
]

export function Hero() {
  return (
    <section className="w-full bg-[#F4F1EC]" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4 pt-0 pb-[var(--space-section)] md:py-[var(--space-section)]">

        {/* ===== Mobile: תמונה רוחב מלא + טקסט מתחת ===== */}
        <div className="flex flex-col md:hidden">
          {/* תמונה רוחב מלא ללא פינות עגולות */}
          <div className="relative w-screen h-[300px] -mx-4 sm:-mx-6">
            <Image
              src="/m-woman-vow.webp"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* טקסט מתחת לתמונה */}
          <div className="flex flex-col items-end text-right mt-5">
            <h1 className="text-black w-full text-right font-semibold leading-[1.05]">
              <span className="block w-full tracking-[-1px] text-[64px] leading-[0.9]">
              פיתוח אתרים חכמים, מערכות AI ושיווק שמייצר תוצאות
              </span>
              <span className="block w-full tracking-[-1px] text-[64px] leading-[0.9] mb-1">
                
              </span>
            </h1>
            <div className="mt-4 w-full flex flex-col items-start">
              <HeroRotatingTags items={HERO_TAGS} />
            </div>
          </div>
        </div>

        {/* ===== Desktop: layout מקורי ===== */}
        <div className="hidden md:grid gap-5 md:grid-cols-2 md:items-center">
          {/* TEXT (ימין) */}
          <div className="min-w-0 w-full flex flex-col items-end text-right order-1 px-0">
            <h1 className="text-black w-full text-right font-semibold leading-[1.05]">
              <span
                className="block w-full text-right tracking-[-0.8px]
                           md:text-[70px]
                           lg:text-[100px]
                           xl:text-[106px] xl:leading-[104px] xl:tracking-[-1.56px]"
              >
                פיתוח אתרים חכמים, מערכות AI ושיווק שמייצר תוצאות
              </span>
              <span
                className="block w-full text-right tracking-[-0.8px]
                           md:text-[96px]
                           lg:text-[120px]
                           xl:text-[156px] xl:leading-[144px] xl:tracking-[-1.56px] mb-1"
              >
           
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