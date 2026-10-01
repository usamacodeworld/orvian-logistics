import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx("group inline-flex shrink-0 items-center", className)}
      aria-label="Orvian Group Logistics home"
    >
      <Image
        src="/brand/logo-mark-only.png"
        alt="Orvian Group Logistics"
        width={56}
        height={56}
        className="h-9 w-9 object-contain sm:h-10 sm:w-10 md:h-11 md:w-11"
        priority
      />
    </Link>
  );
}
