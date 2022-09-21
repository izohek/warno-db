// Warno Unit Card
class UnitCard {
    public name: string = ''
    public code: number = 0
    public veterancy: number = -1
    public transport?: UnitCard
    public category?: string
    public descriptor?: string

    constructor (name: string = '', code: number = 0, veterancy: number = -1, category?: string) {
        this.name = name
        this.code = code
        this.veterancy = veterancy
        this.category = category
    }
}

export default UnitCard
export { UnitCard }
