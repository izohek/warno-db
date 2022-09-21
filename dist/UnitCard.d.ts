declare class UnitCard {
    name: string;
    code: number;
    veterancy: number;
    transport?: UnitCard;
    category?: string;
    descriptor?: string;
    constructor(name?: string, code?: number, veterancy?: number, category?: string);
}
export default UnitCard;
export { UnitCard };
