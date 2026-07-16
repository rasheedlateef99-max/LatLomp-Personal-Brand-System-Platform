import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";

  const variantStyles =
    variant === "primary"
      ? "bg-black text-white hover:bg-zinc-800"
      : "border border-black text-black hover:bg-black hover:text-white";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </Link>
  );
}