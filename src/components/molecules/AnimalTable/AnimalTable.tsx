'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import { Typography } from '@/components/atoms';
import {Goat} from "@/interface/herd.interface";
import React from "react";

interface GoatTableProps {
    goats: Goat[];
}

const AnimalTable: React.FC<GoatTableProps> = ({ goats }) => (
    <TableContainer component={Paper} className="h-full overflow-y-auto border-gray-400 border border-solid">
        <Table stickyHeader size="small">
            <TableHead>
                <TableRow className="z-10">
                    <TableCell className="bg-header"><Typography.Text className="dark-text">Nom</Typography.Text></TableCell>
                    <TableCell className="bg-header"><Typography.Text className="dark-text">Troupeau</Typography.Text></TableCell>
                    <TableCell className="bg-header"><Typography.Text className="dark-text">ID</Typography.Text></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {goats.map((goat) => (
                    <TableRow className="bg-row" key={goat.id} hover>
                        <TableCell>
                            <Link href={`/goat/${goat.id}`} className="link-text hover:underline">{goat.name}</Link>
                        </TableCell>
                        <TableCell>{goat.herdAlias}</TableCell>
                        <TableCell>{goat.id}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default AnimalTable;