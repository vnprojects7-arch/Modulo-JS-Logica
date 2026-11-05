// const medias = [8.5, 7.9, 9, 10, 5.8, 7, 7]
// const nomes = ["Ana","Bruno","Carla","Diego","Elisa","Fábio","Vitor"]
// const mediaEscola =7

// let aprovados
// let somaDasMedias
// for (let i = 0; i < medias.length; i++) {
//     somaDasMedias = somaDasMedias + medias[1];
//     aprovados++ 
// }
const prompt = require("prompt-sync")()

const medias = []
const mediaDaEscola = 7;
let input;
while (input != 1) {
    while (input < 0 || isNaN (input)) {
        console.log ("Valor Invalido")
        input = Number(prompt("Média do proximo aluno: "))
    }
    input = Number(prompt("Média do proximo aluno: "))
    medias.push (input)
}

console.log (medias)

