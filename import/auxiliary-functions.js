const enters = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
  const value = enters[i];
  i++;
  return value;
}

function print(texto) {
  console.log(texto);
}

module.exports = {
  gets,
  print
};