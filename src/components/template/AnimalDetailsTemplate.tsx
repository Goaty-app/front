import { AnimalDetails, LogicBtn } from "@/components/Organismes";
import { Divider } from "@mui/material";
import { Containers } from "@/components/atoms";
import React from "react";
import { Animal } from "@/interface/animal.interface";

const AnimalDetailsTemplate: React.FC<{
  animal: Animal;
  className?: string;
}> = ({ animal, className }) => {
  return (
    <Containers.Simple className={`bg-layer-3 p-3 rounded-xl ${className}`}>
      <AnimalDetails.AnimalMainContent animal={animal} />
      <Divider sx={{ marginY: 3 }} />
      <LogicBtn.EditAnimal animal={undefined} />
    </Containers.Simple>
  );
};

export default AnimalDetailsTemplate;
