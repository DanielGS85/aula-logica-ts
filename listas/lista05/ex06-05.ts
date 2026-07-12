function maiorDeDois(n1: number, n2: number): number {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
let numero1: number = Number(prompt("Digite o primeiro número:"));
let numero2: number = Number(prompt("Digite o segundo número:"));
alert(`O maior número entre ${numero1} e ${numero2} é ${maiorDeDois(numero1, numero2)}`);