import { httpApi } from '@/lib/HTTPClient';
import type { ProductionInterface } from '@/interface/production.interface';
import type { AllType } from '@/interface/allType.interface';

export const getProduction = async () => {
    return httpApi.get<ProductionInterface[]>('/productions');
};

export const getProductionByHerdId = async (herdId: number) => {
    return httpApi.get<ProductionInterface[]>(`/herds/${herdId}/productions`);
};

export const getProductionById = async (id: number) => {
    return httpApi.get<ProductionInterface>(`/productions/${id}`);
};

export const createProduction = async (herdId: number, production: ProductionInterface) => {
    return httpApi.post<ProductionInterface>(`/herds/${herdId}/productions`, production);
}

export const updateProduction = async (id: number, production: ProductionInterface) => {
    return httpApi.put<ProductionInterface>(`/productions/${id}`, production);
};

export const getProductionTypes = async () => {
    return httpApi.get<AllType[]>('/productions-types');
}

export const createProductionType = async (type: AllType) => {
    return httpApi.post<AllType>('/productions-types', type);
}

export const updateProductionType = async (id: number, type: AllType) => {
    return httpApi.put<AllType>(`/productions-types/${id}`, type);
}

export const deleteProductionType = async (id: number) => {
    return httpApi.delete<null>(`/productions-types/${id}`);
}