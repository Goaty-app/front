"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import AnimalDetailPage from "@/components/Pages/AnimalDetailPage";
import { getAnimalById } from "@/service/animal.service";
import type { Animal } from "@/interface/animal.interface";

export default function Page() {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getAnimalById(id as string).then((res) => {
        setAnimal(res.data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!animal) {
    return <div>Animal introuvable</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimalDetailPage animal={animal} />
    </Suspense>
  );
}
