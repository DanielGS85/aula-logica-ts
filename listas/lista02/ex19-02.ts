let a = Number(prompt("1º número:"));
let b = Number(prompt("2º número:"));
let op = prompt("Operação (+ - * /):");
if (op === "+") {
  alert(a + b);
} else if (op === "-") {
  alert(a - b);
} else if (op === "*") {
  alert(a * b);
} else if (op === "/" && b !== 0) {
  alert(a / b);
} else if (op === "/") {
  alert("Não dá pra dividir por zero!");
} else {
  alert("Operação inválida");
}