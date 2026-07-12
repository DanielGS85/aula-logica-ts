function inverterPalavra(palavra: string): string {
  let palavraInvertida: string = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }
  return palavraInvertida;
}

let palavra: string = prompt("Digite uma palavra:");
alert(`A palavra invertida é: ${inverterPalavra(palavra)}`);