let quantidade = Number(prompt("Quantos números?"));

let pares = 0;
let impares = 0;

for (let contador = 1; contador <= quantidade; contador++) {
    let numero = Number(prompt("Número " + contador + ":"));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert(pares + " pares e " + impares + " ímpares");