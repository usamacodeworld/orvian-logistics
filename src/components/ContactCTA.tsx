import Link from "next/link";
import { site } from "@/lib/content";

export function ContactCTA({
  title = "Speak with us directly.",
  description = "Orvian Group Logistics is available around the clock. We welcome enquiries by WhatsApp, telephone or email. First conversations before any arrangement is made.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      <div className="container-x relative section-y">
        <div className="section-head max-w-2xl">
          <p className="eyebrow reveal">Contact</p>
          <h2 className="font-display reveal text-[1.85rem] leading-[1.15] md:text-[2.6rem] lg:text-[3rem]">
            {title}
          </h2>
          <p
            className="lead reveal !text-white/65"
            style={{ ["--delay" as string]: "80ms" }}
          >
            {description}
          </p>
        </div>

        <div
          className="reveal mt-10 flex flex-wrap gap-3"
          style={{ ["--delay" as string]: "140ms" }}
        >
          <a
            href={site.whatsapp}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
          <a href={site.phoneHref} className="btn-ghost">
            Call {site.phone}
          </a>
          <a href={site.emailHref} className="btn-ghost">
            Email {site.email}
          </a>
        </div>

        <div
          className="reveal mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4"
          style={{ ["--delay" as string]: "180ms" }}
        >
          {[
            ["WhatsApp & Telephone", site.phone],
            ["Email", site.email],
            ["Website", site.website],
            ["Base", site.base],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40">
                {label}
              </p>
              <p className="mt-2 text-sm leading-snug text-white/85">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="text-[0.7rem] tracking-[0.16em] uppercase text-gold link-underline"
          >
            Open the contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
