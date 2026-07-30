"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold"
          onClick={() => setIsOpen(false)}
        >
          LatLomp
        </Link>

        <ul className="hidden gap-8 text-sm font-medium sm:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-signal-cyan" : "text-ink hover:text-signal-cyan"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[17px] left-0 h-0.5 w-full bg-signal-cyan" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border transition-all duration-300 sm:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2.5 transition-colors ${
                  pathname === link.href
                    ? "bg-neutral-100 text-signal-cyan"
                    : "hover:bg-neutral-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}