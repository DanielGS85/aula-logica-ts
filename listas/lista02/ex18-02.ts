let a = Number(prompt("Lado a:"));
let b = Number(prompt("Lado b:"));
let c = Number(prompt("Lado c:"));
if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) {
    alert("Equilátero");
  } else if (a === b || b === c || a === c) {
    alert("Isósceles");
  } else {
    alert("Escaleno");
  }
} else {
  alert("Não formam triângulo");
}