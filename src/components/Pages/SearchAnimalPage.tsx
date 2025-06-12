"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import AnimalSearchTemplate from "@/components/template/AnimalSearchTemplate";
import { SearchTable } from "@/components/Organismes";
import { Animal } from "@/interface/animal.interface";
import { Herd } from "@/interface/herd.interface";
import { getAnimals } from "@/service/animal.service";
import { getHerds } from "@/service/herd.service";

export default function SearchAnimalPage() {
  const searchParams = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [herd, setHerd] = useState("");
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [herds, setHerds] = useState<Herd[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    Promise.all([
      getAnimals().then((res) => setAnimals(res.data)),
      getHerds().then((res) => setHerds(res.data)),
    ])
      .catch(() => setError("Erreur lors du chargement des données"))
      .finally(() => setLoading(false));
  }, []);

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesName =
        name && animal.name !== null
          ? animal.name.toLowerCase().includes(name.toLowerCase())
          : true;
      const matchesHerd = herd ? animal.herd.id.toString() === herd : true;
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
