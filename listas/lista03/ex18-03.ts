let quantidade = Number(prompt("Quantos termos?"));

let primeiro = 0;
let segundo = 1;
let resultado = "";

for (let contador = 1; contador <= quantidade; contador++) {
    resultado += primeiro + " ";

    let proximoNumero = primeiro + segundo;

    primeiro = segundo;
    segundo = proximoNumero;
}

alert(resultado);