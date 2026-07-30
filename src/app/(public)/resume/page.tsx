import { Download } from "lucide-react";
import { getProfile } from "@/lib/data-access/profile";
import { getSkills } from "@/lib/data-access/skills";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function ResumePage() {
  const profile = getProfile();
  const skills = getSkills();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="flex flex-col items-center text-center">
        <Badge variant="info">Resume</Badge>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-slate">{profile.headline}</p>

        <div className="mt-8">
          <Button href={profile.resumeUrl} icon={Download}>
            Download PDF
          </Button>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-surface p-8 shadow-sm sm:p-10">
        <section>
          <h2 className="font-display text-lg font-semibold">Summary</h2>
          <p className="mt-3 leading-relaxed text-slate">{profile.shortBio}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-lg font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full bg-neutral-100 px-3 py-1.5 font-mono text-xs tracking-wide text-neutral-600"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-lg font-semibold">Contact</h2>
          <div className="mt-3 flex flex-col gap-1.5 text-sm text-slate">
            <a href={`mailto:${profile.email}`} className="hover:text-signal-cyan">
              {profile.email}
            </a>
            <a href={profile.socialLinks.github} className="hover:text-signal-cyan">
              {profile.socialLinks.github}
            </a>
            <a href={profile.socialLinks.linkedin} className="hover:text-signal-cyan">
              {profile.socialLinks.linkedin}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}