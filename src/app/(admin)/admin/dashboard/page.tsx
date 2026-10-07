import Link from "next/link";
import {
  FolderKanban,
  Sparkles,
  Mail,
  User,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { AdminCard } from "@/components/admin/AdminCard";

async function getStats() {
  const [projectCount, skillCount, messageCount, unreadCount] =
    await Promise.all([
      prisma.project.count(),
      prisma.skill.count(),
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ where: { read: false } }),
    ]);

  return { projectCount, skillCount, messageCount, unreadCount };
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  const statCards = [
    {
      label: "Projects",
      value: stats.projectCount,
      icon: FolderKanban,
      href: "/admin/projects",
    },
    {
      label: "Skills",
      value: stats.skillCount,
      icon: Sparkles,
      href: "/admin/skills",
    },
    {
      label: "Messages",
      value: stats.messageCount,
      sublabel: stats.unreadCount > 0 ? `${stats.unreadCount} unread` : undefined,
      icon: Mail,
      href: "/admin/messages",
    },
  ];

  const quickActions = [
    { label: "Add Project", href: "/admin/projects", icon: Plus },
    { label: "Edit Profile", href: "/admin/profile", icon: User },
    { label: "View Messages", href: "/admin/messages", icon: Mail },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-slate">
          Welcome back — here&apos;s what&apos;s happening with LatLomp.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.label} href={stat.href}>
              <AdminCard className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100">
                    <Icon size={18} className="text-signal-cyan" />
                  </div>
                  <ArrowUpRight size={16} className="text-neutral-400" />
                </div>
                <p className="mt-4 font-display text-3xl font-semibold">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate">{stat.label}</p>
                {stat.sublabel && (
                  <span className="mt-2 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 font-mono text-[11px] text-warning">
                    {stat.sublabel}
                  </span>
                )}
              </AdminCard>
            </Link>
          );
        })}
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold">Quick Actions</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} href={action.href}>
                <AdminCard className="flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">{action.label}</span>
                </AdminCard>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}