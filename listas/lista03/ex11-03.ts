let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let msg = "";

for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) {
        msg = msg + i + " ";
    }
}

alert("Os números pares entre " + n1 + " e " + n2 + " são: " + msg);



// let a = Number(prompt("De:"));
// let b = Number(prompt("Até:"));
// let msg = "";
// for (let i = a; i <= b; i++) {
//   if (i % 2 === 0) {
//     msg = msg + i + " ";
//   }
// }
// alert("Pares: " + msg);