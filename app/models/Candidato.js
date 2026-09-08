const Habilidade = require("../models/Habilidade");

class Candidato {
    nome = "";
    area = "";
    habilidades = [];

    constructor(nome, area,habilidades){
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
    }
    
    serializa(){
        /*
        return `Candidato ${this.nome}
            Area de interesse ${((this.area)==="")?'Não Informada':this.area} 
            tem a(s) seguinte(s) habilidade(s) ${this.comum.serializa(this.candidato.habilidades)}` ; 
        */
        return `Candidato ${this.nome}
            Area de interesse ${((this.area)==="")?'Não Informada':this.area} 
            tem a(s) seguinte(s) habilidade(s) ${this.serializaHabilidades()}` ; 
    }

    serializaHabilidades(){
        let msg = "";

        const tamanho = this.habilidades.length;
        let habilidades = this.habilidades;
        console.log(habilidades);
        habilidades.forEach((habilidade,i)=>{
            temp = new Habilidade(habilidade.descricao,habilidade.tempo_experiencia); 
            console.log(temp.serializaHabilidade());
            msg += `${temp.serializaHabilidade()} `;
            if (i != tamanho-1){
                return msg += ', ';
            }
        });
        
        /*
        for (habilidades of temp){
            //console.log(habilidade);
            //habilidade = new Habilidade(temp.descricao, temp.tempo_experiencia);
            //console.log(habilidade);
            //console.log(habilidade.serializaHabilidade());
            //msg += `${habilidade.serializaHabilidade()}, `;
            console.log(temp.serializaHabilidade());
            msg += `${temp.serializaHabilidade()} `;
            if (i != tamanho-1){
                msg += ', ';
            }
        }
            */
        console.log(msg);
        return msg;
        /*
        let i = 0;
        this.habilidades.forEach( 
            (habilidade, i) => {
                msg += habilidade.serializaHabilidade();
                if (i != tamanho-1){
                    msg += ', ';
                }
            }
        );
        return msg;
        */
    }
    
        
}
module.exports = Candidato;