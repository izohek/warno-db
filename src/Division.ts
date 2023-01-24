/// Warno Division definition
export interface Division {
    name: string
    country: string
    alliance: string
    id: number
    descriptor: string
    tags?: string[]
}

export default Division

export interface DivisionUnitRule {
    unitDescriptor: string
    availableWithoutTransport: boolean
    numberOfUnitsInPack: number
    numberOfUnitInPackXPMultiplier: number[]
}

export interface DivisionTransportRule {
    name: string
    maxNumber: number
}

export interface DivisionRule {
    division: string
    unitRules: DivisionUnitRule[]
    transportRules: DivisionTransportRule[]
}
