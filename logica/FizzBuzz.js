/*
*Múltiplos de 3 por la palabra "fizz".
*Múltiplos de 5 por la palabra "buzz".
*Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*Si no es ninguno, imprime el numero tal cual
? 1. 100 numeros 
?2. crear un bucle que recorra los 100 numeros 
?3. Múltiplos de 3 por la palabra "fizz
    !3.1 ocupar la expresión % 3
    !3.2 es verdadero si %3 == 0
?4. Múltiplos de 5 por la palabra "buzz
    !3.1 ocupar la expresión % 5
    !3.2 es verdadero si %5 == 0
?5.Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz"
    !3.1 ocupar la expresión % 5 &&  % 3
    !3.2 es verdadero si %5 &&  % 3 == 0
?6. Si no es ninguno, imprime el numero tal cual
?n. fizz, buzz y fizzbuzz
*/

let numero = 1;
do{
    if (numero%3 === 0 && numero%5===0) {
        console.log(`El numero ${numero} es FizzBuzz`);
    }
    else if(numero % 3 === 0){
        console.log(`El numero ${numero} es Fizz`);
    }
    else if (numero % 5 === 0){
        console.log(`El numero ${numero} es Buzz`);
    }
    else{
        console.log(numero)
    }
    numero ++;
}while(numero <= 100);