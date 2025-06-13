/*
*Palindromo 
Escriba un programa que solicite una palabra u oración (puede estar en mayúsculas, tener espacios y signos de puntuación). Determine si la oración o palabra es un palíndromo. Ignore la puntuación, los espacios y las mayúsculas.
? 1. solicitar al usuario la palabra 
? 2. Pasar el tecto todo a mayusculas o minusculas(minusculas)
? 3. Quitar espacios y signos de puntuación (todo lo que no sean letras)
? 4. invertir el texto 
? 5. comparar el texto nomal con el invertido 
*/
const texto = prompt("ingresa una palabra u oración para determinar si es palindroma: ");

//Pasar todo a minusculas 
const minusculas = texto.toLocaleLowerCase();//convierte todo a minusculas
console.log(texto);
console.log(minusculas);
const separaTildes = minusculas.normalize("NFD");//separa las tildes 
const sinTildes = separaTildes.replace(/[\u0300-\u036f]/g, ""); //Quita tildes la g es global o sea a todo el texto no solo aholl primero que encuentre
console.log(sinTildes)
//Eliminar espacios y signos de puntuación 
const textoTerminado = sinTildes.replace(/[^\w]/g, "");//[^\w] //Elimina todo lo que no sea letra o numero
console.log(textoTerminado);
let invertido = "";
for (let i = textoTerminado.length - 1; i >= 0; i--) {
    invertido +=textoTerminado[i];
}
console.log(invertido)

if (invertido === textoTerminado) {
   console.log("Es palindromo");
}else{
   console.log("No es palindromo");
}


