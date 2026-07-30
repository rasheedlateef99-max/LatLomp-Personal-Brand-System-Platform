export type ProjectStatus = "completed" | "in-progress" | "planned";

export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  lessonsLearned: string;
  futureImprovements: string;
};