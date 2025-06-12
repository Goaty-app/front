import { httpApi } from "@/lib/HTTPClient";
import type { Herd, CreateOrUpdateHerd } from "@/interface/herd.interface";

export const getHerds = async () => {
  return httpApi.get<Herd[]>("/herds");
};

export const getHerdById = async (id: string) => {
  return httpApi.get<Herd>(`/herds/${id}`);
};

export const createHerd = async (herd: CreateOrUpdateHerd) => {
  return httpApi.post<Herd>("/herds", herd, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateHerd = async (id: string, herd: CreateOrUpdateHerd) => {
  return httpApi.put<Herd>(`/herds/${id}`, herd, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteHerd = async (id: string) => {
  return httpApi.delete<null>(`/herds/${id}`);
};
