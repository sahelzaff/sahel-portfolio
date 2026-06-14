"use client";

import { useState } from "react";

type ContactFormProps = {
  email: string;
};

type Fields = {
  name: string;
  from: string;
  company: string;
  message: string;
};

const EMPTY: Fields = { name: "", from: "", company: "", message: "" };

export function ContactForm({ email }: ContactFormProps) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function update(key: keyof Fields) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [key]: event.target.value }));
      if (error) {
        setError(null);
      }
    };
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = fields.name.trim();
    const from = fields.from.trim();
    const message = fields.message.trim();

    if (!name || !from || !message) {
      setError("Callsign, frequency, and transmission are all required.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(from)) {
      setError("That email doesn't look right — check the frequency.");
      return;
    }

    const subject = `Inbound — ${name}${fields.company.trim() ? ` (${fields.company.trim()})` : ""}`;
    const body = [
      `From: ${name} <${from}>`,
      fields.company.trim() ? `Company: ${fields.company.trim()}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const inputClass =
    "w-full border border-ink/22 bg-ink/[0.04] px-3.5 py-3 font-mono text-[0.82rem] text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:bg-ink/[0.07] focus:outline-none";
  const labelClass = "mb-1.5 block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink/55";

  return (
    <form onSubmit={onSubmit} noValidate className="contact-form w-full">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-ink/70">◈ // Open a Channel</span>
        <span className="h-px flex-1 bg-ink/20" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>Callsign / Name</label>
          <input id="cf-name" type="text" autoComplete="name" value={fields.name} onChange={update("name")} className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClass}>Company <span className="text-ink/35">(optional)</span></label>
          <input id="cf-company" type="text" autoComplete="organization" value={fields.company} onChange={update("company")} className={inputClass} placeholder="Acme Logistics" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-email" className={labelClass}>Frequency / Email</label>
        <input id="cf-email" type="email" autoComplete="email" value={fields.from} onChange={update("from")} className={inputClass} placeholder="you@company.com" />
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className={labelClass}>Transmission</label>
        <textarea id="cf-message" rows={4} value={fields.message} onChange={update("message")} className={`${inputClass} resize-none`} placeholder="The role, the team, what you're building…" />
      </div>

      {error ? (
        <p role="alert" className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink/80">⚠ {error}</p>
      ) : null}

      <button type="submit" className="button-dark mt-5 w-full justify-center sm:w-auto">
        {sent ? "↗ Opening Mail Client…" : "↗ Transmit Message"}
      </button>

      <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ink/45">
        Opens your mail client, pre-addressed to {email}.
      </p>
    </form>
  );
}
