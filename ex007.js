/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
 * Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça a José para dizer o valor 
 * do seu IMC.
  */

class Person {
  name;
  weight;
  height;
  imc;

  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.imc = (this.weight / (this.height * this.height)).toFixed(2)
  }

  sayTheIMC() {
    return (`The IMC of ${this.name} it's ${this.imc}.`);
  }
  classifyTheIMC() {
    if (this.imc < 18.5) {
      return 'Eu estou abaixo do peso.';
    } else if (this.imc >= 18.5 && this.imc <= 25) {
      return 'Eu estou com o peso normal.';
    } else if (this.imc > 25 && this.imc <= 30) {
      return 'Eu estou acima do peso.';
    } else if (this.imc > 30 && this.imc <= 40) {
      return 'Eu estou obeso.';
    } else {
      return 'Eu tenho obesidade grave.';
    }
  }
}

const jose = new Person(`José`, 70, 1.75)
console.log(jose.sayTheIMC());
console.log(jose.classifyTheIMC());

const kevin = new Person(`Kevin`, 68, 1.75)
console.log(kevin.sayTheIMC());
console.log(kevin.classifyTheIMC());