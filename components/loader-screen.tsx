"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "> initialising sahel.exe...",
  "> loading systems [████████████] 100%",
  "> ready.",
];

export function LoaderScreen() {
  const [visible, setVisible] = useState(true);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    document.body.dataset.loaded = "false";

    const lineTimers = bootLines.map((_, index) =>
      window.setTimeout(() => {
        setLineCount(index + 1);
      }, 220 + index * 320),
    );

    const doneTimer = window.setTimeout(() => {
      document.body.dataset.loaded = "true";
      setVisible(false);
    }, 1550);

    return () => {
      lineTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(doneTimer);
      document.body.dataset.loaded = "true";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink"
        >
          <div className="w-full max-w-[38rem] px-6 font-mono text-[0.92rem] uppercase tracking-[0.18em] text-teal sm:text-base">
            {bootLines.slice(0, lineCount).map((line) => (
              <div key={line} className="mb-4">
                {line}
              </div>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
