import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { site } from "@/lib/content";
import { MessageCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Orvian Group Logistics by WhatsApp, telephone or email. Available around the clock from London, United Kingdom.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        title="Speak with us directly."
        description="Orvian Group Logistics is available around the clock. First-time clients are invited to speak with a member of our team before any arrangement is made."
        primaryCta={{ href: site.whatsapp, label: "Message on WhatsApp" }}
        secondaryCta={{ href: site.phoneHref, label: `Call ${site.phone}` }}
      />

      <section className="section-y bg-paper">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="section-head">
              <p className="eyebrow reveal">Direct lines</p>
              <h2 className="font-display reveal text-[1.85rem] leading-[1.15] md:text-[2.35rem]">
                Reach Orvian without a queue.
              </h2>
              <p className="lead reveal" style={{ ["--delay" as string]: "80ms" }}>
                Share your dates, cargo profile, temperature requirements and
                corridors. No form is required to begin—message, call, or email.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: site.phone,
                  href: site.whatsapp,
                },
                {
                  icon: Phone,
                  label: "Telephone",
                  value: site.phone,
                  href: site.phoneHref,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: site.email,
                  href: site.emailHref,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="lift-card reveal flex items-center gap-4 border border-[var(--line)] bg-white px-5 py-4"
                    style={{ ["--delay" as string]: `${i * 80}ms` }}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center border border-[var(--line)] text-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </span>
                    <span>
                      <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-ink/45">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm text-ink">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <dl className="reveal mt-10 grid gap-5 border-t border-[var(--line)] pt-8 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] tracking-[0.18em] uppercase text-ink/45">
                  Website
                </dt>
                <dd className="mt-1.5">{site.website}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.18em] uppercase text-ink/45">
                  Base
                </dt>
                <dd className="mt-1.5">{site.base}</dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
