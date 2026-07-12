function ehPar(num: number): boolean {
  return num % 2 === 0;
}
let numero = Number(prompt("Digite um número:"));
if (ehPar(numero)) {
  alert(`O número ${numero} é par.`);
} else {
  alert(`O número ${numero} é ímpar.`);
}