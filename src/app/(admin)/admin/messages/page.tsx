import { ComingSoon } from "@/components/admin/ComingSoon";
import { Mail } from "lucide-react";

export default function AdminMessagesPage() {
  return (
    <ComingSoon
      icon={Mail}
      title="Contact Messages"
      description="View and manage messages submitted through your public Contact form."
    />
  );
}