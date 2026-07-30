import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";

const statusVariant: Record<Project["status"], "success" | "warning" | "neutral"> = {
  completed: "success",
  "in-progress": "warning",
  planned: "neutral",
};

const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <Badge variant={statusVariant[project.status]} pulse={project.status === "in-progress"}>
          {statusLabels[project.status]}
        </Badge>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-100 px-2.5 py-1 font-mono text-[11px] tracking-wide text-neutral-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-signal-cyan">
        View Details
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}