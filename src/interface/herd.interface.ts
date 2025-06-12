export const mockHerds: Herd[] = [
  { id: "101", name: "Herd Alpha", location: "North Zone" },
  { id: "102", name: "Herd Beta", location: "South Zone" },
];

export interface Herd {
  id: string;
  name: string;
  location: string;
}

export type CreateOrUpdateHerd = Omit<Partial<Herd>, "id">;
