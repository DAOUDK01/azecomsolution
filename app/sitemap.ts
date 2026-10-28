import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/marketplaces", "/pricing", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p ? 0.8 : 1 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
