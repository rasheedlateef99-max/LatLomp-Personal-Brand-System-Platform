import Link from "next/link";

const featuredProjects = [
  {
    title: "LatLomp Personal Brand Platform",
    description:
      "A personal brand platform built with Next.js, TypeScript, and Tailwind CSS — this very site.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Short description of a second featured project goes here.",
    tech: ["React", "Node.js"],
  },
];

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Featured Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-zinc-200 p-6"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
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