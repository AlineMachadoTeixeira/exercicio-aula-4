import { somar } from "./somar.js";
import { subtrair } from "./subtrair.js";
import { dividir } from "./dividir.js";
import { multiplicar } from "./multiplicar.js";
import { inverter } from "./inverter.js";

// Atividade 1
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

console.log("Atividade 1. Resultado da operação: " + resultado);

// Atividade 2
let numInverte = [1, 2, 3, 4, 5];

console.log("Atividade 2. Números originais: " + numInverte);

let resultadoInverte = inverter(numInverte);

console.log("Atividade 2. Números invertidos: " + resultadoInverte);
