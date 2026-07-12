function situacao(nota: number): string {
  if (nota >= 8) {
    return "Aprovado";
  } else if (nota >= 6) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

let notaAluno: number = Number(prompt("Digite a nota do aluno:"));
alert(`O aluno está: ${situacao(notaAluno)}`);