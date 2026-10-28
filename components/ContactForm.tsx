"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("service") ?? (params.get("plan") ? `${params.get("plan")} plan` : "");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (data._honey) return setStatus("sent");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) return setStatus("sent");
    } catch {}
    // Delivery failed: fall back to the visitor's mail app so the lead isn't lost.
    const body = Object.entries(data).filter(([k]) => k !== "_honey").map(([k, v]) => `${k}: ${v}`).join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("New enquiry — " + (data.service || "General"))}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="py-16 text-center">
        <CheckCircle2 className="mx-auto size-14 text-emerald-500" />
        <h2 className="mt-4 text-2xl font-bold">Thank you!</h2>
        <p className="mt-2 text-slate-600">We&apos;ve received your enquiry and will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <h2 className="text-2xl font-bold sm:col-span-2">Request a free consultation</h2>
      <label className="grid gap-1.5 text-sm font-medium">
        Full name *
        <input name="name" required className="field" autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Email *
        <input name="email" type="email" required className="field" autoComplete="email" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Phone / WhatsApp
        <input name="phone" className="field" autoComplete="tel" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Company / brand
        <input name="company" className="field" autoComplete="organization" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Service needed
        <select name="service" defaultValue={preset} className="field">
          <option value="">Not sure yet</option>
          {preset && !services.some((s) => s.title === preset) && <option value={preset}>{preset}</option>}
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Monthly revenue
        <select name="revenue" className="field" defaultValue="">
          <option value="">Prefer not to say</option>
          <option>Just starting</option>
          <option>Under $10k</option>
          <option>$10k – $50k</option>
          <option>$50k – $250k</option>
          <option>$250k+</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
        Marketplaces you sell on (or want to)
        <input name="marketplaces" placeholder="e.g. Amazon US, Walmart, Noon" className="field" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
        Tell us about your project *
        <textarea name="message" required rows={5} className="field" />
      </label>
      {/* Honeypot for bots */}
      <input name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
          {status === "sending" ? "Sending…" : <>Send enquiry <Send className="size-4" /></>}
        </button>
      </div>
    </form>
  );
}
