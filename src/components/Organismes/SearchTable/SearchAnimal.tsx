"use client";

import React from "react";
import { Containers, Typography } from "@/components/atoms";
import { Herd } from "@/interface/herd.interface";
import TableFilter from "@/components/molecules/AnimalTable/TableFilter";
import AnimalTable from "@/components/molecules/AnimalTable/AnimalTable";
import { Animal } from "@/interface/animal.interface";

interface Props {
  herds: Herd[];
  animals: Animal[];
  name: string;
  herd: string;
  onNameChange: (value: string) => void;
  onHerdChange: (value: string) => void;
}

const SearchAnimal: React.FC<Props> = ({
  herds,
  animals,
  name,
  herd,
  onNameChange,
  onHerdChange,
}) => (
  <>
    <TableFilter
      name={name}
      herd={herd}
      herds={herds}
      onNameChangeAction={onNameChange}
      onHerdChangeAction={onHerdChange}
    />
    <Containers.Simple className="w-[80%] max-h-full overflow-y-auto">
      <AnimalTable animals={animals} />
    </Containers.Simple>
    {animals.length === 0 && (
      <Typography.Text>
        Aucune chèvre ne correspond à votre recherche.
      </Typography.Text>
    )}
  </>
);

export default SearchAnimal;
