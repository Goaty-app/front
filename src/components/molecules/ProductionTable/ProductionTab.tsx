"use client";

import React from "react";
import { Production, Typography } from "../../atoms";
import { ProductionInterface } from "@/interface/production.interface";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CrudProductionIcon from "@/components/molecules/Icons/CrudProductionIcon";

interface Props {
  productionList: ProductionInterface[];
}
const ProductionTab: React.FC<Props> = ({ productionList }) => {
  return (
    <TableContainer
      component={Paper}
      className="border-gray-400 border border-solid"
    >
      <Table>
        <TableHead>
          <TableRow className="z-10">
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Id</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Nom</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Quantité</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Herd</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Notes</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Date</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <CrudProductionIcon action={"create"} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productionList.map((prod) => (
            <Production.ProductionLine key={prod.id} production={prod}>
              <CrudProductionIcon
                action={"update"}
                production={prod}
              ></CrudProductionIcon>
              <CrudProductionIcon
                action={"delete"}
                production={prod}
              ></CrudProductionIcon>
            </Production.ProductionLine>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductionTab;
