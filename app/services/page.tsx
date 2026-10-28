import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "E-commerce Services",
  description: "Marketplace account management, store setup, product sourcing, listing SEO, PPC, creative, Shopify development, logistics, compliance and global expansion.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything e-commerce, from A to Z"
        text="Twelve specialist service lines that cover the full life of an online brand — pick one, or let us run the whole operation."
      />
      <section className="container-x py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} className="flex flex-col rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon name={s.icon} className="size-6" />
                </div>
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>
              <p className="mt-4 text-slate-600">{s.description}</p>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                {s.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-accent-500" />{f}</li>
                ))}
              </ul>
              <Link href={`/services/${s.slug}`} className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-600">
                Service details <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
