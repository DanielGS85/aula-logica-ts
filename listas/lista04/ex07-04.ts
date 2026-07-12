let avaliacoes = [8, 6, 10, 7, 9];

let total = 0;

for (let indice = 0; indice < avaliacoes.length; indice++) {
    total += avaliacoes[indice];
}

let media = total / avaliacoes.length;

alert("Média = " + media.toFixed(1));