let idade = Number(prompt("Idade:"));
if (idade < 12) {
  alert("Criança");
} else if (idade < 18) {
  alert("Adolescente");
} else if (idade < 60) {
  alert("Adulto");
} else {
  alert("Idoso");
}