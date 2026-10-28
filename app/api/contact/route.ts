import { NextResponse } from "next/server";

const FIELDS = ["name", "email", "phone", "company", "service", "revenue", "marketplaces", "message"] as const;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

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

  // Delivery uses Resend (https://resend.com). Set RESEND_API_KEY and CONTACT_TO_EMAIL in Vercel.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ error: "Email delivery not configured" }, { status: 503 });
  }

  const html = FIELDS.map((f) => `<p><b>${f}:</b> ${escape(data[f] || "—")}</p>`).join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "AZ Ecom Solution <onboarding@resend.dev>",
      to: [to],
      reply_to: data.email,
      subject: `New enquiry from ${data.name} — ${data.service || "General"}`,
      html,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
