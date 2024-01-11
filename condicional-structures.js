// rest of division
/* let num = 2
const evenNumber = (num % 2) == 0
console.log(evenNumber); */

/* Faça um programa para calcular o valor de uma viagem.
   Você terá 5 variáveis. Sendo elas:
   1 - Preço do etanol
   2 - Preço da gasolina
   3 - O tipo de combustível que está no seu carro
   4 - Gasto médio de combustível do carro por KM
   5 - Distância em KM da viagem

   Imprima no console o valor que será gasto para realizar a viagem.
*/

etanol = 4.5
gasolina = 6.5
qualCombustivel = 'etanol'
consumo = 10
distancia = 200

if (qualCombustivel == 'etanol') {
  console.log(((etanol * distancia) / consumo));
} else if (qualCombustivel == 'gasolina') {
  console.log(((gasolina * distancia) / consumo));
} else {
  console.log('Combustível inválido.');
}