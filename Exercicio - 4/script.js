// Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

let lista = [5, 34, 7, 85, 56, 12, 76, 23, 68, 45];
let numero = parseInt(prompt('Insira um numero: '));
let estaLista;

for(let num of lista) {
    if(num === numero) {
        estaLista = true;
        break;
    } else {
        estaLista = false;
    }
}

if(estaLista) {
    alert('O número informado esta na lista.');
} else {
    alert('O número informado não esta na lista.');
}