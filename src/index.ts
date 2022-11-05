import { UnitDefinition } from './UnitData'
import unitsJsonFile from './json/units.json'
import divisionsJsonFile from './json/divisions.json'
import divisionRulesJsonFile from './json/division-rules.json'
import { Division, DivisionRule } from './Division'

export const AllUnits: UnitDefinition[] = unitsJsonFile
export const AllDivisions: Division[] = divisionsJsonFile
export const DivisionRules: DivisionRule[] = divisionRulesJsonFile

export { Division } from './Division'
export { UnitCard } from './UnitCard'
export { findUnitCard, findUnitCardByDescriptor } from './UnitCardDatabase'
export { UnitDefinition, UnitCategory } from './UnitData'
