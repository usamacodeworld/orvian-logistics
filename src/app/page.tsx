import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesList } from "@/components/ServicesList";
import { ProcessSection } from "@/components/ProcessSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ContactCTA } from "@/components/ContactCTA";
import { stats, whyPoints } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Commerce moves. We hold the line."
        description="End-to-end supply chain solutions tailored for businesses that require absolute precision, reliability, and security. Cold-chain excellence at the core, available around the clock."
      />

      <section id="about" className="scroll-mt-24 section-y bg-paper">
        <div className="container-x">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col">
              <div className="section-head">
                <p className="eyebrow reveal">About Orvian</p>
                <h2 className="font-display reveal text-[1.85rem] leading-[1.15] md:text-[2.35rem]">
                  Founded on a single conviction.
                </h2>
              </div>
              <div className="mt-10 grid flex-1 grid-cols-2 gap-x-6 gap-y-8 content-start">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="stat-cell reveal border-t border-[var(--line)] pt-5"
                    style={{ ["--delay" as string]: `${i * 80}ms` }}
                  >
                    <p className="font-display text-3xl text-gold md:text-[2.5rem]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[0.68rem] tracking-[0.16em] uppercase text-ink/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-left flex flex-col justify-between gap-6 text-[0.98rem] leading-relaxed text-ink-soft/85 md:text-base md:leading-[1.75]">
              <div className="space-y-5">
                <p>
                  Orvian Group Logistics delivers end-to-end supply chain solutions
                  for businesses that demand absolute precision, reliability, and
                  security. As a modern, technology-driven logistics partner, we
                  integrate advanced fleet management, high-value asset handling,
                  and dedicated freight operations to keep global and domestic
                  commerce moving seamlessly.
                </p>
                <p>
                  At our core is premier temperature-controlled transportation, refrigerated units, dual-zone climate fleets, and real-time
                  telemetry that protect pharmaceuticals, fine foods, and delicate
                  luxury inventory from dispatch to final sign-off.
                </p>
                <blockquote className="border-l-2 border-gold py-1 pl-5 font-display text-xl leading-snug text-ink md:text-[1.45rem]">
                  Orvian is not a booking platform. Not a commodity carrier. We are
                  the trusted intermediary between your cargo and a network that
                  rewards those who know how to move it.
                </blockquote>
                <p className="text-[0.72rem] tracking-[0.14em] uppercase text-ink/50">
                  Every consignment is treated as the only consignment that matters.
                </p>
              </div>
              <div>
                <Link href="/about" className="btn-ink">
                  Read our story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promise-band relative overflow-hidden bg-ink text-white section-y">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/brand/operations.png"
            alt=""
            fill
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/85" />
        </div>
        <div className="container-x relative">
          <div className="section-head max-w-3xl">
            <p className="eyebrow reveal">Our Promise</p>
            <h2 className="font-display reveal text-[1.85rem] leading-[1.15] md:text-[2.6rem] lg:text-[3rem]">
              We hold every detail, so your supply chain moves without limits.
            </h2>
            <p
              className="lead reveal !text-white/65"
              style={{ ["--delay" as string]: "90ms" }}
            >
              From city centres to international corridors, Orvian anticipates,
              arranges, and delivers. Rooted in operational discretion and rigorous
              compliance, we combine bespoke customer care with flexible freight
              scheduling: an uncompromised gold standard in transport execution.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="Our Services"
            title="Built around your freight, never off the shelf."
            description="Each service is delivered to the same standard: precise, monitored, and unhurried. We do not sell packages. We execute your movement."
            action={{ href: "/services", label: "All services" }}
          />
          <ServicesList limit={4} />
          <div className="reveal flex flex-col gap-5 border border-gold/35 bg-gold/[0.04] px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <div className="max-w-xl">
              <p className="font-display text-xl md:text-2xl">Anything else</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/75 md:text-[0.95rem]">
                If the corridor can deliver it under controlled conditions, so can
                we.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 self-start sm:self-center">
              Ask Orvian
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-[var(--line)] bg-white">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="Why Orvian"
            title="Rare, on the client's terms."
            description="There is no shortage of logistics providers. What is rare is one with cold-chain depth, operational discretion, and a standard that genuine high-value freight demands."
            action={{ href: "/why-orvian", label: "Why choose us" }}
          />
          <div className="equal-grid md:grid-cols-3">
            {whyPoints.slice(0, 3).map((point, index) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.id}
                  className="lift-card reveal-scale border border-[var(--line)] p-7"
                  style={{ ["--delay" as string]: `${index * 90}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl text-gold">{point.id}</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] text-ink/45">
                      <Icon className="h-4 w-4" strokeWidth={1.4} />
                    </span>
                  </div>
                  <h3 className="font-display mt-8 text-lg leading-snug md:text-xl">
                    {point.title}
                  </h3>
                  <p className="card-body mt-3 text-sm leading-relaxed text-ink-soft/75">
                    {point.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps. One standard."
            description="Engaging Orvian is designed to feel as controlled as the cold chain that follows."
          />
          <ProcessSection />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="Our Values"
            title="Three words. The whole standard."
            description="Not marketing language. The measure against which every transit is judged."
          />
          <ValuesSection />
        </div>
      </section>

      <div className="overflow-hidden border-y border-[var(--line)] bg-ink py-3.5 text-white/55">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-[0.68rem] tracking-[0.28em] uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10 px-5">
              {[
                "Temperature-Controlled",
                "High-Value Freight",
                "Real-Time Telemetry",
                "UK & International",
                "Discretion",
                "Precision",
                "Elevation",
              ].map((item) => (
                <span key={`${i}-${item}`} className="inline-flex items-center gap-10">
                  {item}
                  <span className="text-gold">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ContactCTA />
    </>
  );
}
