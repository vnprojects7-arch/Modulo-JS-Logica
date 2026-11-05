const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite N:"));
// conta quantas vezes a regra foi aplicada
let passos = 0;
// repete até chegar em 1
while (numero !== 1) {
  // resto 0 na divisão por 2 significa que é par
  if (numero % 2 === 0) {
    numero = numero / 2;
  } else {
    // se não é par, é ímpar
    numero = numero * 3 + 1;
  }
  // cada volta do while conta como um passo
  passos = passos + 1;
}
console.log("Passos: " + passos);