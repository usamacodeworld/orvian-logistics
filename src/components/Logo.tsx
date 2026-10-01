import Link from "next/link";
import { clsx } from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/** Exact brand mark from Orvian Logistics Brand Guide (icon only). */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx("group inline-flex shrink-0 items-center", className)}
      aria-label="Orvian Group Logistics home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
        aria-hidden="true"
      >
        <path fill="#CB802D" d="M6 22L46 8V46H16L6 22Z" />
        <path fill="#CB802D" d="M54 8L94 22L84 46H54V8Z" />
        <path fill="#CB802D" d="M16 54H46V92L6 78L16 54Z" />
        <path fill="#CB802D" d="M54 54H84L94 78L54 92V54Z" />
      </svg>
    </Link>
  );
}
