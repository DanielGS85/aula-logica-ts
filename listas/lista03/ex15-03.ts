let segundos = Number(prompt("Segundos (1 a 59):"));

while (segundos < 1 || segundos > 59) {
    segundos = Number(prompt("Valor inválido! Digite um número entre 1 e 59:"));
}

let contagem = "";

for (let contador = 1; contador <= segundos; contador++) {
    contagem += contador + " ";
}

alert(contagem + "⏱️");