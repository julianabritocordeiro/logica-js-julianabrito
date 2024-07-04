alert ('Seja bem-vindo ao Jogo do Número Secreto!!!');
let numerosecreto = 18;
let chute = prompt('Escolha um número inteiro entre 1 e 30');
// se chute for igual ao número secreto
if (numerosecreto == chute) {
    console.log ('Isso ai! Você descobriu o número secreto (18)');
} else {
    alert ('Você errou :(')
}