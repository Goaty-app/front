"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Typography } from "@/components/atoms";
import { mockBirths } from "@/interface/birth.interface";

const BirthHistory: React.FC = () => {
  return (
    <TableContainer
      component={Paper}
      className="h-full overflow-y-auto border-gray-400 border border-solid"
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">#</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Enfant</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">
                Accouplement
              </Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Date</Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">
                Poids (kg)
              </Typography.Text>
            </TableCell>
            <TableCell className="bg-header">
              <Typography.Text className="dark-text">Notes</Typography.Text>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockBirths.map((birth) => (
            <TableRow className="bg-row" key={birth.id} hover>
              <TableCell>{birth.id}</TableCell>
              <TableCell>{birth.child.id}</TableCell>
              <TableCell>{birth.breeding.id}</TableCell>
              <TableCell>{birth.birthDate}</TableCell>
              <TableCell>{birth.birthWeight}</TableCell>
              <TableCell>{birth.notes || "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BirthHistory;
