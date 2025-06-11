import React, { ReactNode } from "react";
import { TableCell, TableRow, Tooltip } from "@mui/material";

interface Herd {
  id: number;
  name: string;
  location: string;
  createdAt: string;
}
interface ProductionType {
  id: number;
  name: string;
}
interface Production {
  id: number;
  production_date: string;
  expiration_date: string;
  quantity: number;
  quantityUnit: string;
  notes: string;
  createdAt: string;
  herd: Herd;
  productionType: ProductionType;
}

interface Props {
  production: Production;
  children: ReactNode;
}

const ProductionLine = ({ production, ...props }: Props) => {
  return (
    <TableRow className="bg-row " key={production.id} hover>
      <TableCell>{production.productionType.name}</TableCell>
      <TableCell>
        {production.quantity} {production.quantityUnit}
      </TableCell>
      <TableCell>
        Herd: {production.herd.name} ({production.herd.location})
      </TableCell>
      <TableCell className={""}>
        <Tooltip title={production.notes}>
          <p className="w-100 truncate text-ellipsis">
            Notes: {production.notes}
          </p>
        </Tooltip>
      </TableCell>
      <TableCell>
        Date: {new Date(production.production_date).toLocaleDateString()}
      </TableCell>
      <TableCell>{props.children}</TableCell>
    </TableRow>
  );
};

export default ProductionLine;
