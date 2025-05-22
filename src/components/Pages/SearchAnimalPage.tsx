'use client';

import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {Goat, mockHerds} from "@/interface/herd.interface";
import AnimalSearchTemplate from "@/components/template/AnimalSearchTemplate";
import {SearchTable} from "@/components/Organismes";

export default function SearchAnimalPage() {
    const searchParams = useSearchParams();
    const [name, setName] = useState(searchParams.get('name') || '');
    const [herd, setHerd] = useState('');

    const allGoats: Goat[] = useMemo(() => {
        return mockHerds.flatMap((herd) =>
            herd.animals.map((goat) => ({
                ...goat,
                herdAlias: herd.alias,
                herdId: herd.id
            }))
        );
    }, []);

    const filteredGoats = useMemo(() => {
        return allGoats.filter((goat) => {
            const matchesName = name ? goat.name.toLowerCase().includes(name.toLowerCase()) : true;
            const matchesHerd = herd ? goat.herdId === herd : true;
            return matchesName && matchesHerd;
        });
    }, [name, herd, allGoats]);

    return (
        <AnimalSearchTemplate>
            <SearchTable.SearchAnimal
                herds={mockHerds}
                goats={filteredGoats}
                name={name}
                herd={herd}
                onNameChange={setName}
                onHerdChange={setHerd}
            />
        </AnimalSearchTemplate>
    );
}
