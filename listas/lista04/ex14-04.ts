let pessoas = ["Ana", "Bruno", "Caio", "Duda"];

let procurado = prompt("Digite um nome:");

let indice = pessoas.indexOf(procurado);

if (indice === -1) {
    alert(procurado + " não foi encontrado");
} else {
    let lugar = indice + 1;
    alert(procurado + " está em " + lugar + "º lugar");
}