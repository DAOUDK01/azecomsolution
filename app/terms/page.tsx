import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <article className="container-x max-w-3xl space-y-5 py-20 text-slate-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900">
      <h1 className="text-4xl font-extrabold text-slate-900">Terms of Service</h1>
      <p className="text-sm text-slate-500">Last updated: October 2026</p>
      <p>By using {site.url} or engaging {site.name} for services, you agree to these terms.</p>
      <h2>Services</h2>
      <p>The scope, deliverables, fees and timelines of each engagement are defined in a written proposal or service agreement. In case of conflict, the signed agreement prevails over these terms.</p>
      <h2>Fees and payment</h2>
      <p>Management fees are billed in advance. Advertising spend, marketplace fees, freight and third-party costs are the client&apos;s responsibility unless agreed otherwise.</p>
      <h2>Results</h2>
      <p>Marketplace performance depends on many factors outside our control, including platform policies, competition and product quality. We do not guarantee specific sales, rankings or approval outcomes.</p>
      <h2>Account ownership</h2>
      <p>Clients retain ownership of all seller accounts, listings, brand assets and data. We act on your behalf and in line with each marketplace&apos;s policies.</p>
      <h2>Confidentiality</h2>
      <p>Both parties agree to keep non-public business information confidential.</p>
      <h2>Trademarks</h2>
      <p>Amazon, Walmart, eBay, Etsy, Shopify, TikTok and all other marketplace names are trademarks of their respective owners. {site.name} is an independent agency and is not affiliated with or endorsed by these companies.</p>
      <h2>Contact</h2>
      <p>Questions about these terms can be sent to {site.email}.</p>
    </article>
  );
}
