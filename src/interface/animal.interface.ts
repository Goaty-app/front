import { AllType } from "@/interface/allType.interface";
import { Country } from "@/enum/country.enum";

export interface Animal {
  id: number;
  name: string | null;
  herd: AllType;
  idNumber: string;
  status: string;
  animalType: AllType;
  behaviorNotes: string | null;
  originCountry: Country;
  gender: "male" | "female";
  birth: null | string;
}

// HerdID is undefined for Creation as it is provided in the API URL
export interface UpdateOrCreateAnimal {
  herdID?: number;
  idNumber: string;
  status: string;
  animalTypeId: number;
  name?: string;
  behaviorNotes?: string;
  originCountry?: Country;
  gender?: "male" | "female";
}
