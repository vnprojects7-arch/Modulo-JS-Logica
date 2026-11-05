const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor do saque (V):"));
// recusa se for zero ou negativo
// também recusa se sobrar resto na divisão por 10, porque não tem nota menor que 10
if (valor <= 0 || valor % 10 !== 0) {
  console.log("Valor inválido");
} else {
  // restante guarda quanto ainda falta pagar conforme vou tirando notas
  let restante = valor;
  // começo pela maior nota
  // Math.floor arredonda pra baixo, 380 / 100 = 3.8 vira 3 notas
  const notas100 = Math.floor(restante / 100);
  // o que sobrou depois das notas de 100
  restante = restante % 100;
  const notas50 = Math.floor(restante / 50);
  restante = restante % 50;
  const notas20 = Math.floor(restante / 20);
  restante = restante % 20;
  // o que sobrou só dá pra pagar com notas de 10
  const notas10 = restante / 10;
  console.log("100: " + notas100);
  console.log("50: " + notas50);
  console.log("20: " + notas20);
  console.log("10: " + notas10);
}