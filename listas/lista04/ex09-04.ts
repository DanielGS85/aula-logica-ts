let numeros = [12, 5, 27, 8, 19];

let valorMenor = numeros[0];

for (let posicao = 1; posicao < numeros.length; posicao++) {

    if (numeros[posicao] < valorMenor) {
        valorMenor = numeros[posicao];
    }

}

alert(`O menor número encontrado é ${valorMenor}`);