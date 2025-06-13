/*
*Numero más alto 
Escribe un programa que pida 10 números. Utilizando operadores lógicos y cualquier otra función o estructura de JavaScript que hayas visto, determina y genera el mayor de esos números.
?   1. Pedir al usuario 10 numeros 
?   2. Guardar los numeros en un array
?   3. Ordenar los Numeros 
?   4. Imprimir los numeros
*/
const number = [];
for (let i = 0; i < 10; i++) {
    number.push (prompt("Ingresa 10 numeros para ordenanrlos: "));
}
console.log(number)
//sort ordena listas/arreglos
number.sort((a,b) => b-a);
console.log("El numero más grande es " + number[0]);