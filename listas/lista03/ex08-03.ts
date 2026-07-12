let somaDeNúmeros = 0;
let n = Number(prompt("Quantos números você deseja somar?"));

for (let i = 0; i < n; i++) {
    let numero = Number(prompt("Digite o " + (i + 1) + "º número:"));
    somaDeNúmeros += numero;
}

alert("A soma dos " + n + " números é: " + somaDeNúmeros);