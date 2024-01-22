/**
 * 1 - Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
 * Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percurso.
 * */

class Car {
  brand;
  color;
  expensePerKilometer;

  constructor(brand, color, expensePerKilometer) {
    this.brand = brand;
    this.color = color;
    this.expensePerKilometer = expensePerKilometer;
  }
}

function travelExpense(kilometers, gasPrice, car) {
  expense = (kilometers * gasPrice) / car.expensePerKilometer
  console.log(`With a ${car.brand} car, a ${kilometers} kilometers travel will cost U$ ${expense.toFixed(2)}.`);
}

const BMW = new Car('BMW', 'White', 10)

travelExpense(320, 6.5, BMW)