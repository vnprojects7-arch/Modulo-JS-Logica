// lista pronta, é só trocar os valores pra testar os outros exemplos
const forcas = [1, 2, 3, 4, 5, 9];
// primeiro somo a força de todo mundo
let total = 0;
for (let i = 0; i < forcas.length; i++) {
  total = total + forcas[i];
}
// começa falso e vira verdadeiro se eu achar algum trio que serve
let daParaEmpatar = false;
// testo todos os trios possíveis pro time A
// i, j e k são posições diferentes, por isso j começa depois de i e k depois de j
for (let i = 0; i < 6; i++) {
  for (let j = i + 1; j < 6; j++) {
    for (let k = j + 1; k < 6; k++) {
      const forcaTimeA = forcas[i] + forcas[j] + forcas[k];

      // empata quando o time A tem exatamente metade do total
      // o time B são as outras 3 pessoas, então ele fica com a outra metade
      // multiplico por 2 em vez de dividir o total pra não cair em decimal
      if (forcaTimeA * 2 === total) {
        daParaEmpatar = true;
      }
    }
  }
}
if (daParaEmpatar === true) {
  console.log("Dá para empatar");
} else {
  console.log("Não dá para empatar");
}