alert("Programa para exibir os números pares de 1 até um número informado pelo usuário.");

let paresDe1an = Number(prompt("ate:"));
let msg = "";

alert("Números pares de 1 até " + paresDe1an + ": ");

for (let i = 1; i <= paresDe1an; i++) {
    if (i % 2 === 0) {
        msg += i + " ";
    }
}
alert("Números pares de 1 até " + paresDe1an + ": " + msg);

alert("Programa finalizado.");