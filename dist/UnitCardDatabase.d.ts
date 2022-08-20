import { UnitCard } from "./UnitCard";
declare class UnitCardDatabase {
    /**
     * Find specifc card by id
     *
     * @param id
     * @returns
     */
    static findCard(id: string | number): UnitCard | null;
}
export { UnitCardDatabase };
export default UnitCardDatabase;
