let lista = ["Ana", "Bruno", "Caio"];

let busca = prompt("Digite um nome:");

let encontrado = lista.includes(busca);

if (encontrado) {
    alert(busca + " foi encontrado ✅");
} else {
    alert(busca + " não foi encontrado 🚫");
}