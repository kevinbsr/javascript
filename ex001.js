/* 
  Faça um algoritmo que dado as 3 notas tiradas por um aluno 
  em um semestre da faculdade calcule e imprima a sua média e a 
  sua classificação conforme a tabela abaixo.

  Média = (nota 1 + nota 2 + nota 3) / 3

  Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, aprovação.
*/


function sumArray(numbers) {
  const total = numbers.reduce((acc, cur) => acc + cur, 0)
  return total
}

const numbers = [0, 4, 9]
const result = (sumArray(numbers) / 3)

if (result < 5) {
  console.log("O aluno foi reprovado.");
} else if (result >= 5 && result <= 7) {
  console.log('O aluno está de recuperação.');
} else {
  console.log('O aluno foi aprovado!');
}
