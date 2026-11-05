const prompt = require("prompt-sync") ()
// pega o número digitado, o prompt devolve texto então converto com Number
const numero = Number(prompt("Digite N:"));
// o resto da divisão por 10 é sempre o último dígito
// ex: 1234 dividido por 10 dá 123 e sobra 4
const ultimoAlgarismo = numero % 10;
console.log(ultimoAlgarismo);