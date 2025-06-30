"use client";

import React from "react";
import { Containers, Typography } from "@/components/atoms";
import { QuantityUnit } from "@/enum/quantityUnit.enum";
import ProductionSelectCommon from "@/components/atoms/Production/ProductionSelectCommon";

interface LabeledRadioProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  name: string;
  values: QuantityUnit[];
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LabeledRadioCommon: React.FC<LabeledRadioProps> = ({
  label,
  className = "",
  name,
  values,
  value,
  onChange,
}) => {
  console.log("values");
  console.log(values);
  return (
    <Containers.Simple className={`flex flex-col gap-1 ${className}`}>
      <Typography.Label className="font-semibold">{label}</Typography.Label>
      <ProductionSelectCommon
        name={name}
        value={value}
        values={values}
        onChange={onChange}
      />
    </Containers.Simple>
  );
};

export default LabeledRadioCommon;
