"use client";

import { Suspense } from "react";
import SearchAnimalPage from "@/components/Pages/SearchAnimalPage";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchAnimalPage />
    </Suspense>
  );
}
