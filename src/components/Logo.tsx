import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const src =
    variant === "light"
      ? "/brand/logo-nav-light.png"
      : "/brand/logo-nav-dark.png";

  return (
    <Link
      href="/"
      className={clsx("group inline-flex shrink-0 items-center", className)}
      aria-label="Orvian Group Logistics home"
    >
      <Image
        src={src}
        alt="Orvian Group Logistics Ltd"
        width={280}
        height={40}
        className="h-9 w-auto max-w-[210px] object-contain object-left sm:h-10 sm:max-w-[240px] md:h-11 md:max-w-[280px] lg:h-12 lg:max-w-[300px]"
        priority
      />
    </Link>
  );
}
