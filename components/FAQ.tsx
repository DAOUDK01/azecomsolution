import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
            {f.q}
            <span className="text-2xl text-brand-600 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
