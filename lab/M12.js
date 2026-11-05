const prompt = require("prompt-sync")()
// leio as três notas
const nota1 = Number(prompt("Nota 1:"));
const nota2 = Number(prompt("Nota 2:"));
const nota3 = Number(prompt("Nota 3:"));
const media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
  // média 7 ou mais passa direto
  console.log("Aprovado");
} else if (media < 5) {
  // média abaixo de 5 já reprova
  console.log("Reprovado");
} else {
  // caiu aqui então a média está entre 5 e 7, vai pra recuperação
  // só nesse caso eu peço a quarta nota
  const notaRecuperacao = Number(prompt("Nota da recuperação:"));
  // média final é a média das três notas somada com a da recuperação, dividida por 2
  const mediaFinal = (media + notaRecuperacao) / 2;
  if (mediaFinal >= 5) {
    console.log("Aprovado na recuperação");
  } else {
    console.log("Reprovado");
  }
}