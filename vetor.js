const medias = [8.5, 7.9, 9, 10, 5.8, 7, 7]
const nomes = ["Ana","Bruno","Carla","Diego","Elisa","Fábio","Vitor"]
const mediaEscola =7

for (let i = 0; i < medias.length; i++) {
    
    if (medias[i] >= mediaEscola) {
        console.log ("Aluno: " + nomes[i] + "Está Aprovado")
    } else {
        console.log ("Aluno: " + nomes[i] + "Está Reprovado")

    }
}
    

