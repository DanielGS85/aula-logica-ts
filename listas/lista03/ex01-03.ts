let numeroContar = Number(prompt("Até quanto contar?"));
let msg = "";  
for (let i = 1; i <= numeroContar; i++) {
  msg = msg + i + " ";
}
alert(msg);