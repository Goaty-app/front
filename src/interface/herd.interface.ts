export interface MockAnimal {
    id: string;
    name: string;
}

export interface Animal {
    id: string;
    name: string;
    herdId: number,
    idNumber: string,
    status: string,
    animalTypeId: number,
    behaviorNotes: string,
    originCountry: string,
    gender: "male" | "female",
}

export interface Herd {
    id: string;
    alias: string;
    animals: MockAnimal[];
}

export interface Goat extends MockAnimal {
    herdAlias: string;
    herdId: string;
}



const generateGoats = (prefix: string, count: number): Goat[] =>
    Array.from({ length: count }, (_, i) => ({
        id: `${prefix}-${i + 1}`,
        name: `${prefix}Goat${i + 1}`,
        herdAlias: `${prefix}Herd Alias${i + 1}`,
        herdId:`${prefix}-${i + 1}`,

    }));

export const mockHerds: Herd[] = [
    {
        id: 'herd-1',
        alias: 'Troupeau des Montagnes',
        animals: generateGoats('MG', 15),
    },
    {
        id: 'herd-2',
        alias: 'Troupeau des Plaines',
        animals: generateGoats('PG', 10),
    },
    {
        id: 'herd-3',
        alias: 'Troupeau de la Vallée',
        animals: generateGoats('VG', 15),
    },
    {
        id: 'herd-4',
        alias: 'Troupeau du Désert',
        animals: generateGoats('DG', 10),
    },
];