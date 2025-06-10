
export interface Production {
    id: number,
    production_date: string,
    expiration_date: string,
    quantity: number,
    quantityUnit: string,
    notes: string,
    createdAt: string,
    // TODO: Remove Mock for herd: {id: number},
    herd: MockHerdFromId,
    productionType: ProductionType
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