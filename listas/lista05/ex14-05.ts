function contaParesArray(arr: number[]): number {
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

let numeros: number[] = [1, 2, 3, 4, 5, 6];
alert(`O array [${numeros}] contém ${contaParesArray(numeros)} números pares.`);