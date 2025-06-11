'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Link from 'next/link';
import { Typography } from '@/components/atoms';
import React from "react";
import {Animal} from "@/interface/animal.interface";



const AnimalTable: React.FC<{ animals: Array<Animal> }> = ({animals: animals} ) => (
    <TableContainer component={Paper} className="h-full overflow-y-auto border-gray-400 border border-solid">
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell className="bg-header"><Typography.Text className="dark-text">Nom</Typography.Text></TableCell>
                    <TableCell className="bg-header"><Typography.Text className="dark-text">Genre</Typography.Text></TableCell>
                    <TableCell className="bg-header"><Typography.Text className="dark-text">ID</Typography.Text></TableCell>
                    <TableCell className="bg-header"><Typography.Text className="dark-text">Troupeau</Typography.Text></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {animals.map((animal) => (
                    <TableRow className="bg-row" key={animal.id} hover>
                        <TableCell>
                            <Link href={`/goat/${animal.id}`} className="link-text hover:underline">{animal.name}</Link>
                        </TableCell>
                        <TableCell>{animal.gender}</TableCell>
                        <TableCell>{animal.id}</TableCell>
                        <TableCell>{animal.herd.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default AnimalTable;