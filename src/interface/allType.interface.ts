export interface AllType {
  id: number;
  name: string;
}

export type CreateType = Pick<AllType, "name">;
