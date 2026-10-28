import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, Clock, Globe } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a free e-commerce consultation and account audit with AZ Ecom Solution.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's grow your e-commerce business"
        text="Tell us about your products and goals. A specialist will reply within one business day with next steps and a free audit."
      />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-3">
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
            { icon: Phone, label: "Phone", value: site.phone },
            { icon: Clock, label: "Hours", value: site.hours },
            { icon: Globe, label: "Location", value: site.address },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <c.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="font-semibold hover:text-brand-600">{c.value}</a>
                ) : (
                  <p className="font-semibold">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:col-span-2">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
