"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    const subject = encodeURIComponent("Orvian Logistics enquiry");
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="reveal border border-[var(--line)] bg-white p-7 md:p-10">
      <p className="eyebrow">Enquiry</p>
      <h3 className="font-display mt-3 text-2xl tracking-wide">Send a brief</h3>
      <p className="mt-3 text-sm text-ink-soft/75">
        Opens your email client with the details below. For fastest response,
        WhatsApp is preferred.
      </p>

      {sent ? (
        <div className="mt-8 flex items-start gap-3 border border-gold/30 bg-gold/5 p-5 text-sm">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <p>
            Your email draft should be open. If nothing appeared, write to{" "}
            <a className="text-gold underline" href={site.emailHref}>
              {site.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-[0.68rem] tracking-[0.2em] uppercase text-ink/50">
            Full name
          </span>
          <input
            required
            name="name"
            className="mt-2 w-full border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none transition focus:border-gold"
          />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.68rem] tracking-[0.2em] uppercase text-ink/50">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
          </label>
          <label className="block">
            <span className="text-[0.68rem] tracking-[0.2em] uppercase text-ink/50">
              Telephone
            </span>
            <input
              name="phone"
              className="mt-2 w-full border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-[0.68rem] tracking-[0.2em] uppercase text-ink/50">
            Requirements
          </span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Cargo type, temperature needs, route, dates…"
            className="mt-2 w-full resize-y border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none transition focus:border-gold"
          />
        </label>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send enquiry
        </button>
      </form>
    </div>
  );
}
