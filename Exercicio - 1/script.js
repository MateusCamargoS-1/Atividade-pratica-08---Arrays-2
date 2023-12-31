// Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.

let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// For comum
console.log('Utilizando a estrutura de repetição FOR normal: ')
for(let i = 0; i <= elementos.length; i++) {
    if(elementos[i] % 2 === 0 ){
        console.log(elementos[i]);
    }
}

// Utilizando for of
console.log('Utilizando a estrutura de repetição FOR OF:')
for(let pares of elementos) {
    if(pares % 2 === 0) {
        console.log(pares)
    }
}