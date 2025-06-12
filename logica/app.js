const userName = prompt("Hola, ingresa tu nombre de usuario: ");
const age = prompt("Ingresa tu edad: ");
const films =[];

for (let i = 0; i < 5; i++) {
    films.push(prompt(`Ingresa la pelicula numero ${i}: `));
}
console.log(`Hola soy ${userName} tengo ${age} y  `);
let counter = 0;
while(counter < films.length){
    console.log(`mi pelicula favorita numero ${counter+1} es: ${films[counter]}`);
    counter++;
}