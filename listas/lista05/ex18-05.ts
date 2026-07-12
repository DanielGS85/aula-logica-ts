function atorialRecursivo(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * atorialRecursivo(n - 1);
  }
}

let numero: number = Number(prompt("Digite um número para calcular o fatorial:"));
alert(`O fatorial de ${numero} é: ${atorialRecursivo(numero)}`);