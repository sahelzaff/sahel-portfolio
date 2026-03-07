"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type ScriptSequence = {
  id: string;
  lines: string[];
};

const scripts: ScriptSequence[] = [
  {
    id: "compliance",
    lines: [
      "PS C:\\Users\\Sahel> Get-ADUser -Filter * | Measure-Object",
      "PS C:\\Users\\Sahel> # Checking device compliance via Intune Graph API...",
      "PS C:\\Users\\Sahel> .\\scripts\\Get-IntuneDeviceStatus.ps1",
      "  [✓] Devices checked   : 487",
      "  [✓] Compliant         : 461",
      "  [✗] Non-compliant     : 26",
      "  [→] Report exported to: C:\\Reports\\compliance_2026-03.csv",
      "",
      "PS C:\\Users\\Sahel> Invoke-AutopilotSync -TenantID $env:TENANT",
      "  Syncing profiles... Done.",
      "  Devices registered: 12 new",
      "",
      "PS C:\\Users\\Sahel> █",
    ],
  },
  {
    id: "audit",
    lines: [
      "PS C:\\Users\\Sahel> python .\\audit\\asset_audit.py --fleet windows",
      "  Loading CIM sessions... Done.",
      "  Collecting hardware inventory from 512 nodes",
      "  [✓] BIOS serials validated : 504",
      "  [✓] BitLocker status polled: 512",
      "  [→] Delta report written to: C:\\Reports\\asset-delta.xlsx",
      "",
      "PS C:\\Users\\Sahel> Compare-Object $baseline $latest",
      "  Drift detected on 8 devices",
      "",
      "PS C:\\Users\\Sahel> █",
    ],
  },
  {
    id: "onboarding",
    lines: [
      "PS C:\\Users\\Sahel> .\\scripts\\New-StarterProvision.ps1 -Ticket HR-2048",
      "  Creating AD account... Done.",
      "  Assigning Entra groups... Done.",
      "  Pushing Intune baseline profile...",
      "  [✓] Device policy assigned : ENG-LAPTOP-STD",
      "  [✓] Apps queued            : 14",
      "  [→] Welcome package sent to: new.starter@company.com",
      "",
      "PS C:\\Users\\Sahel> Start-Sleep -Seconds 1",
      "PS C:\\Users\\Sahel> █",
    ],
  },
];

const typingRange = { min: 30, max: 50 };
const lineGapMs = 220;
const holdMs = 2000;

export function HeroTerminal() {
  const reducedMotion = useReducedMotion();
  const [scriptIndex, setScriptIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const timeoutRef = useRef<number | null>(null);

  const activeScript = useMemo(() => scripts[scriptIndex], [scriptIndex]);

  useEffect(() => {
    const fullText = activeScript.lines.join("\n");
    let charIndex = 0;

    const clearTimer = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };

    if (reducedMotion) {
      setTypedText(fullText);
      timeoutRef.current = window.setTimeout(() => {
        setScriptIndex((current) => (current + 1) % scripts.length);
      }, holdMs + 800);
      return clearTimer;
    }

    setTypedText("");

    const tick = () => {
      if (charIndex < fullText.length) {
        charIndex += 1;
        setTypedText(fullText.slice(0, charIndex));

        const currentChar = fullText[charIndex - 1];
        const delay =
          currentChar === "\n"
            ? lineGapMs
            : Math.floor(Math.random() * (typingRange.max - typingRange.min + 1)) + typingRange.min;

        timeoutRef.current = window.setTimeout(tick, delay);
        return;
      }

      timeoutRef.current = window.setTimeout(() => {
        setScriptIndex((current) => (current + 1) % scripts.length);
      }, holdMs);
    };

    timeoutRef.current = window.setTimeout(tick, 350);
    return clearTimer;
  }, [activeScript, reducedMotion]);

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, x: 80 }}
      animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
      transition={reducedMotion ? undefined : { duration: 0.85, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="terminal-shell relative mx-auto hidden w-full max-w-[38rem] md:block lg:mr-[-4rem] lg:mt-6"
    >
      <div className="terminal-badge terminal-badge-top">
        <span className="terminal-badge-dot bg-teal" />
        487 Endpoints Online
      </div>
      <div className="terminal-badge terminal-badge-bottom">
        <span className="terminal-badge-dot bg-amber" />
        Last Run: 2 Min Ago
      </div>
      <div className="terminal-dash terminal-dash-top" />
      <div className="terminal-dash terminal-dash-bottom" />

      <div className="terminal-glow pointer-events-none absolute inset-x-[8%] bottom-[-3rem] h-24 rounded-full bg-teal/18 blur-3xl" />

      <div className="terminal-float relative overflow-hidden border border-teal/30 bg-black/40 shadow-[0_24px_80px_rgba(0,229,204,0.12)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-teal/15 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-teal/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/65" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/85" />
          </div>
          <div className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-paper/62">
            Windows PowerShell — sahel@DESKTOP-ENG
            <span className="blink-cursor ml-1">|</span>
          </div>
          <div className="w-10" />
        </div>

        <div className="min-h-[27rem] bg-[linear-gradient(to_bottom,rgba(0,229,204,0.03),transparent_25%)] px-5 py-5 font-mono text-[0.8rem] leading-7 text-paper/82">
          <pre className="whitespace-pre-wrap break-words">{typedText}</pre>
        </div>
      </div>
    </motion.div>
  );
}
