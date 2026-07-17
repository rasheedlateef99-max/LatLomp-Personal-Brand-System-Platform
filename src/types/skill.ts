export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Programming Languages"
  | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
};