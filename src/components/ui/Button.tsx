import Link from "next/link";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-ink text-white hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
    secondary:
      "border border-border bg-surface text-ink hover:border-signal-cyan hover:text-signal-cyan hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-ink hover:text-signal-cyan",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
      {Icon && (
        <Icon
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}