let alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Caio", nota: 9 },
  { nome: "Duda", nota: 7 }
];

let melhorAluno = alunos[0];

for (let posicao = 1; posicao < alunos.length; posicao++) {
  if (alunos[posicao].nota > melhorAluno.nota) {
    melhorAluno = alunos[posicao];
  }
}

alert("Melhor: " + melhorAluno.nome + " (" + melhorAluno.nota + ")");