"use client";
import React, { ReactNode } from "react";
import { Containers, Typography } from "../atoms";

const ProductionSearchTemplate: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <Containers.Simple className="flex flex-col items-center gap-6 p-2 h-full">
    <Typography.Title>Ensemble des productions</Typography.Title>
    {children}
  </Containers.Simple>
);

export default ProductionSearchTemplate;
