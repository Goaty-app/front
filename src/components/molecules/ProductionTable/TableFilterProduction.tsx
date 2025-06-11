"use client";
import React from "react";
import { Containers } from "@/components/atoms";
import { MenuItem, Select, TextField } from "@mui/material";

interface Props {
  name: string;
  quantityUnit: string;
  date: string;
  herd: string;
  onNameChange: (name: string) => void;
  onQuantityUnitChange: (quantityUnit: string) => void;
  onDateChange: (date: string) => void;
  onHerdChange: (herd: string) => void;
}

const TableFilterProduction: React.FC<Props> = ({
  name,
  quantityUnit,
  date,
  herd,
  onNameChange,
  onQuantityUnitChange,
  onDateChange,
  onHerdChange,
}) => (
  <Containers.Simple>
    <TextField
      label="Nom"
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
    />
    <TextField
      label="Date"
      value={date}
      onChange={(e) => onDateChange(e.target.value)}
    />
    <Select
      variant="outlined"
      displayEmpty
      value={quantityUnit}
      onChange={(e) => onQuantityUnitChange(e.target.value)}
    >
      <MenuItem>{quantityUnit}</MenuItem>
    </Select>
    <TextField
      label="Herd"
      value={herd}
      onChange={(e) => onHerdChange(e.target.value)}
    />
  </Containers.Simple>
);
export default TableFilterProduction;
