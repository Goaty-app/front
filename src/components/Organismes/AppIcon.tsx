import React from "react";
import { Containers, Link } from "@/components/atoms";
import { Icons } from "@/components/molecules";

const AppIcon: React.FC = () => {
  return (
    <Containers.Simple className="text-xl font-semibold flex gap-4 items-center">
      <Icons.GoatIcon />
      <Link href="/" variant="primary">
        Goaty
      </Link>
    </Containers.Simple>
  );
};

export default AppIcon;
