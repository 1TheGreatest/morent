import Profiles from "@/components/profiles";
import { MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import CatalogueCard from "@/components/ui/catalogue-card";

export default function Home() {
  return (
    <div className="flex  min-h-screen justify-center items-center">
      <div className="block">
        <Profiles />

        <Button variant="primary" size="label">
          <MailOpen size={18} />
          <p>Label</p>
          <MailOpen size={18} />
        </Button>
        <CatalogueCard />
      </div>
    </div>
  );
}
