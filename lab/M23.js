// dados prontos, é só trocar os valores pra testar os outros exemplos
const respostas = ["A", "C", "B", "D", "E"];
const gabarito = ["A", "B", "B", "D", "A"];

// recebe as duas listas e devolve quantas respostas estão certas
function corrige(respostas, gabarito) {
  // começo com zero acertos
  let acertos = 0;
  // percorro as posições da lista, de 0 até o último índice
  for (let i = 0; i < gabarito.length; i++) {
    // comparo a resposta com o gabarito da mesma posição
    if (respostas[i] === gabarito[i]) {
      acertos = acertos + 1;
    }
  }
  return acertos;
}
const totalAcertos = corrige(respostas, gabarito);
// nota proporcional, acertos divididos pelo total de questões vezes 10
const nota = (totalAcertos / gabarito.length) * 10;
// toFixed(1) deixa com uma casa decimal, tipo 6.0
console.log("Acertos: " + totalAcertos + " de " + gabarito.length);
console.log("Nota: " + nota.toFixed(1));