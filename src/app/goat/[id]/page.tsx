"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import AnimalDetailPage from "@/components/Pages/AnimalDetailPage";
import { getAnimalById } from "@/service/animal.service";

export default async function Page() {
  const { id } = useParams();
  const animalRes = await getAnimalById(id as string);
  const animal = animalRes.data;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimalDetailPage animal={animal} />
    </Suspense>
  );
}
