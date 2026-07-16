const featuredSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

export function FeaturedSkills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {featuredSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}