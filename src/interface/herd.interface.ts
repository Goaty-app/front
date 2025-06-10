export const mockHerds: Herd[] = [
    { id: "h1", name: "Herd Alpha", location: "North Zone" },
    { id: "h2", name: "Herd Beta", location: "South Zone" },
];


export interface Herd {
    id: string;
    name: string;
    location: string;
}

export type CreateOrUpdateHerd = Omit<Partial<Herd>, "id">;

