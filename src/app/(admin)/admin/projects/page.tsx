import { ComingSoon } from "@/components/admin/ComingSoon";
import { FolderKanban } from "lucide-react";

export default function AdminProjectsPage() {
  return (
    <ComingSoon
      icon={FolderKanban}
      title="Project Management"
      description="Create, edit, and publish projects with images, tech stacks, and case study details."
    />
  );
}