// let n = Number(prompt("Fatorial de:"));
// let fat = 1;   // multiplicação começa em 1 (não 0!)
// for (let i = 1; i <= n; i++) {
//   fat = fat * i;
// }
// alert(n + "! = " + fat);


let numero = Number(prompt("Fatorial de:"));
let fat = 1;

for (let contador = 1; contador <= numero; contador++) {
    fat *= contador;
}

alert(`${numero}! = ${fat}`);