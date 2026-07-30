import { getProfile } from "@/lib/data-access/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const profile = getProfile();

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, var(--color-signal-cyan), var(--color-signal-violet))",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <div className="animate-fade-in-up">
          <Badge variant="success" pulse>
            Available for new opportunities
          </Badge>
        </div>

        <h1 className="animate-fade-in-up mt-6 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <p
          className="animate-fade-in-up mt-3 bg-gradient-to-r from-signal-cyan to-signal-violet bg-clip-text text-lg font-medium text-transparent sm:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.headline}
        </p>

        <p
          className="animate-fade-in-up mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.shortBio}
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          <Button href="/projects" icon={ArrowRight}>
            View Projects
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" icon={Download}>
            Download Resume
          </Button>
          <Button href="/contact" variant="ghost">
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
}