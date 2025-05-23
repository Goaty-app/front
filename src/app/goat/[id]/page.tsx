'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Divider, Box } from '@mui/material';
import { FaStethoscope, FaBaby, FaEdit } from 'react-icons/fa';
import { Btn, Containers, Typography } from '@/components/atoms';

const mockAnimal = {
    id: '1',
    herd_id: 'herd-001',
    name: 'Goaty',
    identification_number: 'FR123456789',
    gender: 'female',
    origin_country: 'FRANCE',
    behavior_notes: 'Calme et affectueuse.',
    status: 'ACTIVE',
};

export default function Page() {
    const { id } = useParams();
    console.log(id);

    const animal = mockAnimal; // Plus tard : fetch en fonction de `id`

    // TODO: Make it ATOMIC
    return (
        <Box padding={4}>
            <Typography.Title className="text-center mb-6">
                Détails de l'animal : {animal.name}
            </Typography.Title>

            {/* PAGE */}
            <Containers.Simple className="flex flex-row gap-6 justify-center items-start w-full">
                {/* TEMPLATE ANIMAL DETAILS */}
                <Containers.Simple className="bg-layer-3 p-3 rounded-xl w-[30%]">
                    <Containers.Simple className="flex flex-col gap-4">
                        <Typography.Title> Fiche Animal </Typography.Title>
                        <Containers.Simple>
                            <Typography.Text>Nom</Typography.Text>
                            <Typography.Text>{animal.name}</Typography.Text>
                        </Containers.Simple>

                        <Containers.Simple>
                            <Typography.Text>Identifiant</Typography.Text>
                            <Typography.Text>{animal.identification_number}</Typography.Text>
                        </Containers.Simple>

                        <Containers.Simple>
                            <Typography.Text>Genre</Typography.Text>
                            <Typography.Text>{animal.gender}</Typography.Text>
                        </Containers.Simple>

                        <Containers.Simple>
                            <Typography.Text>Pays d'origine</Typography.Text>
                            <Typography.Text>{animal.origin_country}</Typography.Text>
                        </Containers.Simple>

                        <Containers.Simple>
                            <Typography.Text>Comportement</Typography.Text>
                            <Typography.Text>{animal.behavior_notes}</Typography.Text>
                        </Containers.Simple>

                        <Containers.Simple>
                            <Typography.Text>Statut</Typography.Text>
                            <Typography.Text>{animal.status}</Typography.Text>
                        </Containers.Simple>
                    </Containers.Simple>

                    <Divider sx={{ marginY: 3 }} />

                    <Containers.Simple className="flex justify-center w-full gap-4">
                            {animal.gender === 'female' && (
                                <Btn
                                    variant="primary"
                                    className="w-full flex justify-center items-center gap-2 cursor-pointer"
                                    onClick={() => alert('Ajouter une naissance')}
                                >
                                    <FaBaby />
                                    <Typography.Text className="text-center w-full hidden md:block">Ajouter une naissance</Typography.Text>
                                </Btn>
                            )}
                        <Btn
                            variant="accent"
                            className="w-full flex justify-center items-center gap-2 cursor-pointer"
                            onClick={() => alert('Éditer')}
                        >
                            <FaEdit />
                            <Typography.Text className="text-center w-full hidden md:block">Modifier l’animal</Typography.Text>
                        </Btn>
                    </Containers.Simple>
                </Containers.Simple>

                {/* TEMPLATE HEALTHCARE */}
                <Containers.Simple className="bg-layer-2 p-3 rounded-xl w-[40%] h-full">
                    <Typography.Title className="mb-2">Dossier Médical</Typography.Title>
                    <Containers.Simple className="text-sm text-muted">TODO: Affichage du dossier médical</Containers.Simple>
                    <Divider sx={{ marginY: 3 }} />
                    <Btn
                        className="w-full flex justify-center items-center gap-2 cursor-pointer"
                        variant="primary"
                        onClick={() => alert('Ajouter un soin')}
                    >
                        <FaStethoscope />
                        <Typography.Text className="text-center w-full hidden md:block">Ajouter un soin</Typography.Text>
                    </Btn>
                </Containers.Simple>

                {/* TEMPLATE BREEDING / ORIGIN */}
                <Containers.Simple className="bg-layer-2 p-3 rounded-xl w-[25%] h-full">
                    <Typography.Title className="mb-2">Liens de parenté</Typography.Title>
                    <Containers.Simple className="text-sm text-muted">TODO: Affichage des liens de parenté</Containers.Simple>
                </Containers.Simple>
            </Containers.Simple>
        </Box>
    );
}
