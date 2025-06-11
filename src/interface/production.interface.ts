import {AllType} from "@/interface/allType.interface";

export interface ProductionInterface {
    id: number,
    productionDate: string,
    expirationDate: string,
    quantity: number,
    quantityUnit: string,
    notes: string | null,
    herd: AllType,
    productionType: AllType
}
