let limite = Number(prompt("Contar até:"));
let contagem = "";

for (let contador = 1; contador <= limite; contador++) {
    contagem += contador + "... ";
}

alert(contagem + "Fim! ⏱️");