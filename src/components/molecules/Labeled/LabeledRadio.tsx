"use client";

import React from "react";
import { Containers, Typography } from "@/components/atoms";
import { AllType } from "@/interface/allType.interface";
import ProductionSelect from "@/components/atoms/Production/ProductionSelect";
import { Herd } from "@/interface/herd.interface";

interface LabeledRadioProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  name: string;
  values: AllType[] | Herd[];
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LabeledRadio: React.FC<LabeledRadioProps> = ({
  label,
  className = "",
  name,
  values,
  value,
  onChange,
}) => {
  return (
    <Containers.Simple className={`flex flex-col gap-1 ${className}`}>
      <Typography.Label className="font-semibold">{label}</Typography.Label>
      <ProductionSelect
        name={name}
        value={value}
        values={values}
        onChange={onChange}
      />
    </Containers.Simple>
  );
};

export default LabeledRadio;
