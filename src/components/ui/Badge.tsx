type BadgeVariant = "neutral" | "success" | "warning" | "info";

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-neutral-100 text-neutral-600",
  success: "bg-green-50 text-success",
  warning: "bg-amber-50 text-warning",
  info: "bg-cyan-50 text-signal-cyan",
};

export function Badge({
  children,
  variant = "neutral",
  pulse = false,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  pulse?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-medium tracking-wide ${variantStyles[variant]}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-pulse-dot absolute h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}