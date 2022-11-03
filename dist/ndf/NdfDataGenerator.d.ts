import Division from '../Division';
interface NdfDivision {
    id: number;
    descriptor: string;
}
interface NdfUnit extends NdfDivision {
}
export declare function generateDivisions(deckFile: string, divisionsFile: string): Division[];
export declare function generateIds(unitsFile: string): {
    units: NdfUnit[];
    packs: any;
};
export declare function generatePacks(packsFile: string): {
    name: string;
    units: any;
}[];
export {};
