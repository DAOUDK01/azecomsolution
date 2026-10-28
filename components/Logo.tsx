export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#1d5ef1" />
        <path d="M9 29 17.5 11h3L29 29h-4.2l-1.7-4H14.9l-1.7 4H9Zm7.4-7.6h5.2L19 15.2l-2.6 6.2Z" fill="#fff" />
        <circle cx="31" cy="11" r="3.5" fill="#ff9a1a" />
      </svg>
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        AZ Ecom<span className="text-accent-500"> Solution</span>
      </span>
    </span>
  );
}
