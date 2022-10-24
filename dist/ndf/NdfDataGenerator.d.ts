import Division from '../Division';
interface NdfDivision {
    id: number;
    descriptor: string;
}
interface NdfUnit extends NdfDivision {
}
export declare function generateDivisions(deckFile: string, divisionsFile: string): Division[];
export declare function generateUnits(unitsFile: string): NdfUnit[];
export declare function generatePacks(packsFile: string): {
    name: string;
    units: any;
}[];
export {};
