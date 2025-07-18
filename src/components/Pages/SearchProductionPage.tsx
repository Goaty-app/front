"use client";

import { useEffect, useMemo, useState } from "react";
import { SearchTable } from "@/components/Organismes";
import { getProduction } from "@/service/production.service";
import type { ProductionInterface } from "@/interface/production.interface";
import ProductionSearchTemplate from "@/components/template/ProductionSearchTemplate";

export default function SearchProductionPage() {
  const [name, setName] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("");
  const [herd, setHerd] = useState("");
  const [date, setDate] = useState("");
  const [allProductions, setAllProductions] = useState<ProductionInterface[]>([]);

  useEffect(() => {
    getProduction().then((res) => setAllProductions(res.data || []));
  }, []);

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
  }, [allProductions, name, quantityUnit, date, herd]);

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
