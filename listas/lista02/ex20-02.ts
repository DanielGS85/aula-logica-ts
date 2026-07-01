let peso = Number(prompt("Peso (kg):"));
let altura = Number(prompt("Altura (m):"));
let imc = peso / (altura * altura);
// .toFixed(1): 1 casa decimal (vira texto)
let txt = "IMC " + imc.toFixed(1) + ": ";
if (imc < 18.5) {
  alert(txt + "Abaixo do peso");
} else if (imc < 25) {
  alert(txt + "Normal");
} else if (imc < 30) {
  alert(txt + "Sobrepeso");
} else {
  alert(txt + "Obesidade");
}