import { httpApi } from '@/lib/HTTPClient';
import type { FoodStock, CreateFoodStock, UpdateFoodStock, FoodStockHistory, CreateFoodHistory } from '@/interface/foodStock.interface';
import type { AllType } from '@/interface/allType.interface';

export const getAllFoodStocks = async () => {
    return httpApi.get<FoodStock[]>(`/food-stocks`);
};

export const getFoodStocksHerd = async (herdId: string) => {
    return httpApi.get<FoodStock[]>(`/herds/${herdId}/food-stocks`);
};

export const getFoodStockById = async (herdId: string, id: number) => {
    return httpApi.get<FoodStock>(`/food-stocks/${id}`);
};

export const createFoodStock = async (herdId: string, foodStock: CreateFoodStock) => {
    return httpApi.post<FoodStock>(`/herds/${herdId}/food-stocks`, foodStock, {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const updateFoodStock = async (id: number, foodStock: UpdateFoodStock) => {
    return httpApi.put<FoodStock>(`/food-stocks/${id}`, foodStock, {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const deleteFoodStock = async (id: number) => {
    return httpApi.delete<null>(`/food-stocks/${id}`);
};

export const getFoodStockFoodStockHistory = async (foodStockId: number) => {
    return httpApi.get<FoodStockHistory[]>(`/food-stocks/${foodStockId}/food-stock-histories`);
};

export const getFoodStockHistory = async (foodStockId: number) => {
    return httpApi.get<FoodStockHistory[]>(`/food-stock-histories/${foodStockId}`);
};

export const addFoodStockHistory = async (foodStockId: number, history: CreateFoodHistory) => {
    return httpApi.post<FoodStockHistory>(`/food-stocks/${foodStockId}/food-stock-histories`, history, {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const deleteFoodStockHistory = async (foodStockId: number, historyId: number) => {
    return httpApi.delete<null>(`/food-stock-histories/${historyId}`);
}

export const getAllFoodTypes = async () => {
    return httpApi.get<AllType[]>(`/food-stock-types`);
};

export const getFoodTypeById = async (id: number) => {
    return httpApi.get<AllType>(`/food-stock-types/${id}`);
};

export const createFoodType = async (foodType: AllType) => {
    return httpApi.post<AllType>(`/food-stock-types`, foodType, {
        headers: { 'Content-Type': 'application/json' },
    });
}

export const updateFoodType = async (id: number, foodType: AllType) => {
    return httpApi.put<AllType>(`/food-stock-types/${id}`, foodType, {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const deleteFoodType = async (id: number) => {
    return httpApi.delete<null>(`/food-stock-types/${id}`);
};