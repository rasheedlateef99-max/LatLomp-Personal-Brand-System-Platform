import { ComingSoon } from "@/components/admin/ComingSoon";
import { Settings } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <ComingSoon
      icon={Settings}
      title="Site Settings"
      description="Configure site-wide preferences, banners, and future platform options."
    />
  );
}