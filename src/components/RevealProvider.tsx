"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-scale, .promise-band";
    const nodes = Array.from(document.querySelectorAll(selector));

    nodes.forEach((node) => node.classList.remove("is-visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    requestAnimationFrame(() => {
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          node.classList.add("is-visible");
        } else {
          observer.observe(node);
        }
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
