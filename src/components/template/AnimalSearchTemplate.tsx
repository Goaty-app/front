"use client";

import { Containers, Typography } from "@/components/atoms";
import React, { ReactNode } from "react";

const GoatSearchTemplate: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <Containers.Simple className="flex flex-col items-center gap-6 p-2 h-full">
    <Typography.Title>Recherche de Chèvres</Typography.Title>
    {children}
  </Containers.Simple>
);

export default GoatSearchTemplate;
