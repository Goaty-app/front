"use client";

import React from "react";
import { Containers, Typography } from "@/components/atoms";
import { AllType } from "@/interface/allType.interface";

interface LabeledRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  name: string;
  values: AllType[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledRadio: React.FC<LabeledRadioProps> = ({
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
        {values?.map((value, i) => (
          <option value={value.id} key={i}>
            {value.name}
          </option>
        ))}
      </select>
    </Containers.Simple>
  );
};

export default LabeledRadio;
