const HabilidadeVaga = require("./HabilidadeVaga");

class Vaga {
    vaga = "";
    area = "";
    habilidadesVaga = [];

    constructor(vagaCarga){
        this.vaga = vagaCarga.vaga;
        this.area = vagaCarga.area;
        //console.log("opa1");
        //console.log(vagaCarga.habilidades);
        //console.log("opa2");
        this.habilidadesVaga = vagaCarga.habilidadesVaga.map(item => {
            //console.log("OOOOOi1");
            //console.log(item);
            //console.log("OOOOOi2");
            let habl = new HabilidadeVaga(item);

            //console.log("99999991");
            //console.log(habl);
            //console.log("99999992");

            return habl;
        });

    }  
}

module.exports = Vaga;