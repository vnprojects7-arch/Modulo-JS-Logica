const prompt = require("prompt-sync")()
// começa em 0 porque todos os números ditados são de 1 a 1000
// então o primeiro número lido já vai ser maior que isso
let maior = 0;
// leio o primeiro antes de entrar no while
let numero = Number(prompt("Digite um número (0 para terminar):"));
// enquanto não digitar 0, continua lendo
while (numero !== 0) {
  // se esse número for maior que o maior que já vi, ele vira o novo maior
  if (numero > maior) {
    maior = numero;
  }
  // leio o próximo, se for 0 o while para na volta seguinte
  numero = Number(prompt("Digite um número (0 para terminar):"));
}
// o 0 nunca entra na conta, ele só avisa que acabou
console.log(maior);