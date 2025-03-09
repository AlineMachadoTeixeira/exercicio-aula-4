export function gerarNumerosPares(N) {
  let numerosPares = [];

  for (let i = 2; numerosPares.length < N; i += 2) {
    numerosPares.push(i);
  }

  return numerosPares;
}
