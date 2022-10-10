

// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como 
// parametros un array de textos 
// y un texto y devuelve la posición del array cuando el 
// valor del array sea igual al valor del 
// texto que enviaste como parametro. Haz varios ejemplos
//  y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}
// Ej array:
// ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex (array, text) {
    //* Como se debía hacer, con un indexOf
    // return array.indexOf(text);

    //* Haciendolo con for
     for (let i = 0; i < array.length; i++) {
         if (array[i] === text) {
             return i;
         }
     }
}

console.log('Caracol tiene valor :');
console.log(findArrayIndex(animals, 'Caracol'));
console.log('Mosquito tiene valor :');
console.log(findArrayIndex(animals, 'Mosquito'));
console.log('Salamandra tiene valor :');
console.log(findArrayIndex(animals, 'Salamandra'));
console.log('Ajolote tiene valor :');
console.log(findArrayIndex(animals, 'Ajolote'));