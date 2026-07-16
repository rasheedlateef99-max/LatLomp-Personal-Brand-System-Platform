import { getProfile } from "@/lib/data-access/profile";

export function Footer() {
  const profile = getProfile();

  return (
    <footer className="border-t border-zinc-200 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-sm text-zinc-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href={profile.socialLinks.github} className="hover:text-zinc-900">
            GitHub
          </a>
          <a href={profile.socialLinks.linkedin} className="hover:text-zinc-900">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}