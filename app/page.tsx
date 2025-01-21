import Profiles from "@/components/profiles";
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const iconSizes = {
    sm: 12, // Small
    md: 14, // Medium
    lg: 18, // Large
  };
  return (
    <div className="flex  min-h-screen justify-center items-center">
      <div className="block">
        <Profiles />

        <Button variant="primary" size="label">
          <MailOpen size={18} />
          <p>Label</p>
          <MailOpen size={18} />
        </Button>
      </div>
    </div>
  );
}
