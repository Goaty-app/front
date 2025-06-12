"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import AnimalSearchTemplate from "@/components/template/AnimalSearchTemplate";
import { SearchTable } from "@/components/Organismes";
import { Animal } from "@/interface/animal.interface";
import { Herd } from "@/interface/herd.interface";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export default function SearchAnimalPage() {
  const searchParams = useSearchParams();
  const animals = useSelector((state: RootState) => state.appData.animals);
  const herds = useSelector((state: RootState) => state.appData.herds);
  const loading = useSelector((state: RootState) => state.appData.status === 'pending');
  const error = useSelector((state: RootState) => state.appData.error);
  const [name, setName] = useState(searchParams.get("name") || "");
  const [herd, setHerd] = useState(searchParams.get("herd") || "");

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesName =
        name && animal.name !== null
          ? animal.name.toLowerCase().includes(name.toLowerCase())
          : true;
      const matchesHerd = herd ? animal.herd.id.toString() === herd.toString() : true;
      return matchesName && matchesHerd;
    });
  }, [name, herd, animals]); 

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <AnimalSearchTemplate>
      <SearchTable.SearchAnimal
        herds={herds}
        animals={filteredAnimals}
        name={name}
        herd={herd}
        onNameChange={setName}
        onHerdChange={setHerd}
      />
    </AnimalSearchTemplate>
  );
}
