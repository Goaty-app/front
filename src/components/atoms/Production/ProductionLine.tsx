import React from "react";
import { ProductionInterface } from "@/interface/production.interface";
import { TableCell, TableRow, Tooltip } from "@mui/material";

const ProductionLine: React.FC<{
  production: ProductionInterface;
  children: React.ReactNode;
}> = ({ production, children }) => {
  return (
    <TableRow className="bg-row" key={production.id} hover>
      <TableCell>{production.herd.id}</TableCell>
      <TableCell>{production.productionType.name}</TableCell>
      <TableCell>
        {production.quantity} {production.quantityUnit}
      </TableCell>
      <TableCell>{production.herd.name}</TableCell>
      <TableCell>
        <Tooltip title={production.notes}>
          <p className="w-100 truncate text-ellipsis">{production.notes}</p>
        </Tooltip>
      </TableCell>
      <TableCell>
        {new Date(production.productionDate).toLocaleDateString()}
      </TableCell>
      <TableCell className="!flex !flex-col !gap-2">{children}</TableCell>
    </TableRow>
  );
};

export default ProductionLine;
