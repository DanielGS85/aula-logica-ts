let login = prompt("Login:");
let senha = prompt("Senha:");
if (login === "admin" && senha === "1234") {
  alert("Acesso liberado ✅");
} else if (login !== "admin") {
  alert("Login errado");
} else {
  alert("Senha errada");
}