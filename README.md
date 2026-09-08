# skillmatch
Projeto destinado a auxiliar o processo de escolha de candidatos para vagas disponíveis nas empresas, conforme suas habilidades.  
Este projeto mostra a compatibilidade de determinado candidato para as vagas disponíveis, lista habilidades que faltam para a vaga e avalia a compatibilidade do canditado para determinada vaga.

Pode ser melhorado adicionando alteração de usuários, adicionando arrays de sinonimos nas habilidades.

Este sistema simula o ambiente da internet: para que o usuário tenha a sensação analoga ao funcionamento de sistemas cliente-servidor. Desta forma usa processo assincrono para simular a requisição (request) e a resposta (response) do servidor.

Este projeto foi desenvolvido para rodar em qualquer máquina que conenha o node.js instalado.
Após instalar o node e coloca-lo nas variáveis de ambiente, deve-se entrar na pasta onde este projeto foi baixado e instalar a package prompt-sync que foi utilizada, através do comando:
npm install

Na mesma pasta, para executar o programa deve-se digitar: 
node skillmatch.js 

O sistema solicitará os dados do usuário, suas habilidades, analizará habilidades faltantes, recomendação de estudo e nivel de compatibilidade com a vaga.

Para fazer a recomendação de estudo, foi dado pra cada habilidade da vaga, um peso, o qual determinará o percentual de quanto que falta estudar cada habilidade para que o usuário pudesse ter preenchido os requisitos da vaga completamente.
