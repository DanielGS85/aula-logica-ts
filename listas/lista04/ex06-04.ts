let numeros = [4, 7, 2, 9, 10, 3];

let quantidadePares = 0;

for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] % 2 === 0) {
        quantidadePares++;
    }
}

alert("Tem " + quantidadePares + " pares");