const prompt = require("prompt-sync") ()

let saldo = Number (prompt("quanto tem de saldo ?"));
let pix = Number (prompt ("qual o valor do pix ?"))
let hora = Number(prompt ("que horas sao ?"))

if (saldo >= pix) {
    saldo = saldo - pix
    console.log ("pix enviado. Saldo R$", saldo.toFixed(2))
} 

else{
    console.log ("Saldo Insuficiente")
    }

if (hora >= 20 & pix >= 1000)
    console.log ("Bloqueado: Limite Noturno")