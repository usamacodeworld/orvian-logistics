import Link from "next/link";
import { clsx } from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/** Inline brand mark — no external asset path (works on GitHub Pages). */
const MARK_SRC =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#CB802D" d="M8 20L48 6V48H18Z"/><path fill="#CB802D" d="M52 6L92 20L82 48H52Z"/><path fill="#CB802D" d="M18 52H48V94L8 80Z"/><path fill="#CB802D" d="M52 52H82L92 80L52 94Z"/></svg>`
  );

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
        src={MARK_SRC}
        alt="Orvian Group Logistics"
        width={44}
        height={44}
        className="block h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
        style={{ width: 44, height: 44, minWidth: 36, minHeight: 36 }}
        decoding="async"
      />
    </Link>
  );
}
