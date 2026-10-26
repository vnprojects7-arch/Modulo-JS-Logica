const prompt  = require("prompt-sync") ();


const tarifaBase = 5
const valorPorKm = 2
const valorPorMinuto = 0.5

let km = Number (prompt("quantos km deu a corrida?"));
let minuto = Number (prompt("quantos minutos deu a corrida?"));

let ValorDaCorrida  = tarifaBase + km * valorPorKm + minuto * valorPorMinuto 

console.log("R$: " + ValorDaCorrida.toFixed(2))

