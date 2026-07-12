let senhaCorreta = "1234";
let tentativas = 0;
let acessoLiberado = false;

while (tentativas < 3 && !acessoLiberado) {
    let senhaDigitada = prompt("Digite a senha:");

    if (senhaDigitada === senhaCorreta) {
        acessoLiberado = true;
    } else {
        tentativas++;

        if (tentativas === 2) {
            alert("⚠️ Última tentativa!");
        }
    }
}

alert(acessoLiberado ? "Liberado ✅" : "Bloqueado 🔒");