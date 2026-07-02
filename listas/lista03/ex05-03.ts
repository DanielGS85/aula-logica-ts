let nMultiplode5 = Number(prompt("Digite um número inteiro positivo:"));

alert("Os múltiplos de 5 de 1 até " + nMultiplode5 + " são:");

let msgMultiplode5 = "";
for (let i = 1; i <= nMultiplode5; i++) {
    if (i % 5 === 0) {
        msgMultiplode5 = msgMultiplode5 + i + " ";
    }

    alert(msgMultiplode5);
}

alert("Fim da contagem de múltiplos de 5.");