let numeros = [12, 5, 27, 8, 19];

let maiorNumero = numeros[0];

for (let indice = 1; indice < numeros.length; indice++) {
    if (numeros[indice] > maiorNumero) {
        maiorNumero = numeros[indice];
    }
}

alert("O maior é " + maiorNumero);