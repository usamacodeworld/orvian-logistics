import Image from "next/image";
import { gallery } from "@/lib/photos";
import { withBase } from "@/lib/paths";

/** Endlessly scrolling photo strip. Pauses on hover. */
export function PhotoMarquee() {
  return (
    <div className="photo-marquee-wrap overflow-hidden">
      <div className="photo-marquee flex w-max gap-4 pr-4">
        {[...gallery, ...gallery].map((p, i) => (
          <figure
            key={`${p.src}-${i}`}
            className="relative h-60 w-[21rem] shrink-0 overflow-hidden bg-ink md:h-72 md:w-[26rem]"
            aria-hidden={i >= gallery.length}
          >
            <Image
              src={withBase(p.src)}
              alt={p.alt}
              fill
              unoptimized
              className="object-cover transition duration-700 hover:scale-105"
              sizes="26rem"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
