const prompt = require("prompt-sync")()
// leio as horas e depois os minutos, um de cada vez
const horas = Number(prompt("Digite as horas (H):"));
const minutos = Number(prompt("Digite os minutos (M):"));
// cada hora tem 60 minutos, então multiplico e somo o que sobrou
// ex: 13h45 vira 13 * 60 + 45 = 825
const totalMinutos = horas * 60 + minutos;
console.log(totalMinutos);