import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Global E-commerce & Marketplace Agency`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ecommerce agency", "Amazon agency", "Amazon account management", "Walmart seller services",
    "eBay store management", "Etsy SEO", "Shopify development", "TikTok Shop agency",
    "Noon seller", "Daraz seller", "Flipkart seller", "Amazon PPC", "FBA", "marketplace management",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Global E-commerce & Marketplace Agency`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0b1533" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "Worldwide",
  serviceType: "E-commerce and online marketplace management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
