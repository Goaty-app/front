"use client";

import React from "react";
import { ProductionInterface } from "@/interface/production.interface";
import { ProductionTab } from "@/components/molecules";
import { Containers, Typography } from "@/components/atoms";
import TableFilterProduction from "@/components/molecules/ProductionTable/TableFilterProduction";

interface Props {
  productionList: ProductionInterface[];
  name: string;
  quantityUnit: string;
  date: string;
  herd: string;
  onNameChange: (name: string) => void;
  onQuantityUnitChange: (quantityUnit: string) => void;
  onDateChange: (date: string) => void;
  onHerdChange: (herd: string) => void;
}

const SearchProduction: React.FC<Props> = ({
  productionList,
  name,
  quantityUnit,
  date,
  herd,
  onNameChange,
  onQuantityUnitChange,
  onDateChange,
  onHerdChange,
}) => {
  return (
    <>
      <TableFilterProduction
        name={name}
        quantityUnit={quantityUnit}
        date={date}
        herd={herd}
        onNameChange={onNameChange}
        onQuantityUnitChange={onQuantityUnitChange}
        onDateChange={onDateChange}
        onHerdChange={onHerdChange}
      />
      <Containers.Simple>
        <ProductionTab productionList={productionList} />
      </Containers.Simple>
      {productionList.length === 0 && (
        <Typography.Text>
          Aucune chèvre ne correspond à votre recherche.
        </Typography.Text>
      )}
    </>
  );
};

export default SearchProduction;
