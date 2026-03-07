"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { ProjectItem } from "@/lib/types";

type ProjectListProps = {
  items: ProjectItem[];
};

export function ProjectList({ items }: ProjectListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 border-t border-white/8 sm:mt-14">
      {items.map((project, index) => {
        const open = openIndex === index;

        return (
          <div key={project.number} className="project-row border-b border-white/8">
            <button
              type="button"
              className="group relative grid w-full grid-cols-[auto_1fr] items-start gap-3 overflow-hidden px-0 py-5 text-left transition-[padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-4 sm:gap-4 sm:py-7 md:grid-cols-[auto_1fr_auto] md:hover:pl-6"
              onClick={() => setOpenIndex((current) => (current === index ? null : index))}
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-teal transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              <span className="relative z-10 mt-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-teal transition-colors duration-300 group-hover:text-ink sm:text-[0.8rem] sm:tracking-[0.25em]">
                [{project.number}]
              </span>
              <div className="relative z-10">
                <div className="font-display text-[clamp(1.2rem,4vw,2rem)] leading-none text-paper transition-colors duration-300 group-hover:text-ink">
                  {project.title}
                </div>
                <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:text-ink/75 sm:mt-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
                  {project.tags.join(" · ")}
                </div>
              </div>
              <span className="relative z-10 hidden text-2xl leading-none text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink md:block">
                ↗
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-5 px-0 pb-6 pl-8 pr-0 text-[0.95rem] leading-7 text-paper/72 sm:pb-7 sm:pl-11 md:grid-cols-3 md:gap-8 md:pl-[5.5rem] md:text-[0.98rem] md:leading-8">
                    <div>
                      <div className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal">Problem</div>
                      <p>{project.detail.problem}</p>
                    </div>
                    <div>
                      <div className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-teal">What I Built</div>
                      <p>{project.detail.build}</p>
                    </div>
                    <div>
                      <div className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-amber">Outcome</div>
                      <p>{project.detail.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
