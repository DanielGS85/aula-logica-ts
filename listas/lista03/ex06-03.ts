let nomeQauntasVezes = prompt("Qual é o seu nome?");
let nQuantasVezes = Number(prompt("Quantas vezes deseja que o seu nome seja repetido?"));

let msg: string = "";

for (let i = 1; i <= nQuantasVezes; i++) {
    msg += nomeQauntasVezes + " ";
}

alert("O seu nome foi repetido " + msg + " vezes.");
