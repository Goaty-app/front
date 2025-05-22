'use client';

import React from 'react';
import {Containers, Typography } from '@/components/atoms';
import {Goat, Herd} from "@/interface/herd.interface";
import TableFilter from "@/components/molecules/AnimalTable/TableFilter";
import AnimalTable from "@/components/molecules/AnimalTable/AnimalTable";

interface Props {
    herds: Herd[];
    goats: Goat[];
    name: string;
    herd: string;
    onNameChange: (value: string) => void;
    onHerdChange: (value: string) => void;
}

const SearchAnimal: React.FC<Props> = ({ herds, goats, name, herd, onNameChange, onHerdChange }) => (
    <>
        <TableFilter
            name={name}
            herd={herd}
            herds={herds}
            onNameChangeAction={onNameChange}
            onHerdChangeAction={onHerdChange}
        />
        <Containers.Simple className="w-[80%] max-h-full overflow-y-auto">
            <AnimalTable goats={goats} />
        </Containers.Simple>
        {goats.length === 0 && (
            <Typography.Text>Aucune chèvre ne correspond à votre recherche.</Typography.Text>
        )}
    </>
);

export default SearchAnimal;