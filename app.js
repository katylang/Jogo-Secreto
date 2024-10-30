function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
 }

exibirTextoNaTela ('h1' , 'Jogo Do numero Secreto');
exibirTextoNaTela ('p' , 'Escolha um numero entre 1 e 10');

function verificarChute() {
    console.log('O botao foi clicado!');
}

function gerarNumeroAleatorio() {
   parseInt(Math.random() * 10 + 1)
}