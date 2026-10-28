import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <article className="container-x max-w-3xl space-y-5 py-20 text-slate-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900">
      <h1 className="text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p className="text-sm text-slate-500">Last updated: October 2026</p>
      <p>{site.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what information we collect through {site.url} and how we use it.</p>
      <h2>Information we collect</h2>
      <p>When you submit our contact form we collect the details you provide, such as your name, email, phone number, company and project information. We also collect basic, anonymous usage data (such as pages visited) to improve the website.</p>
      <h2>How we use information</h2>
      <p>We use your information only to respond to enquiries, deliver our services, and send updates you have agreed to receive. We never sell your personal data.</p>
      <h2>Client account data</h2>
      <p>When we manage marketplace accounts on your behalf, access is used solely to perform the agreed services and is protected with industry-standard security practices. You retain full ownership of your accounts and data.</p>
      <h2>Sharing</h2>
      <p>We share data only with service providers needed to operate our business (for example, email and hosting providers), or when required by law.</p>
      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a className="text-brand-600 underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent to {site.email}.</p>
    </article>
  );
}
