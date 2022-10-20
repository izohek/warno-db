export { Division } from './Division'
export { UnitCard } from './UnitCard'
export { findUnitCard, findUnitCardByDescriptor } from './UnitCardDatabase'
export { UnitDefinition, UnitCategory } from './UnitData'

import { UnitDefinition } from './UnitData'
import unitsJsonFile from './json/units.json'
export const AllUnits: UnitDefinition[] = unitsJsonFile

import divisionsJsonFile from './json/divisions.json'
import Division from './Division'
export const AllDivisions: Division[] = divisionsJsonFile
