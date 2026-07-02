let nTabuada = Number(prompt("De qual número deseja ver a tabuada?"));

let msgTabuada = "";
for (let i = 1; i <= 10; i++) {
    msgTabuada = msgTabuada + `${nTabuada} x ${i} = ${nTabuada * i}\n`;
}

alert(msgTabuada);