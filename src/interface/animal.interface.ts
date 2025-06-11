import { AllType } from "@/interface/allType.interface";

export interface Animal {
  id: string;
  name: string | null;
  herd: AllType;
  idNumber: string;
  status: string;
  animalType: AllType;
  behaviorNotes: string | null;
  originCountry: string;
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
  originCountry?: string;
  gender?: "male" | "female";
}

export const mockAnimals: Animal[] = [
  {
    id: "a1",
    name: "Simba",
    herd: { id: 101, name: "Herd Alpha" },
    idNumber: "ID1001",
    status: "healthy",
    animalType: { id: 1, name: "Lion" },
    behaviorNotes: "Calm and friendly",
    originCountry: "Kenya",
    gender: "male",
    birth: "2018-04-23",
  },
  {
    id: "a2",
    name: "Nala",
    herd: { id: 101, name: "Herd Alpha" },
    idNumber: "ID1002",
    status: "healthy",
    animalType: { id: 1, name: "Lion" },
    behaviorNotes: null,
    originCountry: "Kenya",
    gender: "female",
    birth: "2019-07-15",
  },
  {
    id: "a3",
    name: "Dumbo",
    herd: { id: 102, name: "Herd Beta" },
    idNumber: "ID2001",
    status: "injured",
    animalType: { id: 2, name: "Elephant" },
    behaviorNotes: "Needs vet check",
    originCountry: "India",
    gender: "male",
    birth: null,
  },
];
