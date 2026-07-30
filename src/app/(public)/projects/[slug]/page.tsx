import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/data-access/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-zinc-500">{project.category}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a href={project.liveUrl} className="underline">
            Live Demo →
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="underline">
            GitHub →
          </a>
        )}
      </div>

      <Section title="Overview" content={project.overview} />
      <Section title="Problem" content={project.problem} />
      <Section title="Solution" content={project.solution} />

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-600">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <Section title="Lessons Learned" content={project.lessonsLearned} />
      <Section title="Future Improvements" content={project.futureImprovements} />
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-zinc-600">{content}</p>
    </section>
  );
}