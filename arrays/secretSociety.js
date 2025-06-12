/*
* Encuentra el nombre de una sociedad secreta basándose en la primera letra del nombre de cada miembro.

Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
?   1. Recibimos un Array que tiene nombres
    !   1.1 Estos nombres empiezan con Mayus
    !   1.2 Ordenar ela array por orden Alfabetico
? 2. inicializar una variable para guardar las iniciales
? 3. Utilizar un ciclo para recorrer el array
? 4. Obtener la primera letra de cada nombre utilizando la notación de corchetes
? 5. Pegar la inicial de cada nombre para retornar el nombre de la sociedad secreta basado een la primera letra de cada nombre
n. Retornar el nombre de la sociedad secreta basandose en la primera letra de cada nombre
*/

const secretName = function (namesArray) {
    let societyName = "";
    const sortedName = namesArray.toSorted();//ordena alfabeticamente
    sortedName.forEach((name) => societyName = societyName + name[0]);///pasamos el que esta ordenado
    return societyName;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));
