import Image from "next/image"
import { HERO_TAGS } from "./home.constants"
import { HeroRotatingTags } from "./HeroRotatingTags" 

export function Hero() {
  return (
    <section
      aria-label="הירו"
      className="py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-3">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div className="order-2 text-right lg:order-1">
            <h1 className="text-black flex flex-wrap lg:flex-col lg:gap-6">
              <span className="block text-[64px] font-semibold leading-[58px] tracking-[-0.8px] sm:text-[96px] sm:leading-[88px] lg:text-[156px] lg:leading-[144px] lg:tracking-[-1.56px]">
                חותמים
              </span>
              <span className="block text-[64px] font-semibold leading-[58px] tracking-[-0.8px] sm:text-[96px] sm:leading-[88px] lg:text-[156px] lg:leading-[144px] lg:tracking-[-1.56px]">
                על הצלחה
              </span>
            </h1>
            <div className="mt-6 flex justify-start lg:justify-end">
              <HeroRotatingTags items={HERO_TAGS} />
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full lg:max-w-[560px] overflow-hidden rounded-[22px] bg-white shadow-sm">
              <Image
                src="/hero.webp"
                alt="תמונת הירו: צוות VOW"
                width={1120}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}