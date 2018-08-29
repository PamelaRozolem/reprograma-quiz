
function mostra(mensagem) {
    var p = document.createElement("p");
    p.innerHTML = mensagem;
    document.body.appendChild(p).className = "resultado";
}


var respostaCorreta = [];
function filtraRespostas(pergunta, resposta) {
  respostaCorreta[pergunta] = resposta;
    if(respostaCorreta.length === 3){
        mostra(`Você acertou ${respostaCorreta.filter(value => value == true).length}`);
    }
}





    
 