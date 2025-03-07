import { somar } from "./somar.js";
import { subtrair } from "./subtrair.js";
import { dividir } from "./dividir.js";
import { multiplicar } from "./multiplicar.js";

const operacao = "+";
let num1 = 10;
let num2 = 5;

// Usando if
let resultado = num1 + num2;

if (operacao == "+") {
  resultado = somar(num1, num2);
} else if (operacao == "-") {
  resultado = subtrair(num1, num2);
} else if (operacao == "*") {
  resultado = multiplicar(num1, num2);
} else if (operacao == "/") {
  resultado = dividir(num1, num2);
} else {
  resultado = "Operação inválida!";
}

console.log(resultado);

console.log("OI");
