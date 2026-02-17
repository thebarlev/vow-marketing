import Image from "next/image"
import { HERO_TAGS } from "./home.constants"
import { HeroRotatingTags } from "./HeroRotatingTags"

export function Hero() {
  return (
    <section
      aria-label="הירו"
      className="py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-5">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div className="order-2 text-right lg:order-1">
            <h1 className="text-black flex flex-wrap lg:flex-col lg:gap-4">
              <span className="block text-[80px] font-semibold leading-[88px] tracking-[-0.8px] sm:text-[96px] sm:leading-[88px] lg:text-[156px] lg:leading-[144px] lg:tracking-[-1.56px]">
                חותמים
              </span>
              <span className="block text-[80px] font-semibold leading-[88px] tracking-[-0.8px] sm:text-[96px] sm:leading-[88px] lg:text-[156px] lg:leading-[144px] lg:tracking-[-1.56px]">
                על הצלחה
              </span>
            </h1>
            <div className="mt-6 flex justify-start w-[calc(100%+100px)]" dir="rtl">
              <HeroRotatingTags items={HERO_TAGS} />
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

            {/* Mobile image — full width, no rounded corners, cropped from top */}
            <div className="relative w-screen -mx-4 overflow-hidden max-[990px]:block hidden"
                 style={{ aspectRatio: "16/9" }}>
              <Image
                src="/m-woman-vow.webp"
                alt="תמונת הירו: צוות VOW"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Desktop image — original style */}
            <div className="relative hidden min-[990px]:block w-full lg:max-w-[560px] overflow-hidden rounded-[22px] bg-white shadow-sm">
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