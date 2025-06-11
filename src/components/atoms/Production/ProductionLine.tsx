import React from "react";
import { ProductionInterface } from "@/interface/production.interface";
import { TableCell, TableRow, Tooltip } from "@mui/material";

const ProductionLine: React.FC<{
  production: ProductionInterface;
  children: React.ReactNode;
}> = ({ production, children }) => {
  return (
    <TableRow className="bg-row " key={production.id} hover>
      <TableCell>{production.productionType.name}</TableCell>
      <TableCell>
        {production.quantity} {production.quantityUnit}
      </TableCell>
      <TableCell>
        Herd: {production.herd.name} ({production.herd.id})
      </TableCell>
      <TableCell className={""}>
        <Tooltip title={production.notes}>
          <p className="w-100 truncate text-ellipsis">
            Notes: {production.notes}
          </p>
        </Tooltip>
      </TableCell>
      <TableCell>
        Date: {new Date(production.productionDate).toLocaleDateString()}
      </TableCell>
      <TableCell>{children}</TableCell>
    </TableRow>
  );
};

export default ProductionLine;
