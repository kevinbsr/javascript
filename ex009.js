/**
 * Crie um programa que seja capaz de percorrer uma lista de números e imprima 
 * cada número par encontrado.
 */

function generateRandomArray(length) {
  const randomArray = [];

  for (let i = 0; i < length; i++) {
    const randomInteger = Math.floor(Math.random() * length);
    randomArray.push(randomInteger);
  }

  return randomArray;
}
const arrayOfNumbers = generateRandomArray(10);
console.log(arrayOfNumbers);

for (let i = 0; i <= arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 == 0) {
    number = arrayOfNumbers[i];
    console.log(number);
  }
}