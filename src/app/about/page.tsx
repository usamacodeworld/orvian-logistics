import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ContactCTA } from "@/components/ContactCTA";
import { stats } from "@/lib/content";
import { withBase } from "@/lib/paths";

export const metadata: Metadata = {
  title: "About",
  description:
    "Orvian Group Logistics is a technology-driven logistics partner built for absolute precision, cold-chain integrity, and discreet high-value freight.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        compact
        motion="about"
        title="Precision as a discipline."
        description="We operate at the intersection of advanced fleet technology and personal service, keeping sensitive cargo moving with the same standard across every corridor."
        secondaryCta={{ href: "/contact", label: "Speak with us" }}
      />

      <section className="section-y bg-paper">
        <div className="container-x grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <div className="section-head">
              <p className="eyebrow reveal">Who we are</p>
              <h2 className="font-display reveal text-[1.85rem] leading-[1.15] md:text-[2.35rem]">
                A modern logistics partner for commerce that cannot afford variance.
              </h2>
            </div>
            <div className="reveal mt-8 space-y-5 text-[0.98rem] leading-relaxed text-ink-soft/85 md:leading-[1.75]">
              <p>
                Orvian Group Logistics delivers end-to-end supply chain solutions
                tailored for businesses requiring absolute precision, reliability,
                and security. We integrate advanced fleet management, high-value
                asset handling, and dedicated freight operations so global and
                domestic commerce moves seamlessly.
              </p>
              <p>
                Rooted in operational discretion and rigorous compliance, Orvian
                combines bespoke customer care with flexible freight scheduling,
                whether navigating complex city centres or executing across
                international corridors.
              </p>
            </div>
          </div>

          <div className="reveal-scale relative min-h-[340px] overflow-hidden bg-ink lg:min-h-full">
            <Image
              src={withBase("/brand/operations.png")}
              alt="Orvian logistics operations"
              fill
              className="object-cover opacity-80 transition duration-[1.2s] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-xl leading-snug text-white md:text-2xl">
              An uncompromised gold standard in transport execution.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x section-stack">
          <div className="section-head max-w-3xl">
            <p className="eyebrow reveal">Cold chain at the core</p>
            <h2 className="font-display reveal text-[1.85rem] leading-[1.15] md:text-[2.35rem]">
              Premier temperature-controlled transportation.
            </h2>
          </div>

          <div className="equal-grid md:grid-cols-3">
            {[
              {
                title: "Dual-zone fleets",
                copy: "State-of-the-art refrigerated units and dual-zone climate control for goods that demand exact thermal thresholds.",
              },
              {
                title: "Live telemetry",
                copy: "Real-time monitoring and automated climate sensors maintain integrity from dispatch through final sign-off.",
              },
              {
                title: "Sensitive cargo",
                copy: "Pharmaceuticals, fine food products, and delicate luxury inventory, handled with uninterrupted cold-chain discipline.",
              },
            ].map((item, i) => (
              <article
                key={item.title}
                className="lift-card reveal-scale border-t border-gold/40 pt-6"
                style={{ ["--delay" as string]: `${i * 90}ms` }}
              >
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="card-body mt-3 text-sm leading-relaxed text-ink-soft/75">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>

          <div className="equal-grid grid-cols-2 border border-[var(--line)] p-8 md:grid-cols-4 md:p-10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal"
                style={{ ["--delay" as string]: `${i * 70}ms` }}
              >
                <p className="font-display text-3xl text-gold">{stat.value}</p>
                <p className="mt-2 text-[0.68rem] tracking-[0.16em] uppercase text-ink/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <Link href="/services" className="btn-ink">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
