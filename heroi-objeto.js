// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 10;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];

const heroi = {
    nome:"Magno",
    vida: 10,
    dano: 3,
    veneno: 0,
    inventario: [],
    sorte: 0,
    experiencia: 0,
    mana: 0,
    chancecritico: 0.2,
    danoCritico: 2,
}

const aranha = {
    nome: "aranha da caverna",
    vida: 10,
    dano:2,
    chanceVeneno: 0.3,
    veneno: 2,
}


//Teste de alteração da propriedade,ao mudar a propriedade da CONSTANTE heroi
//eu consigo sem problemas, pois estou mudando uma propriedade da constante
// e nao a constante em si 
// console.log("antes de mudar: ", heroi)

// heroi.nome = "joao"

// console.log ("depois de mudar: ",heroi)

function calculoDanoAranha (heroi, dano, aranha) {
    chance = Math.random ();
    if (chance >= aranha.chanceVeneno){
        heroi.veneno = aranha.veneno
        console.log ("O heroi tomou veneno, e se sente muito mal", heroi.veneno)
    }
    heroi.vida = aranha.dano
    console.log ("A aranha te arranhou. você tomou: ", aranha.dano, "sua vida: ", heroi.vida)
}

