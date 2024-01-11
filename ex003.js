/* 
  Elabore um algoritmo que calcule o que deve ser pago por um produto, 
  considerando o preço normal de etiqueta e a escolha da condição de pagamento.
  Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
  escolhida e efetuar o cálculo adequado.

  Código condição de pagamento:
  - À vista Débito, recebe 10% de desconto;
  - À vista no Dinheiro ou PIX, recebe 15% de desconto;
  - Em duas vezes, preço normal de etiqueta sem juros;
  - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


preco = 10

function pagamento(forma_de_pagamento) {
  switch (forma_de_pagamento) {
    case 'debito':
      return (preco - (preco * 0.1));
    case 'dinheiro': 
    case 'pix':
      return (preco - (preco * 0.15))
    case 'duas_vezes':
      return preco
    case 'mais_de_duas':
      return (preco + (preco * 0.1))
    default:
      return 'Nenhuma opção válida foi selecionada.'
  }
}

console.log(pagamento('tres'));