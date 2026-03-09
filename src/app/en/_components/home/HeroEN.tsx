import Image from "next/image"
import { HeroRotatingTags } from "@/app/_components/home/HeroRotatingTags"
import { HERO_TAGS_EN } from "./homeEn.constants"

const HERO_TITLE_EN = "Websites, AI Systems & Marketing That Deliver"

export function HeroEN() {
  return (
    <section className="w-full bg-[#F4F1EC]" dir="ltr">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4 pt-0 pb-[var(--space-section)] md:py-[var(--space-section)]">
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:items-center">
          {/* Text + H1: first on mobile, first on desktop — single H1 for SEO */}
          <div className="order-2 md:order-1 flex flex-col items-start text-left px-0">
            <h1 className="text-black w-full text-left font-semibold leading-[1.05]">
              <span className="block w-full tracking-[-1px] text-[64px] leading-[0.9] md:text-[70px] md:leading-[0.98] lg:text-[100px] xl:text-[106px] xl:leading-[104px] xl:tracking-[-1.56px]">
                {HERO_TITLE_EN}
              </span>
            </h1>
            <div className="mt-4 md:mt-8 w-full flex flex-col items-start">
              <HeroRotatingTags items={HERO_TAGS_EN} dir="ltr" />
            </div>
          </div>

          {/* Image: second on mobile, second on desktop */}
          <div className="order-1 md:order-2 flex justify-start">
            <div className="relative w-screen h-[300px] -mx-4 sm:-mx-6 md:mx-0 md:w-4/5 md:aspect-[4/5] md:rounded-3xl md:shadow-lg overflow-hidden">
              <Image
                src="/m-woman-vow.webp"
                alt="VOW digital marketing and AI SEO platform for growing businesses"
                fill
                priority
                className="object-cover md:hidden"
                sizes="100vw"
              />
              <Image
                src="/D-hero.webp"
                alt="VOW website development and digital marketing for business growth"
                fill
                priority
                className="object-cover hidden md:block"
                sizes="45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
