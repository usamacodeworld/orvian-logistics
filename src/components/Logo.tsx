import Link from "next/link";
import { clsx } from "clsx";
import { withBase } from "@/lib/paths";

type LogoProps = {
  /** "dark" = for dark backgrounds (white mark), "light" = for light backgrounds */
  tone?: "light" | "dark";
  /** "full" = mark + Orvian Group Logistic wordmark, "mark" = OG mark only */
  kind?: "full" | "mark";
  variant?: "light" | "dark";
  className?: string;
};

/** Brand logo cropped from the supplied Orvian Group artwork (public/brand/v2). */
export function Logo({ tone = "dark", kind = "full", className }: LogoProps) {
  const file = `${kind === "full" ? "logo" : "mark"}-${tone}.png`;
  const full = kind === "full";
  return (
    <Link
      href="/"
      className={clsx("relative z-20 inline-flex shrink-0 items-center", className)}
      aria-label="Orvian Group Logistics home"
    >
      <img
        src={withBase(`/brand/v2/${file}`)}
        alt="Orvian Group Logistic"
        width={full ? 993 : 380}
        height={full ? 424 : 194}
        className={clsx(
          "block w-auto object-contain",
          full ? "h-12 md:h-14" : "h-8 md:h-9"
        )}
        decoding="async"
      />
    </Link>
  );
}
