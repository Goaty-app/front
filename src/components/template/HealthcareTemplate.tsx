import { Containers, Typography } from "@/components/atoms";
import { Divider } from "@mui/material";
import { LogicBtn } from "@/components/molecules";
import React from "react";

const HealthcareTemplate: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Containers.Simple
      className={`bg-layer-3 p-3 rounded-xl h-full ${className}`}
    >
      <Typography.Title className="mb-2">Dossier Médical</Typography.Title>
      <Containers.Simple className="text-sm text-muted">
        TODO: Affichage du dossier médical
      </Containers.Simple>
      <Divider sx={{ marginY: 3 }} />
      <LogicBtn.AddHealthcare />
    </Containers.Simple>
  );
};

export default HealthcareTemplate;
