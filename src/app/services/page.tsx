import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesList } from "@/components/ServicesList";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Temperature-controlled transport, fleet management, high-value asset handling, telemetry, and dedicated freight across UK and international corridors.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        compact
        title="Built around you, never off the shelf."
        description="Each service is delivered with the same standard: precise, personal, and monitored. We do not offer packages. We offer your logistics plan."
        primaryCta={{ href: "/contact", label: "Request a brief" }}
        secondaryCta={{ href: "/why-orvian", label: "Why Orvian" }}
      />

      <section className="section-y bg-paper">
        <div className="container-x section-stack">
          <SectionHeading
            eyebrow="Capabilities"
            title="Specialised logistics. One gold standard."
            description="From dual-zone cold chain to discreet high-value handling, every capability is integrated into a single accountable operation."
          />
          <ServicesList />

          <div className="reveal grid gap-8 border border-[var(--line)] bg-white p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-12 md:p-10">
            <div>
              <p className="eyebrow">Flagship</p>
              <h3 className="font-display mt-4 text-2xl md:text-[1.75rem]">
                Temperature-controlled excellence
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft/75 md:text-[0.95rem]">
                Utilising state-of-the-art refrigerated units and dual-zone
                climate-controlled fleets, Orvian ensures uninterrupted cold-chain
                delivery of sensitive goods. Each transit is monitored by real-time
                telemetry and automated climate sensors.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 border-t border-[var(--line)] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-sm leading-relaxed text-ink-soft/70">
                Pharmaceuticals · Fine foods · Luxury inventory
              </p>
              <Link href="/contact" className="btn-primary w-fit">
                Brief our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Tell us what must move."
        description="Share cargo profile, temperature band, corridor and timing. We will respond with a clear path to execution."
      />
    </>
  );
}
