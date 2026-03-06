import Image from "next/image"
import { HeroRotatingTags } from "@/app/_components/home/HeroRotatingTags"
import { HERO_TAGS_EN } from "./homeEn.constants"

export function HeroEN() {
  return (
    <section className="w-full bg-[#F4F1EC]" dir="ltr">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4 pt-0 pb-[var(--space-section)] md:py-[var(--space-section)]">
        {/* Mobile: full-width image + text below */}
        <div className="flex flex-col md:hidden">
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
          <div className="flex flex-col items-start text-left mt-5">
            <h1 className="text-black w-full text-left font-semibold leading-[1.05]">
              <span className="block w-full tracking-[-1px] text-[64px] leading-[0.9]">
                Websites, AI Systems & Marketing That Deliver
              </span>
            </h1>
            <div className="mt-4 w-full flex flex-col items-start">
              <HeroRotatingTags items={HERO_TAGS_EN} dir="ltr" />
            </div>
          </div>
        </div>

        {/* Desktop: text left, image right */}
        <div className="hidden md:grid gap-5 md:grid-cols-2 md:items-center">
          <div className="min-w-0 w-full flex flex-col items-start text-left order-1 px-0">
            <h1 className="text-black w-full text-left font-semibold leading-[1.05]">
              <span
                className="block w-full text-left tracking-[-0.8px]
                           md:text-[70px]
                           lg:text-[100px]
                           xl:text-[106px] xl:leading-[104px] xl:tracking-[-1.56px]"
              >
                Websites, AI Systems & Marketing That Deliver
              </span>
            </h1>
            <div className="mt-8 w-full flex flex-col items-start justify-end">
              <HeroRotatingTags items={HERO_TAGS_EN} dir="ltr" />
            </div>
          </div>
          <div className="w-full order-2 flex items-end justify-start">
            <div className="relative lg:w-4/5 md:w-4/5 overflow-hidden lg:rounded-3xl shadow-lg aspect-[4/5]">
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
