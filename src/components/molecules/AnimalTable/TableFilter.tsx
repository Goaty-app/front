'use client';

import { TextField, Select, MenuItem } from '@mui/material';
import { Containers } from '@/components/atoms';
import { Herd } from '@/interface/herd.interface';
import React from "react";

interface GoatFiltersProps {
    name: string;
    herd: string;
    herds: Herd[];
    onNameChangeAction: (value: string) => void;
    onHerdChangeAction: (value: string) => void;

}

const TableFilter: React.FC<GoatFiltersProps> = ({ name, herd, herds, onNameChangeAction, onHerdChangeAction }) => (
    <Containers.Simple className="flex gap-4 items-end">
        <TextField label="Nom" value={name} onChange={(e) => onNameChangeAction(e.target.value)} />
        <Select displayEmpty value={herd} onChange={(e) => onHerdChangeAction(e.target.value)}>
            <MenuItem value="">Tous les troupeaux</MenuItem>
            {herds.map((h) => (
                <MenuItem key={h.id} value={h.id}>{h.alias}</MenuItem>
            ))}
        </Select>
    </Containers.Simple>
);

export default TableFilter;
