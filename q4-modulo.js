export function media(vetor) {
  vetor = [2, 3, 8, 6];
  var soma = 0;
  for (let count in vetor) soma += vetor[count];
  var media = soma / vetor.length;

  return `Média: ${media}`;
}

export function menor(vetor) {
  vetor = [23, 3, 9, 34];

  var min = Math.min(...vetor);

  return ` Array: [${vetor}] \n Menor valor: ${min}`;
}

export function maior(vetor) {
  vetor = [23, 3, 9, 34];

  var max = Math.max(...vetor);

  return max;
}
