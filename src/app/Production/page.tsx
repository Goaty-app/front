"use client";

import { Suspense, useState } from "react";
import { Btn } from "@/components/atoms";
import SearchProductionPage from "@/components/Pages/SearchProductionPage";

export default function Home() {
  const [mode, setMode] = useState("");

  const getContent = () => {
    switch (mode) {
      case "Analyse":
        return <div>Hello mode Analyse</div>;
      case "Gestion":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchProductionPage />
          </Suspense>
        );
      default:
        return <div>Choisir entre Analyse et gestion</div>;
    }
  };

  return (
    <div className="w-full h-full">
      <Btn variant={"default"} onClick={() => setMode("Analyse")}>
        <div> Analyse </div>
      </Btn>
      <Btn variant={"default"} onClick={() => setMode("Gestion")}>
        <div> Gestion </div>
      </Btn>
      {getContent()}
    </div>
  );
}
