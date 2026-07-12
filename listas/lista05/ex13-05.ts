function somaArray(arr: number[]): number {
  let soma: number = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

let numeros: number[] = [1, 2, 3, 4, 5];
alert(`A soma do array [${numeros}] é ${somaArray(numeros)}`);