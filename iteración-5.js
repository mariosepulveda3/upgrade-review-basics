
// **Iteración #5: Función rollDice**

// Crea una función llamada **rollDice()** que reciba como parametro el numero de caras 
// que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como 
// hemos dicho, que la función use el parametro para simular una tirada de dado y retornar
//  el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca
//   información sobre la función de javascript **Math.random();**


// Encontrado por internet, entendiendo cada funcionamiento.

 function rollDice(numCaras) {
    const max = numCaras;
     return Math.floor(Math.random() * numCaras) + 1;
  }
   console.log(rollDice(6));


//* ALVARO CARU: hecho para comprobar que el código de arriba es fiable y
//* que produce unos resultados "verdaderamente" aleatorios

// let roll = '';

// function fairnessChecker(nSides, nTries) {
//   let stats = {}
//   for (let i = 0; i < nTries; i++) {
//       roll = "r" + rollDice(nSides)
//       if (!stats.hasOwnProperty(roll)) {
//           stats[roll] = 1
//       } else {
//           stats[roll]++
//       }
//   }
//   return stats
// }
// console.log(fairnessChecker(6, 6000));