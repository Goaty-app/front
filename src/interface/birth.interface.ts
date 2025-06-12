import { ForeignKey } from "@/interface/utils.interface";

export const mockBirths: BirthResponse[] = [
  {
    id: 1,
    child: { id: 100 },
    breeding: { id: 50 },
    birthDate: "2024-05-10",
    birthWeight: "3.2",
    notes: "Naissance sans complication.",
  },
  {
    id: 2,
    child: { id: 101 },
    breeding: { id: 51 },
    birthDate: "2024-06-02",
    birthWeight: "2.8",
    notes: null,
  },
  {
    id: 3,
    child: { id: 102 },
    breeding: { id: 0 },
    birthDate: "2024-06-05",
    birthWeight: "3.0",
    notes: "Acheté d’un éleveur externe.",
  },
];

export interface BirthResponse {
  id: number;
  // Goat id of itself
  child: ForeignKey;
  breeding: ForeignKey;
  birthDate: string;
  birthWeight: string;
  notes: null | string;
}

// ChildId to update is on the API URL
export interface UpdateBirth {
  birthDate?: string;
  birthWeight?: string;
  notes?: string;
  breedingId?: number;
}

// Required to Create a goat before to have the childId
export interface CreateBirth {
  childId: number;
}

export interface Breeding {
  id: number;
  female: ForeignKey;
  male: ForeignKey;
  matingDateStart: string;
  matingDateEnd: string;
  expectedChildCount: number;
  status: string;
}

export interface CreateOrUpdateBreeding {
  femaleId?: number;
  maleId?: number;
  matingDateStart?: string;
  matingDateEnd?: string;
  expectedChildCount?: number;
  status?: string;
}
