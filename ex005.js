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

function aplicaDesconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)))
}

function aplicaJuros(valor, juros) {
  return (valor + (valor * (juros / 100)))
}

function pagamento(forma_de_pagamento, valor) {
  switch (forma_de_pagamento) {
    case 1:
      return aplicaDesconto(valor, 10)
    case 2: 
    case 3:
      return aplicaDesconto(valor, 15)
    case 4:
      return valor
    case 5:
      return aplicaJuros(valor, 10)
    default:
      return 'Nenhuma opção válida foi selecionada.'
  }
}

console.log(`R$ ${pagamento(2, 100)}`);