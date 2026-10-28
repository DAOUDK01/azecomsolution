import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="container-x py-20">
      <div className="hero-bg relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12">
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to sell everywhere your customers shop?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Book a free 30-minute consultation. We&apos;ll review your products and accounts and show you exactly where the growth is.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Get a free audit <ArrowRight className="size-4" /></Link>
            <Link href="/services" className="btn-secondary text-white">Explore services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
