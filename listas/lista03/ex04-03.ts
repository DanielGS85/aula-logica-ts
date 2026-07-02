let nContageAteN = Number(prompt("Até qual número deseja somar?"));

// alert(`A soma de 1 até ${nContageAteN} será calculada.`);

let soma = 0;
for (let i = 1; i <= nContageAteN; i++) {
    soma += i;
} 

alert(`A soma de 1 até ${nContageAteN} é: ${soma}`);

// alert("Fim do programa.");