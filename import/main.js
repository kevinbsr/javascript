const { gets, print } = require('./auxiliary-functions')

/**
 * Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
 * Faça um programa que receba os 5 números sorteados para os alunos e mostre o
 * maior número sorteado.
 * 
 * Dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * Saída:
 * 98
 */

/* const sortedNumbers = [];

for (i = 0; i < 5; i++) {
  const sortedNumber = gets();
  sortedNumbers.push(sortedNumber);
}

print(sortedNumbers)

let higherNumber = 0;
for (i = 0; i < sortedNumbers.length; i++) {
  if (sortedNumbers[i] > higherNumber) {
    higherNumber = sortedNumbers[i];
  }
}

print(higherNumber) */

let higherNumber = 0;
let students = gets();

for (let i = 0; i < students; i++) {
  sortedNumber = gets();
  if (sortedNumber > higherNumber) {
    higherNumber = sortedNumber;
  }
}

print(higherNumber);