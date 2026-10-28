import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Globe, BarChart3, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "AZ Ecom Solution is a remote-first e-commerce agency helping sellers and brands win on marketplaces worldwide.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Results first", text: "We measure ourselves by your revenue, profit and account health — not by hours logged." },
  { icon: Eye, title: "Radical transparency", text: "Clear reporting, honest advice and full ownership of your accounts and data." },
  { icon: HeartHandshake, title: "Long-term partnership", text: "We act as an extension of your team and grow with you channel by channel." },
];

const teams = [
  { icon: Users, title: "Account managers", text: "Your single point of contact who coordinates every specialist." },
  { icon: BarChart3, title: "PPC & analytics", text: "Advertising analysts focused on ACoS, TACoS and profitable growth." },
  { icon: Globe, title: "Global operations", text: "Sourcing, logistics, compliance and localisation for every region." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We help brands sell everywhere, from A to Z"
        text="AZ Ecom Solution was founded on a simple idea: sellers shouldn't need five agencies to succeed online. We bring every e-commerce discipline into one accountable team."
      />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="mt-4 text-3xl font-extrabold">Built by sellers, for sellers</h2>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>
              Our team started out running our own marketplace stores. We learned first-hand how hard it is to keep listings ranked,
              ads profitable, stock in the right warehouse and accounts compliant — across multiple countries at once.
            </p>
            <p>
              Today we put that experience to work for brands, manufacturers, wholesalers and first-time sellers around the world. From
              product sourcing in Asia to selling in the US, UK, EU, GCC and beyond, we handle the full journey.
            </p>
            <p>Our mission: make global e-commerce simple, profitable and accessible for every business.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-brand-950 p-8 text-white">
              <p className="font-display text-4xl font-extrabold text-accent-400">{s.value}</p>
              <p className="mt-2 text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <h2 className="text-center text-3xl font-extrabold">What we stand for</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-8">
                <v.icon className="size-8 text-brand-600" />
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="text-center text-3xl font-extrabold">The specialists behind your growth</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teams.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 p-8 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                <t.icon className="size-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-slate-600">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
