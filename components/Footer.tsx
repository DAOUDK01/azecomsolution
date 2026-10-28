import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-6">{site.tagline} Launch, manage and scale on 40+ marketplaces across 30+ countries.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/about">About us</Link></li>
            <li><Link className="hover:text-white" href="/marketplaces">Marketplaces</Link></li>
            <li><Link className="hover:text-white" href="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-white" href="/privacy">Privacy policy</Link></li>
            <li><Link className="hover:text-white" href="/terms">Terms of service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Mail className="size-4 shrink-0 text-accent-500" /><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0 text-accent-500" />{site.phone}</li>
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 text-accent-500" />{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Marketplace names are trademarks of their respective owners. We are an independent agency.</p>
        </div>
      </div>
    </footer>
  );
}
