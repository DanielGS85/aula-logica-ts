let numeroSecreto = 7;

let chute = Number(prompt("Adivinhe o número (1 a 10):"));

let tentativas = 1;

while (chute !== numeroSecreto) {
    chute = Number(prompt("Você errou! Tente novamente:"));
    tentativas++;
}

alert(`Acertou em ${tentativas} tentativa(s)! 🎉`);