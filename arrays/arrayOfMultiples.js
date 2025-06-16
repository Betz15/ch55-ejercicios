/*
* Matriz de múltiplos
 

Crea una función que toma dos parámetros (número, longitud) y devuelve una matriz de longitud que contenga múltiplos del número.
 

Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` .
*/

function matrizMulti(numero, longitud) {
    const resultado = [];
    for (let i = 1; i < longitud + 1; i++) {
        let multiplo = numero * i;
        resultado.push(multiplo)
    }
    return resultado
}

console.log(matrizMulti(17,6));