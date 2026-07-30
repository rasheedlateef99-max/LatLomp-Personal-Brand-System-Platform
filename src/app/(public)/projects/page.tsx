import { getProjects } from "@/lib/data-access/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 text-zinc-600">
        A selection of things I&apos;ve built.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}