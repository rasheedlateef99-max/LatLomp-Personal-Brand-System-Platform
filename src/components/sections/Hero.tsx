import { getProfile } from "@/lib/data-access/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const profile = getProfile();

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center sm:py-24">
      <p className="text-sm font-medium text-zinc-500">{profile.headline}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg">
        {profile.shortBio}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/projects">View Projects</Button>
        <Button href={profile.resumeUrl} variant="secondary">
          Download Resume
        </Button>
        <Button href="/contact">Hire Me</Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </section>
  );
}