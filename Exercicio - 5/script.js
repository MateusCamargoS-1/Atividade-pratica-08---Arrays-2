// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let nomes = [];
let inversoNomes = [];

while(nomes.length < 5) {
    let nome = prompt('Insira um nome: ');
    nomes.push(nome);
}
console.log(`${nomes}`);

for(let i = nomes.length - 1; i >= 0; i--) {
    inversoNomes.push(nomes[i]);
}

console.log(`${inversoNomes}`);

