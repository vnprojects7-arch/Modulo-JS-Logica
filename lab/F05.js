const prompt = require("prompt-sync")()
//preço da compra e quanto o cliente entregou
const preco = Number(prompt("Preço da compra (P):"));
const valorEntregue = Number(prompt("Valor entregue (V):"));
if (valorEntregue > preco) {
  //entregou mais do que devia, então tem troco
  const troco = valorEntregue - preco;
  //toFixed(2) força sempre 2 casas decimais, tipo 12.10
  console.log("Troco: R$ " + troco.toFixed(2));
} else if (valorEntregue < preco) {
  //entregou menos, então ainda falta pagar
  const falta = preco - valorEntregue;
  console.log("Faltam R$ " + falta.toFixed(2));
} else {
  //se não é maior nem menor, só pode ser igual
  console.log("Pagamento exato");
}