/**
 * @param {string} cbu
 * @return {boolean} 
 */

import { banksArray } from "./banks";

function isValidCbu(cbu: string): boolean {
    // Estrictamente sólo 22 números
    if (!/^[0-9]{22}$/.test(cbu)) {
        return false;
    }

    const arr = cbu.split('').map(Number);
    if (arr[7] !== getDigitoVerificador(arr, 0, 6)) {
        return false;
    }
    if (arr[21] !== getDigitoVerificador(arr, 8, 20)) {
        return false;
    }

    return true;
}

/**
 * Devuelve el dígito verificador para los dígitos de las posiciones "pos_inicial" a "pos_final" 
 * de la cadena "$numero" usando clave 10 con ponderador 9713
 *
 * @param {number[]} numero arreglo de digitos
 * @param {number} pos_inicial
 * @param {number} pos_final 
 * @return {number} digito verificador de la cadena $numero
 */
function getDigitoVerificador(numero: number[], pos_inicial: number, pos_final: number): number {
    const ponderador = [3, 1, 7, 9];
    let suma = 0;
    let j = 0;
    for (let i = pos_final; i >= pos_inicial; i--) {
        suma += numero[i] * ponderador[j % 4];
        j++;
    }
    return (10 - suma % 10) % 10;
}

/**
 * @param {string} cbu
 * @return {string}
 */
function getBankId(cbu: string): string {
    return cbu.substring(0, 3);
}

/**
 * @param {string} cbu_or_id
 * @return {string}
 */
function getBankName(cbu_or_id: string): string {
    const id = getBankId(cbu_or_id);
    if (!banksArray[id]) {
        return '';
    }
    return banksArray[id];
}

// Exportando las funciones para que puedan ser usadas en otros módulos
export { isValidCbu, getDigitoVerificador, getBankId, getBankName, banksArray };
