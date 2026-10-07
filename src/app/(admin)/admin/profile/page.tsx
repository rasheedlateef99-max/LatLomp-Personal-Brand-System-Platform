import { ComingSoon } from "@/components/admin/ComingSoon";
import { User } from "lucide-react";

export default function AdminProfilePage() {
  return (
    <ComingSoon
      icon={User}
      title="Profile Management"
      description="Edit your name, headline, bio, and social links directly from here — changes will update the public site instantly."
    />
  );
}