import { httpApi } from "@/lib/HTTPClient";
import type {
  CreateProduction,
  ProductionInterface,
} from "@/interface/production.interface";
import type { AllType } from "@/interface/allType.interface";

export const getProduction = async () => {
  return httpApi.get<ProductionInterface[]>("/productions");
};

export const getProductionByHerdId = async (herdId: number) => {
  return httpApi.get<ProductionInterface[]>(`/herds/${herdId}/productions`);
};

export const getProductionById = async (id: number) => {
  return httpApi.get<ProductionInterface>(`/productions/${id}`);
};

export const createProduction = async (production: CreateProduction) => {
  const { herdId, ...payload } = production;

  payload.productionDate = new Date()
    .toISOString()
    .substring(0, 19)
    .replace("T", " ");

  console.log("payload");
  console.log(payload);
  return httpApi.post<ProductionInterface>(
    `/herds/${herdId}/productions`,
    payload,
  );
};

export const updateProduction = async (
  id: number,
  production: ProductionInterface,
) => {
  return httpApi.put<ProductionInterface>(`/productions/${id}`, production);
};

export const getProductionTypes = async () => {
  return httpApi.get<AllType[]>("/production-types");
};

export const createProductionType = async (type: AllType) => {
  return httpApi.post<AllType>("/productions-types", type);
};

export const updateProductionType = async (id: number, type: AllType) => {
  return httpApi.put<AllType>(`/productions-types/${id}`, type);
};

export const deleteProductionType = async (id: number) => {
  return httpApi.delete<null>(`/productions-types/${id}`);
};

export const deleteProduction = async (id: number) => {
  return httpApi.delete<null>(`/productions/${id}`);
};
