let escolha = "";
let saldo = 0;

while (escolha !== "3") {
    escolha = prompt("1-Depositar  2-Saldo  3-Sair");

    if (escolha === "1") {
        let deposito = Number(prompt("Valor do depósito:"));
        saldo += deposito;
    } else if (escolha === "2") {
        alert("Saldo disponível: R$ " + saldo);
    }
}

alert("Até logo! 👋");