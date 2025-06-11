import React from "react";
import { ProductionInterface } from "@/interface/production.interface";

const ProductionLine: React.FC<{children: React.ReactNode, production: ProductionInterface}> = ({ production, ...props }) => {
  return (
    <div className="border m-2 rounded">
      <div>
        <h3>{production.productionType.name}</h3>
        <p>
          {production.quantity} {production.quantityUnit}
        </p>
        <p>
          Herd: {production.herd.name} ({production.herd.id})
        </p>
        <p className="truncate">
          Notes: {production.notes}
        </p>
        <p>Date: {new Date(production.productionDate).toLocaleDateString()}</p>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default ProductionLine;
