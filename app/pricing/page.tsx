import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flexible monthly marketplace management plans and project-based pricing for sellers and brands of every size.",
  alternates: { canonical: "/pricing" },
};

const projects = [
  ["Seller account setup & verification", "From $149"],
  ["Listing optimisation (per listing)", "From $39"],
  ["A+ / Enhanced Brand Content", "From $99"],
  ["Product photography & infographics", "From $79"],
  ["Shopify store build", "From $699"],
  ["Account reinstatement / Plan of Action", "From $249"],
  ["Product research report", "From $199"],
  ["Full account audit", "Free with consultation"],
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple plans that grow with you"
        text="Month-to-month management plans or one-time projects. Every quote is tailored after a free consultation."
      />
      <section className="container-x py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${p.highlight ? "border-brand-600 shadow-2xl ring-2 ring-brand-600" : "border-slate-200"}`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-slate-900">Most popular</span>
              )}
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <p className="mt-6"><span className="font-display text-4xl font-extrabold">{p.price}</span><span className="text-slate-500">{p.period}</span></p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-slate-700"><Check className="mt-0.5 size-5 shrink-0 text-brand-600" />{f}</li>
                ))}
              </ul>
              <Link href={`/contact?plan=${p.name}`} className={p.highlight ? "btn-primary mt-8" : "btn-secondary mt-8 text-brand-700 hover:!bg-brand-50"}>
                Get started
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">Advertising spend, marketplace fees and freight are billed separately at cost.</p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <h2 className="text-center text-3xl font-extrabold">One-time projects</h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {projects.map(([name, price]) => (
              <div key={name} className="flex items-center justify-between gap-4 p-5">
                <span>{name}</span>
                <span className="shrink-0 font-semibold text-brand-700">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x max-w-4xl py-20">
        <h2 className="mb-8 text-center text-3xl font-extrabold">Frequently asked questions</h2>
        <FAQ />
      </section>
      <CTA />
    </>
  );
}
