import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data-access/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Featured Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/projects" className="text-sm font-medium underline">
          View all projects →
        </Link>
      </div>
    </section>
  );
}