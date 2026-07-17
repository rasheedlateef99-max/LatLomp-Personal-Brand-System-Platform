import { getSkills } from "@/lib/data-access/skills";
import { SkillCategory } from "@/types/skill";

const categoryOrder: SkillCategory[] = [
  "Programming Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export default function SkillsPage() {
  const skills = getSkills();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h1>

      <div className="mt-10 space-y-10">
        {categoryOrder.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <section key={category}>
              <h2 className="text-xl font-semibold">{category}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}