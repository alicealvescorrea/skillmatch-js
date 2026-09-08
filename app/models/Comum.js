class Comum {
    serializa(lista_array){
        let ultima_posicao = lista_array.length;
        let serializa = "";
        for(let i=0; i<ultima_posicao ;i++){
            serializa += lista_array[i];
            if (i != ultima_posicao -1){
                serializa += ", ";
            }
        }
        return serializa; 
    }
}

module.exports = Comum;