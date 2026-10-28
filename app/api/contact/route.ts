import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const FIELDS = ["name", "email", "phone", "company", "service", "revenue", "marketplaces", "message"] as const;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions.
  if (body.website) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(FIELDS.map((f) => [f, String(body[f] ?? "").slice(0, 5000).trim()]));
  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Name, a valid email and a message are required." }, { status: 400 });
  }

  // Delivered by FormSubmit (https://formsubmit.co) — no account or key needed.
  // CONTACT_TO_EMAIL can override the inbox; defaults to the public site email.
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: site.url,
      Referer: `${site.url}/contact`,
    },
    body: JSON.stringify({
      ...data,
      _subject: `New enquiry from ${data.name} — ${data.service || "General"}`,
      _replyto: data.email,
      _template: "table",
      _captcha: "false",
    }),
  }).catch(() => null);

  const result = res && (await res.json().catch(() => null));
  if (!res?.ok || (result && String(result.success) !== "true")) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
