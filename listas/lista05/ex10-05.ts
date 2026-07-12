function calcularFatorial(numero) {
    let fat = 1;

    for (let contador = 1; contador <= numero; contador++) {
        fat *= contador;
    }

    return fat;
}

let numero = Number(prompt("Fatorial de:"));

alert(`${numero}! = ${calcularFatorial(numero)}`);