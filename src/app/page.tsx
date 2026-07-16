import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedSkills } from "@/components/sections/FeaturedSkills";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <FeaturedSkills />
    </>
  );
}