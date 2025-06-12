import { httpApi } from "@/lib/HTTPClient";
import type {
  Animal,
  UpdateOrCreateAnimal,
} from "@/interface/animal.interface";
import type {
  BirthResponse,
  UpdateBirth,
  CreateBirth,
  Breeding,
  CreateOrUpdateBreeding,
} from "@/interface/birth.interface";
import type { AllType } from "@/interface/allType.interface";

export const getAnimals = async () => {
  return httpApi.get<Animal[]>("/animals");
};

export const getAnimalById = async (id: string) => {
  return httpApi.get<Animal>(`/animals/${id}`);
};

export const createAnimal = async (
  herdId: string,
  animal: UpdateOrCreateAnimal,
) => {
  return httpApi.post<Animal>(`/herds/${herdId}/animals`, animal, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateAnimal = async (
  id: string,
  animal: UpdateOrCreateAnimal,
) => {
  return httpApi.put<Animal>(`/animals/${id}`, animal, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteAnimal = async (id: string) => {
  return httpApi.delete<null>(`/animals/${id}`);
};

export const searchAnimals = async (params: {
  name?: string;
  gender?: string;
}) => {
  return httpApi.get<Animal[]>("/animals/search", { params });
};

export const getAnimalsInHerd = async (herdId: string) => {
  return httpApi.get<Animal[]>(`/herds/${herdId}/animals`);
};

export const getAnimalsTypes = async () => {
  return httpApi.get<AllType[]>("/animal-types");
};

export const createAnimalsType = async (herdId: string, type: AllType) => {
  return httpApi.post<AllType>(`/animal-types`, type, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateAnimalsType = async (id: string, type: AllType) => {
  return httpApi.put<AllType>(`/animal-types/${id}`, type, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteAnimalsType = async (id: string) => {
  return httpApi.delete<null>(`/animal-types/${id}`);
};

export const getBirths = async (animalId: string) => {
  return httpApi.get<BirthResponse[]>(`/animals/${animalId}/births`);
};

export const getBirthById = async (birthId: string) => {
  return httpApi.get<BirthResponse>(`/births/${birthId}`);
};

export const createBirth = async (birth: CreateBirth) => {
  return httpApi.post<BirthResponse>(`/births`, birth, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateBirth = async (birthId: string, birth: UpdateBirth) => {
  return httpApi.put<BirthResponse>(`/births/${birthId}`, birth, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteBirth = async (birthId: string) => {
  return httpApi.delete<null>(`/births/${birthId}`);
};

export const getAllBreedings = async () => {
  return httpApi.get<Breeding[]>(`/breedings`);
};

export const getBreedingById = async (breedingId: string) => {
  return httpApi.get<Breeding>(`/breedings/${breedingId}`);
};

export const getBreedingsByAnimalId = async (animalId: string) => {
  return httpApi.get<Breeding[]>(`/animals/${animalId}/breedings`);
};

export const createBreeding = async (breeding: CreateOrUpdateBreeding) => {
  return httpApi.post<Breeding>(`/breedings`, breeding, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateBreeding = async (
  breedingId: string,
  breeding: CreateOrUpdateBreeding,
) => {
  return httpApi.put<Breeding>(`/breedings/${breedingId}`, breeding, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteBreeding = async (breedingId: string) => {
  return httpApi.delete<null>(`/breedings/${breedingId}`);
};
