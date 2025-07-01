import { QuantityUnit } from "@/enum/quantityUnit.enum";
import React from "react";

interface ProductionSelectCommonProps {
  name: string;
  value: number | string | undefined | null;
  values: QuantityUnit[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const ProductionSelectCommon: React.FC<ProductionSelectCommonProps> = ({
  name,
  value,
  values,
  onChange,
}) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value={-1}></option>
      {values?.map((value: QuantityUnit, i: number) => (
        <option value={value} key={i}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default ProductionSelectCommon;
