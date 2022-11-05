import { generateDivisionRules } from "../ndf/NdfDataGenerator"
import { writeFileSync } from 'fs';

const rulesNdfFile = "./ndf/suchet/DivisionRules.ndf"
const ndfData = generateDivisionRules(rulesNdfFile)

writeFileSync('./src/json/division-rules.json', JSON.stringify(ndfData, null, 4))
