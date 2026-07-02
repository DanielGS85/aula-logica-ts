let nContgenRegressiva = Number(prompt("De qual número deseja iniciar a contagem regressiva?"));

let msgRegressiva = "";

for (let i = nContgenRegressiva; i >= 1; i--) {
    msgRegressiva = msgRegressiva + i + " ";
}

alert(msgRegressiva);