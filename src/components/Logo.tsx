import Link from "next/link";
import { clsx } from "clsx";
import { withBase } from "@/lib/paths";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/** Exact brand mark from brand guide: public/brand/logo-mark-only.png */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx(
        "relative z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center",
        className
      )}
      aria-label="Orvian Group Logistics home"
    >
      <img
        src={withBase("/brand/logo-mark-only.png")}
        alt="Orvian Group Logistics"
        width={44}
        height={44}
        className="block h-9 w-9 object-contain sm:h-10 sm:w-10 md:h-11 md:w-11"
        style={{ width: 44, height: 44, minWidth: 36, minHeight: 36 }}
        decoding="async"
      />
    </Link>
  );
}
