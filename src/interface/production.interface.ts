import { AllType } from "@/interface/allType.interface";
import { QuantityUnit } from "@/enum/quantityUnit.enum";

export interface ProductionInterface {
  id: number;
  productionDate: string;
  expirationDate: string;
  quantity: number;
  quantityUnit: QuantityUnit;
  notes: string | null;
  herd: AllType;
  productionType: AllType;
}

export interface CreateProduction {
  herdId: number;
  quantity: number;
  quantityUnit: QuantityUnit | null;
  productionTypeId: number;
}

export interface UpdateProduction {
  herdId: number;
  // Required
  productionDate: string;
  quantity: number;
  quantityUnit: QuantityUnit;
  productionTypeId: number;
  // Optional
  expirationDate: string | null;
  notes: string | null;
}
