"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import AnimalSearchTemplate from "@/components/template/AnimalSearchTemplate";
import { SearchTable } from "@/components/Organismes";
import { Animal, mockAnimals } from "@/interface/animal.interface";
import { mockHerds } from "@/interface/herd.interface";

export default function SearchAnimalPage() {
  const searchParams = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");

  const allAnimals: Animal[] = mockAnimals;
  const [herd, setHerd] = useState("");

  const filteredAnimals = useMemo(() => {
    return allAnimals.filter((animal) => {
      const matchesName =
        name && animal.name !== null
          ? animal.name.toLowerCase().includes(name.toLowerCase())
          : true;
      const matchesHerd = herd ? animal.herd.id.toString() === herd : true;
      return matchesName && matchesHerd;
    });
  }, [name, herd, allAnimals]);

  return (
    <AnimalSearchTemplate>
      <SearchTable.SearchAnimal
        herds={mockHerds}
        animals={filteredAnimals} // si "goats" est le bon nom
        name={name}
        herd={herd}
        onNameChange={setName}
        onHerdChange={setHerd}
      />
    </AnimalSearchTemplate>
  );
}
