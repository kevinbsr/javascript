/* function teste() {
  console.log('Hello, world!');
}

teste() */

/* function sayMyName(name) {
  console.log(`my name is ${name}!`);
}

sayMyName('Kevin') */

/* function quadrado(valor) {
  return valor*valor
}

const quadradoDeDez = quadrado(10)
console.log(quadradoDeDez); */

function incrementarJuros(valor, percentual){
  const valorDeAcrescimo = (percentual / 100) * valor
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 15));

function giveMeACommitOnSunday(message){
  return message
}

console.log(giveMeACommitOnSunday('hello, commit!');