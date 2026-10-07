import { ComingSoon } from "@/components/admin/ComingSoon";
import { Image as ImageIcon } from "lucide-react";

export default function AdminMediaPage() {
  return (
    <ComingSoon
      icon={ImageIcon}
      title="Media Library"
      description="Manage every uploaded file — project screenshots, resume PDFs, and more — in one place."
    />
  );
}