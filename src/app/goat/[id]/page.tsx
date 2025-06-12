"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import AnimalDetailPage from "@/components/Pages/AnimalDetailPage";
import { mockAnimal } from "@/interface/animal.interface";

export default function Page() {
  const { id } = useParams();
  console.log(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimalDetailPage animal={mockAnimal} />
    </Suspense>
  );
}
