function soma(a: number, b: number): number {
  return a + b;
} 
let num1: number = Number(prompt("Digite o primeiro número:"));
let num2: number = Number(prompt("Digite o segundo número:"));
let resultado: number = soma(num1, num2);
alert(`A soma de ${num1} e ${num2} é igual a ${resultado}.`);