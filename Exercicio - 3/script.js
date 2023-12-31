// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

// Testemos isto:
// Se n=1, então 2n−1=1, que não é primo.
// Se n=2, então 2n−1=3, que é primo. E (22−1)×2=6, que é um número perfeito.
// Se n=3, então 2n−1=7, que é primo. E (23−1)×22=28, que é um número perfeito.
// Se n=4, então 2n−1=15, que não é primo.
// Se n=5, então 2n−1=31, que é primo. E (25−1)×24=496, que é um número perfeito.
// Se n=6, então 2n−1=63, que não é primo.
// Se n=7, então 2n−1=127, que é primo. E (27−1)×26=8128, que é um número perfeito.

let vetor = [];

let numInicial = 2;

while (vetor.length < 4) {
  let somarDivisor = 0;

  for (let i = 1; i < numInicial; i++) {
    if (numInicial % i === 0) {
      somarDivisor += i;
    }
  }

  if (somarDivisor === numInicial) {
    vetor.push(numInicial);
  }

  numInicial++;
}

console.log(vetor);
