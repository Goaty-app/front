"use client";

import React from "react";
import { Containers, Typography } from "@/components/atoms";
import { QuantityUnit } from "@/enum/quantityUnit.enum";

interface LabeledRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  name: string;
  values: QuantityUnit[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledRadioCommon: React.FC<LabeledRadioProps> = ({
  label,
  className = "",
  name,
  values,
  onChange,
  ...rest
}) => {
  console.log("values");
  console.log(values);
  return (
    <Containers.Simple className={`flex flex-col gap-1 ${className}`}>
      <Typography.Label className="font-semibold">{label}</Typography.Label>
      <select>
        <option value={-1}></option>
        {values?.map((value: QuantityUnit, i: number) => (
          <option value={value} key={i}>
            {value}
          </option>
        ))}
      </select>
    </Containers.Simple>
  );
};

export default LabeledRadioCommon;
