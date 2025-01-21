import Profiles from "@/components/profiles";
import Button from "@/components/ui/nnnnn";
import { AddCircle } from "iconsax-react";
// import { ReactComponent as Icon } from "./icon.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="block">
        <Profiles />

        <Button
          label="Click Me"
          variant="primary"
          size="medium"
          iconLeft={<AddCircle size={14} color="#FF8A65" />}
          // onClick={() => console.log("Button Clicked")}
        />
        <AddCircle size="32" color="#FF8A65" />
      </div>
    </div>
  );
}
