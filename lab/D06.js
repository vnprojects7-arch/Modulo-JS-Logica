// lista pronta, é só trocar os valores pra testar os outros exemplos
const pontos = [-2, -8];
// passo 1: descobrir o maior valor
// começo achando que o primeiro é o maior
let maior = pontos[0];

for (let i = 1; i < pontos.length; i++) {
  if (pontos[i] > maior) {
    maior = pontos[i];
  }
}
// passo 2: achar o maior valor que seja menor que o primeiro lugar
// achou avisa se já encontrei algum candidato a segundo
// não dá pra começar o segundo em 0 porque a lista pode ter números negativos
let achou = false;
let segundo = 0;

for (let i = 0; i < pontos.length; i++) {
  // só me interessa quem é menor que o primeiro lugar
  if (pontos[i] < maior) {
    // guarda se for o primeiro candidato ou se for maior que o candidato atual
    if (achou === false || pontos[i] > segundo) {
      segundo = pontos[i];
      achou = true;
    }
  }
}
// se nunca achei candidato, é porque todo mundo era igual ao maior
if (achou === true) {
  console.log(segundo);
} else {
  console.log("Não existe");
}