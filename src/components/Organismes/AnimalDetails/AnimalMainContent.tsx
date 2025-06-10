import {Containers, Typography} from "@/components/atoms";
import { LabeledText } from "@/components/molecules";
import React from "react";
import {MockAnimal} from "@/interface/herd.interface";

// TODO: Adapt to Interface

const AnimalMainContent: React.FC<MockAnimal> = (animal) => {
    return (
        <Containers.Simple className="flex flex-col gap-4">
            <Typography.Title> Fiche Animal </Typography.Title>
            <LabeledText label="Nom" value={animal.name}/>
        </Containers.Simple>
    )
}

export default AnimalMainContent;

