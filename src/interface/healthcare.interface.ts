import {AllType} from "@/interface/allType.interface";
import {ForeignKey} from "@/interface/utils.interface";

export interface Healthcare {
    id: number,
    animal: ForeignKey,
    healthcareTypeId: AllType,
    description: string,
    careDate: string,
    documents: [],
}

export interface CreateHealthcare {
    healthcareTypeId: number,
    description?: string
}