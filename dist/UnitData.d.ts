export declare type UnitCategory = 'log' | 'inf' | 'art' | 'tank' | 'aa' | 'rec' | 'hel' | 'air' | 'trans';
export interface UnitDefinition {
    id: number;
    name: string;
    descriptor: string;
    category: string;
}
export declare const AllUnits: UnitDefinition[];
