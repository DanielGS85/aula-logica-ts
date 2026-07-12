function areaRetangulo(base: number, altura: number): number {
  return base * altura;
}

let base: number = Number(prompt("Digite a base do retângulo:"));
let altura: number = Number(prompt("Digite a altura do retângulo:"));
alert(`A área do retângulo de base ${base} e altura ${altura} é ${areaRetangulo(base, altura)}`);