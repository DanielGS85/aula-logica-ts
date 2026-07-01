let idade = Number(prompt("Idade:"));
let def = prompt("Deficiente? (s/n)") === "s";
let gest = prompt("Gestante? (s/n)") === "s";
if (idade > 65 && def && gest) {
  alert("Fila PREFERENCIAL");
} else {
  alert("Fila comum");
}