import { ForeignKey } from "@/interface/utils.interface";

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
