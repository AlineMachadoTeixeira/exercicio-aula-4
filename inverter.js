export function inverter(array) {
  let invertido = [];

  for (let incremento = 0; incremento < array.length; incremento++) {
    invertido.unshift(array[incremento]);
  }

  return invertido;
}
