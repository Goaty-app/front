import { Containers, Typography } from "@/components/atoms";
import React from "react";
import { Animal } from "@/interface/animal.interface";
import { Template } from "@/components/template";

const AnimalDetailPage: React.FC<{ animal: Animal }> = ({ animal }) => {
  return (
    <Containers.Simple className="p-4">
      <Typography.Title className="text-center mb-6">
        Détails : {animal.name}
      </Typography.Title>
      <Containers.Simple className="flex flex-row gap-6 justify-center items-start w-full">
        <Template.AnimalDetailsTemplate animal={animal} className="w-1/2" />
        <Template.HealthcareTemplate className="w-1/2" />
      </Containers.Simple>
    </Containers.Simple>
  );
};

export default AnimalDetailPage;
