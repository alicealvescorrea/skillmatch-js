class Habilidade{
    descricao = "";
    tempo_experiencia = 0;

    
    constructor(descricao, tempo_experiencia){
        this.descricao = descricao;
        this.tempo_experiencia = tempo_experiencia;
    }
    
    serializaHabilidade(){
        return `${this.descricao} (${this.tempo_experiencia})`;
    }
}

module.exports = Habilidade