/*
*Dominio positivo en Array
 

Escriba una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 

Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `false` .
*/
function positiveDominance(array) {
    let positivos = 0;
    let negativos = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positivos++
        }else {
            negativos++
        }
        
    }
    return positivos > negativos
}

console.log(positiveDominance([-1, -3, 5, 4, 6767]))