function ehPrimo(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let numero: number = Number(prompt("Digite um número inteiro:"));
if (ehPrimo(numero)) {
  alert(`${numero} é um número primo.`);
} else {
  alert(`${numero} não é um número primo.`);
}