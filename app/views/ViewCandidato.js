const prompt = require("prompt-sync")();
const Candidato = require("../models/Candidato");
const Comum = require("../models/Comum");
const Habilidade = require("../models/Habilidade");

class ViewCandidato {
    promptNome;
    promptHabilidade;
    candidato;
    comum;
    
    constructor(){
        this.candidato = new Candidato("", "", []);
        this.comum = new Comum();
    }

    prompt(){
        this.pedeNome(); 
        this.pedeArea();
        //this.pedeHabilidade();
        this.pedeHabilidades();
    }

    pedeNome(){
        let nome_nr = "";
        let nome_str = "";
        let eh_string = false;
        do {
            nome_str = prompt("Informe o Nome do Usuário (com mais de 3 caracteres) ou enter para sair: ");
            nome_str = nome_str.toLocaleLowerCase().trim();
            nome_nr = nome_str;
            nome_nr = Number(nome_nr);
            //console.log(nome_str);
            //console.log(nome_nr);
            //console.log(Number(nome));
            //console.log(Number.isNaN(Number(nome)));
            //nao_eh_numero = Number.isNaN(Number(nome));
            //console.log(nao_eh_numero);
            eh_string = Number.isNaN(nome_nr);
            //console.log(eh_string)
            //if (nome_str===nome_nr){ // 0=""
            if (nome_str === ""){
                console.log("Nome não informado, usuário não cadastrado");
            } else if (nome_str.length < 3){
                console.log("O nome deve ter 3 ou mais caracteres; ");
            } else if (!eh_string){
                console.log("O Nome não pode ser numérico;");
            } else {
                this.candidato.nome = nome_str;
                break;
            }
            //console.log(nome_str);
            //console.log(nome_str.length);
            //console.log(eh_string);
            //console.log(!eh_string);
        } while ((nome_str !== "") && ((nome_str.length < 3) ||(!eh_string)) )
        /*    
        if (nome_str ===""){
            console.log("Usuário não pôde ser cadastrado");
        } 
        */
    }

    pedeArea(){
        let area_str = "";
        let area_nr = "";
        let eh_string = false;
        
        if ( this.candidato.nome != "") {
            do {
                area_str = prompt("Informe a Area de Interesse (com mais de 3 caracteres) ou enter para cadastrar nulo: "); 
                area_str = area_str.toLocaleLowerCase().trim();
                area_nr = Number(area_str);
                eh_string = Number.isNaN(area_nr);

                if (area_str === ""){
                    console.log("Dado não informado, area de interesse não cadastrada");
                } else if (area_str.length < 3){
                    console.log("A area de interesse deve ter 3 ou mais caracteres; ");
                } else if (!eh_string){
                    console.log("A area de interesse não pode ser numérica;");
                } else {
                    this.candidato.area = area_str;
                    break;
                }
                    
            } while ((area_str !== "") && ((area_str.length < 3) ||(!eh_string)) )
            //while (((area !== "") && (area.length <= 3)) || eh_numero )
        }
    }
    
    habilidadeRepetida(habilidade, habilidades ) {
        const ultima_posicao = habilidades.length;
        let repetido = false; 
        let i = 0;
        while (i < ultima_posicao){
            if (habilidades[i] === habilidade){
                repetido = true;
                break;
            }
            i++;
        }
        return repetido;
    }

    pedeHabilidades(){
        let habilidade = "";
        let tempo = 0;
        let ultima_posicao = 0;
        let cont = 0;
        let msg = "";
        
        if ( this.candidato.nome != "") {
            do {
                if (cont== 0){
                    msg = "Informe a Habilidade (com 2 caracteres ou mais) ou enter para sair: "
                } else {
                    msg = "Informe outra Habilidade (com 2 caracteres ou mais) ou enter para sair: "
                }
                
                habilidade = prompt(msg);
                habilidade = habilidade.toLocaleLowerCase().trim();

                console.log(habilidade);
                ultima_posicao = this.candidato.habilidades.length; 
                if (habilidade === ""){
                    console.log("Cadastro de habilidades concluído;");
                } else if (habilidade.length < 2){
                    ultima_posicao = 0;
                    console.log("Habilidade não cadastrada pois possui apenas 1 caracter;")  
                } else if (!Number.isNaN(Number(habilidade))){
                    ultima_posicao = 0;
                    console.log("Habilidade não cadastrada pois foi informado um número;")  
                } else if (this.habilidadeRepetida(habilidade, this.candidato.habilidades)) {
                    console.log("Habilidade não cadastrada pois está repetida;")
                } else {
                    tempo = this.pedeTempoExperiencia();
                    console.log(tempo)
                    if (tempo === ""){
                        console.log("Habilidade não cadastrada pois não existe tempo de experiencia");
                    } else {
                        cont++; 
                        //this.candidato.habilidades[ultima_posicao] = habilidade.toLocaleLowerCase();
                        this.candidato.habilidades[ultima_posicao] = new Habilidade(habilidade,tempo) ;
                    }
                    
                }
            } while ( habilidade !== "");
        }
        console.log(this.candidato.habilidades);
    }

    pedeTempoExperiencia(){
        let tempo_str = "";
        let tempo = "";
        let eh_numero;
        do {
            tempo_str = prompt("Informe o Tempo de experiencia ou enter para sair: ");
            console.log(tempo_str);
            
            
            if (Number.isNaN(Number(tempo_str))){
                console.log("Deve ser informado um número: ");
            } else if (Number(tempo_str) == 0 ){
                console.log("Número deve ser maior que zero: ");
            } else {
                tempo = Number(tempo_str);
                break;
            }
                
        } while ( tempo_str !== "" );
        
        return tempo;
    }
     
    mostrarCandidato(){
        console.log(`Candidato ${this.candidato.nome} tem a(s) seguinte(s) habilidade(s) ${this.comum.serializa(this.candidato.habilidades)}` ); 
    }
    /*
    serializaHabilidades(){
        let ultima_posicao = this.candidato.habilidades.length;
        let serializa = "";
        for(let i=0; i<ultima_posicao ;i++){
            serializa += this.candidato.habilidades[i];
            if (i != ultima_posicao -1){
                serializa += ", ";
            }
        }
        return serializa; 
    }
    */
    
}   

module.exports = ViewCandidato;