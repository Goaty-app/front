import { httpApi } from "@/lib/HTTPClient";
import type {
  Healthcare,
  CreateHealthcare,
} from "@/interface/healthcare.interface";
import type { AllType } from "@/interface/allType.interface";

export const getHealthcares = async () => {
  return httpApi.get<Healthcare[]>("/healthcares");
};

export const getHealthcare = async (id: string) => {
  return httpApi.get<Healthcare>(`/healthcares/${id}`);
};

export const getAnimalHealthcares = async (animalId: string) => {
  return httpApi.get<Healthcare[]>(`/animals/${animalId}/healthcares`);
};

export const addHealthcare = async (
  animalId: string,
  data: CreateHealthcare,
) => {
  return httpApi.post<Healthcare>(`/animals/${animalId}/healthcares`, data);
};

export const updateHealthcare = async (id: string, data: CreateHealthcare) => {
  return httpApi.put<Healthcare>(`/healthcares/${id}`, data);
};

export const deleteHealthcare = async (id: string) => {
  return httpApi.delete<AllType>(`/healthcares/${id}`);
};

export const getAllHealthcaresTypes = async () => {
  return httpApi.get<AllType[]>("/healthcare-types");
};

export const getHealthcareType = async (id: string) => {
  return httpApi.get<AllType>(`/healthcare-types/${id}`);
};

export const addHealthcareType = async (data: AllType) => {
  return httpApi.post<AllType>("/healthcare-types", data);
};

export const deleteHealthcareType = async (id: string) => {
  return httpApi.delete<null>(`/healthcare-types/${id}`);
};
