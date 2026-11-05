// esse sinal || é o operador logico OU, que em uma condição, se qualquer um dos lados for verdadeiro,o resultado é verdadeiro
 
// esse sinal && é o operador logico E, que obriga que os dois lados sejam verdadeiros ou falsos para dar verdadeiro.


let hora = 23
let saldo = 500
let valor = 200

console.log ("A resposta é: " , hora >= 20)
console.log ("A resposta é: " , hora < 6)
console.log ("A resposta é: " , hora >= 20 || hora < 6)
console.log ("A resposta é: " , hora >= 20 && hora < 6)
console.log ("A resposta é: " , valor > 0 && valor <= saldo) 

if (hora >= 20 && hora < 6) {
    console.log ("aqui")
}
else {
    console.log ("ou aqui") 
}