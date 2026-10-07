"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  User,
  FolderKanban,
  Sparkles,
  FileText,
  Mail,
  Image as ImageIcon,
  Settings,
  x,
  Menu,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Profile", href: "/admin/profile", icon: User },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Skills", href: "/admin/skills", icon: Sparkles },
  { label: "Resume", href: "/admin/resume", icon: FileText },
  { label: "Contact Messages", href: "/admin/messages", icon: Mail },
  { label: "Media Library", href: "/admin/media", icon: ImageIcon },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const SidebarContent = (
    <>
      <div className="flex items-center gap-2 px-6 py-5">
        <span className="font-display text-lg font-semibold">LatLomp</span>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-[10px] tracking-wide text-neutral-600">
          Admin
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-ink text-white"
                  : "text-slate hover:bg-neutral-100 hover:text-ink"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate transition-colors hover:bg-neutral-100 hover:text-error"
        >
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border bg-surface sm:flex">
        {SidebarContent}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 sm:hidden ${drawerOpen ? "" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setDrawerOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-64 flex-col bg-surface transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {SidebarContent}
        </aside>
      </div>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border bg-surface/80 px-6 py-4 backdrop-blur-md">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex h-9 w-9 items-center justify-center sm:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <div className="hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-xs font-medium text-white">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  );
}