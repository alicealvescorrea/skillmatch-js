//Promisse = require('es6-promise').polyfill(); // carrega Promis
ViewCandidato = require("./app/views/ViewCandidato");
Vaga = require("./app/models/Vaga");

//console.log(ViewCandidato);
const dados = [
    {   
        vaga: "Analista JR",
        area: "RH", 
        habilidadesVaga: [
            { descricao: "senior", tempo_experiencia: 4, peso: 2 },
            { descricao: "legislacao", tempo_experiencia: 3, peso: 4 }
        ]
    },
    {   
        vaga: "Analista PL",
        area: "TI", 
        habilidadesVaga: [
            { descricao: "js", tempo_experiencia: 5, peso: 2 },
            { descricao: "php", tempo_experiencia: 6 , peso: 5 },
            { descricao: "oracle", tempo_experiencia: 9 , peso: 9 }
        ]
    },
    { 
        vaga: "Gestor",
        area: "Financeiro",
        habilidadesVaga: [
            { descricao: "PowerBI", tempo_experiencia: 2, peso: 4 },
            { descricao: "legislacao", tempo_experiencia: 4, peso: 6 }
        ]
    }
];

function carrega_do_servidor(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(dados), 1000)
    });
}

async function busca_vagas(){
    const cargas = await carrega_do_servidor(); //Promise + Async Await
    //console.log(cargas);
    const vagas = cargas.map((item) => {
        console.log(item)
        return new Vaga(item)
    });

    console.log(vagas);
}


console.log("buscando vagas disponíveis");
try {
    busca_vagas();
} catch (erro) {
    console.log(erro);
}
/*
view_Candidato = new ViewCandidato();
view_Candidato.prompt();
view_Candidato.mostrarCandidato();
*/
//console.log(view_Candidato.serializaHabilidades());
//view_Candidato.mostrarCandidato();
//ViewCandidato();
//ViewCandidato.mostrarCandidato();