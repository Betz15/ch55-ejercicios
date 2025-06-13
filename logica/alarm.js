/*
*Alarma
Escriba un programa que pregunte al usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

Ejemplo de resultado : "Hora de dormir después de 10 segundos".
? tiempo esta en milisegundos 1 segundo = 1000ms
*/

let cantidadSegundos = prompt("Ingresa la cantidad de segundos que requieres para ejecutar una alarma: ");
console.log(cantidadSegundos);

cantidadSegundos = Number(cantidadSegundos)

setTimeout(() => {
  console.log("Han pasado " + cantidadSegundos + " segundos");
}, cantidadSegundos * 1000);
