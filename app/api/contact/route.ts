import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

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
  if (body._honey) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(FIELDS.map((f) => [f, String(body[f] ?? "").slice(0, 5000).trim()]));
  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Name, a valid email and a message are required." }, { status: 400 });
  }

  // Sent through the Namecheap Private Email mailbox. Set SMTP_PASSWORD in Vercel.
  const user = process.env.SMTP_USER || site.email;
  const pass = process.env.SMTP_PASSWORD;
  if (!pass) return NextResponse.json({ error: "Email delivery not configured" }, { status: 503 });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const rows = FIELDS.map(
    (f) => `<tr><td style="padding:6px 12px;font-weight:600;text-transform:capitalize">${f}</td><td style="padding:6px 12px">${escape(data[f] || "—").replace(/\n/g, "<br>")}</td></tr>`,
  ).join("");

  try {
    await transporter.sendMail({
      from: `"${site.name} Website" <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || site.email,
      replyTo: `"${data.name.replace(/"/g, "")}" <${data.email}>`,
      subject: `New enquiry from ${data.name} — ${data.service || "General"}`,
      text: FIELDS.map((f) => `${f}: ${data[f] || "—"}`).join("\n"),
      html: `<table style="border-collapse:collapse;font-family:sans-serif">${rows}</table>`,
    });
  } catch (err) {
    console.error("Contact email failed", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
