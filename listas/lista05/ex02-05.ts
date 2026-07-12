function dobro(numero: number): number {
    return numero * 2;
}

let n = Number(prompt("Digite um número:"));

alert(`O dobro de ${n} é ${dobro(n)}.`);