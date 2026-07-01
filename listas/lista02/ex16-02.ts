let ano = Number(prompt("Ano:"));
// div. por 4 e não por 100, OU por 400
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  alert(ano + " é bissexto");
} else {
  alert(ano + " não é bissexto");
}