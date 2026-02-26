import Image from "next/image"

export type PortfolioGridImage = {
  src: string
  alt: string
}

export function PortfolioGrid({ images }: { images: PortfolioGridImage[] }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 xl:gap-10 gap-6  ">
      {images.map((img) => (
        <div
          key={img.src}
          className="group relative overflow-hidden rounded-1xl  shadow-[0_1px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              className="object-cover transition-all duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1280px) 33vw, 50vw"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

