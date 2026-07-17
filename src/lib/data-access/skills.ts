import { skills } from "@/data/skills";
import { Skill } from "@/types/skill";

export function getSkills(): Skill[] {
  return skills;
}