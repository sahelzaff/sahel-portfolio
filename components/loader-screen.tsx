"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type LineType = "title" | "blank" | "online" | "cleared";

type BootLine = {
  text: string;
  type: LineType;
};

const bootSequence: BootLine[] = [
  { text: "◈  FLIGHT DECK v1.0  //  SAHEL ZAFFAR", type: "title" },
  { text: "", type: "blank" },
  { text: "SYS: ENDPOINT MANAGEMENT ........ ONLINE", type: "online" },
  { text: "SYS: AUTOMATION ENGINE ........... ONLINE", type: "online" },
  { text: "SYS: IDENTITY SERVICES ........... ONLINE", type: "online" },
  { text: "SYS: SECURITY BASELINE ........... ONLINE", type: "online" },
  { text: "", type: "blank" },
  { text: "▸  CLEARED FOR TAKEOFF", type: "cleared" },
];

const lineDelays = [0, 180, 380, 560, 720, 880, 1040, 1260];

export function LoaderScreen() {
  const [visible, setVisible] = useState(true);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    document.body.dataset.loaded = "false";

    const timers: number[] = [];

    lineDelays.forEach((delay, index) => {
      timers.push(window.setTimeout(() => setLineCount(index + 1), delay));
    });

    timers.push(
      window.setTimeout(() => {
        document.body.dataset.loaded = "true";
        setVisible(false);
      }, 2000),
    );

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      document.body.dataset.loaded = "true";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="loader-shell"
        >
          <div className="loader-content">
            {bootSequence.slice(0, lineCount).map((line, index) => (
              <div key={index} className={`loader-line loader-line-${line.type}`}>
                {line.text}
                {index === lineCount - 1 && line.type !== "blank" && (
                  <span className="blink-cursor ml-1">█</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
