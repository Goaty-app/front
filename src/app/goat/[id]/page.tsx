"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import AnimalDetailPage from "@/components/Pages/AnimalDetailPage";
import { Animal } from "@/interface/animal.interface";

const mockAnimal = {
  id: "1",
  name: "Haaaa",
};

export default function Page() {
  const { id } = useParams();
  console.log(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimalDetailPage animal={mockAnimal as Animal} />
    </Suspense>
  );
}
