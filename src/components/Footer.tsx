import Link from "next/link";
import { Logo } from "./Logo";
import { site, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x section-y !pb-10">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              End-to-end supply chain solutions with absolute precision,
              reliability, and security—cold-chain excellence at the core.
            </p>
            <p className="mt-5 text-[0.68rem] tracking-[0.2em] uppercase text-gold">
              {site.values.join(" · ")}
            </p>
          </div>

          <div>
            <p className="eyebrow !text-white/45">Navigate</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-white/45">Contact</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/70">
              <li>
                <a href={site.phoneHref} className="hover:text-gold transition">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-gold transition">
                  {site.email}
                </a>
              </li>
              <li>{site.website}</li>
              <li>{site.base}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Orvian Group Logistics Ltd. All rights reserved.</p>
          <p className="tracking-[0.16em] uppercase">United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
