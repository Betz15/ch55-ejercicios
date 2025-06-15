/* 
* Factorial
* Escriba un programa que solicite un número entero n donde 1 <= n.
* Resuelva esto usando recursión.
*/

const numFactorial = prompt("Escribe un número para calcular el factorial:");
const x = Number(numFactorial);
if (x < 1) {
    console.log("Error: Ingresa un número mayor o igual a 1");
} else {
    console.log(`El factorial de ${x} es: ${calcularFactorial(x)}`);
}

function calcularFactorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * calcularFactorial(num - 1);
}

