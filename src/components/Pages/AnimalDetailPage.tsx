import {Containers, Typography} from "@/components/atoms";
import Template from "@/components/template";
import {Animal} from "@/interface/herd.interface";
import React from "react";


const AnimalDetailPage: React.FC<{ animal: Animal }> = ({animal}) => {
    return (
        <Containers.Simple className="p-4">
            <Typography.Title className="text-center mb-6">
                Détails : {animal.name}
            </Typography.Title>
            <Containers.Simple className="flex flex-row gap-6 justify-center items-start w-full">
                {/* TODO: Remove Cast as Animal */}
                <Template.AnimalDetailsTemplate animal={animal as Animal} className="w-1/2" />
                <Template.HealthcareTemplate className="w-1/2"/>
            </Containers.Simple>
        </Containers.Simple>
    )
}

export default AnimalDetailPage;