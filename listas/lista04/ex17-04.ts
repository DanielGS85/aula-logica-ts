let respostas = ["sim", "não", "sim", "sim", "não"];

let quantidadeSim = 0;

for (let posicao = 0; posicao < respostas.length; posicao++) {

    if (respostas[posicao] === "sim") {
        quantidadeSim++;
    }

}

alert("A resposta sim apareceu " + quantidadeSim + " vezes");