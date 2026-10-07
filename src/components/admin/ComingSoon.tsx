import { LucideIcon, Construction } from "lucide-react";

export function ComingSoon({
  title,
  description,
  icon: Icon = Construction,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 py-20 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100">
        <Icon size={24} className="text-signal-cyan" />
      </div>
      <h2 className="mt-5 font-display text-xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-slate">{description}</p>
      <span className="mt-5 rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs tracking-wide text-neutral-600">
        Coming Soon
      </span>
    </div>
  );
}