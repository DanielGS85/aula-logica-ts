let médiaDeNnotas = 0;
let n = Number(prompt("Quantas notas você deseja calcular a média?"));

for (let i = 0; i < n; i++) {
    let nota = Number(prompt("Digite a " + (i + 1) + "ª nota:"));
    médiaDeNnotas += nota;
}

médiaDeNnotas /= n;

alert("A média dos " + n + " números é: " + médiaDeNnotas);