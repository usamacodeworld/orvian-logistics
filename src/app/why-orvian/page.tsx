import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSection } from "@/components/ProcessSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ContactCTA } from "@/components/ContactCTA";
import { whyPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Orvian",
  description:
    "Discretion, 24/7 availability, dedicated contact, cold-chain integrity, and bespoke freight execution. Why clients choose Orvian Group Logistics.",
};

export default function WhyOrvianPage() {
  return (
    <>
      <Hero
        compact
        motion="why"
        title="Rare, on the client's terms."
        description="There is no shortage of logistics services. What is rare is depth of cold-chain capability paired with the discretion genuine high-value freight demands."
        primaryCta={{ href: "/contact", label: "Begin an enquiry" }}
        secondaryCta={{ href: "#process", label: "See our process" }}
      />

      <section className="section-y bg-paper">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="Why Orvian"
            title="The difference is the standard."
            description="Technology, compliance, and personal accountability, held together so your freight never feels like a commodity."
          />
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {whyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.id}
                  className="service-row reveal grid items-center gap-5 py-8 md:grid-cols-[4.5rem_1fr_3rem] md:gap-10 md:py-9"
                  style={{ ["--delay" as string]: `${index * 70}ms` }}
                >
                  <span className="font-display text-xl text-gold md:text-2xl">
                    {point.id}
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-xl">{point.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft/75 md:text-[0.95rem]">
                      {point.description}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] text-ink/45 md:justify-self-end">
                    <Icon className="h-4 w-4" strokeWidth={1.4} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps. One standard."
            description="Engaging Orvian is designed to feel as effortless as the execution that follows."
          />
          <ProcessSection />
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="Our Values"
            title="Three words. The whole standard."
            description="Not marketing language. The standard against which every interaction is measured."
          />
          <ValuesSection />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
