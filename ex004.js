function getIMC(weight, height) {
  return weight / Math.pow(height, 2)
};

function classifyIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso.';
  } else if (imc >= 18.5 && imc <= 25) {
    return 'Peso normal.';
  } else if (imc > 25 && imc <= 30) {
    return 'Acima do peso.';
  } else if (imc > 30 && imc <= 40) {
    return 'Obeso.';
  } else {
    return 'Obesidade grave.';
  } 
}

(function main(weight, height) {
  let imc = getIMC(weight, height)
  console.log(classifyIMC(imc))
})(68, 1.75)



