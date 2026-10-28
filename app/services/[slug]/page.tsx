import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Package } from "lucide-react";
import { Icon } from "@/components/Icon";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.summary, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-20">
          <Link href="/services" className="text-sm text-slate-300 hover:text-white">← All services</Link>
          <div className="mt-6 flex size-14 items-center justify-center rounded-2xl bg-accent-500 text-slate-900">
            <Icon name={s.icon} className="size-7" />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold sm:text-5xl">{s.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">{s.summary}</p>
          <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-primary mt-8">
            Request a quote <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">{s.description}</p>
          <h2 className="mt-12 text-2xl font-bold">What&apos;s included</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {s.features.map((f) => (
              <li key={f} className="flex gap-3 rounded-xl border border-slate-200 p-4">
                <Check className="mt-0.5 size-5 shrink-0 text-accent-500" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl bg-slate-50 p-8 lg:sticky lg:top-24">
          <h2 className="flex items-center gap-2 text-lg font-bold"><Package className="size-5 text-brand-600" /> Deliverables</h2>
          <ul className="mt-4 space-y-3">
            {s.deliverables.map((d) => (
              <li key={d} className="flex gap-2 text-slate-700"><Check className="mt-0.5 size-4 shrink-0 text-brand-600" />{d}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-600">Available on Amazon, Walmart, eBay, Etsy, TikTok Shop, Noon, Daraz, Flipkart, Shopify and 30+ more channels.</p>
          <Link href="/contact" className="btn-primary mt-6 w-full">Talk to a specialist</Link>
        </aside>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold">Related services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg">
                <Icon name={o.icon} className="size-6 text-brand-600" />
                <h3 className="mt-4 font-bold">{o.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
