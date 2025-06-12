

//Firma de la función arrow
const fizzbuzz = (counterNumber) =>{
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
            console.log(numero);
        }
        numero ++;
    }while(numero <= counterNumber);
    return;
};

console.log("50 veces");
fizzbuzz(50)
console.log("200 veces");
fizzbuzz(200)