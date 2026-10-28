import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Icon } from "@/components/Icon";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { audiences, marketplaces, process, services, stats } from "@/lib/site";

const why = [
  { title: "True A–Z coverage", text: "Sourcing, setup, listings, creative, ads, logistics and compliance under one roof." },
  { title: "Every marketplace", text: "40+ marketplaces and D2C platforms across North America, Europe, GCC, Asia, LATAM and Africa." },
  { title: "Specialist teams", text: "PPC analysts, SEO copywriters, designers and compliance experts — not generalists." },
  { title: "Transparent results", text: "Clear KPIs, weekly reporting and full ownership of your accounts and data." },
];

export default function Home() {
  const names = marketplaces.map((m) => m.name);
  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-200">
              <span className="size-2 rounded-full bg-accent-500" /> Global e-commerce agency
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Sell on <span className="text-accent-400">every marketplace</span>, everywhere in the world.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              From Amazon and Walmart to Noon, Daraz, Flipkart and TikTok Shop — AZ Ecom Solution launches,
              manages and scales your brand across 40+ marketplaces. Everything e-commerce, A to Z.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get a free consultation <ArrowRight className="size-4" /></Link>
              <Link href="/services" className="btn-secondary text-white">View our services</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {["No long lock-in contracts", "Dedicated account manager", "You own your accounts"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-accent-400" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-200">Multi-channel performance</p>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Live sync</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { n: "Amazon", w: "92%" },
                  { n: "Walmart", w: "74%" },
                  { n: "TikTok Shop", w: "66%" },
                  { n: "Noon", w: "58%" },
                  { n: "Shopify D2C", w: "81%" },
                ].map((r) => (
                  <div key={r.n}>
                    <div className="flex justify-between text-xs text-slate-300"><span>{r.n}</span><span>{r.w}</span></div>
                    <div className="mt-1.5 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-brand-400 to-accent-500" style={{ width: r.w }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[["Listings", "Optimised"], ["Ads", "Profitable"], ["Stock", "In sync"]].map(([a, b]) => (
                  <div key={a} className="rounded-xl bg-white/5 p-3">
                    <p className="text-xs text-slate-400">{a}</p>
                    <p className="mt-1 text-sm font-semibold">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Marketplace marquee */}
        <div className="relative border-t border-white/10 py-6">
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-10 whitespace-nowrap text-lg font-semibold text-slate-400">
              {[...names, ...names].map((n, i) => <span key={i}>{n}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-brand-600">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Every e-commerce service you need, in one agency</h2>
            <p className="mt-4 text-slate-600">Whether you&apos;re launching your first product or running a global brand, we cover each step of the journey.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={s.icon} className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Why AZ Ecom Solution</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">One partner from A to Z — wherever you want to sell</h2>
            <p className="mt-4 text-slate-600">
              Most brands juggle a freelancer for listings, another for ads and a third for logistics. We bring every
              specialist together with one strategy, one point of contact and one set of numbers.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-600">
              More about us <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 p-6">
                <CheckCircle2 className="size-6 text-accent-500" />
                <h3 className="mt-4 font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-950 py-20 text-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">How it works</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">From first call to global growth</h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="font-display text-3xl font-extrabold text-accent-400">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Who we help</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Built for sellers at every stage, on every continent</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <div key={a.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent-500/15 font-bold text-accent-600">{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-slate-600">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-extrabold">Questions sellers ask us</h2>
            <p className="mt-4 text-slate-600">Can&apos;t find your answer? <Link href="/contact" className="font-semibold text-brand-600">Talk to our team</Link>.</p>
          </div>
          <div className="lg:col-span-2"><FAQ /></div>
        </div>
      </section>

      <CTA />
    </>
  );
}
