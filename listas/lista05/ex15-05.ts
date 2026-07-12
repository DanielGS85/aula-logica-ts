function retornaArray(n: number): number[] {
  let novosNumeros = [];
  for ( let i =0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      novosNumeros.push(lista[i]);
    }
  }
  return novosNumeros;
}
let lista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(`A lista de números é: ${lista}`);
alert(`A lista de números pares é: ${retornaArray(lista.length)}`);

