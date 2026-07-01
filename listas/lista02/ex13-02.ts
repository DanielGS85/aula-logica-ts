let a = Number(prompt("1º:"));
let b = Number(prompt("2º:"));
let c = Number(prompt("3º:"));
if (a >= b && a >= c) {
  alert("O maior é " + a);
} else if (b >= c) {
  alert("O maior é " + b);
} else {
  alert("O maior é " + c);
}