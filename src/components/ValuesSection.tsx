import { site } from "@/lib/content";

const valueCopy = {
  Discretion:
    "The foundation of trust. What passes through Orvian stays with Orvian, cargo details, client identity, and corridor intelligence alike.",
  Precision:
    "The detail is never missed, the timing never approximate, the thermal threshold never variable. Precision is the minimum.",
  Elevation:
    "Every touchpoint, from first message to final sign-off, should itself feel elevated. Using Orvian is part of the standard.",
} as const;

export function ValuesSection() {
  return (
    <div id="values" className="scroll-mt-28">
      <div className="equal-grid gap-px bg-[var(--line)] md:grid-cols-3">
        {site.values.map((value, index) => (
          <article
            key={value}
            className="lift-card reveal-scale group bg-paper p-8 md:p-10"
            style={{ ["--delay" as string]: `${index * 100}ms` }}
          >
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold">
              0{index + 1}
            </p>
            <h3 className="font-display mt-5 text-2xl md:text-3xl">{value}</h3>
            <div className="line-rule mt-5 transition-[width] duration-500 group-hover:w-20" />
            <p className="card-body mt-5 text-sm leading-relaxed text-ink-soft/75">
              {valueCopy[value]}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
