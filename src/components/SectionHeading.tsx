import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
  action?: { href: string; label: string };
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  dark,
  action,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12",
        className
      )}
    >
      <div className="section-head max-w-2xl">
        {eyebrow ? (
          <p className={clsx("eyebrow reveal", dark && "!text-gold")}>{eyebrow}</p>
        ) : null}
        <h2
          className={clsx(
            "font-display reveal text-[1.85rem] leading-[1.15] md:text-[2.35rem] lg:text-[2.6rem]",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={clsx(
              "lead reveal",
              dark ? "!text-white/65" : undefined
            )}
            style={{ ["--delay" as string]: "80ms" }}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className={clsx(
            "reveal group inline-flex shrink-0 items-center gap-2 text-[0.7rem] tracking-[0.16em] uppercase",
            dark ? "text-gold" : "text-ink"
          )}
          style={{ ["--delay" as string]: "120ms" }}
        >
          {action.label}
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
}
