import { ComingSoon } from "@/components/admin/ComingSoon";
import { FileText } from "lucide-react";

export default function AdminResumePage() {
  return (
    <ComingSoon
      icon={FileText}
      title="Resume Management"
      description="Upload a new resume PDF — it will immediately replace the public download."
    />
  );
}