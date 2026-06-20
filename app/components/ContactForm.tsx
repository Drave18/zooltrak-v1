"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="hard-field p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-signal">
          ✓ Filed
        </p>
        <h3 className="font-display text-3xl mt-2 leading-tight">
          Brief received. We answer within 1 business day.
        </h3>
        <p className="mt-3 text-sm text-ink-muted">
          Your message has been logged to project ZLT-INQUIRY. A partner will
          reply from a real address — not a no-reply alias.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Name" name="name" placeholder="Full name" required />
      <Field label="Company" name="company" placeholder="Operating entity" required />
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@firm.com"
        required
      />
      <Field label="Role" name="role" placeholder="Founder / VP / Operator" />
      <div className="md:col-span-2 hard-field p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted mb-2">
          Engagement type
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Software Development",
            "AI & Automation",
            "Growth Marketing",
            "Audit / Recovery",
            "Multiple / Not sure",
          ].map((t) => (
            <label
              key={t}
              className="font-mono text-[10px] uppercase tracking-widest2 px-3 py-1.5 border-2 border-ink cursor-pointer hover:bg-[rgba(0,200,83,0.12)] has-[:checked]:bg-signal has-[:checked]:text-ink"
            >
              <input type="checkbox" name="type" value={t} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 hard-field p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted mb-2">
          Brief
        </p>
        <textarea
          name="brief"
          required
          rows={5}
          placeholder="What are you building, and what does success look like at 90 / 180 / 365 days?"
          className="w-full bg-transparent outline-none resize-none font-sans text-sm placeholder:text-ink-muted leading-relaxed"
        />
      </div>
      <div className="md:col-span-2 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
          NDA available on request.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="cta-signal bg-signal text-ink border-2 border-ink px-6 py-3 font-mono text-xs uppercase tracking-widest2 disabled:opacity-60"
        >
          {loading ? "Transmitting…" : "Transmit brief →"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="hard-field block p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted mb-2">
        {label}
        {required && <span className="text-signal"> *</span>}
      </p>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none font-sans text-sm placeholder:text-ink-muted"
      />
    </label>
  );
}
