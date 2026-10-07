import { ComingSoon } from "@/components/admin/ComingSoon";
import { Sparkles } from "lucide-react";

export default function AdminSkillsPage() {
  return (
    <ComingSoon
      icon={Sparkles}
      title="Skills Management"
      description="Add, reorder, and categorize the skills shown on your public Skills page."
    />
  );
}