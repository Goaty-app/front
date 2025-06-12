import { Containers, Typography } from "@/components/atoms";
import React from "react";
import { Animal } from "@/interface/animal.interface";
import { Labeled } from "@/components/molecules";
const AnimalMainContent: React.FC<{ animal: Animal }> = ({ animal }) => {
  return (
    <Containers.Simple className="flex flex-col gap-4">
      <Typography.Title> Fiche Animal </Typography.Title>
      <Labeled.LabeledText
        label="Nom"
        value={animal.name !== null ? animal.name : "Larry"}
      />
      <Labeled.LabeledText label="Identifiant" value={animal.idNumber} />
      <Labeled.LabeledText label="Status" value={animal.status} />
      <Labeled.LabeledText label="Catégorie" value={animal.animalType.name} />
      <Labeled.LabeledText
        label="Pays d'origine"
        value={animal.originCountry}
      />
      <Labeled.LabeledText label="Date de naissance" value={animal.birth} />
      <Labeled.LabeledText label="Troupeau" value={animal.herd.name} />
      <Labeled.LabeledText label="Genre" value={animal.gender} />
      <Labeled.LabeledTextArea
        readOnly
        className="flex flex-col"
        label="Notes"
        value={animal.behaviorNotes !== null ? animal.behaviorNotes : ""}
      />
    </Containers.Simple>
  );
};

export default AnimalMainContent;
