let letras = ["A", "B", "C", "D"];

let resultado = [];

for (let pos = letras.length - 1; pos >= 0; pos--) {

    resultado.push(letras[pos]);

}

alert(resultado.join(", "));