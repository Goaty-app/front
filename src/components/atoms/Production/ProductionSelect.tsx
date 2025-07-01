import React from "react";
import { AllType } from "@/interface/allType.interface";
import { Herd } from "@/interface/herd.interface";

interface ProductionSelectCommonProps {
  name: string;
  values: AllType[] | Herd[];
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const ProductionSelect: React.FC<ProductionSelectCommonProps> = ({
  name,
  value,
  values,
  onChange,
}) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value={-1}></option>
      {values?.map((value, i) => (
        <option value={value.id} key={i}>
          {value.name}
        </option>
      ))}
    </select>
  );
};

export default ProductionSelect;
