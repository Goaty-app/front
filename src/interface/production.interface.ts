import {AllType} from "@/interface/allType.interface";
import {ForeignKey} from "@/interface/utils.interface";

export interface Production {
    id: number,
    productionDate: string,
    expirationDate: string,
    quantity: number,
    quantityUnit: string,
    notes: string | null,
    herd: ForeignKey,
    productionType: AllType
}
export interface MockHerdFromId {
    id: number,
    name: string,
    location: string,
    createdAt: string
}

export interface ProductionType {
    id: number,
    name: string
}