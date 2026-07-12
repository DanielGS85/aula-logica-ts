function media(n1: number, n2: number): number {
  return (n1 + n2) / 2;
}
let nota1: number = Number(prompt("Digite a primeira nota:"));
let nota2: number = Number(prompt("Digite a segunda nota:"));
alert(`A média das notas ${nota1} e ${nota2} é ${media(nota1, nota2)}`);