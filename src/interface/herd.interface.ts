export interface Herd {
  id: string;
  name: string;
  location: string;
}

export type CreateOrUpdateHerd = Omit<Partial<Herd>, "id">;
