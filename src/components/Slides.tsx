"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { withBase } from "@/lib/paths";

/** Crossfading, always-rotating background photos. */
export function Slides({
  images,
  interval = 6000,
  className = "",
  priority = false,
}: {
  images: { src: string; alt?: string }[];
  interval?: number;
  className?: string;
  priority?: boolean;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % images.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <>
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`slide absolute inset-0 ${i === active ? "is-active" : ""}`}
          aria-hidden={i !== active}
        >
          <Image
            src={withBase(img.src)}
            alt={img.alt ?? ""}
            fill
            priority={priority && i === 0}
            unoptimized
            className={`object-cover ${className}`}
            sizes="100vw"
          />
        </div>
      ))}
    </>
  );
}
