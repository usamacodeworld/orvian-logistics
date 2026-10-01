import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <div id="process" className="scroll-mt-28">
      <div className="equal-grid md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article
              key={step.id}
              className="lift-card reveal-scale border border-[var(--line)] bg-white p-7"
              style={{ ["--delay" as string]: `${index * 90}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-gold">{step.id}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] text-ink/55">
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </span>
              </div>
              <h3 className="font-display mt-8 text-lg leading-snug md:text-xl">
                {step.title}
              </h3>
              <p className="card-body mt-3 text-sm leading-relaxed text-ink-soft/75">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
