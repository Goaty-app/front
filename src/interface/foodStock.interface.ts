import { ForeignKey } from "@/interface/utils.interface";
import { AllType } from "@/interface/allType.interface";

export interface FoodStock {
  id: number;
  herd: ForeignKey;
  name: string;
  quantityUnit: string;
  foodStockType: AllType;
  quantity: number;
}

// Herd ID implicit in API
export interface CreateFoodStock {
  name: string;
  quantityUnit: string;
  foodStockTypeId: number;
}

// Herd ID implicit in API
export type UpdateFoodStock = Partial<CreateFoodStock>;

export interface FoodStockHistory {
  id: number;
  quantity: number;
  operation: "+" | "-";
  foodStock: ForeignKey;
}

export type CreateFoodHistory = Pick<
  FoodStockHistory,
  "quantity" | "operation"
>;
