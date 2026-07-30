import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "latlomp-personal-brand-platform",
    title: "LatLomp Personal Brand Platform",
    description:
      "A personal brand platform built with Next.js, TypeScript, and Tailwind CSS — this very site.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Application",
    status: "in-progress",
    liveUrl: "https://latlomp.vercel.app",
    githubUrl: "https://github.com/rasheedlateef99-max/LatLomp-Personal-Brand-System-Platform",
    featured: true,
    overview:
      "A modular platform starting as a portfolio MVP and evolving into a full content management system.",
    problem:
      "Needed a professional, scalable online presence to showcase projects and attract job/freelance opportunities.",
    solution:
      "Built a Next.js monolith with a layered architecture, enabling the site to grow from static content to a database-driven CMS without a rewrite.",
    features: [
      "Responsive design across all devices",
      "Typed, reusable component architecture",
      "SEO-friendly page structure",
    ],
    lessonsLearned:
      "Learned how App Router, Server Components, and a data-access layer combine to keep a growing codebase maintainable.",
    futureImprovements:
      "Add admin dashboard, blog, testimonials, and database-backed content management.",
  },
];