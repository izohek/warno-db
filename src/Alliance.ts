export interface Alliance {
    descriptor: string
    name: string
}

export const Alliances = {
    Axis: 'ENationalite/Axis',
    Allies: 'ENationalite/Allied'
} as const;
