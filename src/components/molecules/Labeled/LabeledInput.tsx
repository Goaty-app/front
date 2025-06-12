"use client";

import React from "react";
import { Containers, Typography, Input } from "@/components/atoms";

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  name: string;
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  className = "",
  name,
  value,
  onChange,
  ...rest
}) => {
  return (
    <Containers.Simple className={`flex flex-col gap-1 ${className}`}>
      <Typography.Label className="font-semibold">{label}</Typography.Label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </Containers.Simple>
  );
};

export default LabeledInput;
