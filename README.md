# CBU Validator

Este proyecto permite validar los CBU (Clave Bancaria Uniforme) en Argentina. Está basado en el código PHP original de [Pablo Gabriel Reyes](https://pabloreyes.com.ar/).

## Instalación

```sh
npm install cbu-validator
```

## Uso

### Funciones disponibles

- `isValidCbu(cbu: string): boolean`: Devuelve `true` si el CBU es válido.
- `getDigitoVerificador(numero: number[], pos_inicial: number, pos_final: number): number`: Devuelve el dígito verificador para una cadena de números.
- `getBankId(cbu: string): string`: Devuelve el ID del banco a partir del CBU.
- `getBankName(cbu_or_id: string): string`: Devuelve el nombre del banco a partir del CBU o ID del banco.

### Ejemplo de uso

```typescript
import { isValidCbu, getBankId, getBankName } from './cbu-validator';

const cbu = '1234567801234567890123';

if (isValidCbu(cbu)) {
    console.log('El CBU es válido.');
    console.log('ID del Banco:', getBankId(cbu));
    console.log('Nombre del Banco:', getBankName(cbu));
} else {
    console.log('El CBU no es válido.');
}