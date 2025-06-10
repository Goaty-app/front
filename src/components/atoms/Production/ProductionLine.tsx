import React from "react";

const ProductionLine = ({ production, ...props }) => {
  return (
    <div className="border m-2 rounded">
      <div className={" "}>
        <h3>{production.productionType.name}</h3>
        <p>
          {production.quantity} {production.quantityUnit}
        </p>
        <p>
          Herd: {production.herd.name} ({production.herd.location})
        </p>
        <p className="truncate" title={production.notes}>
          Notes: {production.notes}
        </p>
        <p>Date: {new Date(production.production_date).toLocaleDateString()}</p>
      </div>
      <div className="">{props.children}</div>
    </div>
  );
};

export default ProductionLine;
