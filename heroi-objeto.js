// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];

const heroi = {
    nome:"Magno",
    vida:10
}
//Teste de alteração da propriedade,ao mudar a propriedade da CONSTANTE heroi
//eu consigo sem problemas, pois estou mudando uma propriedade da constante
// e nao a constante em si 
console.log("antes de mudar: ", heroi)

heroi.nome = "joao"

console.log ("depois de mudar: ",heroi)