"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-4 md:h-[5rem]">
        <Logo variant="light" />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[0.72rem] tracking-[0.14em] uppercase text-white/80 transition hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </Link>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[160px] border border-white/10 bg-ink p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-[0.72rem] tracking-[0.16em] uppercase text-white/75 transition hover:bg-white/5 hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.72rem] tracking-[0.14em] uppercase text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="hidden btn-primary lg:inline-flex !py-2.5 !px-5"
          >
            Enquire
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "lg:hidden overflow-hidden border-t border-white/10 bg-ink transition-[max-height] duration-500",
          open ? "max-h-[80vh]" : "max-h-0 border-t-0"
        )}
      >
        <div className="container-x flex flex-col gap-1 py-6">
          {nav.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-sm tracking-[0.18em] uppercase text-white"
                    onClick={() => setWhyOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      className={clsx(
                        "h-4 w-4 transition",
                        whyOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {whyOpen ? (
                    <div className="mb-2 ml-3 border-l border-white/10 pl-3">
                      <Link
                        href={item.href}
                        className="block py-2 text-xs tracking-[0.16em] uppercase text-white/70"
                        onClick={() => setOpen(false)}
                      >
                        Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-xs tracking-[0.16em] uppercase text-white/70"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 text-sm tracking-[0.18em] uppercase text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}
