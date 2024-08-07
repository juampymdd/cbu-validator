import { getBankName, isValidCbu } from "./cbuValidator";


const cbu = "0440006640000162486702"
const result = isValidCbu(cbu);
console.log(result)

const banco = getBankName(cbu);
console.log(banco)
