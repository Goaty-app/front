"use client";

import React, { useMemo, useState } from "react";
import { SearchTable } from "@/components/Organismes";
import { ProductionInterface } from "@/interface/production.interface";
import ProductionSearchTemplate from "@/components/template/ProductionSearchTemplate";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LoadingTemplate from "@/components/template/LoadingTemplate";
import LoadingErrorTemplate from "@/components/template/LoadingErrorTemplate";

export default function SearchProductionPage() {
  const [name, setName] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("");
  const [herd, setHerd] = useState("");
  const [date, setDate] = useState("");

  const productions = useSelector(
    (state: RootState) => state.appData.productions,
  );
  const loading = useSelector(
    (state: RootState) => state.appData.status === "pending",
  );
  const error = useSelector((state: RootState) => state.appData.error);

  //let allProductions: ProductionInterface[] = mockProductions;
  const allProductions: ProductionInterface[] = productions;

  const filteredProduction = useMemo(() => {
    return allProductions.filter((production) => {
      const matchesName =
        name && production.productionType.name !== null
          ? production.productionType.name
              .toLowerCase()
              .includes(name.toLowerCase())
          : true;
      const matchesQuantity =
        quantityUnit && production.quantityUnit !== null
          ? production.quantityUnit.includes(quantityUnit)
          : true;
      const matchesDate =
        date &&
        new Date(production.productionDate).toLocaleDateString() !== null
          ? new Date(production.productionDate)
              .toLocaleDateString()
              .includes(date)
          : true;
      const matchesHerd =
        herd && production.herd !== null
          ? production.herd.name.toString().includes(herd)
          : true;
      return matchesName && matchesQuantity && matchesDate && matchesHerd;
    });
  }, [allProductions, date, herd, name, quantityUnit]);

  if (loading) return <LoadingTemplate />;
  if (error) return <LoadingErrorTemplate />;
  return (
    <ProductionSearchTemplate>
      <SearchTable.SearchProduction
        productionList={filteredProduction}
        name={name}
        quantityUnit={quantityUnit}
        date={date}
        herd={herd}
        onNameChange={setName}
        onQuantityUnitChange={setQuantityUnit}
        onDateChange={setDate}
        onHerdChange={setHerd}
      />
    </ProductionSearchTemplate>
  );
}
