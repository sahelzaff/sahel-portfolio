"use client";

import { useState } from "react";

import { ToolIcon } from "@/components/icons";
import type { ToolItem } from "@/lib/types";

type ToolsGridProps = {
  items: ToolItem[];
};

export function ToolsGrid({ items }: ToolsGridProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 3);

  return (
    <div>
      <div className="grid auto-rows-[minmax(9rem,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((tool, index) => {
          const mobileHidden = index > 2 && !expanded ? "max-sm:hidden" : "";
          const desktopSpan = [
            tool.tall ? "lg:row-span-2" : "",
            tool.wide ? "lg:col-span-2" : "",
            tool.featured ? "lg:col-span-2" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div
              key={tool.name}
              data-reveal="up"
              className={`border border-white/8 bg-ink/55 p-5 transition-all duration-200 hover:border-teal hover:shadow-[0_0_24px_rgba(0,229,204,0.08)] ${mobileHidden} ${desktopSpan}`}
            >
              <ToolIcon icon={tool.icon} className="h-10 w-10 text-teal/80 transition-colors duration-200" />
              <div className="mt-10 font-mono text-[0.82rem] uppercase tracking-[0.16em] text-paper">{tool.name}</div>
              <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-paper/45">{tool.category}</div>
            </div>
          );
        })}
      </div>

      {items.length > 3 ? (
        <div className="mt-5 sm:hidden">
          <button type="button" className="button-outline w-full" onClick={() => setExpanded((value) => !value)}>
            {expanded ? "See Less" : `See More (${items.length - visibleItems.length} More)`}
          </button>
        </div>
      ) : null}
    </div>
  );
}
