let idade = Number(prompt("Idade:"));
if (idade < 16) {
  alert("Não pode entrar");
} else if (idade < 18) {
  alert("Só com responsável");
} else {
  alert("Pode entrar");
}