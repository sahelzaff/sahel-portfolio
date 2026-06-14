"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { contactInfo } from "@/lib/content";
import type { NavItem } from "@/lib/types";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  // Close on Escape + lock background scroll while the drawer is open.
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const cvHref = contactInfo.cvHref ?? `mailto:${contactInfo.email}?subject=CV%20Request`;
  const cvLabel = contactInfo.cvHref ? "↓ Download CV" : "✉ Request CV";

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="relative z-[90] flex h-11 w-11 items-center justify-center border border-teal/22 bg-ink/80 backdrop-blur-md"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Menu</span>
        <span className={`absolute h-px w-5 bg-teal transition-transform ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`} />
        <span className={`absolute h-px w-5 bg-teal transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
        <span className={`absolute h-px w-5 bg-teal transition-transform ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-ink/97 px-6 pb-10 pt-28 backdrop-blur-xl"
          >
            <div className="mb-8 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-teal/40">
              {"◈ Flight Deck // Navigation"}
            </div>

            <nav className="flex flex-col gap-6">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[1.05rem] uppercase tracking-[0.28em] text-paper transition-colors hover:text-teal"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <a
                href={cvHref}
                className="button-solid w-full"
                {...(contactInfo.cvHref ? { download: "Sahel-Resume-2026.pdf", target: "_blank", rel: "noreferrer" } : {})}
                onClick={() => setOpen(false)}
              >
                {cvLabel}
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="button-outline w-full" onClick={() => setOpen(false)}>
                  in LinkedIn
                </a>
                <a href={contactInfo.github} target="_blank" rel="noreferrer" className="button-outline w-full" onClick={() => setOpen(false)}>
                  {"◆ GitHub"}
                </a>
              </div>
              <div className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-paper/35">
                {"19.0°N · 73.1°E · New Panvel, IN"}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
