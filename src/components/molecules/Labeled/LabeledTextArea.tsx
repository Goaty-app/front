"use client";

import React from "react";
import { Containers, Typography } from "@/components/atoms";

interface LabeledTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
  textAreaClassName?: string;
}

const LabeledTextArea: React.FC<LabeledTextAreaProps> = ({
  label,
  className = "",
  textAreaClassName = "",
  ...props
}) => {
  return (
    <Containers.Simple
      className={`flex flex-col gap-1 overflow-y-auto ${className}`}
    >
      <Typography.Text className="font-semibold">{label}</Typography.Text>
      <Typography.TextArea
        className={`max-h-[200px] overflow-y-auto resize-none ${textAreaClassName}`}
        {...props}
      />
    </Containers.Simple>
  );
};

export default LabeledTextArea;
