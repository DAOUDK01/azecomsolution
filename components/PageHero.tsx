export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="hero-bg relative overflow-hidden text-white">
      <div className="grid-pattern absolute inset-0" aria-hidden="true" />
      <div className="container-x relative py-20 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">{text}</p>
      </div>
    </section>
  );
}
