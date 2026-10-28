import type { Metadata } from "next";
import { Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { marketplaces, regions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketplaces We Manage",
  description: "Amazon, Walmart, eBay, Etsy, TikTok Shop, Noon, Daraz, Flipkart, Shopee, Lazada, Mercado Libre, Zalando and 40+ marketplaces worldwide.",
  alternates: { canonical: "/marketplaces" },
};

export default function MarketplacesPage() {
  return (
    <>
      <PageHero
        eyebrow="Marketplaces"
        title="40+ marketplaces. 30+ countries. One team."
        text="We know the rules, algorithms and logistics of each major marketplace — so you can expand into new regions with confidence."
      />
      <section className="container-x py-20">
        <div className="space-y-14">
          {regions.map((region) => {
            const list = marketplaces.filter((m) => m.region === region);
            if (!list.length) return null;
            return (
              <div key={region}>
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  <Globe2 className="size-6 text-brand-600" /> {region}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {list.map((m) => (
                    <div key={m.name} className="rounded-2xl border border-slate-200 p-5 transition hover:border-brand-300 hover:shadow-md">
                      <p className="text-lg font-bold">{m.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{m.countries}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-14 rounded-2xl bg-brand-50 p-6 text-center text-brand-900">
          Don&apos;t see your marketplace? We support many regional and niche platforms — just ask.
        </p>
      </section>
      <CTA />
    </>
  );
}
