"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { NavItem } from "@/lib/types";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="relative z-[90] flex h-11 w-11 items-center justify-center border border-teal/25 bg-ink/80 backdrop-blur-md"
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
            className="fixed inset-0 z-[80] bg-ink/95 px-6 pb-8 pt-28 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[0.95rem] uppercase tracking-[0.28em] text-paper transition-colors hover:text-teal"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
