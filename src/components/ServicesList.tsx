import { services } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesList({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {items.map((service, index) => {
        const Icon = service.icon;
        return (
          <article
            key={service.id}
            className="service-row reveal group grid items-center gap-5 py-8 md:grid-cols-[4.5rem_3rem_1fr_auto] md:gap-8 md:py-9"
            style={{ ["--delay" as string]: `${index * 70}ms` }}
          >
            <span className="font-display text-xl text-gold md:text-2xl">
              {service.id}
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center border border-[var(--line)] text-gold transition duration-300 group-hover:border-gold group-hover:bg-gold/5">
              <Icon className="h-5 w-5" strokeWidth={1.4} />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-lg leading-snug md:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft/75 md:text-[0.95rem] md:leading-relaxed">
                {service.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 self-start text-[0.68rem] tracking-[0.16em] uppercase text-ink/45 transition duration-300 group-hover:text-gold md:self-center"
            >
              Enquire
              <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
