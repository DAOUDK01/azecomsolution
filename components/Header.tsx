"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/marketplaces", label: "Marketplaces" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="AZ Ecom Solution home"><Logo /></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition hover:text-brand-600 ${pathname.startsWith(n.href) ? "text-brand-600" : "text-slate-700"}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-5 !py-2 text-sm">Free consultation</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-3 font-medium text-slate-800">{n.label}</Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2">Free consultation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
