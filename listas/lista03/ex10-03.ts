let oMaiorDeNúmeros = -Infinity;
let n = Number(prompt("Quantos números você deseja comparar?"));

for (let i = 0; i < n; i++) {
    let numero = Number(prompt("Digite o " + (i + 1) + "º número:"));
    if (numero > oMaiorDeNúmeros) {
        oMaiorDeNúmeros = numero;
    }
}

alert("O maior dos " + n + " números é: " + oMaiorDeNúmeros);

