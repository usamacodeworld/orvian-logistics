import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  HeroMotionBackground,
  HeroMotionDesktopPanels,
  HeroMotionMobileStrip,
} from "./HeroMotion";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  compact?: boolean;
  imageSrc?: string;
};

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const external =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Hero({
  eyebrow = "Orvian Group Logistics",
  title,
  description,
  primaryCta = { href: "/contact", label: "Begin an enquiry" },
  secondaryCta = { href: "/services", label: "Explore services" },
  compact = false,
  imageSrc = "/brand/operations.png",
}: Props) {
  return (
    <section
      className={`relative overflow-hidden grain hero-mesh text-white ${
        compact ? "min-h-[70vh]" : "min-h-[100svh]"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt="Orvian Group Logistics operations"
          fill
          priority
          className="hero-image object-cover opacity-[0.42]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-0% via-ink/92 via-45% to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/50" />
      </div>

      <HeroMotionBackground />
      <HeroMotionDesktopPanels />

      <div
        className={`container-x relative z-10 flex ${
          compact
            ? "min-h-[70vh] items-center py-28 sm:py-32"
            : "min-h-[100svh] items-center py-28 pb-16 sm:py-32 lg:pb-28"
        }`}
      >
        <div className="hero-copy w-full max-w-[38rem] lg:max-w-[40rem]">
          <p className="eyebrow hero-anim hero-anim-1 !text-gold">{eyebrow}</p>
          <h1 className="font-display hero-anim hero-anim-2 mt-4 text-[2.4rem] leading-[1.08] tracking-[0.01em] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.15rem]">
            {title}
          </h1>
          <p className="hero-anim hero-anim-3 mt-5 max-w-[34rem] text-[1rem] leading-[1.7] text-white/72 sm:mt-6 sm:text-[1.0625rem] md:text-lg md:leading-[1.7]">
            {description}
          </p>
          <div className="hero-anim hero-anim-4 mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <CtaLink
              href={primaryCta.href}
              className="btn-primary w-full justify-center sm:w-auto sm:min-w-[12.5rem]"
            >
              {primaryCta.label}
            </CtaLink>
            <CtaLink
              href={secondaryCta.href}
              className="btn-ghost w-full justify-center sm:w-auto sm:min-w-[12.5rem]"
            >
              {secondaryCta.label}
            </CtaLink>
          </div>

          <HeroMotionMobileStrip />
        </div>
      </div>

      {!compact ? (
        <a
          href="#about"
          className="scroll-cue absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.62rem] tracking-[0.24em] uppercase text-white/45 lg:flex"
        >
          Scroll
          <span className="scroll-cue-line block h-7 w-px bg-gold/80" />
          <ChevronDown className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </section>
  );
}
